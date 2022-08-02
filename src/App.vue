<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from '@/components/Header.vue'
import MainFooter from '@/components/Footer.vue'
import Overlay from '@/components/Overlay.vue'
import { useIndexStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'

let { isOverlayVisible } = storeToRefs(useIndexStore())
</script>

<template>
  <MainHeader />

  <RouterView />

  <MainFooter />

  <Overlay v-show="isOverlayVisible" />
</template>
