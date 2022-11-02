<script setup lang="ts">
import { reactive } from 'vue'
import { Form } from 'vee-validate'
import BtnSubmit from '../buttons/BtnSubmit.vue'
import FormInputEmail from './inputs/FormInputEmail.vue'
import FormInputPassword from './inputs/FormInputPassword.vue'

const form = reactive({
  email: '',
  password: '',
})

const handleSubmit = (values: any) => {
  console.log(values)
}
</script>
<template>
  <Form class="login" @submit="handleSubmit">
    <FormInputEmail v-model="form.email" />
    <FormInputPassword v-model="form.password" />
    <BtnSubmit />
  </Form>
</template>

<style lang="scss" scoped>
.login {
  padding: 30px;
  padding-top: 156px;
}
</style>
