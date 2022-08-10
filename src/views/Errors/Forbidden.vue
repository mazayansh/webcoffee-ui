<template>
	<main class="grow flex flex-col">
		<div class="md:w-8/12 mx-auto grow text-center flex flex-col gap-y-2 justify-center items-center">
			<h1 class="text-4xl">Forbidden</h1>
			<p>You're not allowed to access this page/item.</p>
			<router-link :to="{ name: 'home' }" :class="'underline'">
				Return to store
			</router-link>
		</div>
	</main>
</template>