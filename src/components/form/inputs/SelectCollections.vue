<template>
    <select v-model="selectedCollection" @change="$emit('update:modelValue', selectedCollection)" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
  <!-- <select v-model="selectedCollection" class="form-select" @change="$emit('update:modelValue', selectedCollection)"> -->
    <option value="">Seleccione una colección</option>
    <option v-for="collection in collections" :key="collection.id" :value="collection">
      {{ collection.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { collectionsService } from '../../../services/collection.service';
import { useCollectionStore } from '../../../store/useCollectionsStore';
import { ICollection } from '../../../interfaces/ICollection';

interface CollectionFilter {
  name?: string;
  myCollections?: boolean;
}

export default defineComponent({
  name: 'SelectCollections',
  props: {
    filter: {
      type: Object as () => CollectionFilter,
      default: () => ({}),
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const selectedCollection = ref(props.modelValue);
    const collections = ref<ICollection[]>([]);
    const collectionStore = useCollectionStore();

    onMounted(async () => {
      await collectionStore.fetchAllCollections(props.filter);
      collections.value = collectionStore.collections;
    });

    return {
      selectedCollection,
      collections,
    };
  },
});
</script>
