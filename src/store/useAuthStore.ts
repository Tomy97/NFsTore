import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IUser } from '../interfaces/IUser';
import { loginService } from '../services/auth.service';
import { useRouter } from 'vue-router';
import jwtDecode from 'jwt-decode';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const router = useRouter();
    const user = ref<IUser | null>(null);
    const isAuth = ref(false);

    const loginStore = async (userData: IUser) => {
      const data = await loginService(userData);
      const decode: IUser = jwtDecode(data.token);
      user.value = decode;
      isAuth.value = true;
    };

    const logOut = async () => {
      localStorage.clear();
      router.push({ name: 'Login' });
    };

    return {
      user,
      isAuth,
      loginStore,
      logOut,
    };
  },
  {
    persist: true,
  },
);
