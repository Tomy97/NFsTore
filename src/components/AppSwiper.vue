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
    :slidesPerView="4"
    :centeredSlides="true"
    :space-between="50"
    _:autoplay="{
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
.swiper-button-next,  
  .swiper-button-prev {
    background-color: rgb(132, 64, 64);
    background-color: rgba(174, 72, 72, 0.5);
    right:10px;
    padding: 30px;
    color: #000 !important;
    fill: black !important;
    stroke: black !important;
}
</style>
