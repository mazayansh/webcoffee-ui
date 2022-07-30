<script setup>
import IconCross from '@/components/icons/IconCross.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
</script>

<template>
    <div class="bg-white w-full absolute top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 z-20 hidden">
		<div class="flex py-4 px-6 bg-gray-200">
			<div class="flex-1 text-center font-bold">
				SEARCH
			</div>
			<button>
				<icon-cross />
			</button>
		</div>
		<div class="p-6">
			<form action="#" class="p-2 border border-gray-300 rounded-sm flex items-center gap-x-4">
				<div class="flex-1">
					<input type="text" placeholder="Search..." class="focus:outline-0 w-full" autofocus>
				</div>
				<button type="submit">
					<icon-search />
				</button>
			</form>
		</div>
	</div>
</template>
