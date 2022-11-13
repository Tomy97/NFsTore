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
  >
    <slot name="slide-component"></slot>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

const modules = [Navigation, Pagination, Autoplay]
</script>
