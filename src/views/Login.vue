<script setup lang="ts">
import AppCardForms from '../components/card/AppCardForms.vue'
import LoginForm from '../components/form/LoginForm.vue'
</script>
<template>
  <AppCardForms title="Login">
    <template #form-components>
      <LoginForm />
    </template>
  </AppCardForms>
</template>
