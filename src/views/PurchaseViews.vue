<script setup lang="ts">
  import AppCard from "@components/card/AppCard.vue";
  import BtnSubmit from "@components/buttons/BtnSubmit.vue";
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { useNFTStore } from '../store/useNFTStore'
  import { storeToRefs } from 'pinia'

  const nftStore = useNFTStore()
  const route = useRoute();
  const { selectedNFT } = storeToRefs(nftStore);

  onMounted(async () => {

    const nftId = Number(route.params.id);
    await nftStore.fetchNFTDetails(nftId);
  });

  const ownerPercentage = ref<number>(10);
  const router = useRouter();

  const handleBuying = async () => {
    await router.push({ name: "CompraExitosa" });
  };
</script>
<template>
  <section class="container">
    <div class="row">
      <AppCard #body>
        <div class="row px-3 px-lg-5">
          <!-- <div class="col-12 text-center">
            <h5>Comprar Nft</h5>
          </div> -->
          <div class="col-12 col-lg-5 text-center">
            <img
              :src="selectedNFT.imageUrl"
              :alt="selectedNFT.name"
              class="img-width rounded img-fluid"
            />
          </div>
          <div class="col-12 col-lg-7 py-4">
            <div class="row">
              <div class="col-12">
                <h1>{{ selectedNFT.name }}</h1>
                <div>Owned by <a><span>{{ selectedNFT.owner.userName }}</span></a></div>
              </div>
              <div class="col-12 mt-3">
                <div class="row">
                  <div class="col-12 col-lg-9">
                    <h5>Precio en cripto</h5>
                  </div>
                  <div class="col-12 col-lg-3 text-end">
                    <h6>$ {{ selectedNFT.price }}</h6>
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
                  <div class="col-12 px-0">
                    <BtnSubmit text="Comprar" class="w-100" @click="handleBuying()" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-12 pt-5 pb-3">
            <div class="row">
              <div class="col-6 col-lg-8">
                <h5>Total</h5>
              </div>
              <div class="col-6 col-lg-4 text-end">
                <h6>$ {{ selectedNFT.price }}</h6>
              </div>
            </div>
          </div> -->
          <!-- <div class="col-12 px-0">
            <BtnSubmit text="Comprar" class="w-100" @click="handleBuying()" />
          </div> -->
        </div>
      </AppCard>
    </div>
  </section>
</template>
