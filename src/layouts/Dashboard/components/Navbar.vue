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

  const { user, isAuth, auth,logOut } = useAuthStore();
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
      >
        <i class="bi bi-list color-icon"></i>
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
        <div
          class="menu-container"
        >
          <template v-if="isAuth">
            <router-link
              :to="{ name: 'Profile' }"
              class="text-decoration-none text-black"
            >
              <span class="fw-bold">
                {{ user.name }}
              </span>
            </router-link>
            <button class="btn btn-lg fw-bold">
              <i class="bi bi-wallet"></i>
            </button>

            <button class="btn btn-lg text-danger fw-bold" @click="logOut">
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

<style lang="scss" scoped>
  .navbar-nav {
    .text-style {
      color: #000;
      font-weight: normal;
    }
  }

  .menu-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 10px;
    @media( max-width: 1024px ){
      flex-direction: column;
      margin-left: 0px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .logo {
    font-weight: bold;
    span {
      color: #18a0fb;
    }
  }

  .color-icon {
    color: #000;
  }
</style>
