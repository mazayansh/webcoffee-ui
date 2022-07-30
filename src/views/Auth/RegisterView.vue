<script setup>
import BaseInput from "@/components/forms/BaseInput.vue"
import { ref } from "vue"

let register = ref({
	first_name: ''
})
</script>

<template>
	<main>
		<div class="p-10 md:w-3/4 lg:w-2/4 mx-auto">
            <div class="text-center">
                <h2 class="text-2xl font-bold uppercase tracking-widest">create account</h2>
            </div>
            <form action="#" class="py-10 flex flex-col gap-y-4">
                <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:justify-between">
                    <div class="flex flex-col gap-y-2 md:flex-1">
                        <BaseInput :label="'First name'" :name="'first_name'" v-model="register.first_name" type="text" required="required" aria-required="true" :error="''">
                        	<template #requiredMark>
                        		<span class="text-red-600">&#42;</span>
                        	</template>
                        </BaseInput>
                    </div>
                    <div class="flex flex-col gap-y-2 md:flex-1">
                        <BaseInput :label="'Last name'" :name="'last_name'" v-model="register.last_name" type="text" required="required" aria-required="true" :error="''">
                        	<template #requiredMark>
                        		<span class="text-red-600">&#42;</span>
                        	</template>
                        </BaseInput>
                    </div>
                </div>
                <div class="flex flex-col gap-y-2">
                    <BaseInput :label="'Email'" :name="'email'" v-model="register.email" type="email" required="required" aria-required="true" :error="''">
                    	<template #requiredMark>
                    		<span class="text-red-600">&#42;</span>
                    	</template>
                    </BaseInput>
                </div>
                <div class="flex flex-col gap-y-2">
                    <BaseInput :label="'Password'" :name="'password'" v-model="register.password" type="password" required="required" aria-required="true" :error="''">
                    	<template #requiredMark>
                    		<span class="text-red-600">&#42;</span>
                    	</template>
                    </BaseInput>
                </div>
                <div class="text-center flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
                    <button type="submit" class="py-4 md:py-2 px-8 uppercase bg-purple-900 text-white font-semibold hover:bg-purple-800">create</button>
                    <a href="#" class="uppercase font-semibold hover:text-purple-900">return to store</a>
                </div>
            </form>
        </div>
	</main>
</template>
