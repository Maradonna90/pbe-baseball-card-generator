import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router';

let app = createApp(App);
app.config.globalProperties.$base = process.env.BASE_URL;
app.use(router)
app.mount('#app')
