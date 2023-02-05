<script setup lang="ts">
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
</script>
<template>
  <div class="min-vh-100">
    <Navbar />
    <router-view></router-view>
  </div>
  <Footer />
</template>
