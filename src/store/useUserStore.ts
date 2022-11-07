import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    userData: null,
  }),
  getters: {
    isAuth: (state: any) => {
      
    },
  },
  actions: {
    async login({ commit }: any, userData: any) {},
  },
});
