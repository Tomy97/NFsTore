<script setup lang="ts">
import AppScreenBackground from '../AppScreenBackground.vue'
</script>
<template>
  <div class="container">
    <div class="screen">
      <div class="screen__content">
        <slot name="form-components"></slot>
      </div>
      <AppScreenBackground />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screen {
  background: linear-gradient(90deg, #5d54a4, #7c78b8);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #5c5696;
  border-radius: 15px;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}
</style>
