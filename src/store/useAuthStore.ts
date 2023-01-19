import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<IUser>(JSON.parse(localStorage.getItem("user")));
  const isAuth = ref<boolean>(false);

  const login = async (user: IUser) => {
    const { usuario } = await loginService(user);
    localStorage.setItem("user", JSON.stringify(usuario));
    isAuth.value = true;
    localStorage.setItem("auth", JSON.stringify(isAuth.value));
  };

 
  return {
    user,
    isAuth,
    login
  };
});
