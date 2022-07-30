<script setup>
import IconShopBag from "@/components/icons/IconShopBag.vue"
import IconChevronDown from "@/components/icons/IconChevronDown.vue"
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
import CheckoutSummarySection from "@/components/CheckoutSummarySection.vue"
import Breadcumb from "@/components/navs/Breadcumb.vue"
import FloatLabelInput from "@/components/forms/FloatLabelInput.vue"
import { ref } from "vue"

const shippingInfo = ref({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postcode: ''
})

const breadcumbItems = [
    {
        title: 'Cart',
        routeName: 'cart',
        isActive: false
    },
    {
        title: 'Information',
        routeName: 'checkout',
        isActive: false
    },
    {
        title: 'Shipping',
        routeName: '',
        isActive: true
    },
    {
        title: 'Payment',
        routeName: '',
        isActive: false
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
	                        <div class="py-4 border-b border-b-neutral-300 grid grid-cols-5 content-start items-start gap-2">
	                            <div class="row-start-1 col-start-1 col-span-4">Ship to</div>
	                            <p class="row-start-2 col-start-1 col-span-4">Wungusari RT 16, Tegaldowo Gemolong Sragen 57274, Surakarta AZ 85018, United States</p>
	                            <button class="capitalize font-semibold text-purple-900 row-start-1 row-span-2 col-start-5">
	                                <a href="#">change</a>
	                            </button>
	                        </div>
	                        <div class="py-4 grid grid-cols-5 content-start items-start gap-2">
	                            <div class="row-start-1 col-start-1 col-span-4">Method</div>
	                            <p class="row-start-2 col-start-1 col-span-4">Overnight <span class="font-semibold">Rp 52K</span></p>
	                            <button class="capitalize font-semibold text-purple-900 row-start-1 row-span-2 col-start-5">
	                                <a href="#">change</a>
	                            </button>
	                        </div>
	                    </div>
	                </div>
	                <!-- end shipping info box -->

	                <!-- payment form -->
	                <div class="pt-10">
	                    <form action="#" class="flex flex-col gap-y-8">
	                        <div>
	                            <div class="pb-4">
	                                <legend class="text-lg">Payment</legend>
	                                <p>All transactions are secure and encrypted</p>
	                            </div>
	                            <div class="px-4 border border-neutral-300 rounded-md">
	                                <div class="table py-4 border-b border-b-neutral-300">
	                                    <div class="table-cell pr-3 whitespace-nowrap">
	                                        <input id="shipping-method-1" type="radio" name="shipping_method" class="cursor-pointer">
	                                    </div>
	                                    <label for="shipping-method-1" class="table-cell w-full cursor-pointer">
	                                        <span class="table-cell w-full font-semibold">
	                                            PayPal
	                                        </span>
	                                    </label>
	                                </div>
	                                <div class="table py-4 border-b border-b-neutral-300">
	                                    <div class="table-cell pr-3 whitespace-nowrap">
	                                        <input id="shipping-method-2" type="radio" name="shipping_method" class="cursor-pointer">
	                                    </div>
	                                    <label for="shipping-method-2" class="table-cell w-full cursor-pointer">
	                                        <span class="table-cell w-full font-semibold">
	                                            amazon pay
	                                        </span>
	                                    </label>
	                                </div>
	                                <div class="table py-4">
	                                    <div class="table-cell pr-3 whitespace-nowrap">
	                                        <input id="shipping-method-3" type="radio" name="shipping_method" class="cursor-pointer">
	                                    </div>
	                                    <label for="shipping-method-3" class="table-cell w-full cursor-pointer">
	                                        <span class="table-cell w-full font-semibold">
	                                            Alfamart / Indomaret
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
	                                        <input id="shipping-method-1" type="radio" name="shipping_method" class="cursor-pointer">
	                                    </div>
	                                    <label for="shipping-method-1" class="table-cell w-full cursor-pointer">
	                                        <span class="table-cell w-full font-semibold">
	                                            Same as shipping address
	                                        </span>
	                                    </label>
	                                </div>
	                                <div class="pb-4">
	                                    <div class="table py-4">
	                                        <div class="table-cell pr-3 whitespace-nowrap">
	                                            <input id="shipping-method-2" type="radio" name="shipping_method" class="cursor-pointer">
	                                        </div>
	                                        <label for="shipping-method-2" class="table-cell w-full cursor-pointer">
	                                            <span class="table-cell w-full font-semibold">
	                                                Use a different shipping address
	                                            </span>
	                                        </label>
	                                    </div>
	                                    <div class="flex flex-col gap-y-4">
	                                        <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
	                                            <div class="relative md:flex-1">
	                                                <FloatLabelInput :label="'First name'" type="text" :name="'first_name'" required />
	                                            </div>
	                                            <div class="relative md:flex-1">
	                                                <FloatLabelInput :label="'Last name'" type="text" :name="'last_name'" required />
	                                            </div>
	                                        </div>
	                                        <div class="relative">
	                                            <FloatLabelInput :label="'Address'" type="text" :name="'address'" required />
	                                        </div>
	                                        <div class="relative">
	                                            <FloatLabelInput :label="'City'" type="text" :name="'city'" required />
	                                        </div>
	                                        <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
	                                            <div class="relative md:flex-1">
	                                                <FloatLabelInput :label="'State'" type="text" :name="'state'" required />
	                                            </div>
	                                            <div class="relative md:flex-1">
	                                                <FloatLabelInput :label="'Post code'" type="text" :name="'postcode'" required />
	                                            </div>
	                                        </div>
	                                        <div class="relative">
	                                            <FloatLabelInput :label="'Phone (optional)'" type="text" :name="'phone'" />
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <div>
	                            <div class="pb-4">
	                                <legend class="text-lg">Remember me</legend>
	                            </div>
	                            <div class="px-4 border border-neutral-300 rounded-md">
	                                <div class="table py-4 border-b border-b-neutral-300">
	                                    <div class="table-cell pr-3 whitespace-nowrap">
	                                        <input id="remember-me" type="checkbox" name="remember_me" class="cursor-pointer">
	                                    </div>
	                                    <label for="remember-me" class="table-cell w-full cursor-pointer">
	                                        <span class="table-cell w-full font-semibold">
	                                            Save my information for a faster checkout
	                                        </span>
	                                    </label>
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
	                                <a href="/src/shipping.html" class="block w-full hover:font-semibold">
	                                    <IconChevronRight :class="'mr-2 rotate-180'" />
	                                    Return to shipping
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
