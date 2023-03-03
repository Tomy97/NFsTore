import { defineStore } from "pinia";
import { nftService } from "../services/nft.service";
import { INft } from "interfaces/INft";
import { ref } from "vue";

export const useNFTStore = defineStore("nft", () => {
  const nft = ref<INft[]>([]);
  const selectedNFT = ref<INft>({} as INft);

  const fetchAllNFTs = async () => {
    nft.value = await nftService.getAll();
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

  return {
    nft,
    selectedNFT,
    fetchAllNFTs,
    createNFT,
    updateNFT,
    deleteNFT,
    selectNFT
  };
});
