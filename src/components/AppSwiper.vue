<script setup lang="ts">
import { Swiper } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

const modules = [Navigation, Pagination, Autoplay]
</script>
<template>
  <swiper
    :modules="modules"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :loop="true"
    class="slider-container"
  >
    <slot name="slide-component"></slot>
  </swiper>
</template>
<style lang="scss" scoped>
.slider-container {
  max-width: 1920px;
  width: 100%;
  padding: 40px 0;
}
</style>
