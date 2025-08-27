<template>
  <div class="language-switcher w-[120px] md:w-[160px]">
    <el-select
      v-model="locale"
      placeholder="請選擇語言"
      size="large"
      @change="handleLocaleChange"
    >
      <el-option
        v-for="item in supportedLocales"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

// 取得 i18n 實例
const { locale } = useI18n();

// 定義下拉選單的選項
const supportedLocales = [
  { value: "zh_tw", label: "繁體中文" },
  { value: "zh_cn", label: "简体中文" },
  { value: "en", label: "English" },
];

// 當下拉選單的值改變時觸發此方法
const handleLocaleChange = (newLocale) => {
  // 將新的 locale 存入 localStorage，實現持久化
  localStorage.setItem("locale", newLocale);
};
</script>

<style scoped></style>
