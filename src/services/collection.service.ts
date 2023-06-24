import axios from "axios";
import { ICollection } from "../interfaces/ICollection";

const API_URL = import.meta.env.VITE_API_URL;
interface CollectionFilter {
  name?: string;
  myCollections?: boolean;
}
export const collectionsService = {
  async getAll(filter?: CollectionFilter, headers?: any): Promise<ICollection[]> {
    const url = `${API_URL}/collections`;
    const { data } = await axios.get(url, { headers, params: filter});
    return data;
  },

  async getById(id: number): Promise<ICollection> {
    const { data } = await axios.get(`${API_URL}/collections/${id}`);
    return data;  
  },

  async create(collection: ICollection, headers: any): Promise<ICollection> {
    // ('creando collection',headers);
    const { data } = await axios.post(`${API_URL}/collections`, collection, {headers});
    return data;
  },

  async update(id: number | string, nft: ICollection): Promise<ICollection> {
    const { data } = await axios.put(`${API_URL}/collections/${id}`, nft);
    return data;
  },

  async delete(id: number): Promise<void> {
    await axios.delete(`${API_URL}/collections/${id}`);
  },
};
