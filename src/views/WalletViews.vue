<template>
  <div class="mt-2">
    <!-- Sección de balance -->
    <div class="balance-section d-flex justify-content-center">
      <div class="card w-75 rounded">
        <div class="card-body text-center">
          <h5 class="card-title">Balance</h5>
          <h3 class="card-text mb-4">{{ balance }}</h3>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary me-2 btn-block" @click="deposit">
              Depositar
            </button>
            <button class="btn btn-primary btn-block" @click="withdraw">
              Retirar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de transacciones -->
    <Transactions :transactions="transactions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Transactions from '../components/Transactions.vue';
import { INft } from '../interfaces/INft';
import { IUser } from '../interfaces/IUser';

interface Transaction {
  id: number;
  amount: number;
  nft: INft;
  buyer: IUser;
  seller: IUser;
}

const balance = ref(5000);

const transactions = ref<any[]>([
  {
    id: 1,
    amount: 32,
    nft: {
      id: 1,
      name: 'monito',
      amount: 32,
      imageUrl:
        'https://ichef.bbci.co.uk/news/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg',
    },
    buyer: { userName: 'dunick' },
    seller: { userName: 'lunuel0' },
  },
]);
</script>
