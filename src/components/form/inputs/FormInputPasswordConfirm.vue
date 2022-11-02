<script setup lang="ts">
import { defineRule, useField } from "vee-validate";
import { required, min, confirmed } from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule("confirmed", confirmed);

defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: "Password Confirm",
  },
  modelValue: {
    type: String,
  },
});

const { value, errorMessage } = useField(props.label, {
  required: required,
  confirmed: '@password',
  min: 6,
});
</script>
<template>
  <div class="login__field">
    <input
      type="password"
      name="passwordConfirm"
      class="login__input"
      :class="errorMessage ? 'space-bottom-style' : ''"
      v-model="value"
      @input="$emit('update:modelValue', value)"
      placeholder="Confirm Password"
      :required="required"
      autocomplete="off"
    />
    <span class="login__error__text">{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
