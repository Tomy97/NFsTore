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

<style lang="scss" scoped>
.btn-custom {
  background-color: #18a0fb;
  color: #fff;
  text-transform: uppercase;
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  width: 100%;
  &:hover,
  :focus,
  :active {
    background-color: #0f6f9a;
    border-color: #1392e7;
    outline: none;
  }
}
</style>
