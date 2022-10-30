<script setup lang="ts">
import { reactive } from "vue";
import { Form } from "vee-validate";
import BtnSubmit from "../buttons/BtnSubmit.vue";
import FormInputEmail from "./inputs/FormInputEmail.vue";
import FormInputPassword from "./inputs/FormInputPassword.vue";

const form = reactive({
  email: "",
  password: "",
});

const handleSubmit = (values: any) => {
  console.log(values);
};
</script>
<template>
  <Form class="login" @submit="handleSubmit">
    <FormInputEmail v-model="form.email" />
    <FormInputPassword v-model="form.password" />
    <BtnSubmit />
  </Form>
</template>

<style lang="scss">
.login {
  padding: 30px;
  padding-top: 156px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__input {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 14px;
  font-weight: 700;
  width: 100%;
  transition: 0.2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #6a679e;
}

.login__error__text {
  color: red;
}
</style>
