<script setup lang="ts">
import { Form } from "vee-validate";
import { reactive } from "vue";
import BtnSubmit from "../buttons/BtnSubmit.vue";
import FormInputEmail from "./inputs/FormInputEmail.vue";

const handleSubmit = (values: any) => {
  console.log(values);
};

const form = reactive({
  email: "",
});
</script>
<template>
  <Form class="px-2" @submit="handleSubmit">
    <div class="row">
      <div class="col-12">
        <FormInputEmail v-model="form.email" />
      </div>
    </div>
    <div class="row justify-content-center my-3">
      <div class="col-7 text-center">
        <BtnSubmit />
      </div>
    </div>
  </Form>
</template>
