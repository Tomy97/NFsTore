<script setup lang="ts">
  defineProps<{
    path: string | object;
    text: string;
  }>();
</script>
<template>
  <router-link :to="path" class="btn btn-custom">
    {{ text }}
  </router-link>
</template>
