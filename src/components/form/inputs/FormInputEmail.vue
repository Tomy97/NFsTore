<script setup lang="ts">
import { defineRule } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import useInputField from '../../../composables/UseInputField';

defineRule('required', required);
defineRule('email', email);

const props = defineProps({
  label: {
    type: String,
    default: 'Email',
  },
  name: {
    type: String,
    default: 'email',
  },
});

const { input, errorMessage } = useInputField(props.name, 'email', {
  required: required,
  email: true,
});
</script>
<template>
  <div :class="errorMessage ? 'form__error__text' : ''">
    <label
      for="email"
      class="block text-sm font-medium leading-6 text-gray-900"
      >{{ props.label }}</label
    >
    <input
      id="email"
      name="email"
      type="email"
      autocomplete="email"
      :required="required"
      v-model="input"
      class="block w-full rounded-md font-medium border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <span class="text-red-400 text-sm absolute font-semibold">{{
      errorMessage
    }}</span>
  </div>
</template>
