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
        let { token, userName, avatar, email, statusCode, message } = await loginService(userData);
        console.log(userName, avatar, email);
        if (token) {
          // Guardar en el localStorage y que user contenga los datos guardados en el localStorage
          console.log('mi token',token);
          const formattedToken = token.replace(/"/g, '');
          console.log('mi fffffff',formattedToken);

          
          localStorage.setItem("user", JSON.stringify(userName, avatar, email));
          localStorage.setItem("token", JSON.stringify(token));
          user.value = JSON.parse(localStorage.getItem("user") || "{}");
        } else {
          // Manejar el caso de error en el login
          throw new Error(`Error en el login: ${statusCode} - ${message}`);
        }
      } catch (error) {
        console.error("Error en el login:", error);
      }
    };

    const logOut = async () => {
      localStorage.clear();
      // location.reload();
    };
    const getToken = () => {
      return localStorage.getItem("token");
    };

    return {
      user,
      isAuth,
      login,
      logOut,
      getToken
    };
  },
  {
    persist: true,
  }
);
