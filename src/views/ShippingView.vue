<script setup>
import Breadcumb from "@/components/navs/Breadcumb.vue"
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
import CheckoutSummarySection from "@/components/CheckoutSummarySection.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { useCartStore } from "@/stores/cart.js"
import cartApi from "@/services/cart.js"

const { fetchCartItemList, fetchShippingInfo } = useCartStore()
const { cartItems, shippingInformation } = storeToRefs(useCartStore())

fetchCartItemList()
fetchShippingInfo()

const shippingMethodForm = ref({
    shipping_method: ''
})
const shippingMethods = ref([])
const errors = ref({})

cartApi.getShippingMethod()
    .then(response => {
        shippingMethods.value = response.data.data
    })

const router = useRouter()

function submitSelectedShippingMethod() {
    cartApi.submitSelectedShippingMethod(shippingMethodForm.value)
        .then(response => {
            router.push({ name: 'payment' })
        })
        .catch(error => {
            if(error.response.status == 422) {
                errors.value = error.response.data.errors
            }
            console.log(error)
        })
}

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
	<main class="grow">
        <div class="lg:flex lg:flex-row-reverse">
            <!-- start cart section -->
            <CheckoutSummarySection :cart-items=cartItems />
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
                                <p class="row-start-2 col-start-1 col-span-4">{{ shippingInformation.email }}</p>
                                <router-link :to="{ name: 'checkout' }" class="capitalize font-semibold text-purple-900 row-start-1 row-span-2 col-start-5">change</router-link>
                            </div>
                            <div class="py-4 grid grid-cols-5 content-start items-start gap-2">
                                <div class="row-start-1 col-start-1 col-span-4">Ship to</div>
                                <p class="row-start-2 col-start-1 col-span-4">{{ shippingInformation.address }}</p>
                                <router-link :to="{ name: 'checkout' }" class="capitalize font-semibold text-purple-900 row-start-1 row-span-2 col-start-5">change</router-link>
                            </div>
                        </div>
                    </div>
                    <!-- end shipping info box -->

                    <!-- shipping form -->
                    <div class="pt-10">
                        <form action="" method="GET" class="flex flex-col gap-y-4" @submit.prevent="submitSelectedShippingMethod">
                            <div>
                                <legend class="text-lg">Shipping method</legend>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div v-for="shippingMethod,index in shippingMethods" :key="index" class="table py-4 border-b border-b-neutral-300">
                                    <div class="table-cell pr-3 whitespace-nowrap">
                                        <input 
                                            :id="`shipping-method-${index}`" 
                                            v-model="shippingMethodForm.shipping_method"
                                            :value="shippingMethod.shipping_method"
                                            type="radio" 
                                            name="shipping_method"
                                            class="cursor-pointer">
                                    </div>
                                    <label :for="`shipping-method-${index}`" class="table-cell w-full cursor-pointer">
                                        <span class="table-cell w-full">
                                            {{ shippingMethod.shipping_method }}
                                            <br>
                                            <small>{{ shippingMethod.shipping_description }}</small>
                                            <br>
                                            <small>Estimated days: {{ shippingMethod.shipping_estimated_days }}</small>
                                        </span>
                                        <span class="table-cell w-full text-right font-semibold whitespace-nowrap pl-3">
                                            {{ $filters.formatRupiah(parseInt(shippingMethod.shipping_cost)) }}
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
                                    <router-link :to="{ name: 'checkout' }" class="block w-full hover:font-semibold">
                                        <IconChevronRight :class="'mr-2 rotate-180'" />
                                        Return to checkout details
                                    </router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
