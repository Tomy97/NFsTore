<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import AppSwiper from '../components/AppSwiper.vue'
import BtnDinamic from '../components/buttons/BtnDinamic.vue'
import AppCardNft from '../components/card/AppCardNft.vue'
import { useNFTStore } from '../store/useNFTStore'
import { storeToRefs } from 'pinia'

const nftStore = useNFTStore()
const { nfts } = storeToRefs(nftStore)

const handleReceiveData = (item: any) => {
  console.log(item)
}
</script>
<template>
  <h1 class="text-center fw-bold my-4">Explorar, coleccionar y vender NFT</h1>
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
