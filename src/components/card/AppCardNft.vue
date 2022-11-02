<script setup lang="ts">
import BtnDinamic from "../buttons/BtnDinamic.vue";
defineProps<{
  image: string;
  title: string;
}>();
</script>
<template>
  <div class="card" style="width: 18rem">
    <img :src="image" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <BtnDinamic path="Comprar" text="Comprar" />
    </div>
  </div>
</template>
