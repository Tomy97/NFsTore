<script setup lang="ts">
import { defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";
import useInputField from "../../../composables/UseInputField";

defineRule("required", required);

defineEmits(["update:modelValue"]);

const props = defineProps<{
  label: string;
  placeholder: string;
  name: string;
}>();

const { input, errorMessage } = useInputField(props.name, props.label, {
  required: required,
});
</script>
<template>
  <div class="login__field">
    <input
      type="text"
      class="login__input"
      :class="errorMessage ? 'space-bottom-style' : ''"
      :placeholder="placeholder"
      v-model="input"
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
