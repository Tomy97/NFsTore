<script setup lang="ts">
  import AppCard from "@components/card/AppCard.vue";
  import { useBuyingStore } from "@store/useBuyingStore";
  import BtnSubmit from "@components/buttons/BtnSubmit.vue";
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const { compra } = useBuyingStore();
  const ownerPercentage = ref<number>(10);
  const precioTotal = ref<number>(28287262);
  const router = useRouter();

  const handleBuying = async () => {
    await router.push({ name: "CompraExitosa" });
  };
</script>
<template>
  <div class="container vh-100">
    <div class="row">
      <AppCard #body>
        <div class="row px-0 px-md-5">
          <div class="col-12 text-center">
            <h5>Comprar Nft</h5>
          </div>
          <div class="col-12 col-lg-3 text-center">
            <img
              :src="compra.src"
              :alt="compra.name"
              class="img-width rounded img-fluid"
            />
          </div>
          <div class="col-12 col-lg-9 ps-5">
            <div class="row">
              <div class="col-12">
                <h5>{{ compra.name }}</h5>
              </div>
              <div class="col-12 mt-3">
                <div class="row">
                  <div class="col-12 col-lg-9">
                    <h5>Precio en cripto</h5>
                  </div>
                  <div class="col-12 col-lg-3 text-end">
                    <h6>$ {{ compra.price }}</h6>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="row">
                  <div class="col-6 col-md-9 col-lg-11">
                    <h5>Porcentage al creador</h5>
                  </div>
                  <div class="col-6 col-md-3 col-lg-1 text-end">
                    <h6>{{ ownerPercentage }}%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 pt-5 pb-3">
            <div class="row">
              <div class="col-6 col-lg-8">
                <h5>Total</h5>
              </div>
              <div class="col-6 col-lg-4 text-end">
                <h6>$ {{ precioTotal }}</h6>
              </div>
            </div>
          </div>
          <div class="col-12 px-0">
            <BtnSubmit text="Comprar" class="w-100" @click="handleBuying()" />
          </div>
        </div>
      </AppCard>
    </div>
  </div>
</template>
