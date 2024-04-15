<template>
  <div class="background flex max-w-screen">
    <section
      class="title mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center"
    >
      <!-- 標題文字 -->
      <div class="mx-auto max-w-2xl text-center mt-16">
        <div class="mt-2 text-lg font-medium text-white sm:text-lg">
          Leka big wheel
        </div>
        <div
          class="mt-2 text-7xl font-black tracking-tight text-white sm:text-7xl"
        >
          樂咖大物輪
        </div>
      </div>
      <!-- 標題圖片 -->
      <div
        class="title__photo text-white mt-36"
        style="transform: translateX(-100vw)"
      >
        <img
          src="@/assets/輪子/去背/灰色_正面_去被.png"
          alt=""
          class="mainPhoto max-h-96 max-w-96"
        />
        <button
          class="absolute top-0 right-16"
          @mouseover="showText_handle = true"
          @mouseleave="showText_handle = false"
        >
          <div class="flex items-center">
            <span
              v-if="showText_handle"
              class="absolute bottom-16 text-white inline-block bg-gray-600 px-4 py-1 text-base font-semibold rounded-md whitespace-nowrap"
              ><div class="">把手</div></span
            >
          </div>

          <img
            style="transform: translateX(0vw)"
            src="@/assets/超連結燈.gif"
            alt=""
            class="w-16 h-16"
          />
        </button>
        <button
          class="absolute top-64 right-0"
          @mouseover="showText_Base = true"
          @mouseleave="showText_Base = false"
        >
          <div class="flex items-center">
            <span
              v-if="showText_Base"
              class="absolute bottom-16 text-white inline-block bg-gray-600 px-4 py-1 text-base font-semibold rounded-md whitespace-nowrap"
              ><div class="">底座</div></span
            >
          </div>

          <img
            style="transform: translateX(0vw)"
            src="@/assets/超連結燈.gif"
            alt=""
            class="w-16 h-16"
          />
        </button>
      </div>
      <!-- 標題圖片說明文字文字 -->
      <div class="mx-auto max-w-2xl text-center mt-16">
        <div
          class="mt-2 text-2xl font-medium text-white sm:text-2xl"
          data-aos="fade-up"
        >
          🔥🔥台灣在地純手工鋁製前打輪🔥🔥
        </div>
      </div>

      <!-- 詳細圖 -->
      <div class="detail__photo text-white mt-16">
        <div class="flex justify-between">
          <img
            style="transform: translateX(0vw)"
            src="@/assets/輪子/灰色/灰色_把手01.jpg"
            alt=""
            class="w-auto h-auto"
          />
          <img
            style="transform: translateX(0vw)"
            src="@/assets/輪子/灰色/灰色_底座01.jpg"
            alt=""
            class="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const showText_handle = ref(false);
const showText_Base = ref(false);

onMounted(() => {
  topPhoto();
});

// 首頁圖片動畫
const topPhoto = () => {
  AOS.init();
  gsap.to(".title__photo", {
    x: "0.2rem", // 圖片寬度 20rem 的一半加上抖動範圍
    duration: 0.5,
    onComplete: () => {
      // 第一個動畫結束後執行
      gsap.to(".title__photo", {
        x: "-0.5rem",
        duration: 0.1,
        onComplete: () => {
          // 第二個動畫結束後執行
          gsap.to(".title__photo", {
            x: "0rem",
            duration: 0.1,
          });
        },
      });
    },
  });
};
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
