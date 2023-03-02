<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { SwiperSlide } from "swiper/vue";
  import AppSwiper from "../components/AppSwiper.vue";
  import BtnDinamic from "../components/buttons/BtnDinamic.vue";
  import AppCardNft from "../components/card/AppCardNft.vue";
  import { useNFTStore } from "../store/useNFTStore";
  import { storeToRefs } from "pinia";
  import Swiper from "swiper";

  const nftStore = useNFTStore();
  const { nfts } = storeToRefs(nftStore);

  onMounted(async () => await nftStore.fetchAllNFTs());
  const handleReceiveData = (item: any) => {
    console.log(item);
  };
</script>
<template>
  <h1>Explorar, coleccionar y vender NFT</h1>
  <AppSwiper>
    <template #slide-component>
      <swiper-slide v-for="item of nfts" :key="item.id">
        <AppCardNft
          :src="item.image_url"
          :title="item.name"
          :user="item.user"
          :price="item.price"
        >
          <template #button-components>
            <BtnDinamic
              :path="`comprar/${item.id}`"
              text="Comprar"
              @click="handleReceiveData(item)"
            />
          </template>
        </AppCardNft>
      </swiper-slide>
    </template>
  </AppSwiper>
</template>
<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgb(132, 64, 64);
    background-color: rgba(174, 72, 72, 0.5);
    right: 10px;
    padding: 30px;
    color: #000 !important;
    fill: black !important;
    stroke: black !important;
  }
</style>
