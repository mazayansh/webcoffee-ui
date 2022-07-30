<script setup>
import IconCross from '@/components/icons/IconCross.vue'
</script>

<template>
    <div class="p-4 fixed left-0 top-0 h-screen w-9/12 bg-white z-20 flex flex-col items-start gap-y-4">
		<div>
			<button>
				<icon-cross />
			</button>
		</div>
		<div>
			<h3 class="uppercase font-bold text-lg">region</h3>
			<ul class="py-4 flex flex-wrap gap-2">
				<li>
					<a href="#" class="bg-white px-4 py-1 block border border-neutral-300 hover:bg-neutral-200">Africa</a>
				</li>
				<li>
					<a href="#" class="bg-neutral-200 px-4 py-1 block border border-neutral-300 hover:bg-neutral-200 after:content-['\274C'] after:text-sm after:text-neutral-400 after:ml-4">Asia</a>
				</li>
				<li>
					<a href="#" class="bg-white px-4 py-1 block border border-neutral-300 hover:bg-neutral-200">Central America</a>
				</li>
				<li>
					<a href="#" class="bg-white px-4 py-1 block border border-neutral-300 hover:bg-neutral-200">North America</a>
				</li>
				<li>
					<a href="#" class="bg-white px-4 py-1 block border border-neutral-300 hover:bg-neutral-200">South America</a>
				</li>
			</ul>
		</div>
		<div>
			<h3 class="uppercase font-bold text-lg">roast</h3>
			<ul class="py-4 flex flex-wrap gap-2">
				<li>
					<a href="#" class="bg-white px-4 py-1 block border border-neutral-300 hover:bg-neutral-200">Dark</a>
				</li>
				<li>
					<a href="#" class="bg-white px-4 py-1 block border border-neutral-300 hover:bg-neutral-200">Medium</a>
				</li>
				<li>
					<a href="#" class="bg-white px-4 py-1 block border border-neutral-300 hover:bg-neutral-200">Light</a>
				</li>
			</ul>
		</div>
		<button class="bg-neutral-500 text-white py-2 px-4 after:content-['\274C'] after:text-sm after:ml-4">
			CLEAR FILTERS
		</button>
	</div>
	<button class="bg-neutral-200 hover:bg-neutral-300 p-2 md:flex-1 lg:hidden">FILTER (1)</button>
</template>
