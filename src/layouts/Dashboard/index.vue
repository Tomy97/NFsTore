<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <Navbar />
  <main class="grid min-h-screen">
    <router-view></router-view>
  </main>
  <Footer />
</template>
