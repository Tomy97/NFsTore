import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { IUser } from "../interfaces/IUser";
import { loginService } from "../services/auth.service";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    auth: false,
    returnUrl: null
  }),
  actions: {
    async login(user: IUser) {
      const { usuario } = await loginService(user);
      this.user = usuario;
      localStorage.setItem("user", JSON.stringify(usuario));
      this.auth = true;
      localStorage.setItem("auth", JSON.stringify(this.auth));
    },
    async logout(user: IUser) {
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      this.auth = !this.auth;
    }
  }
});
