import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(JSON.parse(`${localStorage.getItem("user")}`));
  const auth = ref<boolean>(false);
  const isAuth = ref(localStorage.getItem("auth"));

  const login = async (user: IUser) => {
    const { usuario } = await loginService(user);
    localStorage.setItem("user", JSON.stringify(usuario));
    auth.value = true;
    localStorage.setItem("auth", JSON.stringify(auth.value));
  };

  const logOut = () => {
    localStorage.clear();
    auth.value = false;
  };

  return {
    user,
    isAuth,
    auth,
    login,
    logOut
  };
});
