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
                <div class="lg:w-10/12 lg:mx-auto lg:p-10">
                    <div class="mb-8 md:hidden ">
                        <button title="Buka Menu User" class="p-2 rounded-md hover:bg-purple-200 text-purple-900 border border-purple-400" @click.stop="showUserMenu">
                            <IconHamburgerMenu />
                        </button>
                    </div>

                    <h1 class="text-lg font-bold">Riwayat Pesanan</h1>
                    
                    <!-- start order box -->
                    <div class="pt-6">
                        <div class="border border-neutral-200 px-4 rounded-md shadow-md">
                            <div class="py-2 border-b border-b-neutral-200 flex items-center gap-x-4">
                                <IconShopBagSolid :class="'text-purple-900 lg:h-7 lg:w-7'" />
                                <p class="grow ">5 Agustus 2022</p>
                                <div class="rounded-md py-1 px-2 bg-green-100">
                                    <span class="font-semibold text-green-600">Selesai</span>
                                </div>
                            </div>
                            <div class="py-2">
                                <div class="flex gap-x-4">
                                    <div class="w-14">
                                        <img src="../assets/images/mocha-java-coffee-1lb-whole-bean_1512x.webp" class="rounded-md">
                                    </div>
                                    <div class="grow">
                                        <a href="#" class="block font-semibold text-purple-900">Mocha Java Coffee 1lb Whole Bean</a>
                                        <span>1 barang</span>
                                    </div>
                                </div>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <span class="block text-sm text-neutral-400">Total Belanja</span>
                                        <span class="block font-semibold">Rp 137.500</span>
                                    </div>
                                    <div>
                                        <button class="py-2 px-4 rounded-md bg-purple-900 text-white font-semibold">
                                            Lihat detail
                                        </button>
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
