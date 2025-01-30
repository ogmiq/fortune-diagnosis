<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">診断結果</h1>
    <p>あなたの運勢は...</p>

    <WeatherDisplay />

    <RouterLink to="/" class="mt-4 inline-block bg-gray-500 text-white px-4 py-2 rounded">
      ホームに戻る
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import WeatherDisplay from '@/components/WeatherDisplay.vue';
</script>