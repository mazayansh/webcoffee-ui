<script setup>
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconChevronRightDouble from '@/components/icons/IconChevronRight.vue'
</script>

<template>
    <div class="mt-12 mx-auto w-fit">
        <ul class="border border-neutral-300 flex items-stretch">
            <li>
                <a href="#" class="block h-full py-2 px-4 hover:bg-neutral-300 bg-neutral-300">1</a>
            </li>
            <li>
                <a href="#" class="block h-full py-2 px-4 border-l border-l-neutral-300 hover:bg-neutral-300">2</a>
            </li>
            <li>
                <a href="#" class="block h-full py-2 px-4 border-l border-l-neutral-300 hover:bg-neutral-300">
                    <icon-chevron-right />
                </a>
            </li>
            <li>
                <a href="#" class="block h-full py-2 px-4 border-l border-l-neutral-300 hover:bg-neutral-300">
                    <icon-chevron-right-double />
                </a>
            </li>
        </ul>
    </div>
</template>
