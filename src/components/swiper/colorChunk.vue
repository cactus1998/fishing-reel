<template>
  <!-- 基本色 -->
  <div class="flex flex-row flex-wrap justify-center pb-10">
    <span class="w-full text-center div_main_shadow py-8">基本色</span>
    <div class="flex flex-row flex-wrap justify-center gap-8">
      <div
        v-for="item in props.basicColor"
        :key="item"
        class="w-28 h-28 my-4 rounded-full flex"
        :style="{
          backgroundColor: item.color,
        }"
      >
        <div class="w-full h-full flex items-center justify-center relative">
          <span class="absolute top-28 div_text_shadow">{{
            item.colorName
          }}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 特殊色 -->
  <div class="flex flex-row flex-wrap justify-center pb-10">
    <span class="w-full text-center div_main_shadow py-4">特殊色</span>
    <div class="flex flex-row flex-wrap justify-center gap-8">
      <div
        v-for="item in props.specialColor"
        :key="item"
        class="w-28 h-28 my-4 rounded-full flex hover:gap-6"
        :style="{
          backgroundColor: item.color,
        }"
      >
        <div class="w-full h-full flex items-center justify-center relative">
          <span class="absolute top-28 div_text_shadow">{{
            item.colorName
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import defineProps from "vue";
const props = defineProps({
  specialColor: Array,
  basicColor: Array,
});
</script>

<style scoped>
.div_text_shadow {
  color: rgb(255, 255, 255);
  font-size: 24px;
  text-shadow: rgb(0, 0, 0) 1.5px 1.5px 1.5px;
}
.div_main_shadow {
  color: rgb(255, 0, 0);
  font-size: 40px;
  text-shadow: rgb(3, 3, 3) 3px 3px 3px;
}
</style>
