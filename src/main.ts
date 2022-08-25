import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import routes from './routes/index'

const pinia = createPinia();
createApp(App).use(routes).use(pinia).mount("#app");
