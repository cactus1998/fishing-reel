<template>
  <!-- 基本色 -->
  <div class="flex flex-row flex-wrap justify-center pb-10">
    <span
      class="w-full text-center text-white text-2xl md:text-3xl lg:text-4xl py-8"
      >{{ $t("basicColor") }}</span
    >
    <div class="flex flex-row flex-wrap justify-center gap-8">
      <div
        v-for="item in props.basicColor"
        :key="item"
        class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 my-2 md:my-3 lg:my-4 rounded-full flex"
        :style="{
          backgroundColor: item.color,
        }"
      >
        <div class="w-full h-full flex items-center justify-center relative">
          <span
            class="absolute top-20 md:top-24 lg:top-28 text-white text-md md:text-xl lg:text-xl text-nowrap"
            >{{ item.colorName }}</span
          >
        </div>
      </div>
    </div>
  </div>
  <!-- 特殊色 -->
  <div class="flex flex-row flex-wrap justify-center pb-10">
    <span
      class="w-full text-center text-white text-2xl md:text-3xl lg:text-4xl py-4"
      >{{ $t("specialColor") }}</span
    >
    <div class="flex flex-row flex-wrap justify-center gap-8">
      <div
        v-for="item in props.specialColor"
        :key="item"
        class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 my-2 md:my-3 lg:my-4 rounded-full flex"
        :style="{
          backgroundColor: item.color,
        }"
      >
        <div class="w-full h-full flex items-center justify-center relative">
          <span
            class="absolute top-20 md:top-24 lg:top-28 text-white text-md md:text-xl lg:text-xl text-nowrap"
            >{{ item.colorName }}</span
          >
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

<style scoped></style>
