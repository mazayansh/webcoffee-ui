<script setup>
import BaseInput from "@/components/forms/BaseInput.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
import userApi from "@/services/user.js"

let form = ref({
	first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const errors = ref({})

const router = useRouter()

function register() {
    userApi.register(form.value)
        .then(response => {
            router.push({ name: 'login' })
        })
}
</script>

<template>
	<main>
		<div class="p-10 md:w-3/4 lg:w-2/4 mx-auto">
            <div class="text-center">
                <h2 class="text-2xl font-bold uppercase tracking-widest">create account</h2>
            </div>
            <form action="#" class="py-10 flex flex-col gap-y-4" @submit.prevent="register">
                <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:justify-between">
                    <div class="flex flex-col gap-y-2 md:flex-1">
                        <BaseInput :label="'First name'" :name="'first_name'" v-model="form.first_name" type="text" required="required" aria-required="true" :error="errors.first_name ? errors.first_name[0] : null">
                        	<template #requiredMark>
                        		<span class="text-red-600">&#42;</span>
                        	</template>
                        </BaseInput>
                    </div>
                    <div class="flex flex-col gap-y-2 md:flex-1">
                        <BaseInput :label="'Last name'" :name="'last_name'" v-model="form.last_name" type="text" required="required" aria-required="true" :error="errors.last_name ? errors.last_name[0] : null">
                        	<template #requiredMark>
                        		<span class="text-red-600">&#42;</span>
                        	</template>
                        </BaseInput>
                    </div>
                </div>
                <div class="flex flex-col gap-y-2">
                    <BaseInput :label="'Email'" :name="'email'" v-model="form.email" type="email" required="required" aria-required="true" :error="errors.email ? errors.email[0] : null">
                    	<template #requiredMark>
                    		<span class="text-red-600">&#42;</span>
                    	</template>
                    </BaseInput>
                </div>
                <div class="flex flex-col gap-y-2">
                    <BaseInput :label="'Password'" :name="'password'" v-model="form.password" type="password" required="required" aria-required="true" :error="errors.password ? errors.password[0] : null">
                    	<template #requiredMark>
                    		<span class="text-red-600">&#42;</span>
                    	</template>
                    </BaseInput>
                </div>
                <div class="flex flex-col gap-y-2">
                    <BaseInput :label="'Password confirmation'" :name="'password_confirmation'" v-model="form.password_confirmation" type="password" required="required" aria-required="true" :error="errors.password_confirmation ? errors.password_confirmation[0] : null">
                        <template #requiredMark>
                            <span class="text-red-600">&#42;</span>
                        </template>
                    </BaseInput>
                </div>

                <div class="text-center flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
                    <button type="submit" class="py-4 md:py-2 px-8 uppercase bg-purple-900 text-white font-semibold hover:bg-purple-800">create</button>
                    <router-link :to="{ name: 'home' }" class="uppercase font-semibold hover:text-purple-900">return to store</router-link>
                </div>
            </form>
        </div>
	</main>
</template>
