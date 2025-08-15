import { createI18n } from "vue-i18n";

// 引入語言檔
import en from "./language/en.json";
import zh_tw from "./language/zh_tw.json";
import zh_cn from "./language/zh_cn.json";

// 從瀏覽器的 localStorage 讀取上次使用者選擇的語言
// 如果 localStorage 中沒有，則預設為 'zh_tw'
const savedLocale = localStorage.getItem("locale") || "zh_tw";

// 設定語言訊息
const messages = {
  en,
  zh_tw,
  zh_cn,
};

// 建立 i18n 實例
const i18n = createI18n({
  // Legacy API 模式，讓你在 SFC <template> 中可以直接使用 $t()
  legacy: false,
  // 設定預設語言為 localStorage 裡的值
  locale: savedLocale,
  // 設定語言訊息
  messages,
});

export default i18n;
