<script setup>
import IconCross from '@/components/icons/IconCross.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'

defineProps(['cartItem'])
</script>

<template>
    <div class="fixed top-0 right-0 z-20 bg-neutral-100 border border-b-neutral-300 sm:w-1/2 lg:w-1/3">
		<div class="flex p-4 gap-x-4 border-b border-b-neutral-300">
			<div class="flex-1 uppercase font-semibold text-center">added to cart</div>
			<button @click="$emit('closeAddToCartNotif')">
				<IconCross />
			</button>
		</div>
		<div class="grid grid-cols-5 gap-4 p-4 items-center">
			<div class="col-span-2">
				<img :src="cartItem.featured_image_url" :alt="cartItem.product_name" class="h-full w-full">
			</div>
			<div class="col-start-3 col-span-3 flex flex-col gap-y-2">
				<h3 class="uppercase">{{ cartItem.product_name }}</h3>
				<p>{{ cartItem.weight }}g</p>
				<p>{{ $filters.formatRupiah(parseInt(cartItem.price)) }}</p>
			</div>
			<div class="col-span-5 flex flex-col gap-y-2 text-center">
				<router-link 
					:to="{ name: 'cart' }"
					class="uppercase py-2 px-4 text-white bg-purple-900 hover:bg-purple-800">
					view cart
					<IconChevronRight />
				</router-link>
				<button @click="$emit('closeAddToCartNotif')" class="uppercase py-2 px-4 border border-neutral-300 bg-white hover:bg-neutral-200">
					continue shopping
				</button>
			</div>
		</div>
	</div>
</template>
