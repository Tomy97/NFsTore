<template>
  			<tr class="bg-gray-800">
						<td class="p-3">
							<div class="flex align-items-center">
								<img class="rounded-full h-12 w-12  object-cover" :src="transaction.nft.imageUrl" alt="unsplash image">
								<div class="ml-3">
									<div class="">{{transaction.nft.name}}</div>
									<div class="text-gray-500">{{ transaction.seller.userName }}</div>
								</div>
							</div>
						</td>
						<td class="p-3">
							Technology
						</td>
						<td class="p-3 font-bold">
							{{ transaction.amount }}
						</td>
						<td class="p-3">
							<span class="bg-green-400 text-gray-50 rounded-md px-2">available</span>
						</td>
					</tr>
  </template>
  
  <script setup lang="ts">
  import { INft } from 'interfaces/INft';
import { IUser } from 'interfaces/IUser';
import { computed, defineProps } from 'vue';
  
  interface Transaction {
  id: number;
  seller: IUser;
  buyer: IUser;
  nft: INft;
  amount: number;
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
  