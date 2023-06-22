// import { useAuthStore } from '../stores/useAuthStore';
import { useAuthStore } from '../store/useAuthStore';
import { useRouter } from 'vue-router';

export function useAuth() {
  const authStore = useAuthStore();
  const router = useRouter();
  console.log('aca entre',authStore.isAuth);
  console.log('aca entre',!authStore.isAuth? 'me voy al login':'pase');
  
  // Verificar la autorización
  if (!authStore.isAuth ) {
    console.log('lohinrequired');
    
    router.push('/loginRequired'); // Redirigir a la página de inicio de sesión si no está autorizado
  }
}
