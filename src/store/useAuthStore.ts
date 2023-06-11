import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref<IUser | object>(
      JSON.parse(localStorage.getItem("user") || "{}")
    );
    const isAuth = computed(() => !!user.value);
    const login = async (userData: IUser) => {
      try {
        const {token,userName,avatar, email,statusCode, message} = await loginService(userData);
        console.log(userName,avatar, email);
        
        if (token) {
          // Guardar en el localStorage y que user contenga los datos guardados en el localStorage
          localStorage.setItem("user", JSON.stringify(userName,avatar, email));
          user.value = JSON.parse(localStorage.getItem("user") || "{}");
        } else {
          // Manejar el caso de error en el login
          throw new Error(`Error en el login: ${statusCode} - ${message}`);
          // console.error(`Error en el login: ${statusCode} - ${message}`);
        }
      } catch (error) {
        console.error("Error en el login:", error);
      }
    };

    const logOut = async () => {
      localStorage.clear();
      location.reload();
    };

    return {
      user,
      isAuth,
      login,
      logOut,
    };
  },
  {
    persist: true,
  }
);
