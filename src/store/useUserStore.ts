import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: "",
    password: "",
    auth: false,
  }),
  getters: {
    isAuth: ({ auth }) => auth,
  },
  actions: {
    async login(userData: { user: string; password: string }) {
      await localStorage.setItem("user", JSON.stringify(userData.user));
    },
  },
});
