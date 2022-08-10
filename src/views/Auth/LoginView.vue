<script setup>
import BaseInput from "@/components/forms/BaseInput.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
import userApi from "@/services/user.js"
import { useUserStore } from "@/stores/user.js"

const form = ref({
    email: '',
    password: ''
})

const errors = ref({})

const router = useRouter()

function login() {
    userApi.login(form.value)
        .then(async response => {
            useUserStore().user = await response.data.user
            useUserStore().access_token = await response.data.access_token
            router.push({ name: 'orders' })
        })
}
</script>

<template>
	<div class="p-10 md:w-3/4 lg:w-2/4 mx-auto">
        <div class="text-center">
            <h2 class="text-2xl font-bold uppercase tracking-widest">login</h2>
        </div>
        <form action="#" class="py-10 flex flex-col gap-y-4" @submit.prevent="login">
            <div class="flex flex-col gap-y-2">
                <BaseInput :label="'Email'" :name="'email'" :type="'text'" required="required" aria-required="true" v-model="form.email" :error="errors.email ? errors.email[0] : null">
                    <template #requiredMark>
                        <span class="text-red-600">&#42;</span>
                    </template>
                </BaseInput>
            </div>
            <div class="flex flex-col gap-y-2">
                <BaseInput :label="'Password'" :name="'password'" :type="'password'" required="required" aria-required="true" v-model="form.password" :error="errors.password ? errors.password[0] : null">
                    <template #requiredMark>
                        <span class="text-red-600">&#42;</span>
                    </template>
                </BaseInput>
            </div>
            <div class="text-right">
                <!-- <router-link :to="{ name: 'forgot-password' }" class="text-purple-900">Forgot your password?</router-link> -->
            </div>
            <div class="text-center flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
                <button type="submit" class="py-4 md:py-2 px-8 uppercase bg-purple-900 text-white font-semibold hover:bg-purple-800">sign in</button>
                <router-link :to="{ name: 'register' }" class="uppercase font-semibold hover:text-purple-900">create account</router-link>
            </div>
        </form>
    </div>
</template>
