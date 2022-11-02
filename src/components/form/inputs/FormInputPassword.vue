<script setup lang="ts">
import { defineRule, useField } from 'vee-validate'
import { required, min } from '@vee-validate/rules'

defineRule('required', required)
defineRule('min', min)

defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    type: String,
    default: 'Password',
  },
  modelValue: {
    type: String,
  },
  isRequired: {
    type: Boolean,
    default: true,
  },
})

const { value, errorMessage } = useField(props.label, {
  required: required,
  min: 6,
})
</script>
<template>
  <div class="login__field">
    <input
      type="password"
      class="login__input"
      :class="errorMessage ? 'space-bottom-style' : ''"
      v-model="value"
      @input="$emit('update:modelValue', value)"
      placeholder="Password"
      :required="required"
      autocomplete="off"
    />
    <span class="login__error__text">{{ errorMessage }}</span>
  </div>
</template>
<style lang="scss" scoped>
.space-bottom-style {
  margin-bottom: 0.8rem;
}
</style>
