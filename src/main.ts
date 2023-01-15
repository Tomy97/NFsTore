import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import "./assets/scss/main.scss";
import App from "./App.vue";
import routes from "./routes/index";
import "../src/setup/veeValidate";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap-icons/font/bootstrap-icons.scss'

const pinia = createPinia();
createApp(App).use(routes).use(VueSweetalert2).use(pinia).mount("#app");
