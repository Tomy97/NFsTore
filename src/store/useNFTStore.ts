import { defineStore } from "pinia";
import { nftService } from "../services/nft.service";
import { INft } from "interfaces/INft";
import { onMounted, ref } from "vue";

export const useNFTStore = defineStore("nft", () => {
  const nfts = ref<INft[]>([]);
  const selectedNFT = ref<INft>({} as INft);

  const fetchAllNFTs = async () => {
    nfts.value = await nftService.getAll();
  };

  const createNFT = async (nft: INft) => {
    await nftService.create(nft);
    await fetchAllNFTs();
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
  };
});