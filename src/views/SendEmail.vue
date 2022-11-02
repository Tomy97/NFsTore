<script setup lang="ts">
import AppCardForms from "../components/card/AppCardForms.vue";
import EmailConfirmForm from "../components/form/EmailConfirmForm.vue";
</script>

<template>
  <AppCardForms subtitle="Ingrese su email. Recibira un email de confirmacion">
    <template #form-components>
      <EmailConfirmForm />
    </template>
  </AppCardForms>
</template>
