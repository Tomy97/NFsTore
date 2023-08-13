<script setup lang="ts">
import { defineRule } from 'vee-validate';
import { required, min } from '@vee-validate/rules';
import useInputField from '../../../composables/UseInputField';

defineRule('required', required);
defineRule('min', min);

defineEmits(['update:modelValue']);

const props = defineProps({
  label: {
    type: String,
    default: 'Password',
  },
  name: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: true,
  },
});

const { input, errorMessage } = useInputField(props.name, 'contraseña', {
  required: required,
  min: 6,
});
</script>
<template>
  <div class="mt-2">
    <div class="flex items-center justify-between">
      <label
        for="password"
        class="block text-sm font-medium leading-6 text-gray-900"
        >{{ props.label }}</label
      >
    </div>
    <input
      :name="props.name"
      type="password"
      autocomplete="off"
      placeholder="Password"
      :required="required"
      v-model="input"
      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <span
      class="text-red-400 text-sm"
      >{{ errorMessage }}</span
    >
  </div>
</template>