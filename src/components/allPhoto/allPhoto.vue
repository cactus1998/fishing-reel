<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <!-- 使用tailwind會失效 -->
    <div v-for="(image, index) in props.allPhotoList" :key="index" class="pic">
      <img
        :src="image.pic"
        class="image-item hover:scale-125 w-full h-full transition-transform duration-300 ease-in-out"
      />
    </div>
  </div>
</template>

<script setup>
import defineProps from "vue";
const props = defineProps({
  allPhotoList: Array,
});
</script>
<style scoped>
/* 照片聚焦展示 */
.pic {
  overflow: hidden;
}
.pic img {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.pic img:hover {
  transform: scale(1.3, 1.3);
}
</style>
