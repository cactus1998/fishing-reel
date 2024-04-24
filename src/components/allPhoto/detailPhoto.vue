<template>
  <div>
    <div class="flex justify-between relative">
      <template
        v-for="(image, index) in props.grayList.slice(0, 2)"
        :key="index"
      >
        <el-image
          class="w-full h-96 px-4 py-4"
          :class="{ 'object-contain': index % 2 !== 0 }"
          :src="image"
          :preview-src-list="props.grayList"
          :initial-index="index"
          lazy
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
          class="w-full h-96 px-4 py-4"
          :class="{ 'object-contain': index % 2 === 0 }"
          :src="image"
          :preview-src-list="props.grayList"
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
