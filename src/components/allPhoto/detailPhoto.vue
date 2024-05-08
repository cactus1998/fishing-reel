<template>
  <div>
    <div class="flex justify-between relative">
      <template
        v-for="(image, index) in props.grayList.slice(0, 2)"
        :key="index"
      >
        <el-image
          class="w-full h-40 md:h-80 lg:h-96 px-1 py-1 md:px-2 md:py-2 lg:px-4 lg:py-4"
          :class="{ 'object-contain': index % 2 !== 0 }"
          :src="image"
          :preview-src-list="props.grayList"
          :initial-index="index"
          :data-aos="index % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'"
          data-aos-duration="1500"
        />
      </template>
    </div>
    <div class="flex justify-between">
      <template
        v-for="(image, index) in props.grayList.slice(2, 4)"
        :key="index"
      >
        <el-image
          class="w-full h-40 md:h-80 lg:h-96 px-1 py-1 md:px-2 md:py-2 lg:px-4 lg:py-4"
          :class="{ 'object-contain': index % 2 === 0 }"
          :src="image"
          :preview-src-list="props.grayList.slice(2, 4)"
          :initial-index="index"
          lazy
          :data-aos="index % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'"
          data-aos-duration="1500"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import defineProps from "vue";
const props = defineProps({
  grayList: Array,
});
</script>
