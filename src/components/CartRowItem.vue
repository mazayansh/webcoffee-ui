<script setup>
import IconCross from '@/components/icons/IconCross.vue'
import { computed, toRefs } from 'vue'
import { useIndexStore } from "@/stores/index.js"

const props = defineProps(['cartItem'])
const { cartItem } = toRefs(props)
const emit = defineEmits(['updateCartItem','removeCartItem'])

const subtotalPrice = computed(() => {
    return cartItem.value.quantity * cartItem.value.price_per_item
})

const increaseQuantity = async (cartItem) => {
    await cartItem.quantity++
    emit('updateCartItem', cartItem)
}

const decreaseQuantity = async (cartItem) => {
    if (cartItem.quantity > 1) {
        await cartItem.quantity--
        emit('updateCartItem', cartItem)
    }
}

const { toggleModalConfirmRemoveCartItem } = useIndexStore()
const removeCartItem = () => {
    toggleModalConfirmRemoveCartItem()
    emit('removeCartItem', cartItem.value.id)
}
</script>

<template>
    <div class="py-4 px-2 border-b border-b-neutral-300 flex flex-wrap md:flex-nowrap justify-between gap-y-4 md:items-center md:gap-x-4">
        <div class="basis-2/6 md:basis-1/12">
            <img :src="cartItem.featured_image_url" :alt="cartItem.product_name" />
        </div>
        <div class="basis-3/6 md:basis-7/12 md:shrink">
            <h2 class="uppercase leading-relaxed text-lg font-semibold">{{ cartItem.product_name }}</h2>
            <p class="capitalize">{{ `${cartItem.weight}g ${cartItem.grind_size}` }}</p>
        </div>
        <div class="basis-1/6 text-right md:hidden">
            <button class="text-neutral-400">
                <IconCross />
            </button>
        </div>
        <div class="grow-0 md:basis-2/12">
            <div class="flex border border-neutral-300 md:w-fit">
                <button class="border-l border-l-neutral-300 py-2 px-4 focus:outline-none" @click.prevent="decreaseQuantity(cartItem)">
                    &#8722;
                </button>
                <input v-model="cartItem.quantity" type="text" name="weight" id="weight" aria-valuemin="1" required aria-required="true" min="1" class="w-12 border-l border-l-neutral-300 p-2 bg-neutral-200 text-center focus:outline-none" readonly>
                <button class="border-l border-l-neutral-300 py-2 px-4" @click.prevent="increaseQuantity(cartItem)">
                    &#43;
                </button>
            </div>
        </div>
        <div class="grow-0 self-center md:basis-2/12 md:flex md:items-center md:justify-between">
            <span class="font-bold">{{ $filters.formatRupiah(parseInt(subtotalPrice)) }}</span>
            <button class="hidden md:block text-neutral-400" @click.prevent="removeCartItem">
                <IconCross />
            </button>
        </div>
    </div>
</template>
