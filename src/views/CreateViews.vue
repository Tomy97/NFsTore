<template class="container">
  <!-- <section class="card-container mt-5"> -->
  <section>
    <div class="flex justify-center items-center">
    <!-- <div class="col-12 col-lg-7 card-style"> -->
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4"
      @submit.prevent="createNFT"
    >
      <div class="pt-4 mb-3">
        <ImageUpload v-model="nft.image" />
      </div>
      <!-- <div class="pt-4 mb-3">
            <label for="imageUrl" class="form-label">URL de la imagen</label>
            <input v-model="imageUrl" type="text" id="imageUrl" class="form-control" required>
          </div> -->
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2"
          >Nombre</label
        >
        <input
          v-model="nft.name"
          type="text"
          id="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div class="mb-3">
        <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Precio</label>
        <input
          v-model="nft.price"
          type="number"
          id="price"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div class="mb-4">
        <label
          for="porcentaje"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Porcentaje</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="nft.porcentaje"
          type="number"
          id="porcentaje"
          required
          placeholder="Porcentaje"
        />
      </div>
      <div class="inline-block relative w-64">
        <SelectCollections
          v-model="nft.selectedCollection"
          :filter="filter"
          id="collection"
          class="form-control"
          required
        />
      </div>
      <div class="flex justify-center mb-3">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4"
        >
          Crear NFT
        </button>
      </div>
    </form>
    </div>
    <!-- </div> -->
  </section>
</template>
<style lang="scss" scoped>
.card-container {
  margin: 0;
  padding: 0;
  .content {
    display: inline-block;
    position: relative;
    width: 100%;
    .card-style {
      background-color: rgb(255, 255, 255);
      border-radius: 12px;
      box-shadow: rgb(0 0 0 / 4%) 0px 4px 8px;
      transition: box-shadow 0.25s ease-in-out 0s;
      .card-content-image {
        padding-bottom: 56.25%;
        height: 0px;
        position: relative;
        .image-content {
          box-sizing: border-box;
          display: block;
          overflow: hidden;
          width: initial;
          height: initial;
          background: none;
          opacity: 1;
          border: 0px;
          margin: 0px;
          padding: 0px;
          position: absolute;
          inset: 0px;
          .img-styles {
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
<script>
import { ref, defineComponent } from 'vue';
import { useNFTStore } from '../store/useNFTStore';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/UseAuth.ts';
import SelectCollections from '../components/form/inputs/SelectCollections.vue';
import ImageUpload from '../components/form/inputs/ImageUpload.vue';

export default defineComponent({
  components: {
    SelectCollections,
    ImageUpload,
  },
  setup() {
    useAuth();
    const nftStore = useNFTStore();
    const nft = ref({
      image: File,
      name: '',
      price: '',
      porcentaje: '',
      selectedCollection: '',
    });
    const router = useRouter();

    const createNFT = async () => {
      console.log('asi mellego', nft.value.image);
      const nftData = {
        file: nft.value.image,
        name: nft.value.name,
        price: nft.value.price,
        porcentaje: nft.value.porcentaje,
        collection: nft.value.selectedCollection,
      };
      const data = await nftStore.createNFT(nftData);
      // router.push({ name: "Login" });
    };

    return {
      nft,
      createNFT,
      filter: { myCollections: true },
    };
  },
});
</script>
