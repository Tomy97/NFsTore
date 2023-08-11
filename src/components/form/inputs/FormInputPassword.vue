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
      :class="errorMessage ? 'space-bottom-style' : ''"
      autocomplete="off"
      placeholder="Password"
      :required="required"
      v-model="input"
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <div class="text-sm text-center mt-4">
      <router-link
        :to="{ name: 'SendEmail' }"
        class="font-semibold text-indigo-600 hover:text-indigo-500"
      >
        Olvide mi contraseña
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.space-bottom-style {
  margin-bottom: 0.8rem;
}
</style>
