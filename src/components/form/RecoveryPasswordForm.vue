<script setup lang="ts">
import { Form } from "vee-validate";
import { ref } from "vue";
import routes from "../../routes";
import BtnSubmit from "../buttons/BtnSubmit.vue";
import FormInputPassword from "./inputs/FormInputPassword.vue";
import FormInputPasswordConfirm from "./inputs/FormInputPasswordConfirm.vue";
const handleSubmit = (values: any) => {
  console.log(values);

  if (values) {
    routes.push({ name: "Login" });
  } else {
    console.log("Las contraseñas no coinciden");
  }
};
const form = ref({
  password: "",
  passwordConfirm: "",
});
</script>
<template>
  <Form class="px-3" @submit="handleSubmit">
    <div class="row">
      <div class="col-12">
        <FormInputPassword v-model="form.password" />
      </div>
      <div class="col-12">
        <FormInputPasswordConfirm v-model="form.passwordConfirm" />
      </div>
    </div>
    <div class="row justify-content-center py-3">
      <div class="col-12 col-lg-7 text-center">
        <BtnSubmit />
      </div>
    </div>
  </Form>
</template>

<style lang="scss" scoped></style>
