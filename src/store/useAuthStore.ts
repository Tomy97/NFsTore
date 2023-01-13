import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore("auth", () => {

  const isAuth = ref<boolean>(false)

  const logOut = () => {
    localStorage.clear();
  };

  return {
    isAuth,
    logOut
  };
});
