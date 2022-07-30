<script setup>
import Breadcumb from "@/components/navs/Breadcumb.vue"
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
import CheckoutSummarySection from "@/components/CheckoutSummarySection.vue"

const breadcumbItems = [
    {
        title: 'Cart',
        routeName: 'cart'
    },
    {
        title: 'Information',
        routeName: 'checkout'
    },
    {
        title: 'Shipping',
        routeName: 'shipping'
    },
    {
        title: 'Payment',
        routeName: 'payment',
    }
]
</script>

<template>
	<main>
        <div class="lg:flex lg:flex-row-reverse">
            <!-- start cart section -->
            <CheckoutSummarySection />
            <!-- end cart section -->

            <div class="p-4 md:w-8/12 mx-auto lg:basis-3/5">
                <div class="lg:w-10/12 lg:mx-auto lg:p-10">
                    <!-- breadcumb -->
                    <Breadcumb :breadcumb-items="breadcumbItems" />
                    
                    <!-- start shipping info box -->
                    <div class="pt-10">
                        <div class="border border-neutral-300 px-4 rounded-md">
                            <div class="py-4 border-b border-b-neutral-300 grid grid-cols-5 items-start gap-2">
                                <div class="row-start-1 col-start-1 col-span-4">Contact</div>
                                <p class="row-start-2 col-start-1 col-span-4">s.imam29@gmail.com</p>
                                <button class="capitalize font-semibold text-purple-900 row-start-1 row-span-2 col-start-5">
                                    <a href="#">change</a>
                                </button>
                            </div>
                            <div class="py-4 grid grid-cols-5 content-start items-start gap-2">
                                <div class="row-start-1 col-start-1 col-span-4">Ship to</div>
                                <p class="row-start-2 col-start-1 col-span-4">Wungusari RT 16, Tegaldowo Gemolong Sragen 57274, Surakarta AZ
                                    85018, United States</p>
                                <button class="capitalize font-semibold text-purple-900 row-start-1 row-span-2 col-start-5">
                                    <a href="#">change</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- end shipping info box -->

                    <!-- shipping form -->
                    <div class="pt-10">
                        <form action="/src/payment.html" method="GET" class="flex flex-col gap-y-4">
                            <div>
                                <legend class="text-lg">Shipping method</legend>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div class="table py-4 border-b border-b-neutral-300">
                                    <div class="table-cell pr-3 whitespace-nowrap">
                                        <input 
                                            id="shipping-method-1" 
                                            type="radio" 
                                            name="shipping_method"
                                            class="cursor-pointer">
                                    </div>
                                    <label for="shipping-method-1" class="table-cell w-full cursor-pointer">
                                        <span class="table-cell w-full">
                                            Standard Ground
                                            <br>
                                            <small>Domestic</small>
                                        </span>
                                        <span class="table-cell w-full text-right font-semibold whitespace-nowrap pl-3">
                                            Rp 24K
                                        </span>
                                    </label>
                                </div>
                                <div class="table py-4 border-b border-b-neutral-300">
                                    <div class="table-cell pr-3 whitespace-nowrap">
                                        <input id="shipping-method-2" type="radio" name="shipping_method" class="cursor-pointer">
                                    </div>
                                    <label for="shipping-method-2" class="table-cell w-full cursor-pointer">
                                        <span class="table-cell w-full">
                                            2-Day
                                            <br>
                                            <small>Domestic</small>
                                        </span>
                                        <span class="table-cell w-full text-right font-semibold whitespace-nowrap pl-3">
                                            Rp 37K
                                        </span>
                                    </label>
                                </div>
                                <div class="table py-4">
                                    <div class="table-cell pr-3 whitespace-nowrap">
                                        <input id="shipping-method-3" type="radio" name="shipping_method" class="cursor-pointer">
                                    </div>
                                    <label for="shipping-method-3" class="table-cell w-full cursor-pointer">
                                        <span class="table-cell w-full">
                                            Overnight
                                            <br>
                                            <small>Domestic</small>
                                        </span>
                                        <span class="table-cell w-full text-right font-semibold whitespace-nowrap pl-3">
                                            Rp 52K
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div
                                class="mt-4 flex flex-col gap-y-4 text-center lg:flex-row-reverse lg:justify-between lg:items-center">
                                <div>
                                    <button type="submit"
                                        class="w-full bg-purple-900 text-white py-4 md:px-6 font-semibold rounded-md">
                                        Continue to payment
                                        <IconChevronRight />
                                    </button>
                                </div>
                                <div>
                                    <a href="/src/checkout.html" class="block w-full hover:font-semibold">
                                        <IconChevronRight :class="'mr-2 rotate-180'" />
                                        Return to checkout details
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
