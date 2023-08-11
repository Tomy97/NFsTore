<script setup lang="ts">
import ImageLogo from '../assets/img/NfStorelogo.svg';

const props = defineProps({
  className: {
    type: String,
    required: false,
    default: '',
  },
})
</script>
<template>
  <img :src="ImageLogo" alt="nfstore" :class="props.className" />
</template>
