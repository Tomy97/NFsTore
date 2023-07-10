<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { nftService } from '../services/nft.service';
import { INft } from 'interfaces/INft';
const file = ref<File | null>(null);

const data = ref<INft[]>([]);
const handleFile = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files) {
    file.value = target.files[0];
    nftService.createNft(file.value);
  }
};

onMounted(async () => {
  data.value = await nftService.getAll();
  await nftService.getNft();
});
</script>
<template>
  <div class="container">
    <h2 class="text-center">Hola</h2>
    <input type="file" @change="handleFile" />
    <div class="row">
      <div class="col-4" v-for="(item, i) of data" :key="i">
        <template v-if="item.name">
          <img :src="item.name" alt="asd" />
        </template>
        <template v-else>
          <span> No hay imagen </span>
        </template>
      </div>
    </div>
  </div>
</template>
