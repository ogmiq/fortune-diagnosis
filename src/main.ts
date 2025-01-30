import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import './style.css';

const pinia = createPinia(); // Pinia を作成

const app = createApp(App);
app.use(pinia); // Pinia を Vue に適用

createApp(App).mount('#app')
