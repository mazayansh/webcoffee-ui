<script setup>
import FilterProductSidebar from '@/components/FilterProductSidebar.vue'
import FilterProductSidebarMobile from '@/components/FilterProductSidebarMobile.vue'
import BaseSelect from '@/components/forms/BaseSelect.vue'
import ProductGridItem from '@/components/ProductGridItem.vue'
import Pagination from '@/components/Pagination.vue'
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoastStore } from '@/stores/roast.js'
import { useCoffeeTypeStore } from '@/stores/coffeeType.js'
import { useProductStore } from '@/stores/product.js'

const sortOptions = [
	{ label: 'Featured', value: '-created_at' },
	{ label: 'Sort by - Price, low to high', value: '+price' },
	{ label: 'Sort by - Price, high to low', value: '-price' },
]
let sort = ref('-created_at')

const { roasts } = storeToRefs(useRoastStore())
const { coffeeTypes } = storeToRefs(useCoffeeTypeStore())
const { products, meta } = storeToRefs(useProductStore())
const { fetchRoastList } = useRoastStore()
const { fetchCoffeeTypeList } = useCoffeeTypeStore()
const { fetchProductList } = useProductStore()

fetchRoastList()
fetchCoffeeTypeList()

watchEffect(() => {
	fetchProductList(1,encodeURIComponent(sort.value))
})

const filterData = ref([
	{
		id: 1,
		title: 'roast',
		filterQueryName: 'roast',
		items: roasts
	},
	{
		id: 2,
		title: 'coffee type',
		filterQueryName: 'type',
		items: coffeeTypes
	}
])

let resetFilterActiveStatus = ref(false)
</script>

<template>
  <main>
    <div class="p-10 lg:w-5/6 mx-auto">
			<div class="flex flex-col items-center text-center gap-y-4">
				<h2 class="text-2xl font-bold uppercase tracking-widest">buy coffee online</h2>
				<span class="w-9 h-1 bg-purple-900"></span>
				<p>Since 1963, we have scoured the world for the best coffee available anywhere and we expertly roast our beans in
					small batches for optimal flavor. We purchase our beans direct from coffee farmers building on decades-long
					relationships to ensure we get the top 1% of the best arabica beans in the world. So, we know where every coffee
					bean comes from. Now the same great coffee we use in our store locations are available in retail packages. Buy
					coffee online here.</p>
			</div>
			<div class="grid grid-cols-4 mt-12">
				<FilterProductSidebar :filter-data="filterData" :reset-filter-active-status="resetFilterActiveStatus" />

				<div class="col-span-4 lg:col-start-2 lg:col-span-3">
					<div class="flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center md:gap-x-4 lg:justify-end">
						
						<FilterProductSidebarMobile :filter-data="filterData" :reset-filter-active-status="resetFilterActiveStatus" />
						
						<BaseSelect :label="'Sort'" :name="'sort'" :options="sortOptions" v-model="sort" />
					</div>
					<div class="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
						<ProductGridItem v-for="product in products" :key="product.id" :product="product" />
					</div>
				</div>
			</div>

			<Pagination v-if="meta.last_page > 1" :meta="meta" @pagination-change-page="fetchProductList"/>
		</div>
  </main>
</template>
