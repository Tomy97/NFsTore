import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<IUser>({
    user: "",
    password: ""
  });
  const isAuth = ref<boolean>(false)
  const login = async (user: IUser) => {
    await loginService(user);
  };
  const logOut = () => {
    localStorage.clear();
  };

  return {
    user,
    isAuth,
    login,
    logOut
  };
});
