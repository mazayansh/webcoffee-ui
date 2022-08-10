<script setup>
import IconShopBag from "@/components/icons/IconShopBag.vue"
import IconChevronDown from "@/components/icons/IconChevronDown.vue"
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
import CheckoutSummarySection from "@/components/CheckoutSummarySection.vue"
import Breadcumb from "@/components/navs/Breadcumb.vue"
import FloatLabelInput from "@/components/forms/FloatLabelInput.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { useCartStore } from "@/stores/cart.js"
import orderApi from "@/services/order.js"
import { useOrderStore } from "@/stores/order.js"

import { useIndexStore } from "@/stores/index.js"
const { togglePageLoading } = useIndexStore()

const { fetchCartItemList, fetchShippingInfo } = useCartStore()
const { cartItems, shippingInformation } = storeToRefs(useCartStore())

fetchCartItemList()
fetchShippingInfo()

const billingForm = ref({
	payment_method: '',
	same_as_shipping_address: "true"
})

const router = useRouter()
function submitBillingInfo() {
	togglePageLoading()
	orderApi.createOrder(billingForm.value)
		.then(response => {
			togglePageLoading()
			useOrderStore().paymentDetails = response.data.data
			router.push({name: 'payment-instruction'})
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
        routeName: 'payment'
    }
]

const paymentMethods = [
	{ id: 1, label: 'BRI Virtual Account', value: 'bri', icon_url: '/src/assets/images/bri.png' },
	{ id: 2, label: 'BNI Virtual Account', value: 'bni', icon_url: '/src/assets/images/bni.png' },
	{ id: 3, label: 'BCA Virtual Account', value: 'bca', icon_url: '/src/assets/images/bca.png' },
	{ id: 4, label: 'Mandiri Bill Payment', value: 'mandiri', icon_url: '/src/assets/images/mandiri.png' },
	{ id: 5, label: 'Permata Bank Virtual Account', value: 'permata', icon_url: '/src/assets/images/permata.png' }
]
</script>

<template>
	<main>
		<div class="lg:flex lg:flex-row-reverse">
	        <!-- start cart section -->
	        <CheckoutSummarySection :cart-items=cartItems :shipping-cost="parseInt(shippingInformation.shipping_cost)" />
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
	                        <div class="py-4 border-b border-b-neutral-300 grid grid-cols-5 content-start items-start gap-2">
	                            <div class="row-start-1 col-start-1 col-span-4">Ship to</div>
	                            <p class="row-start-2 col-start-1 col-span-4">{{ shippingInformation.address }}</p>
	                            <router-link :to="{ name: 'checkout' }" class="capitalize font-semibold text-purple-900 row-start-1 row-span-2 col-start-5">change</router-link>
	                        </div>
	                        <div class="py-4 grid grid-cols-5 content-start items-start gap-2">
	                            <div class="row-start-1 col-start-1 col-span-4">Method</div>
	                            <p class="row-start-2 col-start-1 col-span-4">
	                            	{{ shippingInformation.shipping_method }} -
	                            	<span class="font-semibold">
	                            		{{ $filters.formatRupiah(parseInt(shippingInformation.shipping_cost)) }}
	                            	</span>
	                            </p>
	                            <router-link :to="{ name: 'shipping' }" class="capitalize font-semibold text-purple-900 row-start-1 row-span-2 col-start-5">change</router-link>
	                        </div>
	                    </div>
	                </div>
	                <!-- end shipping info box -->

	                <!-- payment form -->
	                <div class="pt-10">
	                    <form action="#" class="flex flex-col gap-y-8" @submit.prevent="submitBillingInfo">
	                        <div>
	                            <div class="pb-4">
	                                <legend class="text-lg">Payment</legend>
	                                <p>All transactions are secure and encrypted</p>
	                            </div>
	                            <div class="px-4 border border-neutral-300 rounded-md">
	                                <div v-for="paymentMethod in paymentMethods" :key="paymentMethod.id" class="flex justify-start items-center gap-x-4 py-4 border-b border-b-neutral-300">
	                                    <div class="pr-3 whitespace-nowrap">
	                                        <input :id="`payment-method-${paymentMethod.id}`" type="radio" name="payment_method" class="cursor-pointer" v-model="billingForm.payment_method" :value="paymentMethod.value">
	                                    </div>
	                                    <div class="pr-4 cursor-pointer">
	                                    	<img :src="paymentMethod.icon_url" :alt="paymentMethod.label" class="w-20" />
	                                    </div>
	                                    <label :for="`payment-method-${paymentMethod.id}`" class="w-full cursor-pointer">
	                                        <span class="table-cell w-full font-semibold">
	                                            {{ paymentMethod.label }}
	                                        </span>
	                                    </label>
	                                </div>
	                            </div>
	                        </div>
	                        <div>
	                            <div class="pb-4">
	                                <legend class="text-lg">Billing address</legend>
	                                <p>Select the address that matches your card or payment method.</p>
	                            </div>
	                            <div class="px-4 border border-neutral-300 rounded-md">
	                                <div class="table py-4 border-b border-b-neutral-300">
	                                    <div class="table-cell pr-3 whitespace-nowrap">
	                                        <input id="same-as-shipping-address" type="radio" name="same_as_shipping_address" class="cursor-pointer" v-model="billingForm.same_as_shipping_address" required aria-required="true" value="true" checked>
	                                    </div>
	                                    <label for="same-as-shipping-address" class="table-cell w-full cursor-pointer">
	                                        <span class="table-cell w-full font-semibold">
	                                            Same as shipping address
	                                        </span>
	                                    </label>
	                                </div>
	                                <div class="pb-4">
	                                    <div class="table py-4">
	                                        <div class="table-cell pr-3 whitespace-nowrap">
	                                            <input id="not-same-as-shipping-address" type="radio" name="same_as_shipping_address" class="cursor-pointer" v-model="billingForm.same_as_shipping_address" required aria-required="true" value="false">
	                                        </div>
	                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
	                                            <span class="table-cell w-full font-semibold">
	                                                Use a different shipping address
	                                            </span>
	                                        </label>
	                                    </div>
	                                    <div v-show="billingForm.same_as_shipping_address == 'false'" class="flex flex-col gap-y-4">
	                                        <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
	                                            <div class="relative md:flex-1">
	                                                <FloatLabelInput :label="'First name'" type="text" :name="'first_name'" v-model="billingForm.first_name" />
	                                            </div>
	                                            <div class="relative md:flex-1">
	                                                <FloatLabelInput :label="'Last name'" type="text" :name="'last_name'" v-model="billingForm.last_name" />
	                                            </div>
	                                        </div>
	                                        <div class="relative">
	                                            <FloatLabelInput :label="'Address'" type="text" :name="'address'" v-model="billingForm.address" />
	                                        </div>
	                                        <div class="relative">
	                                            <FloatLabelInput :label="'City'" type="text" :name="'city'" v-model="billingForm.city" />
	                                        </div>
	                                        <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
	                                            <div class="relative md:flex-1">
	                                                <FloatLabelInput :label="'State'" type="text" :name="'state'" v-model="billingForm.state" />
	                                            </div>
	                                            <div class="relative md:flex-1">
	                                                <FloatLabelInput :label="'Post code'" type="text" :name="'postcode'" v-model="billingForm.postcode" />
	                                            </div>
	                                        </div>
	                                        <div class="relative">
	                                            <FloatLabelInput :label="'Phone (optional)'" type="text" :name="'phone'" v-model="billingForm.phone" />
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <div
	                            class="mt-4 flex flex-col gap-y-4 text-center lg:flex-row-reverse lg:justify-between lg:items-center">
	                            <div>
	                                <button type="submit"
	                                    class="w-full bg-purple-900 text-white py-4 md:px-6 font-semibold rounded-md">
	                                    Pay now
	                                    <IconChevronRight />
	                                </button>
	                            </div>
	                            <div>
	                                <router-link :to="{ name: 'shipping' }" class="block w-full hover:font-semibold">
	                                    <IconChevronRight :class="'mr-2 rotate-180'" />
	                                    Return to shipping
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
