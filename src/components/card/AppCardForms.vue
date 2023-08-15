<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>
<template>
  <div class="grid place-items-center">
    <div class="card_container card rounded-3 border-0 shadow">
      <div class="bg-white shadow-md rounded-md py-14 px-5">
        <div class="flex flex-row">
          <div class="pt-5 text-center">
            <h2 v-if="title">
              {{ title }}
            </h2>
            <h6 v-if="subtitle">
              {{ subtitle }}
            </h6>
          </div>
          <slot name="form-components"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card_container {
  width: 100vw;
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 1400px) {
    width: 60vw;
  }
}
</style>
