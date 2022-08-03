<script setup>
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
import { useRoute } from "vue-router"
import { computed } from "vue"

defineProps(['breadcumbItems'])
const currentRoute = computed(() => {
    return useRoute().name
})
</script>

<template>
    <div>
        <ul class="flex flex-wrap justify-center items-start gap-x-2 lg:justify-start">
            <li class="flex items-center gap-x-1" 
                v-for="item,index in breadcumbItems" :key="index">
                    <router-link v-if="item.routeName"
                        :to="{name: item.routeName}" 
                        :class="['border-b border-b-transparent hover:border-b-neutral-600 text-sm max-w-prose truncate cursor pointer', item.routeName == currentRoute ? 'font-bold' : '']">
                            {{item.title}}
                    </router-link>
                    <span v-else class="text-sm max-w-prose truncate">
                        {{item.title}}
                    </span>
                <IconChevronRight />
            </li>
        </ul>
    </div>
</template>
