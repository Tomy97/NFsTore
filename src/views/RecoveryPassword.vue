<script setup lang="ts">
import AppCardForms from "../components/card/AppCardForms.vue";
import RecoveryPasswordForm from "../components/form/RecoveryPasswordForm.vue";
</script>
<template>
  <AppCardForms title="Recovery Password">
    <template #form-components>
      <RecoveryPasswordForm />
    </template>
  </AppCardForms>
</template>

<style lang="scss" scoped></style>
