<script setup>
import FilterButtonGroup from '@/components/FilterButtonGroup.vue'
import { toRefs } from 'vue'

defineProps(['filterData','resetFilterActiveStatus'])
</script>

<template>
    <div class="hidden lg:col-span-1 lg:flex lg:flex-col lg:gap-y-4">
        <FilterButtonGroup :filter-data="filterData" :reset-filter-active-status="resetFilterActiveStatus" />
    </div>
</template>
