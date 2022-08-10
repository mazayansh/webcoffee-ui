<script setup>
import IconShopBagSolid from "@/components/icons/IconShopBagSolid.vue"
import IconHamburgerMenu from "@/components/icons/IconHamburgerMenu.vue"
import UserMenu from "@/components/navs/UserMenu.vue"

import { ref } from "vue"
let isUserMenuVisible = ref(false)
function showUserMenu() {
    isUserMenuVisible.value = true
}
function hideUserMenu() {
    isUserMenuVisible.value = false
}

import orderApi from "@/services/order.js"
const props = defineProps(['id'])
const order = ref({})

orderApi.getOrderDetail(props.id)
    .then(response => {
        order.value = response.data.data
    })
</script>

<template>
    <main class="grow flex">
        <div class="grow flex flex-row relative" @click.stop="hideUserMenu">
            <!-- start user menu section -->
            <UserMenu :is-user-menu-visible="isUserMenuVisible" />
            <!-- end user menu section -->

            <div class="p-4 mx-auto basis-3/4">
                <div class="lg:w-10/12 lg:mx-auto lg:p-10 flex flex-col gap-y-10">
                    <div class="mb-8 md:hidden ">
                        <button title="Buka Menu User" class="p-2 rounded-md hover:bg-purple-200 text-purple-900 border border-purple-400" @click.stop="showUserMenu">
                            <IconHamburgerMenu />
                        </button>
                    </div>

                    <div>
                        <h1 class="text-lg font-bold mb-4">Detail Pesanan</h1>
                        <div class="border border-neutral-300 px-4 rounded-md">
                            <div class="py-4 border-b border-b-neutral-300 flex justify-between items-start">
                                <span>Status</span>
                                <div class="flex flex-col gap-y-2 items-end">
                                    <span class="font-semibold">{{ order.order_status }}</span>
                                    <router-link v-if="order.order_status == 'Menunggu Pembayaran'" :to="{ name: 'payment-instruction', params: { orderId: order.order_id } }" class="py-2 px-4 rounded-md border border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white">Lihat cara bayar</router-link>
                                </div>
                            </div>
                            <div class="py-4 flex justify-between items-center">
                                <span>Tanggal Pembelian</span>
                                <span>{{ order.order_date }} WIB</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- start product box -->
                    <div>
                        <p class="font-semibold mb-4">Detail Produk</p>
                        <div class="flex flex-col gap-y-6">
                            <div v-for="order_item in order.order_items" :key="order_item.id" class="border border-neutral-200 px-4 rounded-md">
                                <div class="py-4">
                                    <div class="flex gap-x-4">
                                        <div class="w-14">
                                            <img :src="order_item.product_featured_image_url" class="rounded-md">
                                        </div>
                                        <div class="grow">
                                            <router-link :to="{ name: 'product', params: { id: order_item.product_id } }" class="block font-semibold">{{ order_item.product_name }}</router-link>
                                            <span>{{ `${order_item.product_quantity} x ${$filters.formatRupiah(parseInt(order_item.product_price))}` }}</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between mt-4">
                                        <div>
                                            <span class="block text-sm text-neutral-400">Total Harga</span>
                                            <span class="block font-semibold">{{ $filters.formatRupiah(parseInt(order_item.subtotal_price)) }}</span>
                                        </div>
                                        <div>
                                            <router-link :to="{ name: 'product', params: { id: order_item.product_id } }" class="py-2 px-4 rounded-md border border-purple-900 text-purple-900 font-semibold hover:bg-purple-900 hover:text-white">
                                                Beli lagi
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end product box -->

                    <div v-if="order.shipping_info">
                        <p class="font-semibold mb-4">Info Pengiriman</p>
                        <div>
                            <div class="flex items-start">
                                <span class="basis-1/4">Kurir</span>
                                <span class="basis-3/4">{{ order.shipping_info.courier }}</span>
                            </div>
                            <div class="flex items-start mt-2">
                                <span class="basis-1/4">Alamat</span>
                                <div class="basis-3/4">
                                    <p class="font-semibold">{{ order.shipping_info.fullname }}</p>
                                    <p>{{ order.shipping_info.phone }}</p>
                                    <p>{{ order.shipping_info.address }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold mb-4">Rincian Pembayaran</p>
                        <div>
                            <div class="py-4 border-b border-b-neutral-300 flex justify-between items-start">
                                <span>Metode Pembayaran</span>
                                <span>{{ order.payment_method }}</span>
                            </div>
                            <div class="py-4 border-b border-b-neutral-300">
                                <div class="flex justify-between">
                                    <span>Total Harga ({{ order.order_quantity }} barang)</span>
                                    <span>{{ $filters.formatRupiah(parseInt(order.total_price)) }}</span>
                                </div>
                                <div v-if="order.shipping_info" class="flex justify-between mt-2">
                                    <span>Total Ongkos Kirim ({{ order.total_weight }}g)</span>
                                    <span>{{ $filters.formatRupiah(parseInt(order.shipping_info.shipping_cost)) }}</span>
                                </div>
                            </div>
                            <div class="py-4 flex justify-between items-center font-semibold text-lg">
                                <span>Total Belanja</span>
                                <span>{{ $filters.formatRupiah(parseInt(order.total_payment)) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
