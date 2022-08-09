<script setup>
import IconClipboardList from "@/components/icons/IconClipboardList.vue"
import { toRefs } from "vue"

const props = defineProps(['isUserMenuVisible'])
let { isUserMenuVisible } = toRefs(props)
</script>

<template>
	<!-- start user menu section -->
    <div :class="['absolute md:relative md:block md:basis-1/4 border-r border-r-neutral-300 bg-neutral-100 h-full', isUserMenuVisible ? 'block' : 'hidden md:block']">
        <div class="bg-neutral-100">
            <div class="p-4 flex flex-col gap-y-6 md:mx-auto lg:w-10/12 lg:pt-10">
                <div class="flex flex-col items-center gap-y-2">
                    <div class="w-14">
                        <img src="../../assets/images/user.png" class="w-full rounded-full">
                    </div>
                    <div class="text-center">
                        <span class="font-semibold">Imam Setiawan</span>
                    </div>
                </div>
                <div class="border-b border-b-neutral-300">
                    <router-link :to="{name: 'orders'}" :class="'block w-full py-2 px-4 rounded-md hover:bg-purple-200'">
                        <IconClipboardList :class="'text-purple-900 inline-block mr-2'" />
                        <span>Riwayat Pesanan</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- end user menu section -->
</template>
