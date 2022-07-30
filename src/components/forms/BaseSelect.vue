<script setup>
defineProps(['label','name','modelValue','options','error'])
</script>

<template>
	<label :for="name" class="font-semibold">{{label}}:</label>
    <select 
        :name="name" 
        :id="name" 
        :value="modelValue" 
        v-bind="{ 
            ...$attrs, 
            onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
        }"
        class="p-2 border border-neutral-300 md:flex-1 lg:flex-grow-0 focus:outline-none">
        <option
            v-for="option,index in options"
            :value="option.value"
            :key="index"
            :selected="option.value === modelValue"
        >
            {{ option.label }}
        </option>
    </select>
    <span v-if="error" class="text-red-600 hidden peer-focus:peer-invalid:block">
        {{ error }}
    </span>
</template>
