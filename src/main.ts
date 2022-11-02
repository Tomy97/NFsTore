import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import "./assets/scss/main.scss";
import App from "./App.vue";
import routes from "./routes/index";
import "../src/setup/veeValidate";

const pinia = createPinia();
createApp(App).use(routes).use(pinia).mount("#app");
