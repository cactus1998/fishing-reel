<template>
  <Swiper :grabCursor="true" :modules="modules" :effect="'cards'">
    <SwiperSlide><div class="box">123</div></SwiperSlide>
    <SwiperSlide><div class="box1">123</div></SwiperSlide>
    <SwiperSlide><div class="box3">123</div></SwiperSlide>
  </Swiper>
</template>

<script setup>
// 导入组件
import { Swiper, SwiperSlide } from "swiper/vue";
// 导入配置
import { EffectCards } from "swiper";
// 导入css文件
import "swiper/swiper-bundle.css";
// 声明配置
const modules = [EffectCards];
</script>

<style lang="less" scoped>
.swiper {
  // 设置一下父组件swiper的宽高
  width: 300px;
  height: 450px;
}

.swiper-slide {
  // 设置一下里面子组件内容的样式
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
}
</style>
