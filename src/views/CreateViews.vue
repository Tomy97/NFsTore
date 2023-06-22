<template class="container">
  <section class="card-container mt-5">
    <div class="row content d-flex justify-content-center">
      <div class="col-12 col-lg-7 card-style">
        <form @submit.prevent="createNFT">
          <div class="pt-4 mb-3">
            <label for="imageUrl" class="form-label">URL de la imagen</label>
            <input v-model="imageUrl" type="text" id="imageUrl" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input v-model="name" type="text" id="name" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Precio</label>
            <input v-model="price" type="number" id="price" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="porcentaje" class="form-label">Porcentaje</label>
            <input v-model="porcentaje" type="number" id="porcentaje" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="collection" class="form-label">Coleccion</label>
            <input v-model="collection" type="number" id="collection" class="form-control" required>
          </div>
          <div class="mb-3 text-center">
            <button type="submit" class="btn btn-primary text-white w-25">Crear NFT</button>
          </div>
        </form>
      </div>
    </div>
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
import { ref, defineComponent } from "vue";
import { useNFTStore } from "../store/useNFTStore";
import { useRouter } from "vue-router";
import { useAuth } from '../composables/UseAuth.ts';

export default defineComponent({
  setup() {
    useAuth()
    const nftStore = useNFTStore();
    const imageUrl = ref("");
    const name = ref("");
    const price = ref("");
    const porcentaje = ref("");

    const router = useRouter();

    const createNFT = async () => {
      const nftData = {
        imageUrl: imageUrl.value,
        name: name.value,
        price: price.value,
        porcentaje: porcentaje.value,
      };
      const data = await nftStore.createNFT(nftData);
      console.log('datata',data);
      // router.push({ name: "Login" });
    };

    return {
      imageUrl,
      name,
      price,
      porcentaje,
      createNFT,
    };
  },
});
</script>
