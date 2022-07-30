<script setup>
import IconCross from '@/components/icons/IconCross.vue'
</script>

<template>
    <div class="py-4 px-2 border-b border-b-neutral-300 flex flex-wrap md:flex-nowrap justify-between gap-y-4 md:items-center md:gap-x-4">
        <div class="basis-2/6 md:basis-1/12">
            <img src="../assets/images/sumatra-medium-roast-1lb-whole-bean-coffee_1512x.webp" alt="">
        </div>
        <div class="basis-3/6 md:basis-7/12 md:shrink">
            <h2 class="uppercase leading-relaxed text-lg font-semibold">sumatra medium roast</h2>
            <p class="capitalize">1lb bag whole bean</p>
        </div>
        <div class="basis-1/6 text-right md:hidden">
            <button class="text-neutral-400">
                <icon-cross />
            </button>
        </div>
        <div class="grow-0 md:basis-2/12">
            <div class="flex border border-neutral-300 md:w-fit">
                <button class="border-l border-l-neutral-300 py-2 px-4 focus:outline-none">
                    &#8722;
                </button>
                <input type="text" name="weight" id="weight" aria-valuemin="1" value="1" required aria-required="true"
                    min="1"
                    class="w-12 border-l border-l-neutral-300 p-2 bg-neutral-200 text-center focus:outline-none">
                <button class="border-l border-l-neutral-300 py-2 px-4">
                    &#43;
                </button>
            </div>
        </div>
        <div class="grow-0 self-center md:basis-2/12 md:flex md:items-center md:justify-between">
            <span class="font-bold">IDR 159.999</span>
            <button class="hidden md:block text-neutral-400">
                <icon-cross />
            </button>
        </div>
    </div>
</template>
