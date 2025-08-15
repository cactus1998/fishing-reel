import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhTw from "element-plus/dist/locale/zh-tw.mjs";
import i18n from "./i18n.js";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(i18n);
app.use(ElementPlus, { locale: zhTw });
app.mount("#app");
