<script setup lang="ts">
  import { Swiper } from "swiper/vue";
  import { Autoplay, Pagination, Navigation } from "swiper";
  import "swiper/scss";
  import "swiper/scss/navigation";
  import "swiper/scss/pagination";

  const modules = [Navigation, Pagination, Autoplay];
</script>
<template>
  <div class="row">
    <div class="col-12">
      <swiper
        :modules="modules"
        centeredSlides
        observeParents
        observer
        :space-between="60"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        navigation
        loop
        :breakpoints="{
          '320': {
            slidesPerView: 1
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 30
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }"
      >
        <slot name="slide-component"></slot>
      </swiper>
    </div>
  </div>
</template>
