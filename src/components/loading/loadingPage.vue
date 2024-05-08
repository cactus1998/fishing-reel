<template>
  <div>
    <div
      v-if="props.isLoading"
      v-loading="props.isLoading"
      element-loading-background="rgba(0,0,0,1)"
      class="loading fixed inset-0 flex items-center justify-center"
    >
      <!-- 支援IE所以使用SVG -->
      <!-- 放棄使用圖片 畫面很怪 -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isLoading: Array,
});
</script>

<style>
.loading {
  z-index: 99999;
}
</style>
