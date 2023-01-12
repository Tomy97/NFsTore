<script setup lang="ts">
  import { ref } from "vue";
  import BtnDinamic from "../../../components/buttons/BtnDinamic.vue";
  import { useAuthStore } from "../../../store/useAuthStore";

  const menuLinks = [
    {
      text: "home",
      name: "Home"
    },
    {
      text: "productos",
      name: "Productos"
    },
    {
      text: "compra",
      name: "Compra"
    },
    {
      text: "crear",
      name: "Crear"
    }
  ];

  const { isAuth, logOut } = useAuthStore();

  const user = localStorage.getItem("user");
  console.log(user);
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-white px-0 px-lg-5 position-sticky">
    <div class="container-fluid">
      <div>
        <h4 class="logo"><span>NF</span>s<span>T</span>ore</h4>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list"></i>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav" v-for="(item, index) of menuLinks" :key="index">
          <router-link
            :to="item.name"
            class="nav-link text-style text-capitalize"
          >
            {{ item.text }}
          </router-link>
        </div>
        <div class="d-flex justify-content-center ms-0 ms-lg-4">
          <template v-if="isAuth">
            <router-link
              :to="{ name: 'Profile' }"
              class="text-decoration-none text-black"
            >
              {{}}
            </router-link>
            <button class="btn btn-sm" @click="logOut">log out</button>
          </template>
          <template v-else>
            <BtnDinamic :path="{ name: 'Login' }" text="Login" />
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar-nav {
    .text-style {
      color: #000;
      font-weight: normal;
    }
  }
}

.logo{
  font-weight: bold;
  span{
    color: #18a0fb ;
  }
}
</style>
