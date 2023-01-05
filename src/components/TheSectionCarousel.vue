<script setup lang="ts">
import { ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'
import AppSwiper from '../components/AppSwiper.vue'
import BtnDinamic from '../components/buttons/BtnDinamic.vue'
import AppCardNft from '../components/card/AppCardNft.vue'

const dataCollections = ref([
  {
    id: 1,
    name: 'PROOF Collective',
    src:
      'https://i.seadn.io/gae/uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8',
  },
  {
    id: 2,
    name: 'ZenAcademy',
    src:
      'https://i.seadn.io/gae/IaUEHOT78TUQ3SiinUGv829DeFVj7kht_kFMz2U6x6S6yxQlI_2V6KvSq9C25F5bxSi4gF8X0_Vbbigr17O-iDQiLhG9bXSyycnUJbQ',
  },
  {
    id: 3,
    name: 'Poolsuite - Executive Member',
    src:
      'https://i.seadn.io/gae/n-Ry4Vw7lEu_gqtRmuyFa54BsvKEmQC4bu-mi4DL31n-ZTiFIhJR0VGd305GSWpGg7bJhhMA4-0960_Lul6P_46q_HlFrHCTfeV4eQ',
  },
  {
    id: 4,
    name: 'AFAR - RAFA Genesis',
    src: 'https://i.seadn.io/gcs/files/7cd8d177dff7a496e72922501e2df643.png',
  },
  {
    id: 5,
    name: 'KINGSHIP',
    src: 'https://i.seadn.io/gcs/files/ef01ed322ffb9762c830c4fc72ce60ff.jpg',
  },
])

const handleSendData = async (data: object) => {
  console.log(data)
}
</script>
<template>
  <AppSwiper>
    <template #slide-component>
      <swiper-slide
        v-for="item of dataCollections"
        :key="item.id"
        class="slider-content"
      >
        <AppCardNft :image="item.src" :title="item.name">
          <template #button-components>
            <BtnDinamic
              :path="`comprar/${item.id}`"
              text="Comprar"
              @click="handleSendData(item)"
            />
          </template>
        </AppCardNft>
      </swiper-slide>
    </template>
  </AppSwiper>
</template>
<style lang="scss" scoped>
.slider-content {
  /* width: 581px !important; */
  margin-right: 16px !important;
  margin: 0 40px;
}
</style>
