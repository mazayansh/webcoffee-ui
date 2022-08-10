<template>
	<main class="grow flex flex-col">
		<div class="md:w-8/12 mx-auto grow text-center flex flex-col gap-y-2 justify-center items-center">
			<h1 class="text-4xl">Not Found</h1>
			<p>Page/item you're looking for is not found.</p>
			<router-link :to="{ name: 'home' }" :class="'underline'">
				Return to store
			</router-link>
		</div>
	</main>
</template>