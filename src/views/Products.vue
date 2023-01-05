<script setup lang="ts">
import { ref } from 'vue'

const test = ref('hola')
</script>
<template>
  <div>
    <span>{{ test }}</span>
  </div>
</template>
