<script setup lang="ts">
  defineProps<{
    path: string | object;
    text: string;
  }>();
</script>
<template>
  <router-link :to="path" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {{ text }}
  </router-link>
</template>
