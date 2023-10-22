import { defineStore } from "pinia";
import { collectionsService } from "../services/collection.service";
import { ICollection } from "../interfaces/ICollection";
import { onMounted, ref } from "vue";
import { useAuthStore } from './useAuthStore';

export const useCollectionStore = defineStore("collection", () => {
  const collections = ref<ICollection[]>([]);
  const selectedCollection = ref<ICollection>({} as ICollection);
  const authStore = useAuthStore();
  // const token = authStore.getToken();
  const token = localStorage.getItem('token');
  
  const formattedToken = token ? token.replace(/"/g, '') : '';
  const headers = {
    Authorization: `Bearer ${formattedToken}`,
    'Content-Type': 'application/json'
  };

  const fetchAllCollections = async (filters?: any) => {
    collections.value = await collectionsService.getAll(filters, headers);
  };

  const createCollection = async (collection: ICollection) => {
    await collectionsService.create(collection, headers);
    await fetchAllCollections();
  };

  const updateCollection = async (collection: ICollection) => {
    await collectionsService.update(collection.id, collection);
    await fetchAllCollections();
  };

  const deleteCollection = async (id: number) => {
    await collectionsService.delete(id);
    await fetchAllCollections();
  };

  const selectCollection = (collection: ICollection) => {
    selectedCollection.value = collection;
  };

  const fetchCollectionDetails = async (collectionId: number) => {
    selectedCollection.value = await collectionsService.getById(collectionId);
  };

  onMounted(async () => {
    await fetchAllCollections();
  });

  return {
    collections,
    selectedCollection,
    fetchCollectionDetails,
    fetchAllCollections,
    createCollection,
    updateCollection,
    deleteCollection,
    selectCollection,
  };
});
