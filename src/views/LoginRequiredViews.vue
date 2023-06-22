<template>
  <div class="container">
    <div class="card text-center mt-5">
      <div class="card-body">
        <h2 class="card-title">Se requiere inicio de sesión</h2>
        <p class="card-text">Debe iniciar sesión para acceder a esta página.</p>
        <button class="btn btn-primary" @click="redirectToLogin">Ir a la página de inicio de sesión</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  max-width: 400px;
  width: 100%;
}
</style>
