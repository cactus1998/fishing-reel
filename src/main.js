import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./index.css";
import ElementPlus from "element-plus";
import { ref } from "vue";
import "element-plus/dist/index.css";
import zhTw from "element-plus/dist/locale/zh-tw.mjs";
import VueTableLite from "vue3-table-lite";

const pinia = createPinia();

const app = createApp(App);
app.use(VueTableLite);
app.use(ref);
app.use(pinia);
app.use(ElementPlus, { locale: zhTw });
app.mount("#app");
