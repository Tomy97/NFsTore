<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import AppSwiper from '../components/AppSwiper.vue'
import BtnDinamic from '../components/buttons/BtnDinamic.vue'
import AppCardNft from '../components/card/AppCardNft.vue'
import { useNFTStore } from '../store/useNFTStore'

const nftStore = useNFTStore()

const handleReceiveData = (item: any) => {
  console.log(item)
}

console.log('nfstore', nftStore.nfts);

</script>
<template>
  <h1 class="text-center fw-bold my-4">Explorar, coleccionar y vender NFT</h1>
  <template v-if="nftStore.nfts.length">
    <AppSwiper>
      <template #slide-component>
        <swiper-slide v-for="item, index of nftStore.nfts" :key="index">
          <AppCardNft
            :src="item.imageUrl"
            :title="item.name"
            :user="item.owner.userName"
            :price="item.price"
          >
            <template #button-components>
              <BtnDinamic
                :path="`nft/${item.id}`"
                text="Comprar"
                @click="handleReceiveData(item)"
              />
            </template>
          </AppCardNft>
        </swiper-slide>
      </template>
    </AppSwiper>
  </template>
  <template v-else>
    <span>
      No hay NFTs disponibles
    </span>
  </template>
</template>
