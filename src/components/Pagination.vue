<script setup>
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconChevronRightDouble from '@/components/icons/IconChevronRightDouble.vue'
import { computed, toRefs } from 'vue'

const props = defineProps(['meta'])
let { meta } = toRefs(props)
let defaultSort = encodeURIComponent("-created_at")

const emit = defineEmits(['paginationChangePage'])

const changePage = (page) => {
    emit('paginationChangePage', page, defaultSort)
}

const currentPage = computed(() => {
    return meta.value.current_page
})
const prevPage = computed(() => {
    return meta.value.current_page - 1
})
const nextPage = computed(() => {
    return meta.value.current_page + 1
})
</script>

<template>
    <div class="mt-12 mx-auto w-fit">
        <ul class="border border-neutral-300 flex items-stretch">
            <li>
                <button 
                    @click="changePage(1)" 
                    :disabled="currentPage == 1" 
                    :class="['block h-full py-2 px-4 border-l border-l-neutral-300',currentPage == 1 ? 'bg-neutral-200 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-400' : 'hover:bg-purple-900 hover:text-white']">
                    <IconChevronRightDouble :class="'rotate-180'" />
                </button>
            </li>
            <li>
                <button 
                    @click="changePage(prevPage)" 
                    :disabled="currentPage == 1" 
                    :class="['block h-full py-2 px-4 border-l border-l-neutral-300',currentPage == 1 ? 'bg-neutral-200 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-400' : 'hover:bg-purple-900 hover:text-white']">
                    <IconChevronRight :class="'rotate-180'" />
                </button>
            </li>
            <li v-for="n in meta.last_page" :key="n">
                <button 
                    @click="changePage(n)"
                    :class="['block h-full py-2 px-4 border-l border-l-neutral-300 hover:bg-purple-900 hover:text-white', currentPage == n ? 'bg-purple-900 text-white' : '']">
                    {{ n }}
                </button>
            </li>
            <li>
                <button 
                    @click="changePage(nextPage)" 
                    :disabled="currentPage == meta.last_page" 
                    :class="['block h-full py-2 px-4 border-l border-l-neutral-300',currentPage == meta.last_page ? 'bg-neutral-200 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-400' : 'hover:bg-purple-900 hover:text-white']">
                    <IconChevronRight />
                </button>
            </li>
            <li>
                <button 
                    @click="changePage(meta.last_page)" 
                    :disabled="currentPage == meta.last_page" 
                    :class="['block h-full py-2 px-4 border-l border-l-neutral-300',currentPage == meta.last_page ? 'bg-neutral-200 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-400' : 'hover:bg-purple-900 hover:text-white']">
                    <IconChevronRightDouble />
                </button>
            </li>
        </ul>
    </div>
</template>
