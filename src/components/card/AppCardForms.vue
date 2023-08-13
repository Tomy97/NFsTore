<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>
<template>
  <div class="grid place-items-center">
    <div class="card rounded-3 border-0 shadow">
      <div class="bg-white shadow-md rounded-md p-6">
        <div class="flex flex-row">
          <div class="col-12 pt-5 text-center">
            <h2 v-if="title">
              {{ title }}
            </h2>
            <h6 v-if="subtitle">
              {{ subtitle }}
            </h6>
          </div>
          <div class="col-12">
            <slot name="form-components"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
