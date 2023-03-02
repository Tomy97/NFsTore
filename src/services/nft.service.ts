import axios from 'axios';
import { INft } from "../interfaces/INft";

const API_URL = import.meta.env.VITE_API_URL;

export const nftService = {
  async getAll(): Promise<INft[]> {
    const response = await axios.get(`${API_URL}/nft`);
    return response.data;
  },

  async getById(id: number): Promise<INft> {
    const response = await axios.get(`${API_URL}/nft/${id}`);
    return response.data;
  },

  async create(nft: INft): Promise<INft> {
    const response = await axios.post(`${API_URL}/nft`, nft);
    return response.data;
  },

  async update(id: number, nft: INft): Promise<INft> {
    const response = await axios.put(`${API_URL}/nft/${id}`, nft);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await axios.delete(`${API_URL}/nft/${id}`);
  }
};
