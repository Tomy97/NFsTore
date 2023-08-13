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
  <div
    class="flex min-h-full flex-col justify-center px-2 md:px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="flex justify-center">
        <Logo className="w-32 sm:w-20 md:w-40 lg:w-120 xl:w-150" />
      </div>
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Iniciar Sesión
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Form class="px-3" @submit="handleSubmit">
        <FormInputEmail />
        <FormInputPassword name="password" />
        <router-link
          :to="{ name: 'SendEmail' }"
          class="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Olvide mi contraseña
        </router-link>
        <div class="text-sm text-center mt-4"></div>
        <div class="">Todavia no tenes una cuenta?</div>
        <div class="">
          <router-link :to="{ name: 'Register' }" class="text-decoration-none">
            Registrate
          </router-link>
        </div>
        <BtnSubmit class="btn" text="Enviar" />
      </Form>
    </div>
  </div>
</template>
