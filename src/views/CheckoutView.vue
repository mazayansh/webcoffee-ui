<script setup>
import Breadcumb from "@/components/navs/Breadcumb.vue"
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
import FloatLabelInput from "@/components/forms/FloatLabelInput.vue"
import BaseSelect from "@/components/forms/BaseSelect.vue"
import CheckoutSummarySection from "@/components/CheckoutSummarySection.vue"
import { ref, watch } from "vue"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { useCartStore } from "@/stores/cart.js"
import cartApi from "@/services/cart.js"
import rajanOngkirApi from "@/services/rajaOngkir.js"

import { useUserStore } from "@/stores/user.js"
const { user } = storeToRefs(useUserStore()) 

import { useIndexStore } from "@/stores/index.js"
const { togglePageLoading } = useIndexStore()

const { fetchCartItemList, fetchShippingInfo } = useCartStore()
const { cartItems, shippingInformation } = storeToRefs(useCartStore())

fetchCartItemList()
fetchShippingInfo()

const shippingInfo = shippingInformation

const errors = ref({})

const cityOptions = ref([])

function collectCityOptions(cityCollection) {
    for (let city of cityCollection) {
        cityOptions.value.push({
            label: city.city_name,
            value: city.city_id,
            state: city.province
        })
    }
}

rajanOngkirApi.getCityList()
    .then(data => {
        collectCityOptions(data)
    })

function setCityAndState() {
    for (let city of cityOptions.value) {
        if (city.value == shippingInfo.value.city_code) {
            shippingInfo.value.city = city.label
            shippingInfo.value.state = city.state
            break
        }
    }
}

watch(
    () => {
        return shippingInfo.value.city_code
    }, (newCityCode) => {
        setCityAndState()
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

const router = useRouter()

function submitShippingAddress() {
    togglePageLoading()
    cartApi.saveShippingAddress(shippingInfo.value)
        .then(response => {
            togglePageLoading()
            useCartStore().shippingInformation = shippingInfo.value
            router.push({ name: 'shipping' })
        })
        .catch(error => {
            if(error.response.status == 422) {
                errors.value = error.response.data.errors
            }
        })
}
</script>

<template>
    <main class="grow">
        <div class="lg:flex lg:flex-row-reverse">
            <!-- start cart section -->
            <CheckoutSummarySection :cart-items=cartItems />
            <!-- end cart section -->

            <div class="p-4 md:w-8/12 mx-auto lg:basis-3/5">
                <div class="lg:w-10/12 lg:mx-auto lg:p-10">

                    <Breadcumb :breadcumb-items="breadcumbItems" />

                    <!-- shipping form -->
                    <div class="py-6">
                        <form action="#" class="flex flex-col gap-y-8" @submit.prevent="submitShippingAddress">
                            <div class="flex flex-col items-start xl:flex-row xl:justify-between xl:items-center gap-y-2">
                                <legend class="text-lg">Contact information</legend>
                                <span v-if="!user">
                                    Already have an account?
                                    <router-link :to="{ name: 'login' }" class="underline">Log in</router-link>
                                </span>
                            </div>
                            <div class="relative">
                                <FloatLabelInput :label="'Email'" :name="'email'" :type="'email'" required="required" aria-required="true" v-model="shippingInfo.email" :error="errors.email ? errors.email[0] : null" />
                            </div>
                            <div>
                                <legend class="text-lg">Shipping address</legend>
                            </div>
                            <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-start">
                                <div class="relative md:flex-1">
                                    <FloatLabelInput :label="'First name'" :name="'first_name'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.first_name" :error="errors.first_name ? errors.first_name[0] : null"/>
                                </div>
                                <div class="relative md:flex-1">
                                    <FloatLabelInput :label="'Last name'" :name="'last_name'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.last_name" :error="errors.last_name ? errors.last_name[0] : null"/>
                                </div>
                            </div>
                            <div class="relative">
                                <FloatLabelInput :label="'Address'" :name="'address'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.address" :error="errors.address ? errors.address[0] : null"/>
                            </div>
                            <div class="relative">
                                <BaseSelect 
                                    :name="'city_code'" 
                                    :options="cityOptions" 
                                    v-model="shippingInfo.city_code"
                                    :class="['w-full bg-white', shippingInfo.state == '' ? 'text-neutral-500' : '']"
                                    :disabled="cityOptions.length == 0"
                                    required="required" aria-required="true">
                                        <template #placeholder>
                                            <option value="" selected="selected">--- Select City ---</option>
                                        </template>
                                </BaseSelect>
                            </div>
                            <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-start">
                                <div class="relative md:flex-1">
                                    <FloatLabelInput :label="'State'" :name="'state'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.state" :error="errors.state ? errors.state[0] : null"/>
                                </div>
                                <div class="relative md:flex-1">
                                    <FloatLabelInput :label="'Post code'" :name="'postcode'" :type="'text'" required="required" aria-required="true" v-model="shippingInfo.postcode" :error="errors.postcode ? errors.postcode[0] : null"/>
                                </div>
                            </div>
                            <div class="relative">
                                <FloatLabelInput :label="'Phone (optional)'" :name="'phone'" :type="'text'" v-model="shippingInfo.phone" :error="errors.phone ? errors.phone[0] : null"/>
                            </div>
                            <div class="mt-4 flex flex-col gap-y-4 text-center lg:flex-row-reverse lg:justify-between lg:items-center">
                                <div>
                                    <button type="submit" class="w-full bg-purple-900 text-white py-4 md:px-6 font-semibold rounded-md">
                                        Continue to shipping
                                        <IconChevronRight />
                                    </button>
                                </div>
                                <div>
                                    <router-link :to="{ name: 'cart' }" class="block w-full hover:font-semibold">
                                        <IconChevronRight :class="'mr-2 rotate-180'" />
                                        Return to cart
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
