<script setup>
import { watch, toRefs } from 'vue'
import { useProductStore } from '@/stores/product.js'

const props = defineProps(['filterData','resetFilterActiveStatus'])
let { filterData, resetFilterActiveStatus } = toRefs(props)
const { fetchProductList } = useProductStore()

let filterQuery = ''
let sort = '-created_at'

const setDefaultActiveStatusToFilterItems = () => {
    for (let filterGroup of props.filterData) {
        for (let filterItem of filterGroup.items) {
            filterItem.isActive = false
        }
    }
}

setDefaultActiveStatusToFilterItems()

const toggleFilter = (filterGroupId,item) => {
    for (let filterGroup of props.filterData) {
        if (filterGroup.id == filterGroupId) {
            for (let filterItem of filterGroup.items) {
                if (filterItem.id == item.id) {
                    filterItem.isActive = !item.isActive
                    filterProduct(filterItem.isActive, `${filterGroup.filterQueryName}_${filterItem.slug}`)
                }
            }
        }
    }
}

function filterProduct(isActive, newFilterQuery) {
    if (isActive == true) {
         filterQuery = `${filterQuery}+${newFilterQuery}`
     } else {
         filterQuery = filterQuery.replace(`+${newFilterQuery}`, '')
     }
     fetchProductList(1,encodeURIComponent(sort),encodeURIComponent(filterQuery.substring(1)))
}

function resetFilterProduct() {
    setDefaultActiveStatusToFilterItems()
    fetchProductList(1,sort)
}

watch(resetFilterActiveStatus, (newResetFilterActiveStatus) => {
    if (newResetFilterActiveStatus == true) {
        setDefaultActiveStatusToFilterItems()
    }
})

</script>

<template>
	<div v-for="filterGroup,index in filterData" :key="index">
        <h3 class="uppercase font-bold text-lg">{{ filterGroup.title }}</h3>
        <ul class="py-4 flex flex-wrap gap-2">
            <li v-for="filterItem in filterGroup.items" :key="filterItem.id">
                <button @click="toggleFilter(filterGroup.id, filterItem)" :class="[filterItem.isActive ? 'bg-neutral-200' : 'bg-white','px-4 py-1 block border border-neutral-300 hover:bg-neutral-200']">
                    {{ filterItem.name }}
                    <span class="text-neutral-400 ml-2" v-if="filterItem.isActive">&#10060;</span>
                </button>
            </li>
        </ul>
    </div>
    <button class="bg-neutral-200 py-2 px-4 hover:bg-neutral-300" @click="resetFilterProduct">
        CLEAR FILTERS
        <span class="text-neutral-400 ml-2">&#10060;</span>
    </button>
</template>