<script setup lang="ts">
  import { Form } from "vee-validate";
  import BtnSubmit from "../buttons/BtnSubmit.vue";
  import FormInputPassword from "./inputs/FormInputPassword.vue";
  import routes from "../../routes";
  import FormInputText from "./inputs/FormInputText.vue";
  import { useAuthStore } from "../../store/useAuthStore";
  import { loginService } from "../../services/auth.service";
  import { useRouter } from "vue-router";
  import { reactive } from "vue";

  const form = reactive({
    user: "",
    password: ""
  });
  const router = useRouter();
  const handleSubmit = async (values: any) => {
    try {
      if (values) {
        await loginService(values);
        router.push({ name: "Home" });
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
      v-model="form.user"
    />
    <FormInputPassword v-model="form.password" />
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
