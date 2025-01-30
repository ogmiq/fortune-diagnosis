<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">生年月日を入力</h1>
    <BirthdayInput />
    <RouterLink to="/result" class="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded">
      結果を見る
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import BirthdayInput from '@/components/BirthdayInput.vue';
</script>
