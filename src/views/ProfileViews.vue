<script setup lang="ts">
  import AppCard from "../components/card/AppCard.vue";
  import { useAuthStore } from "../store/useAuthStore";

  const { user } = useAuthStore();
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2>Profile</h2>
      </div>
      <div class="col-12">
        <AppCard #body>
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <h3 class="text-center">Perfil del usuario</h3>
                </div>
                <div class="col-12 col-lg-6 text-center text-lg-start ">
                  <img
                    :src="user.avatar"
                    class="bd-placeholder-img rounded-circle image-rouded"
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-12 my-4 my-lg-0 col-lg-4">
                  <span> Nombre: {{ user.name }} </span>
                </div>
                <div class="col-12 col-lg-4">
                  <span> Email: {{ user.email }} </span>
                </div>
              </div>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .image-rouded {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
</style>
