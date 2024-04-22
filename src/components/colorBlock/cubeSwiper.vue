<template>
  <div>
    <swiper
      :effect="'cube'"
      :grabCursor="true"
      :loop="true"
      :autoplay="{ delay: 4500, disableOnInteraction: false }"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
      :pagination="true"
    >
      <swiper-slide v-for="(image, index) in props.photoList" :key="index">
        <img :src="image" class="swiper-image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import defineProps from "vue";
import { Swiper, SwiperSlide } from "swiper/vue"; // swiper 所需组件
import "swiper/swiper-bundle.css";
import SwiperCore, { EffectCube, Pagination, Autoplay } from "swiper";

SwiperCore.use([EffectCube, Pagination, Autoplay]);

const props = defineProps({
  photoList: Array,
});
</script>
<style scoped>
.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
