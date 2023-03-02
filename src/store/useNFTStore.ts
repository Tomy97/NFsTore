import { defineStore } from 'pinia';
import { nftService} from '../services/nft.service';
import { INft } from 'interfaces/INft';

export const useNFTStore = defineStore({
  id: 'nft',
  state: () => ({
    nfts: [] as INft[],
    selectedNFT: {} as INft
  }),

  actions: {
    async fetchAllNFTs() {
      this.nfts = await nftService.getAll();
    },

    async createNFT(nft: INft) {
      await nftService.create(nft);
      await this.fetchAllNFTs();
    },

    async updateNFT(nft: INft) {
      await nftService.update(nft.id, nft);
      await this.fetchAllNFTs();
    },

    async deleteNFT(id: number) {
      await nftService.delete(id);      
      await this.fetchAllNFTs();
    },

    selectNFT(nft: INft) {
      this.selectedNFT = nft;
    },
  }
});
