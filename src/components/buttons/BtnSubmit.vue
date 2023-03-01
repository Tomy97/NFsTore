<script lang="ts" setup>
  defineProps<{
    text: string;
  }>();
</script>
<template>
  <button type="submit" class="btn btn-custom btn-lg">{{ text }}</button>
</template>
