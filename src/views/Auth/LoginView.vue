<template>
	<div class="p-10 md:w-3/4 lg:w-2/4 mx-auto">
        <div class="text-center">
            <h2 class="text-2xl font-bold uppercase tracking-widest">login</h2>
        </div>
        <form action="#" class="py-10 flex flex-col gap-y-4">
            <div class="flex flex-col gap-y-2">
                <label for="email">Email</label>
                <input type="email" name="email" class="h-12 px-4 rounded-sm border border-neutral-300 focus:outline-none peer" required>
                <span class="text-red-600 hidden peer-focus:peer-invalid:block">Email invalid</span>
            </div>
            <div class="flex flex-col gap-y-2">
                <label for="password">Password</label>
                <input type="password" name="password" class="h-12 px-4 rounded-sm border border-neutral-300 focus:outline-none peer"
                    required>
                <span class="text-red-600 hidden peer-focus:peer-invalid:block">Password invalid</span>
            </div>
            <div class="text-right">
                <a href="/src/forgot-password.html" class="text-purple-900">Forgot your password?</a>
            </div>
            <div class="text-center flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
                <button type="submit" class="py-4 md:py-2 px-8 uppercase bg-purple-900 text-white font-semibold hover:bg-purple-800">sign in</button>
                <a href="/src/register.html" class="uppercase font-semibold hover:text-purple-900">create account</a>
            </div>
        </form>
    </div>
</template>
