<template>
  <div class="transactions-section">
    <h2>Transacciones</h2>
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="col-span-12">
        <div class="overflow-auto lg:overflow-visible">
          <table class="table text-gray-400 border-separate space-y-6 text-sm">
            <tbody>
              <Transaction
                v-for="transaction in transactions"
                :key="transaction.id"
                :transaction="transaction"
                class="mt-2"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Transaction from './card/Transaction.vue';

const props = defineProps({
  transactions: {
    type: Array as () => Array<any>,
    required: true,
  },
});
</script>
<style>
	.table {
		border-spacing: 0 15px;
	}

	i {
		font-size: 1rem !important;
	}

	.table tr {
		border-radius: 20px;
	}

	tr td:nth-child(n+5),
	tr th:nth-child(n+5) {
		border-radius: 0 .625rem .625rem 0;
	}

	tr td:nth-child(1),
	tr th:nth-child(1) {
		border-radius: .625rem 0 0 .625rem;
	}
</style>