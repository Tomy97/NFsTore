<script setup lang="ts">
import { defineRule } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import useInputField from "../../../composables/UseInputField";

defineRule("required", required);
defineRule("email", email);

const props = defineProps({
  label: {
    type: String,
    default: "Email",
  },
  name: {
    type: String,
    default: "email",
  },
});

const { input, errorMessage } = useInputField(props.name, "email", {
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
      placeholder="Email"
      v-model='input'
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
