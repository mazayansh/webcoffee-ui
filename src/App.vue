<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from '@/components/Header.vue'
import MainFooter from '@/components/Footer.vue'
</script>

<template>
  <main-header />

  <RouterView />

  <main-footer />
</template>
