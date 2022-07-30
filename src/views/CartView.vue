<script setup>
import CartRowItem from "@/components/CartRowItem.vue"
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
</script>

<template>
    <main>
        <div class="py-10 px-6 lg:w-5/6 mx-auto">
            <div>
                <h1 class="text-xl font-semibold uppercase text-center">shopping cart</h1>
            </div>
            <form action="/src/checkout.html" method="GET">
                <div class="pt-10">
                    <div class="hidden md:flex md:justify-between md:items-center md:gap-y-4 py-4 border-b border-b-neutral-300">
                        <div class="capitalize basis-2/3">
                            product
                        </div>
                        <div class="capitalize basis-1/6">
                            quantity
                        </div>
                        <div class="capitalize basis-1/6">
                            total
                        </div>
                    </div>
                    <cart-row-item />
                </div>
                <div class="py-6 md:flex md:flex-row-reverse md:justify-between md:items-end">
                    <div class="flex flex-col justify-center text-center gap-y-4">
                        <span class="uppercase text-lg font-semibold">SUBTOTAL IDR 319.998</span>
                        <p>Shipping & taxes calculated at checkout</p>
                        <div class="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
                            <button class="bg-neutral-300 uppercase py-2 md:px-6 font-semibold">
                                update cart
                            </button>
                            <button type="submit" class="bg-purple-900 text-white uppercase py-2 md:px-6 font-semibold">
                                check out
                                <icon-chevron-right :class="'ml-2'"/>
                            </button>
                        </div>
                    </div>
                    <div class="grow-0 text-left">
                        <a href="/src/product.html" class="uppercase hover:font-semibold">
                            <icon-chevron-right :class="'rotate-180 mr-2'" />
                            continue shopping
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>
