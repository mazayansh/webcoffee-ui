<script setup>
import ButtonFilterItemToggle from '@/components/buttons/ButtonFilterItemToggle.vue'

let title = 'roast'
</script>

<template>
    <div class="hidden lg:col-span-1 lg:flex lg:flex-col lg:gap-y-4">
        <h3 class="uppercase font-bold text-lg">{{ title }}</h3>
        <ul class="py-4 flex flex-wrap gap-2">
            <li>
                <button-filter-item-toggle>
                    Dark
                </button-filter-item-toggle>
            </li>
        </ul>
    </div>
</template>
