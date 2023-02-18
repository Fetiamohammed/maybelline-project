import { createApp } from "vue";
import { createPinia } from "pinia";
//import bootstarap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

const app = createApp(App);
app.use(bootstrap);
app.use(createPinia());
app.use(router);

app.mount("#app");
