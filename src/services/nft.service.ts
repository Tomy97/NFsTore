import axios from "axios";
import { INft } from "../interfaces/INft";

const API_URL = import.meta.env.VITE_API_URL;

export const nftService = {
  async getAll(): Promise<INft[]> {
    const { data } = await axios.get(`${API_URL}/nfts`);
    return data;
  },

  async getById(id: number): Promise<INft> {
    const { data } = await axios.get(`${API_URL}/nfts/${id}`);
    return data;  
  },

  async create(nft: INft): Promise<INft> {
    const { data } = await axios.post(`${API_URL}/nfts`, nft);
    return data;
  },

  async update(id: number | string, nft: INft): Promise<INft> {
    const { data } = await axios.put(`${API_URL}/nfts/${id}`, nft);
    return data;
  },

  async delete(id: number): Promise<void> {
    await axios.delete(`${API_URL}/nfts/${id}`);
  },
};
