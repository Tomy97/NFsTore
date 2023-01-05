<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>
<template>
  <div class="container-fluid">
    <div class="row justify-content-center pt-5">
      <div class="col-md-6 col-lg-5 col-xl-4 col-xxl-3">
        <div class="card rounded-3 border-0 shadow">
          <div class="card-body">
            <div class="row">
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
    </div>
  </div>
</template>
