<script setup lang="ts">
import { Form } from 'vee-validate';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store/useAuthStore';
import { UseSweetAlert } from '../../composables/UseSweetAlert';
import BtnSubmit from '@components/buttons/BtnSubmit.vue';
import FormInputPassword from './inputs/FormInputPassword.vue';
import FormInputEmail from './inputs/FormInputEmail.vue';
import Logo from '../Logo.vue';

const router = useRouter();
const authStore = useAuthStore();
const handleSubmit = async (values: any) => {
  try {
    if (values) {
      await authStore.login(values);
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      console.log('user', user);

      if (user && Object.keys(user).length > 0) {
        UseSweetAlert.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Logueado correctamente',
        });
        router.push({ name: 'Home' });
      } else {
        UseSweetAlert.fire({
          icon: 'error',
          title: 'Error',
          text: 'Email o Password Incorrecta',
        });
      }
    }
  } catch (error: any) {
    UseSweetAlert.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.response.data.msg}`,
    });
    console.error(error);
  }
};
</script>
<template>
  <div class="form_card_container">
    <div class="form_card_container_logo">
      <div class="flex justify-center">
        <Logo className="w-32 sm:w-20 md:w-40 lg:w-120 xl:w-150" />
      </div>
      <h2
        class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Iniciar Sesión
      </h2>
    </div>
    <Form @submit="handleSubmit">
      <FormInputEmail />
      <FormInputPassword name="password" />
      <div class="text-center my-5">
        <router-link
          :to="{ name: 'SendEmail' }"
          class="font-semibold text-indigo-600 hover:text-indigo-500 my-4"
        >
          Olvide mi contraseña
        </router-link>
      </div>
      <div class="">
        Todavia no tenes una cuenta?
        <router-link
          :to="{ name: 'Register' }"
          class="text-decoration-none font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Registrate
        </router-link>
      </div>
      <BtnSubmit class="btn mt-6" text="Enviar" />
    </Form>
  </div>
</template>
<style lang="scss" scoped>
.form_card_container {
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  .form_card_container_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .form_card_container {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
