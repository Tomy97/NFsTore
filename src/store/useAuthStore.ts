import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/login.service";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<IUser>({
    user: "",
    password: ""
  });

  const login = async (user: IUser) => {
    await loginService(user);
  };
  const logOut = () => {
    localStorage.clear();
  };

  return {
    user,
    login,
    logOut
  };
});
