<script setup lang="ts">
import { defineRule, useField } from "vee-validate";
import { required, email } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: "Email",
  },
  modelValue: {
    type: String,
  },
});

const { value, errorMessage } = useField(props.label, {
  required: required,
  email: true,
});
</script>
<template>
  <div class="login__field">
    <input
      type="email"
      class="login__input"
      :class="errorMessage ? 'space-bottom-style' : ''"
      v-model="value"
      @input="$emit('update:modelValue', value)"
      placeholder="Email"
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
