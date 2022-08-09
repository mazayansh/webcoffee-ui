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
                                    <span class="font-semibold">Menunggu Pembayaran</span>
                                    <a href="#" class="py-2 px-4 rounded-md border border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white">Lihat cara bayar</a>
                                </div>
                            </div>
                            <div class="py-4 flex justify-between items-center">
                                <span>Tanggal Pembelian</span>
                                <span>Sabtu, 6 Agustus 2022 18:23 WIB</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- start product box -->
                    <div>
                        <p class="font-semibold mb-4">Detail Produk</p>
                        <div class="border border-neutral-200 px-4 rounded-md shadow-md">
                            <div class="py-4">
                                <div class="flex gap-x-4">
                                    <div class="w-14">
                                        <img src="../assets/images/mocha-java-coffee-1lb-whole-bean_1512x.webp" class="rounded-md">
                                    </div>
                                    <div class="grow">
                                        <a href="#" class="block font-semibold">Mocha Java Coffee 1lb Whole Bean</a>
                                        <span>1xRp72.500</span>
                                    </div>
                                </div>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <span class="block text-sm text-neutral-400">Total Harga</span>
                                        <span class="block font-semibold">Rp 72.500</span>
                                    </div>
                                    <div>
                                        <button class="py-2 px-4 rounded-md border border-purple-900 text-purple-900 font-semibold hover:bg-purple-900 hover:text-white">
                                            Beli lagi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end product box -->

                    <div>
                        <p class="font-semibold mb-4">Info Pengiriman</p>
                        <div>
                            <div class="flex items-start">
                                <span class="basis-1/4">Kurir</span>
                                <span class="basis-3/4">JNE</span>
                            </div>
                            <div class="flex items-start mt-2">
                                <span class="basis-1/4">Alamat</span>
                                <div class="basis-3/4">
                                    <p class="font-semibold">Imam Setiawan</p>
                                    <p>08222415144</p>
                                    <p>Wungusari RT 16 Tegaldowo, Gemolong, Sragen</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold mb-4">Rincian Pembayaran</p>
                        <div>
                            <div class="py-4 border-b border-b-neutral-300 flex justify-between items-start">
                                <span>Metode Pembayaran</span>
                                <span>Mandiri Virtual Account</span>
                            </div>
                            <div class="py-4 border-b border-b-neutral-300">
                                <div class="flex justify-between">
                                    <span>Total Harga (1 barang)</span>
                                    <span>Rp72.500</span>
                                </div>
                                <div class="flex justify-between mt-2">
                                    <span>Total Ongkos Kirim (1kg)</span>
                                    <span>Rp19.000</span>
                                </div>
                            </div>
                            <div class="py-4 flex justify-between items-center font-semibold text-lg">
                                <span>Total Belanja</span>
                                <span>Rp72.500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
