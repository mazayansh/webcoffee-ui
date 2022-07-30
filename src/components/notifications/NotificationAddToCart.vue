<script setup>
import IconCross from '@/components/icons/IconCross.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
</script>

<template>
    <div class="fixed top-0 right-0 z-20 bg-white border border-b-neutral-300 sm:w-1/2 lg:w-1/3">
		<div class="flex p-4 gap-x-4 border-b border-b-neutral-300">
			<div class="flex-1 uppercase font-semibold text-center">added to cart</div>
			<button>
				<icon-cross />
			</button>
		</div>
		<div class="grid grid-cols-5 gap-4 p-4 items-center">
			<div class="col-span-2">
				<img src="../dist/images/Bali-Blue-Moon-Dark-Roast-Coffee-Coffee-Bean-_-Tea-Leaf-Store-1619088898_1512x.webp" alt="Bali-Blue-Moon-Dark-Roast-Coffee" class="h-full w-full">
			</div>
			<div class="col-start-3 col-span-3 flex flex-col gap-y-2">
				<h3 class="uppercase">Bali BlueMoon Dark Roast Coffee</h3>
				<p>1 lbs</p>
				<p>IDR 159.999,-</p>
			</div>
			<div class="col-span-5 flex flex-col gap-y-2">
				<button class="uppercase py-2 px-4 text-white bg-purple-900 hover:bg-purple-800">
					<a href="#">
						view cart
						<icon-chevron-right />
					</a>
				</button>
				<button class="uppercase py-2 px-4 border border-neutral-300 hover:bg-neutral-400">
					<a href="#">
						continue shopping
					</a>
				</button>
			</div>
		</div>
	</div>
</template>
