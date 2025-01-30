<template>
  <div class="p-4 bg-blue-100 rounded-lg">
    <h2 class="text-lg font-bold">天気情報</h2>

    <div v-if="loading">天気情報を取得中...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else-if="weather">
      <p class="text-lg">{{ weather.cityName || weather.name }} の天気</p>
      <p>温度: {{ weather.main.temp }}℃</p>
      <p>湿度: {{ weather.main.humidity }}%</p>
      <p>天候: {{ weather.weather[0].description }}</p>
    </div>

    <input
      v-model="city"
      type="text"
      placeholder="都市名を入力"
      class="border p-2 mt-2"
      @keyup.enter="getWeather"
    />
    <button @click="getWeather" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
      天気を取得
    </button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const weatherStore = useWeatherStore();
const city = ref('');

const getWeather = async () => {
  if (city.value) {
    await weatherStore.fetchWeather(city.value);
  }
};

// 都市名が変更されたら天気情報を取得（flush: "post" で即時反映）
watch(city, async (newCity) => {
  if (newCity) {
    await weatherStore.fetchWeather(newCity);
  }
}, { flush: "post" });

// リアクティブなデータを `computed` で取得
const weather = computed(() => weatherStore.weatherData);
const loading = computed(() => weatherStore.loading);
const error = computed(() => weatherStore.error);
</script>
