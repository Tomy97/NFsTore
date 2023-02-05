<script setup lang="ts">
  import { ref } from "vue";
  import { SwiperSlide } from "swiper/vue";
  import AppSwiper from "../components/AppSwiper.vue";
  import BtnDinamic from "../components/buttons/BtnDinamic.vue";
  import AppCardNft from "../components/card/AppCardNft.vue";

  const dataCollections = ref([
    {
      id: 1,
      price: "312",
      name: "PROOF Collective",
      user: "Mark",
      src: "https://i.seadn.io/gae/uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8"
    },
    {
      id: 2,
      price: "322",
      name: "ZenAcademy",
      user: "Lorezo",
      src: "https://i.seadn.io/gae/IaUEHOT78TUQ3SiinUGv829DeFVj7kht_kFMz2U6x6S6yxQlI_2V6KvSq9C25F5bxSi4gF8X0_Vbbigr17O-iDQiLhG9bXSyycnUJbQ"
    },
    {
      id: 3,
      price: "332",
      name: "Poolsuite - Executive Member",
      user: "XBXtuki",
      src: "https://i.seadn.io/gae/n-Ry4Vw7lEu_gqtRmuyFa54BsvKEmQC4bu-mi4DL31n-ZTiFIhJR0VGd305GSWpGg7bJhhMA4-0960_Lul6P_46q_HlFrHCTfeV4eQ"
    },
    {
      id: 4,
      price: "342",
      name: "AFAR - RAFA Genesis",
      user: "XBXtuki",
      src: "https://i.seadn.io/gcs/files/7cd8d177dff7a496e72922501e2df643.png"
    },
    {
      id: 5,
      price: "352",
      name: "KINGSHIP",
      user: "ELK68",
      src: "https://i.seadn.io/gcs/files/ef01ed322ffb9762c830c4fc72ce60ff.jpg"
    }
  ]);

  const handleReceiveData = (item: any) => {
    console.log(item);
  };
</script>
<template>
  <h1>Explorar, coleccionar y vender NFT</h1>
  <AppSwiper>
    <template #slide-component>
      <swiper-slide v-for="item of dataCollections" :key="item.id">
        <AppCardNft
          :image="item.src"
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
