<script setup>
defineProps(['label','name','modelValue','error'])
</script>

<template>
    <input v-bind="$attrs"
            :id="name" 
            :name="name" 
            class="
                h-14 w-full px-4
                border border-neutral-300 
                rounded-md 
                placeholder-transparent
                focus:border-neutral-400
                peer" 
            :placeholder="label" 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" />
    <label :for="name" 
            class="
                absolute
                left-4 -top-0.5
                text-neutral-900 text-sm
                transition-all
                peer-placeholder-shown:top-4
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-neutral-500
                peer-focus:-top-0.5
                peer-focus:text-neutral-900
                peer-focus:text-sm">{{label}}</label>
    <span v-if="error" class="text-red-600 hidden peer-focus:peer-invalid:block">
        {{ error }}
    </span>
</template>
