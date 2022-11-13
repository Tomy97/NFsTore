<script setup lang="ts">
import Vue, { onMounted, reactive } from 'vue'
import { Form } from 'vee-validate'
import BtnSubmit from '../buttons/BtnSubmit.vue'
import FormInputEmail from './inputs/FormInputEmail.vue'
import FormInputPassword from './inputs/FormInputPassword.vue'
import { UseSweetAlert } from '../../composables/UseSweetAlert'
import { useAuthStore } from '../../store/useAuthStore'
import routes from '../../routes'

// const { login } = useUserStore()

const form = reactive({
  email: '',
  password: '',
})

const { login } = useAuthStore()

const handleSubmit = async (values: any) => {
  try {
    if (values) {
      login(values)
      // routes.push('Home')
    }
  } catch (error) {
    console.error(error)
  }
}
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
