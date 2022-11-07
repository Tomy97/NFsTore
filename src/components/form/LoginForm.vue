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
  <Form class="px-3" @submit="handleSubmit">
    <FormInputEmail v-model="form.email" />
    <FormInputPassword v-model="form.password" />
    <div class="row pt-3 text-center">
      <div class="col-12 mb-3">
        <router-link :to="{ name: 'SendEmail' }" class="text-decoration-none">
          Olvide mi contraseña
        </router-link>
      </div>
      <div class="col-12">
        Todavia no tenes cuenta?
        <router-link :to="{ name: 'Register' }" class="text-decoration-none"
          >Registrate</router-link
        >
      </div>
      <div class="col-12 pt-4 pb-5">
        <BtnSubmit />
      </div>
    </div>
  </Form>
</template>
