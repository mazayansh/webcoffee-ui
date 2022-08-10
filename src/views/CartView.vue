<script setup>
import CartRowItem from "@/components/CartRowItem.vue"
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
import Spinner from "@/components/misc/Spinner.vue"
import { useCartStore } from "@/stores/cart.js"
import cartApi from "@/services/cart.js"
import { storeToRefs } from "pinia"
import { ref, computed } from "vue"

import { useIndexStore } from "@/stores/index.js"
const { togglePageLoading } = useIndexStore()

const { fetchCartItemList }  = useCartStore()
const { cartItems } = storeToRefs(useCartStore())

let cartLoading = ref(true)
fetchCartItemList()
    .then(() => {
        cartLoading.value = false
    })

let isCartEmpty = computed(() => {
    return cartItems.value.length < 1
})

const totalPrice = computed(() => {
    return cartItems.value.reduce((accumulator, currentCartItem) => {
        return accumulator + parseInt(currentCartItem.price)
    }, 0)
})

function updateCartItem(cartItem) {
    cartApi.updateCartItem(cartItem.id, {quantity: cartItem.quantity})
}

function removeCartItem(cartItemId) {
    togglePageLoading()
    cartApi.removeCartItem(cartItemId)
        .then(response => {
            togglePageLoading()
            cartItems.value = cartItems.value.filter((cartItem) => {
                return cartItem.id != cartItemId
            })
        })
}
</script>

<template>
    <main class="grow">
        <div class="py-10 px-6 lg:w-5/6 mx-auto">
            <div>
                <h1 class="text-xl font-semibold uppercase text-center">shopping cart</h1>
            </div>
            <div v-show="cartLoading" class="text-center pt-12">
                <Spinner />
            </div>
            <div v-show="!cartLoading">
                <div class="pt-10">
                    <div class="hidden md:flex md:justify-between md:items-center md:gap-y-4 py-4 border-b border-b-neutral-300">
                        <div class="capitalize basis-2/3">
                            product
                        </div>
                        <div class="capitalize basis-1/6">
                            quantity
                        </div>
                        <div class="capitalize basis-1/6">
                            subtotal
                        </div>
                    </div>
                    <div v-if="!isCartEmpty">
                        <CartRowItem v-for="cartItem,index in cartItems" :key="index" :cart-item="cartItem" @update-cart-item="updateCartItem" @remove-cart-item="removeCartItem" />
                        </div>
                    <div v-else class="text-center py-8 px-4">
                        <p>Keranjang belanja kosong</p>
                    </div>
                </div>
                <div v-if="!isCartEmpty" class="py-6 md:flex md:flex-row-reverse md:justify-between md:items-end">
                    <div class="flex flex-col justify-center text-center gap-y-4">
                        <span class="uppercase text-lg font-semibold">TOTAL {{ $filters.formatRupiah(totalPrice) }}</span>
                        <p>Shipping & taxes calculated at checkout</p>
                        <div class="flex flex-col justify-end md:flex-row gap-y-2 md:gap-x-2">
                            <router-link :to="{ name: 'checkout' }" class="bg-purple-900 text-white uppercase py-2 md:px-6 font-semibold">
                                check out
                                <IconChevronRight :class="'ml-2'"/>
                            </router-link>
                        </div>
                    </div>
                    <div class="grow-0 text-left">
                        <router-link :to="{ name: 'home' }" class="uppercase hover:font-semibold">
                            <IconChevronRight :class="'rotate-180 mr-2'" />
                            continue shopping
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
