import { defineStore } from "pinia";
import { ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore("auth", () => {
  const isAuth = ref<boolean>(false);
  const user = ref<any>(localStorage.getItem("user"));
  if (user) {
    user.value = JSON.parse(user.value);
  } else {
    const res = ref(null);
  }

  const login = async (user: IUser) => {
    try {
      const { usuario } = await loginService(user);
      if (usuario) {
        const userData = JSON.stringify(usuario);
        localStorage.setItem("user", userData);
        isAuth.value = true;
        localStorage.setItem("auth", JSON.stringify(isAuth));
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
