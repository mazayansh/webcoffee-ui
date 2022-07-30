<script setup>
import Breadcumb from "@/components/navs/Breadcumb.vue"
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
import FloatLabelInput from "@/components/forms/FloatLabelInput.vue"
import CheckoutSummarySection from "@/components/CheckoutSummarySection.vue"
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
</script>

<template>
    <main>
        <div class="lg:flex lg:flex-row-reverse">
            <!-- start cart section -->
            <CheckoutSummarySection />
            <!-- end cart section -->

            <div class="p-4 md:w-8/12 mx-auto lg:basis-3/5">
                <div class="lg:w-10/12 lg:mx-auto lg:p-10">

                    <Breadcumb :breadcumb-items="breadcumbItems" />

                    <!-- express checkout payment -->
                    <div class="text-center md:mt-10">
                        <h3 class="
                                capitalize 
                                font-semibold
                                md:flex 
                                md:items-end 
                                md:justify-center
                                md:before:border-t 
                                md:before:border-l
                                md:before:border-neutral-300 
                                md:before:rounded-tl-md
                                md:before:mr-4 
                                md:before:h-2
                                md:before:grow 
                                md:before:shrink-0 
                                md:before:basis-8
                                md:after:border-t 
                                md:after:border-r
                                md:after:border-neutral-300 
                                md:after:rounded-tr-md
                                md:after:ml-4 
                                md:after:h-2
                                md:after:grow 
                                md:after:shrink-0 
                                md:after:basis-8">
                            express checkout
                        </h3>
                        <div class="
                                flex flex-col md:flex-row 
                                gap-y-4 md:gap-x-4 
                                p-4 
                                border-b border-b-neutral-300 
                                md:border-x md:border-neutral-300 
                                md:rounded-md 
                                md:relative">
                            <button class="p-4 bg-yellow-400 text-blue-900 rounded-md md:flex-1">
                                <a href="#">PayPal</a>
                            </button>
                            <button class="p-4 bg-neutral-900 text-white rounded-md md:flex-1">
                                <a href="#">GPay</a>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6">
                        <p class="
                            uppercase
                            flex 
                            items-end 
                            justify-center
                            before:border-t 
                            before:border-neutral-300 
                            before:mr-4 
                            before:h-2
                            before:grow 
                            before:shrink-0 
                            before:basis-8
                            after:border-t 
                            after:border-neutral-300 
                            after:ml-4 
                            after:h-2
                            after:grow 
                            after:shrink-0 
                            after:basis-8">or</p>
                    </div>
                    <!-- shipping form -->
                    <div class="py-6">
                        <form action="#" class="flex flex-col gap-y-8">
                            <div class="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-y-2">
                                <legend class="text-lg">Contact information</legend>
                                <span>
                                    Already have an account?
                                    <a href="#" class="underline">Log in</a>
                                </span>
                            </div>
                            <div class="relative">
                                <FloatLabelInput :label="'Email'" :name="'email'" :type="'email'" required="required" aria-required="true" v-model="shippingInfo.email"/>
                            </div>
                            <div>
                                <legend class="text-lg">Shipping address</legend>
                            </div>
                            <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
                                <div class="relative md:flex-1">
                                    <FloatLabelInput :label="'First name'" :name="'first_name'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.firstName"/>
                                </div>
                                <div class="relative md:flex-1">
                                    <FloatLabelInput :label="'Last name'" :name="'last_name'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.lastName"/>
                                </div>
                            </div>
                            <div class="relative">
                                <FloatLabelInput :label="'Address'" :name="'address'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.address"/>
                            </div>
                            <div class="relative">
                                <FloatLabelInput :label="'City'" :name="'city'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.city"/>
                            </div>
                            <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
                                <div class="relative md:flex-1">
                                    <FloatLabelInput :label="'State'" :name="'state'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.state"/>
                                </div>
                                <div class="relative md:flex-1">
                                    <FloatLabelInput :label="'Post code'" :name="'postcode'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.postcode"/>
                                </div>
                            </div>
                            <div class="relative">
                                <FloatLabelInput :label="'Phone (optional)'" :name="'phone'" :type="'text'" v-model="shippingInfo.phone"/>
                            </div>
                            <div class="mt-4 flex flex-col gap-y-4 text-center lg:flex-row-reverse lg:justify-between lg:items-center">
                                <div>
                                    <button type="submit" class="w-full bg-purple-900 text-white py-4 md:px-6 font-semibold rounded-md">
                                        Continue to shipping
                                        <IconChevronRight />
                                    </button>
                                </div>
                                <div>
                                    <a href="/src/cart.html" class="block w-full hover:font-semibold">
                                        <IconChevronRight :class="'mr-2 rotate-180'" />
                                        Return to cart
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
