<script setup lang="ts">
import { useRouter } from 'vue-router';
import BtnDinamic from '../../../components/buttons/BtnDinamic.vue'
import { useAuthStore } from '../../../store/useAuthStore'
import { storeToRefs } from 'pinia'

const menuLinks = [
  {
    text: 'home',
    name: 'Home',
  },
  {
    text: 'productos',
    name: 'Productos',
  },
  {
    text: 'compra',
    name: 'Compra',
  },
  {
    text: 'crear',
    name: 'Crear',
  },
]

const authStore = useAuthStore()
const router = useRouter();

const logOut = () => {
  console.log('logut');
  
  authStore.logOut();
  router.push({ name: "Login" });
};
</script>
<template>
  <nav
    class="navbar navbar-expand-lg bg-white px-0 px-lg-5 py-3 position-sticky"
  >
    <div class="container-fluid">
      <div>
        <h4 class="fw-bold">
          <span class="text-primary">NF</span>
          s
          <span class="text-primary">T</span>
          ore
        </h4>
      </div>
      <button class="navbar-toggler" type="button">
        <i class="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <div
          class="text-black fw-normal mx-0 mx-lg-2"
          v-for="(item, index) of menuLinks"
          :key="index"
        >
          <router-link :to="{ name: item.name}" class="nav-link text-capitalize">
            {{ item.text }}
          </router-link>
        </div>
        <div>
          <template v-if="authStore.isAuth">
            <router-link
              :to="{ name: 'Profile' }"
              class="text-decoration-none text-black"
            >
              <span class="fw-bold">
                profile
              </span>
            </router-link>
            <button class="btn btn-lg fw-bold">
              <router-link
                :to="{ name: 'Wallet' }"
                class="text-decoration-none text-black"
              >
                <i class="bi bi-wallet"></i>
              </router-link>
            </button>

            <button
              class="btn btn-lg text-danger fw-bold"
              @click="logOut"
            >
              <i class="bi bi-box-arrow-in-right"></i>
            </button>
          </template>
          <template v-else>
            <BtnDinamic :path="{ name: 'Login' }" text="Login" />
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>
