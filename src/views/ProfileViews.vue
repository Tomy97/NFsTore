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
              <div class="row px-0 px-lg-3">
                <div class="col-12">
                  <h3 class="text-center">Perfil del usuario</h3>
                </div>
                <div class="col-lg-4 text-center text-lg-start my-4">
                  <img :src="user.avatar" class="rounded-circle image-rouded" />
                </div>
                <div class="col-lg-8 my-4">
                  <div
                    class="row justify-content-start text-center text-lg-start"
                  >
                    <div class="col-lg-6 my-4 my-lg-0">
                      <p>Nombre: {{ user.name }}</p>
                    </div>
                    <div class="col-lg-6">
                      <p>Email: {{ user.email }}</p>
                    </div>
                  </div>
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
