<script setup>
import IconPlusSign from "@/components/icons/IconPlusSign.vue"
import Breadcumb from "@/components/navs/Breadcumb.vue"
import Carousel from "@/components/misc/Carousel.vue"
import BaseSelect from "@/components/forms/BaseSelect.vue"
import { ref } from "vue"

defineProps(['id'])

let product = ref({
	grind_size: 'whole_bean',
	weight: '250',
	quantity: 1
})

const breadcumbItems = [
    {
        title: 'Home',
        routeName: 'home',
        isActive: false
    },
    // {
    //     title: 'Product',
    //     routeName: 'products',
    //     isActive: false
    // },
    {
        title: 'COLD BREW COARSE GROUND COFFEE B...',
        routeName: '',
        isActive: false
    },
]

const grindSizeOptions = [
	{
		title: 'Whole Bean',
		value: 'whole_bean'
	},
	{
		title: 'French Press (Coarse Grind)',
		value: 'french_press_coarse_grind'
	},
	{
		title: 'Espresso (Fine Grind)',
		value: 'espresso_fine_grind'
	}
]

const packSizeOptions = [
	{ title: '250 grams', value: '250' },
	{ title: '500 grams', value: '500' },
	{ title: '1 kilogram', value: '1000' }
]
</script>

<template>
	<main>
	    <div class="p-10 lg:w-5/6 mx-auto">
	        <!-- breadcumbs -->
	        <Breadcumb :breadcumb-items="breadcumbItems" />
	        
	        <!-- product detail -->
	        <div class="grid grid-rows-4 md:grid-cols-5 md:grid-rows-2 gap-10 mt-10">
	            
	            <Carousel />

	            <div class="row-start-2 row-span-2 flex flex-col gap-y-6 md:col-start-4 md:col-span-2 md:row-start-1 md:row-span-2">
	                <h2 class="uppercase text-3xl font-semibold leading-relaxed">cold brew coarse ground coffee blend with chicory
	                </h2>
	                <div class="border border-neutral-300 pb-4">
	                    <div class="py-2 px-4 bg-neutral-200">
	                        <p class="font-bold">IDR 159.999,-</p>
	                    </div>
	                    <form action="#" class="px-4 flex flex-col gap-y-8">
	                        <div class="flex flex-col gap-y-2 pt-8">
	                            <BaseSelect 
	                            	:label="'Grind size'" 
	                            	:name="'grind_size'" 
	                            	:options="grindSizeOptions" 
	                            	v-model="product.grind_size"
	                            	required="required" aria-required="true"/>
	                        </div>
	                        <div class="flex flex-col gap-y-2">
	                            <BaseSelect 
	                            	:label="'Select pack size'" 
	                            	:name="'weight'" 
	                            	:options="packSizeOptions" 
	                            	v-model="product.weight"
	                            	required="required" aria-required="true"/>
	                        </div>
	                        <div class="flex justify-between">
	                            <label for="quantity">Quantity</label>
	                            <div class="flex border border-neutral-300">
	                                <button class="border-l border-l-neutral-300 py-2 px-4 focus:outline-none">
	                                    &#8722;
	                                </button>
	                                <input type="text" v-model="product.quantity" name="quantity" id="quantity" aria-valuemin="1" required aria-required="true" min="1"
	                                    class="w-12 border-l border-l-neutral-300 p-2 bg-neutral-200 text-center focus:outline-none">
	                                <button class="border-l border-l-neutral-300 py-2 px-4">
	                                    &#43;
	                                </button>
	                            </div>
	                        </div>
	                        <button class="font-bold flex justify-center w-full py-2 px-4 bg-neutral-300 hover:bg-neutral-400"
	                            title="Add to Cart">
	                            IDR 159.999
	                            <IconPlusSign />
	                        </button>
	                    </form>
	                </div>
	            </div>
	            <div class="row-start-4 md:row-start-2 md:col-start-1 md:col-span-3">
	                <h3 class="uppercase text-2xl font-semibold">product description</h3>
	                <p class="mt-4">Cold Brew Ground Coffee from The Coffee Bean & Tea Leaf contains chicory root and has a toffee
	                    aroma
	                    with fruit and walnut notes and has a spicy smooth finish. It has a coarse grind which is the best option
	                    for
	                    cold brewing. If you like cold brew at home, you'll love this coffee. Try some today.</p>
	            </div>
	        </div>
	    </div>
	</main>
</template>
