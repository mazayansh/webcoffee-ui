<script setup>
import IconCross from '@/components/icons/IconCross.vue'
import FilterButtonGroup from '@/components/FilterButtonGroup.vue'
import { storeToRefs } from 'pinia'
import { useIndexStore } from '@/stores/index.js'
import { toRefs } from 'vue'

defineProps(['filterData','resetFilterActiveStatus'])

let { isMobileFilterProductSidebarVisible } = storeToRefs(useIndexStore())
const { toggleMobileFilterProductSidebar } = useIndexStore()
</script>

<template>
    <div class="p-4 fixed left-0 top-0 h-screen w-9/12 bg-white z-20 flex flex-col items-start gap-y-4" v-show="isMobileFilterProductSidebarVisible">
		<div>
			<button @click="toggleMobileFilterProductSidebar">
				<IconCross />
			</button>
		</div>
		<FilterButtonGroup :filter-data="filterData" :reset-filter-active-status="resetFilterActiveStatus" />
	</div>
	<button @click="toggleMobileFilterProductSidebar" class="bg-neutral-200 hover:bg-neutral-300 p-2 md:flex-1 lg:hidden">FILTER</button>
</template>
