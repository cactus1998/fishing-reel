<template>
  <div class="background flex max-w-screen">
    <section
      class="title mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center"
    >
      <!-- 標題文字 -->
      <div class="mx-auto max-w-2xl text-center mt-16">
        <h2 class="mt-2 text-lg font-medium text-white sm:text-lg">
          Leka big wheel
        </h2>
        <h1
          class="mt-2 text-5xl font-black tracking-tight text-white sm:text-5xl"
        >
          樂咖大物輪
        </h1>
      </div>
      <!-- 標題圖片 -->
      <div class="title__photo text-white mt-16">
        <img
          style="transform: translateX(-100vw)"
          src="@/assets/輪子/去背/灰色_正面_去被.png"
          alt=""
          class="mainPhoto max-h-96"
        />
      </div>
      <!-- 標題文字 -->
      <div class="mx-auto max-w-2xl text-center mt-16">
        <h2 class="mt-2 text-lg font-medium text-white sm:text-lg">
          Leka big wheel
        </h2>
        <h1
          class="mt-2 text-5xl font-black tracking-tight text-white sm:text-5xl"
        >
          樂咖大物輪
        </h1>
      </div>
      <!-- 詳細圖 -->
      <div class="detail__photo text-white mt-16">
        <div class="flex justify-between">
          <img
            style="transform: translateX(0vw)"
            src="@/assets/輪子/灰色/灰色_把手01.jpg"
            alt=""
            class="w-64 h-64"
          />
          <img
            style="transform: translateX(0vw)"
            src="@/assets/輪子/灰色/灰色_把手01.jpg"
            alt=""
            class="w-64 h-64"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
  gsap.to(".mainPhoto", {
    x: "0.2rem", // 圖片寬度 20rem 的一半加上抖動範圍
    duration: 0.5,
    onComplete: () => {
      // 第一個動畫結束後執行
      gsap.to(".mainPhoto", {
        x: "-0.5rem",
        duration: 0.1,
        onComplete: () => {
          // 第二個動畫結束後執行
          gsap.to(".mainPhoto", {
            x: "0rem",
            duration: 0.1,
          });
        },
      });
    },
  });
});
</script>
<style scoped>
.background {
  background: #131313; /* 回退色 */
  background: -webkit-linear-gradient(
    to right,
    #131313,
    #1f1f1f,
    #2c2c2c,
    #1f1f1f,
    #131313
  );
  background: linear-gradient(
    to right,
    #131313,
    #1f1f1f,
    #2c2c2c,
    #1f1f1f,
    #131313
  );
}
</style>
