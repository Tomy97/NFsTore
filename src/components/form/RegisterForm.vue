<script setup lang="ts">
import { Form } from "vee-validate";
import { reactive } from "vue";
import BtnSubmit from "../buttons/BtnSubmit.vue";
import FormInputEmail from "./inputs/FormInputEmail.vue";
import FormInputPassword from "./inputs/FormInputPassword.vue";
import FormInputPasswordConfirm from "./inputs/FormInputPasswordConfirm.vue";
import FormInputText from "./inputs/FormInputText.vue";

const form = reactive({
  user: "",
  email: "",
  password: "",
  passwordConfirm: "",
});

const handleSubmit = (values: any) => {
  console.log(values);
};
</script>

<template>
  <Form class="px-3" @submit="handleSubmit">
    <FormInputText
      label="Username"
      placeholder="Username"
      v-model="form.user"
    />
    <FormInputEmail v-model="form.email" />
    <FormInputPassword v-model="form.password" />
    <FormInputPasswordConfirm v-model="form.passwordConfirm" />
    <div class="row justify-content-center">
      <div class="col-12 text-center py-2">
        <span> Ya tenes una cuenta? </span>
        <router-link :to="{ name: 'Login' }" class="text-decoration-none"> Ingresar </router-link>
      </div>
      <div class="col-12 text-center pt-3 pb-5">
        <BtnSubmit />
      </div>
    </div>
  </Form>
</template>

<style lang="scss" scoped></style>
