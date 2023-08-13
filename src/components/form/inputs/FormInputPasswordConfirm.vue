<script setup lang="ts">
import { defineRule, useField } from "vee-validate";
import { required, min, confirmed } from "@vee-validate/rules";
import useInputField from "../../../composables/UseInputField";

defineRule("required", required);
defineRule("min", min);
defineRule("confirmed", confirmed);

const props = defineProps({
  label: {
    type: String,
    default: "Password Confirm",
  },
  name: {
    type: String,
    required: true,
  },
});

const { input, errorMessage } = useInputField(
  props.name,
  "confirmar contraseña",
  {
    confirmed: "@password",
    required: required,
    min: 6,
  }
);
</script>
<template>
  <div class="login__field">
    <input
      type="password"
      class="lblock w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      :class="errorMessage ? 'space-bottom-style' : ''"
      placeholder="Confirm Password"
      v-model="input"
      :required="required"
      autocomplete="off"
    />
    <span class="login__error__text">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
