import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref<IUser | object>(
      JSON.parse(localStorage.getItem("user") || '{}')
    );
    const isAuth = computed(() => !!user.value);
    const login = async (userData: IUser) => {
      try {
        const { usuario } = await loginService(userData);
        if (usuario) {
          // Guardar en el localStorage y que user contenga los datos guardados en el localStorage
          localStorage.setItem("user", JSON.stringify(usuario));
          user.value = JSON.parse(localStorage.getItem("user") || "{}");
        }
      } catch (error) {
        console.error(error);
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
    persist: true
  }
);
