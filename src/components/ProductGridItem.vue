<script setup>
defineProps(['product'])
</script>

<template>
    <div class="flex flex-col items-stretch gap-y-4 text-center">
        <div class="flex flex-col">
            <div class="overflow-hidden">
                <router-link :to="{name: 'product', params: {id: product.id}}">
                    <img :src="product.featured_image_url"
                        :alt="product.slug"
                        class="transition-all delay-75 ease-out hover:brightness-75 hover:scale-110">
                </router-link>
            </div>
        </div>
        <h2 class="uppercase font-bold text-lg hover:text-purple-900">
            <router-link :to="{name: 'product', params: {id: product.id}}">{{ product.name }}</router-link>
        </h2>
        <p>{{ product.aftertaste }}</p>
        <p class="text-lg text-purple-900">{{ $filters.formatRupiah(parseInt(product.price)) }}</p>
    </div>
</template>
