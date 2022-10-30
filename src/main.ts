import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import routes from "./routes/index";
import '../src/setup/veeValidate'

const pinia = createPinia();
createApp(App).use(routes).use(pinia).mount("#app");
