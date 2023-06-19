<script setup lang="ts">
import { defineRule } from "vee-validate";
import { required, min } from "@vee-validate/rules";
import useInputField from "../../../composables/UseInputField";

defineRule("required", required);
defineRule("min", min);

defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: "Password",
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

const { input, errorMessage } = useInputField(props.name, "contraseña", {
  required: required,
  min: 6,
});
</script>
<template>
  <div class="login__field">
    <input
      type="password"
      class="login__input"
      :class="errorMessage ? 'space-bottom-style' : ''"
      :name="props.name"
      v-model="input"
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
