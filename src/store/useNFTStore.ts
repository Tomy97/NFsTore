import { defineStore } from 'pinia';
import { nftService } from '../services/nft.service';
import { INft } from 'interfaces/INft';
import { onMounted, ref } from 'vue';
import { useAuthStore } from './useAuthStore';
import { useRouter } from 'vue-router';
import { UseSweetAlert } from '../composables/UseSweetAlert';

export const useNFTStore = defineStore('nft', () => {
  const nfts = ref<INft[]>([]);
  const selectedNFT = ref<INft>({} as INft);
  const authStore = useAuthStore();
  const router = useRouter();

  const formattedToken = authStore.user;

  const headers = {
    Authorization: `Bearer ${formattedToken}`,
    'Content-Type': 'multipart/form-data',
    // 'Content-Type': 'application/json',
  };

  const fetchAllNFTs = async () => {
    nfts.value = await nftService.getAll();
  };

  const createNFT = async (nft: INft) => {
    console.log('esto me llego store',nft);
    
    const createdNFT = await nftService.create(nft, headers);
    if (createdNFT) {
      UseSweetAlert.fire({
        title: 'El Nft ah sido creado exitosamente',
        icon: 'success',
      });
      router.push(`/nft/${createdNFT.id}`);
    }
  };

  const buyNFT = async (nft: INft) => {
    try {
      const buyNFT  = await nftService.buy(nft, headers);
      console.log('aaaaaaaca',buyNFT);
      
      if (buyNFT) {
        UseSweetAlert.fire({
          icon: 'success',
          title: 'Compra Exitosa',
          text: `El Nft ${buyNFT.name} ahora es tuyo`,
        });
        router.push({ name: 'Home' });
      } else {
        UseSweetAlert.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se Pudo realizar la compra',
        });
      }
    } catch (error: any) {
      UseSweetAlert.fire({
        icon: 'error',
        title: 'Error',
        text: `${error.response.data.message}`,
      });
      console.error('Error al comprar el NFT:', error);
    }
  };
  const updateNFT = async (nft: INft) => {
    await nftService.update(nft.id, nft);
    await fetchAllNFTs();
  };

  const deleteNFT = async (id: number) => {
    await nftService.delete(id);
    await fetchAllNFTs();
  };

  const selectNFT = (nft: INft) => {
    selectedNFT.value = nft;
  };

  const fetchNFTDetails = async (nftId: number) => {
    selectedNFT.value = await nftService.getById(nftId);
  };

  onMounted(async () => {
    await fetchAllNFTs();
  });

  return {
    nfts,
    selectedNFT,
    fetchNFTDetails,
    fetchAllNFTs,
    createNFT,
    updateNFT,
    deleteNFT,
    selectNFT,
    buyNFT,
  };
});
