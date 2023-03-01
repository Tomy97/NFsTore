import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref<any>(
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null
    );

    const isAuth = computed(() => user.value !== null);

    const login = async (userData: IUser) => {
      try {
        const { usuario } = await loginService(userData);
        if (usuario) localStorage.setItem("user", JSON.stringify(usuario));
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
      logOut
    };
  },
  {
    persist: [
      {
        key: "user",
        storage: localStorage
      }
    ]
  }
);
