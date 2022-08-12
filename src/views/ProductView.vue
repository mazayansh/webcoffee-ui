<script setup>
import IconShoppingCart from "@/components/icons/IconShoppingCart.vue"
import Breadcumb from "@/components/navs/Breadcumb.vue"
import Carousel from "@/components/misc/Carousel.vue"
import BaseSelect from "@/components/forms/BaseSelect.vue"
import NotificationAddToCart from "@/components/notifications/NotificationAddToCart.vue"
import { ref, reactive, computed, onUpdated } from "vue"
import { storeToRefs } from "pinia"
import { useProductStore } from "@/stores/product.js"
import cartApi from "@/services/cart.js"

const props = defineProps(['id'])
const { fetchProductById } = useProductStore()
const { product, grindSizeOptions } = storeToRefs(useProductStore())

fetchProductById(props.id)

const breadcumbItems = reactive([
    {
        title: 'Home',
        routeName: 'home'
    },
    {
        title: product.value.name ?? ''
    },
])


let packSizeOptions = ref([])

const collectPackSizeOptions = () => {
	packSizeOptions.value.splice(0, packSizeOptions.value.length)

	product.value.product_variants.forEach((variant) => {
		packSizeOptions.value.push({
			label: `${variant.weight} grams`,
			value: variant.weight,
			price: parseInt(variant.price)
		})
	})
}

let form = reactive({
	product_variant_id: null,
	grind_size: 'fine',
	weight: 250,
	quantity: 1
})

let price = ref(0)
let totalPrice = computed(() => {
	return price.value * form.quantity
})

function setPrice(weight) {
	for (let variant of product.value.product_variants) {
		if (weight == parseInt(variant.weight)) {
			price.value = parseInt(variant.price)
			break
		}
	}
}

function setProductVariantId(weight) {
	for (let variant of product.value.product_variants) {
		if (weight == parseInt(variant.weight)) {
			form.product_variant_id = parseInt(variant.id)
			break
		}
	}
}

function handleChangePackSize(weight) {
	setPrice(weight)
	setProductVariantId(weight)
}

function increaseQuantity() {
	form.quantity++
}

function decreaseQuantity() {
	if (form.quantity > 1) {
		form.quantity--
	}
}

let showAddToCartNotif = ref(false)
let cartItem = ref({})
let isAddToCartBtnDisabled = ref(false)

const addToCart = async () => {
	await setProductVariantId(form.weight)
	isAddToCartBtnDisabled.value = true

	cartApi.addToCart(form)
		.then(response => {
			isAddToCartBtnDisabled.value = false
			cartItem.value = response.data.cart_item
			showAddToCartNotif.value = true
			setTimeout(() => {
				showAddToCartNotif.value = false
			}, 5000)
		})	
}

import { useRouter } from "vue-router"
const router = useRouter()

const closeAddToCartNotif = () => {
	showAddToCartNotif.value = false
	router.push({ name:'home' })
}

onUpdated(() => {
	breadcumbItems[1].title = product.value.name
	collectPackSizeOptions()
	setPrice(form.weight)
})
</script>

<template>
	<main class="grow">
		
		<NotificationAddToCart v-if="showAddToCartNotif" :cart-item="cartItem" @close-add-to-cart-notif="closeAddToCartNotif" />

	    <div class="p-10 lg:w-5/6 mx-auto">
	        <!-- breadcumbs -->
	        <Breadcumb :breadcumb-items="breadcumbItems" />

	        <!-- product detail -->
	        <div class="grid grid-rows-4 md:grid-cols-5 md:grid-rows-2 gap-10 mt-10">
	            
	            <Carousel :medias="product.medias" />

	            <div class="row-start-2 row-span-2 flex flex-col gap-y-6 md:col-start-4 md:col-span-2 md:row-start-1 md:row-span-2">
	                <h2 class="uppercase text-3xl font-semibold leading-relaxed">
	                	{{ product.name }}
	                </h2>
	                <div class="border border-neutral-300 pb-4">
	                    <div class="py-2 px-4 bg-neutral-200">
	                        <p class="font-bold">{{ $filters.formatRupiah(price) }}</p>
	                    </div>
	                    <form action="#" class="px-4 flex flex-col gap-y-8" @submit.prevent="addToCart">
	                        <div class="flex flex-col gap-y-2 pt-8">
	                            <BaseSelect 
	                            	:label="'Grind size'" 
	                            	:name="'grind_size'" 
	                            	:options="grindSizeOptions" 
	                            	v-model="form.grind_size"
	                            	required="required" aria-required="true"/>
	                        </div>
	                        <div class="flex flex-col gap-y-2">
	                            <BaseSelect 
	                            	:label="'Select pack size'" 
	                            	:name="'weight'" 
	                            	:options="packSizeOptions" 
	                            	v-model="form.weight"
	                            	@update:modelValue="handleChangePackSize"
	                            	required="required" aria-required="true"/>
	                        </div>
	                        <div class="flex justify-between">
	                            <label for="quantity">Quantity</label>
	                            <div class="flex border border-neutral-300">
	                                <button 
	                                	@click.prevent="decreaseQuantity"
	                                	class="border-l border-l-neutral-300 py-2 px-4 focus:outline-none">
	                                    &#8722;
	                                </button>
	                                <input type="text" v-model="form.quantity" name="quantity" id="quantity" aria-valuemin="1" required aria-required="true" min="1"
	                                    class="w-12 border-l border-l-neutral-300 p-2 bg-neutral-200 text-center focus:outline-none" readonly>
	                                <button 
	                                	@click.prevent="increaseQuantity"
	                                	class="border-l border-l-neutral-300 py-2 px-4">
	                                    &#43;
	                                </button>
	                            </div>
	                        </div>
	                        <button type="submit" class="font-bold flex justify-center w-full py-2 px-4 border border-purple-900 hover:bg-purple-900 hover:text-white disabled:opacity-50"
	                            title="Add to Cart" :disabled="isAddToCartBtnDisabled">
	                            <IconShoppingCart :class="'mr-4 h-5 w-5'" />
	                            {{ $filters.formatRupiah(totalPrice) }}
	                        </button>
	                    </form>
	                </div>
	            </div>
	            <div class="row-start-4 md:row-start-2 md:col-start-1 md:col-span-3">
	                <h3 class="uppercase text-2xl font-semibold">product description</h3>
	                <div class="mt-4" v-html="product.description">
	                </div>
	            </div>
	        </div>
	    </div>
	</main>
</template>
