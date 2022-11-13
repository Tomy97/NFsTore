<script setup lang="ts">
import AppCardForms from "../components/card/AppCardForms.vue";
import RegisterForm from "../components/form/RegisterForm.vue";
</script>
<template>
  <AppCardForms title="Register">
    <template #form-components>
      <RegisterForm />
    </template>
  </AppCardForms>
</template>

<style lang="scss" scoped></style>
