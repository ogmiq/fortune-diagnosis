import { defineStore } from 'pinia';
import axios from 'axios';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherData: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchWeather(city: string) {
      this.loading = true;
      this.error = null;

      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        console.log(`🔍 Fetching weather for city: ${city}`);

        // ✅ `geo API` で正しい都市名を取得 (日本語の `local_names?.ja` を含む)
        const geoResponse = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)},JP&limit=5&appid=${apiKey}`
        );

        console.log("🌍 Geo API Response:", geoResponse.data);

        if (geoResponse.data.length === 0) {
          this.error = "都市が見つかりませんでした。";
          this.loading = false;
          return;
        }

        const cityData = geoResponse.data.find((item) => item.country === "JP");

        if (!cityData) {
          this.error = "正しい都市のデータが見つかりませんでした。";
          this.loading = false;
          return;
        }

        const { lat, lon, name, local_names } = cityData;
        const cityNameJP = local_names?.ja || name;

        console.log(`✅ Selected city: ${cityNameJP} (lat: ${lat}, lon: ${lon})`);

        // ✅ `Weather API` に `lang=ja` を追加して日本語表記を取得
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ja&appid=${apiKey}`
        );

        console.log("🌤 Weather API Response:", weatherResponse.data);

        // ✅ `weatherData` の `cityName` を `geo API` の `local_names?.ja` で上書き
        this.weatherData = { ...weatherResponse.data, cityName: cityNameJP };
      } catch (error) {
        console.error("❌ Error fetching weather data:", error);
        this.error = '天気情報を取得できませんでした。';
      } finally {
        this.loading = false;
      }
    },
  },
});
