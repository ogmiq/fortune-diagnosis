<template>
  <div>
    <nav class="p-4 bg-gray-200">
      <RouterLink to="/" class="mr-4">ホーム</RouterLink>
      <RouterLink to="/input" class="mr-4">入力</RouterLink>
      <RouterLink to="/result">結果</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
