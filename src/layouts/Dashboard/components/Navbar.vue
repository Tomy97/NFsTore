<template>
  
  <nav class="navbar bg-white px-0 px-lg-5 py-3 sticky z-10 top-0">
    <div class="container mx-auto">
      <div>
        <h4 class="font-bold">
          <span class="text-primary">NF</span>
          s
          <span class="text-primary">T</span>
          ore
        </h4>
      </div>
      <button class="navbar-toggler lg:hidden" type="button" @click="toggleNavMenu">
        <i class="bi bi-list"></i>
      </button>
      <div class="flex justify-end space-x-2">
        <template v-for="(item, index) of menuLinks" :key="index">
          <router-link :to="{ name: item.name }" class="flex items-center nav-link text-capitalize text-black font-normal">
            {{ item.text }}
          </router-link>
        </template>
        <div v-if="isAuth">
          <router-link :to="{ name: 'Profile' }" class="text-black text-decoration-none">
            <span class="font-bold">
              profile
            </span>
          </router-link>
          <button class="btn btn-lg font-bold">
            <router-link :to="{ name: 'Wallet' }" class="text-black text-decoration-none">
              <i class="bi bi-wallet"></i>
            </router-link>
          </button>

          <button class="btn btn-lg text-danger font-bold" @click="logOut">
            <i class="bi bi-box-arrow-in-right"></i>
          </button>
        </div>
        <div v-else>
          <BtnDinamic :path="{ name: 'Login' }" text="Login" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import BtnDinamic from '../../../components/buttons/BtnDinamic.vue';
import { useAuthStore } from '../../../store/useAuthStore';

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
];

const { isAuth, logOut } = useAuthStore();
const router = useRouter();

const toggleNavMenu = () => {
  const navbar = document.querySelector('.navbar-collapse');
  // navbar.classList.toggle('show');
};

</script>

<style scoped>
/* .navbar-toggler {
  border: none;
  background-color: transparent;
  outline: none;
}

@media (min-width: 992px) {
  .navbar-toggler {
    display: none;
  }
}

.navbar-collapse {
  transition: max-height 0.3s ease;
  max-height: 0;
  overflow: hidden;
}

.navbar-collapse.show {
  max-height: 500px;
} */

</style>
