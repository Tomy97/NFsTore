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

  const form = reactive({
    name: "",
    user: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const router = useRouter();
  const handleSubmit = async (values: any) => {
    try {
      await registerService(values);
      router.push({ name: "Login" });
    } catch (error) {
      console.error(error);
    }
  };
</script>

<template>
  <Form class="px-3" @submit="handleSubmit">
    <FormInputText label="Name" placeholder="Name" v-model="form.name" />
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
        <router-link :to="{ name: 'Login' }" class="text-decoration-none">
          Ingresar
        </router-link>
      </div>
      <div class="col-12 text-center pt-3 pb-5">
        <BtnSubmit />
      </div>
    </div>
  </Form>
</template>
