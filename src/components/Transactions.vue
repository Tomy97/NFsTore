<template>
    <div class="transactions-section">
      <h2>Transacciones</h2>
      <ul class="list-group">
        <Transaction v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" class="mt-2" />
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import Transaction from './card/Transaction.vue';
  
  const props = defineProps({
    transactions: {
      type: Array as () => Array<Transaction>,
      required: true
    }
  });
  </script>
  