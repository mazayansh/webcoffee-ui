<template>
	<main class="grow flex flex-col">
		<div class="md:w-8/12 mx-auto grow text-center flex flex-col gap-y-2 justify-center items-center">
			<h1 class="text-4xl">General Error</h1>
			<p>It seems like we have encountered a server problem. Please try again later or contact our support.</p>
			<router-link :to="{ name: 'home' }" :class="'underline'">
				Return to store
			</router-link>
		</div>
	</main>
</template>