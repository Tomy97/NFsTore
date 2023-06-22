<template>
    <li class="list-group-item d-flex" :style="listItemStyle">
      <div class="transaction-icon" :style="iconStyle">
        <img :src="transaction.image" alt="Icono de transacción" />
      </div>
      <div class="transaction-details">
        {{ transaction.description }} - {{ transaction.amount }}
      </div>
    </li>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps } from 'vue';
  
  interface Transaction {
  id: number;
  description: string;
  amount: number;
  image?: string;
}
  
  const props = defineProps({
    transaction: {
      type: Object as () => Transaction,
      required: true,
    },
  });
  
  const listItemStyle = computed(() => ({
    width: '100%',
    // backgroundColor: props.transaction.amount > 0 ? 'green' : 'red',
    borderRadius: '10px',
  }));
  
  const iconStyle = computed(() => ({
    width: '50px',
    height: '50px',
    backgroundColor: 'lightgray',
    borderRadius: '50%',
    marginRight: '10px',
  }));
  
  </script>
  