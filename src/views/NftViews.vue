<script>
import AppCard from "@components/card/AppCard.vue";
import BtnSubmit from "@components/buttons/BtnSubmit.vue";
import { ref, onMounted, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNFTStore } from '../store/useNFTStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  components: {
    AppCard,
    BtnSubmit
  },
  setup() {
    const nftStore = useNFTStore()
    const route = useRoute();
    const { selectedNFT } = storeToRefs(nftStore);
  
    onMounted(async () => {
      const nftId = Number(route.params.id);
      await nftStore.fetchNFTDetails(nftId);
    });

    const ownerPercentage = ref(10);
    const router = useRouter();

    const handleBuying = async () => {
      await router.push({ name: "CompraExitosa" });
    };

    return {
      selectedNFT,
      ownerPercentage,
      handleBuying
    };
  }
});
</script>
<template>
  <section class="container">
    <div class="row">
      <AppCard else #body>
        <div class="row px-3 px-lg-5">
          <div class="col-12 col-lg-5 text-center">
            <img
              :src="selectedNFT.imageUrl"
              :alt="selectedNFT.name"
              class="img-width rounded img-fluid"
            />
          </div>
          <div class="col-12 col-lg-7 d-flex flex-column justify-content-between">
            <div class="row">
              <div class="col-12">
                <h1>{{ selectedNFT.name }}</h1>
                <div>Owned by <a><span class="text-primary">{{ selectedNFT.owner?.userName }}</span></a></div>
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
                </div>
              </div>
            </div>
            <div class="row">
              <BtnSubmit text="Comprar" class="w-100" @click="handleBuying()" />
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  </section>
</template>
