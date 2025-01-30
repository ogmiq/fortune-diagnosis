<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">ホーム</h1>
    <p>運勢診断を始めましょう！</p>
    <RouterLink to="/input" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
      診断を開始
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
