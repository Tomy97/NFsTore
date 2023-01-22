import { ref } from "vue";
import { defineStore } from "pinia";

export const useBuyingStore = defineStore("buying", () => {
  const compra = ref<object>(JSON.parse(localStorage.getItem("compra")));
  const handleReceiveData = (data: object) => {
    localStorage.setItem("compra", JSON.stringify(data));
    compra.value = data;
  };
  return {
    compra,
    handleReceiveData
  };
});
