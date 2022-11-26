<script setup lang="ts">
import { Form } from "vee-validate";
import BtnSubmit from "../buttons/BtnSubmit.vue";
import FormInputPassword from "./inputs/FormInputPassword.vue";
import routes from "../../routes";
import FormInputText from "./inputs/FormInputText.vue";
import { useUserStore } from "../../store/useUserStore";
const user = useUserStore();

const handleSubmit = async (values: any) => {
  try {
    if (values) {
      user.login(values);
      routes.push("Home");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <Form class="px-3" @submit="handleSubmit">
    <FormInputText
      label="Username"
      placeholder="Username"
      v-model="user.$state.user"
    />
    <FormInputPassword v-model="user.$state.password" />
    <div class="row pt-3 text-center">
      <div class="col-12 mb-3">
        <router-link :to="{ name: 'SendEmail' }" class="text-decoration-none">
          Olvide mi contraseña
        </router-link>
      </div>
      <div class="col-12">
        Todavia no tenes una cuenta?
        <router-link :to="{ name: 'Register' }" class="text-decoration-none">
          Registrate
        </router-link>
      </div>
      <div class="col-12 pt-4 pb-5">
        <BtnSubmit />
      </div>
    </div>
  </Form>
</template>
