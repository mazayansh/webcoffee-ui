<script setup>
import IconShopBagSolid from "@/components/icons/IconShopBagSolid.vue"
import IconHamburgerMenu from "@/components/icons/IconHamburgerMenu.vue"
import UserMenu from "@/components/navs/UserMenu.vue"
import { ref, computed } from "vue"
import orderApi from "@/services/order.js"

let isUserMenuVisible = ref(false)
function showUserMenu() {
    isUserMenuVisible.value = true
}
function hideUserMenu() {
    isUserMenuVisible.value = false
}

const orders = ref([])

orderApi.getUserOrderHistory()
    .then(response => {
        orders.value = response.data.data
    })
</script>

<template>
    <main class="grow flex">
        <div class="grow flex flex-row relative" @click.stop="hideUserMenu">
            <!-- start user menu section -->
            <UserMenu :is-user-menu-visible="isUserMenuVisible" />
            <!-- end user menu section -->

            <div class="p-4 mx-auto basis-3/4">
                <div class="lg:w-10/12 lg:mx-auto lg:p-10">
                    <div class="mb-8 md:hidden ">
                        <button title="Buka Menu User" class="p-2 rounded-md hover:bg-purple-200 text-purple-900 border border-purple-400" @click.stop="showUserMenu">
                            <IconHamburgerMenu />
                        </button>
                    </div>

                    <h1 class="text-lg font-bold">Riwayat Pesanan</h1>
                    
                    <!-- start order box -->
                    <div class="pt-6 flex flex-col gap-y-6">
                        <div v-for="order,index in orders" :key="index" class="border border-neutral-200 px-4 rounded-md shadow-md">
                            <div class="py-4 border-b border-b-neutral-200 flex items-center gap-x-4">
                                <IconShopBagSolid :class="'text-purple-900 lg:h-7 lg:w-7'" />
                                <p class="grow ">{{ order.order_date }} WIB</p>
                                <div class="rounded-md py-1 px-2 bg-green-100">
                                    <span class="font-semibold text-green-600">{{ order.order_status }}</span>
                                </div>
                            </div>
                            <div class="py-4">
                                <div class="flex gap-x-4">
                                    <div class="w-14">
                                        <img :src="order.first_order_item.product_featured_image_url" class="rounded-md">
                                    </div>
                                    <div class="grow">
                                        <router-link :to="{ name: 'order-detail', params: { id: order.order_id } }" class="block font-semibold text-purple-900">{{ order.first_order_item.product_name }}</router-link>
                                        <span>{{ order.first_order_item.product_quantity }} barang</span>
                                    </div>
                                </div>
                                <div class="flex justify-between items-end mt-4 pb-2">
                                    <div>
                                        <div v-if="parseInt(order.other_order_items_quantity) > 0" class="mb-2">
                                            <span>+{{ order.other_order_items_quantity }} barang lainnya</span>
                                        </div>
                                        <div>
                                            <span class="block text-sm text-neutral-400">Total Belanja</span>
                                            <span class="block font-semibold">{{ $filters.formatRupiah(parseInt(order.total_price)) }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <router-link :to="{ name: 'order-detail', params: { id: order.order_id } }" class="py-2 px-4 rounded-md bg-purple-900 text-white font-semibold">
                                            Lihat detail
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end order box -->
                </div>
            </div>
        </div>
    </main>
</template>
