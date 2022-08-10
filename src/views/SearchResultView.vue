<script setup>
import ProductGridItem from '@/components/ProductGridItem.vue'
import Pagination from '@/components/Pagination.vue'
import Spinner from '@/components/misc/Spinner.vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product.js'

const { products, searchKeyword } = storeToRefs(useProductStore())
</script>

<template>
  <main class="grow">
    <div class="p-10 lg:w-5/6 mx-auto">
			<div class="flex flex-col items-center text-center gap-y-4">
				<h2 class="text-2xl font-bold uppercase tracking-widest">Search Results{{ searchKeyword ? ` for "${searchKeyword}"` : '' }}</h2>
			</div>
			<div class="mt-12">
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
					<ProductGridItem v-for="product in products" :key="product.id" :product="product" />
				</div>
				<div v-show="products.length == 0" class="text-center pt-12">
					<Spinner />
				</div>
			</div>

			<!-- <Pagination v-if="meta.last_page > 1" :meta="meta" @pagination-change-page="fetchProductList"/> -->
		</div>
  </main>
</template>
