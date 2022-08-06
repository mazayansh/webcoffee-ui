<script setup>
import { toRefs } from "vue"

const props = defineProps(['label','name','modelValue','error'])
const { label, name, modelValue, error } = toRefs(props)
</script>

<template>
	<label :for="name">
		{{ label }} 
		<slot name="requiredMark"></slot>
	</label>
    <input 
    	v-bind="$attrs"
    	:id="name"
    	:name="name" 
    	:value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    	class="h-12 px-4 rounded-sm border border-neutral-300 focus:outline-none peer">
    <span v-if="error" class="text-red-600 peer-focus:peer-invalid:block">
    	{{ error }}
    </span>
</template>
