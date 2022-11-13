<script setup lang="ts">
import { defineRule, useField } from 'vee-validate'
import { required, min, confirmed } from '@vee-validate/rules'
import useInputField from '../../../composables/UseInputField'

defineRule('required', required)
defineRule('min', min)
defineRule('confirmed', confirmed)

defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    type: String,
    default: 'Password Confirm',
  },
  modelValue: {
    type: String,
  },
})

const { input, errorMessage, meta } = useInputField(
  props.label,
  'confirmar contraseña',
  {
    confirmed: '@Password',
    required: required,
    min: 6,
  },
)
</script>
<template>
  <div class="login__field">
    <input
      type="password"
      class="login__input"
      :class="errorMessage ? 'space-bottom-style' : ''"
      :error="!meta.valid && meta.validated"
      v-model="input"
      placeholder="Confirm Password"
      :required="required"
      autocomplete="off"
    />
    <span class="login__error__text">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
