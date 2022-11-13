import axios from 'axios'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

interface AuthStore {
  token?: string | null
  refreshToken?: string | null
  expire?: number | null
}

const baseurl = `${import.meta.env.VITE_API_URL}/users}`
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: useStorage('user', {} as AuthStore),
  }),
  getters: {},
  actions: {
    async login(userData: { email: string; password: string }) {
      await axios.post(baseurl, userData)
    },
    async logOut() {
      localStorage.clear()
    },
  },
})
