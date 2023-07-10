import axios from 'axios';
import { INft } from '../interfaces/INft';

const API_URL = import.meta.env.VITE_API_URL;

export const nftService = {
  async getAll(): Promise<INft[]> {
    const { data } = await axios.get(`${API_URL}/nfts`);
    const nfts = data.map((nft: any) => ({
      ...nft,
      imagePath: nft.imagePath.replace(/\\/g, '/'), // Reemplazar todas las barras diagonales inversas por barras diagonales normales
    }));

    return nfts;
  },

  async getById(id: number): Promise<INft> {
    const { data } = await axios.get(`${API_URL}/nfts/${id}`);
    return data;
  },

  async create(nft: INft, headers: any): Promise<INft> {
    const { data } = await axios.post(`${API_URL}/nfts`, nft, { headers });
    return data;
  },

  async buy(nft: any, headers: any) {
    const { data } = await axios.post(`${API_URL}/nfts/buy`, nft.value, {
      headers,
    });
    return data;
  },

  async update(id: number | string, nft: INft): Promise<INft> {
    const { data } = await axios.put(`${API_URL}/nfts/${id}`, nft);
    return data;
  },

  async delete(id: number): Promise<void> {
    await axios.delete(`${API_URL}/nfts/${id}`);
  },

  async createNft(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const { data } = await axios.post(`${API_URL}/nfts/upload`, formData);
    return data;
  },
  
  async getNft() {
    const { data } = await axios.get(`${API_URL}/nfts/files`);
    console.log('files service', data);
    return data;
  },
};
