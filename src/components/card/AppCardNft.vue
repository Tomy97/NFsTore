<script setup lang="ts">
import BtnDinamic from "../buttons/BtnDinamic.vue";
defineProps<{
  image: string;
  title: string;
}>();
</script>
<template>
  <div class="card">
    <img :src="image" class="card-img-top img-fluid" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <BtnDinamic path="Comprar" text="Comprar" />
    </div>
  </div>
</template>
