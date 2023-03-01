import { defineStore } from "pinia";
import { ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore("auth", () => {
  const isAuth = ref<boolean>(false);
  const user = ref<any>(localStorage.getItem("user") ? localStorage.getItem("user") : null);

  const login = async (userData: IUser) => {
    try {
      const { usuario } = await loginService(userData);
      
      if (usuario) {
        localStorage.setItem("user", JSON.stringify(usuario));
        isAuth.value = true;
        localStorage.setItem("auth", JSON.stringify(isAuth.value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    isAuth,
    login
  };
});
