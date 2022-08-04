<script setup>
import IconCross from '@/components/icons/IconCross.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import { useIndexStore } from '@/stores/index.js'

const { toggleModalConfirmRemoveCartItem } = useIndexStore()
</script>

<template>
    <div class="bg-white w-full lg:w-1/2 absolute top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 z-20 rounded-md">
		<div class="flex py-4 px-6 bg-gray-200">
			<div class="flex-1 text-center font-bold capitalize">
				konfirmasi hapus item
			</div>
			<button @click.prevent="toggleModalConfirmRemoveCartItem">
				<IconCross />
			</button>
		</div>
		<div class="p-6 text-center">
			Yakin hapus item dari keranjang?
		</div>
		<div class="p-6 flex justify-end gap-x-4 border-t border-t-gray-200">
			<button class="capitalize text-center py-2 px-4 border border-gray-200 rounded-sm hover:bg-gray-200" @click.prevent="toggleModalConfirmRemoveCartItem">
				batal
			</button>
			<button class="capitalize text-center py-2 px-4 bg-red-500 text-white rounded-sm hover:bg-red-600" @click.prevent="$emit('confirmRemove')">
				hapus
			</button>
		</div>
	</div>
</template>
