<script setup lang="ts">
const menuLinks = [
  {
    name: "Home",
  },
  {
    name: "Productos",
  },
  {
    name: "Compra",
  },
  {
    name: "Crear",
  },
];
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container-fluid">
      <div>
        <h4>NfsTore</h4>
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
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav" v-for="(item, index) of menuLinks" :key="index">
          <router-link to="#" class="nav-link text-style">
            {{ item.name }}
          </router-link>
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
</style>
