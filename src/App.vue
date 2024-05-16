<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
  document.addEventListener('DOMContentLoaded', () => {
    initFlowbite();
  });
})
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
