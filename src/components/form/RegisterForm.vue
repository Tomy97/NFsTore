<script setup lang="ts">
import { Form } from "vee-validate";
import { reactive } from "vue";
import BtnSubmit from "../buttons/BtnSubmit.vue";
import FormInputEmail from "./inputs/FormInputEmail.vue";
import FormInputPassword from "./inputs/FormInputPassword.vue";
import FormInputPasswordConfirm from "./inputs/FormInputPasswordConfirm.vue";
import FormInputText from "./inputs/FormInputText.vue";
import { registerService } from "../../services/auth.service";
import { useRouter } from "vue-router";
import { UseSweetAlert } from "../../composables/UseSweetAlert";

const router = useRouter();
const handleSubmit = async (values: any) => {
  try {
    if (values) {
      UseSweetAlert.fire({
        title: "Registro exitoso",
        icon: "success",
      });

      await registerService(values);
      router.push({ name: "Login" });
    }
  } catch (error: any) {
    UseSweetAlert.fire({
      icon: "error",
      title: `${error.response.data.msg}`,
    });
    console.error(error);
  }
};
</script>

<template>
  <Form class="px-3" @submit="handleSubmit">
    <FormInputText label="Username" placeholder="UserName" name="userName" />
    <FormInputEmail name="email" />
    <FormInputPassword name="password" />
    <FormInputPasswordConfirm name="passwordConfirmation" />
    <div class="row justify-content-center">
      <div class="col-12 text-center py-2">
        <span>Ya tenes una cuenta?</span>
        <router-link :to="{ name: 'Login' }" class="text-decoration-none mx-2">
          Ingresar
        </router-link>
      </div>
      <div class="col-12 text-center pt-3 pb-5">
        <BtnSubmit text="enviar" />
      </div>
    </div>
  </Form>
</template>
