<template>
  <div class="background max-w-screen">
    <section
      class="title mx-auto max-w-7xl px-6 lg:px-8 w-full flex flex-col items-center"
    >
      <!-- 標題文字 -->
      <div class="mx-auto max-w-2xl text-center mt-10">
        <div class="mt-2 text-lg font-medium text-white sm:text-lg">
          Leka big wheel
        </div>
        <div
          class="mt-2 text-7xl font-black tracking-tight text-white sm:text-7xl"
        >
          <span class="inline-block align-top">
            <img
              src="@/assets/logo.png"
              alt=""
              class="h-20 w-20 inline-block mr-2 align-top"
            />
          </span>
          樂咖大物輪
        </div>
      </div>
      <!-- 標題圖片 -->
      <div
        class="title__photo text-white mt-32"
        style="transform: translateX(-100vw)"
      >
        <img
          src="@/assets/輪子/去背/灰色_正面_去被.png"
          alt=""
          class="mainPhoto max-h-96 max-w-96"
        />
        <button
          class="absolute top-0 right-16"
          @click="scrollToDetail"
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
          @click="scrollToDetail"
          @mouseover="showText_Base = true"
          @mouseleave="showText_Base = false"
        >
          <div class="flex items-center">
            <span
              v-if="showText_Base"
              class="absolute bottom-16 text-white inline-block bg-gray-600 px-4 py-1 text-base font-semibold rounded-md whitespace-nowrap"
              ><div class="">轉座</div></span
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
          class="absolute top-40 left-0"
          @click="scrollToDetail"
          @mouseover="showText_skeleton = true"
          @mouseleave="showText_skeleton = false"
        >
          <div class="flex items-center">
            <span
              v-if="showText_skeleton"
              class="absolute bottom-16 text-white inline-block bg-gray-600 px-4 py-1 text-base font-semibold rounded-md whitespace-nowrap"
              ><div class="">鋁框</div></span
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
      <div class="mx-auto max-w-2xl text-center mt-16 mb-40">
        <div class="my-6 text-4xl font-medium text-white sm:text-4xl">
          🔥🔥台灣在地純手工鋁製前打輪🔥🔥
        </div>
        <div class="my-2 text-xl font-medium text-white sm:text-xl">
          對於釣魚愛好者而言，每一次的垂釣都是一場挑戰，一次尋找極致的體驗
        </div>
        <div class="my-2 text-xl font-medium text-white sm:text-xl">
          個性化釣魚捲線器不僅能夠提供卓越的性能，更能夠與您的個人風格完美融合，為您帶來一種獨一無二的體驗
        </div>
      </div>
      <!-- 詳細圖 -->
      <div class="detail__photo text-white mt-16 w-full">
        <detailPhoto :grayList="grayList"></detailPhoto>
      </div>
      <!-- 詳細圖說明文字 -->
      <div class="mx-auto max-w-2xl text-center mb-40">
        <div class="my-6 text-4xl font-medium text-white sm:text-4xl">
          🔥🔥前打輪細節圖片(可點擊放大)🔥🔥
        </div>
        <div class="my-2 text-xl font-medium text-white sm:text-xl">
          我們的釣魚捲線器採用精湛的手工鋁製前打輪，每一個細節都經過精心雕琢，確保您在垂釣過程中擁有頂級的操作感受。無論是釣魚的過程還是成果，我們都致力於讓您的每一次釣魚體驗都達到最高水準。
        </div>
      </div>
      <!-- 立方體展示照片 -->
      <div class="max-w-2xl">
        <cubeSwiperPages :photoList="cubeSwiperPhoto"></cubeSwiperPages>
      </div>
      <!-- 立方體展示說明文字 -->
      <div class="mx-auto max-w-2xl text-center mb-4">
        <div class="my-6 text-4xl font-medium text-white sm:text-4xl">
          🔥🔥顏色展示🔥🔥
        </div>
        <div class="my-2 text-xl font-medium text-white sm:text-xl">
          特殊色皆為訂製色，顧名思義是客製化的顏色，亦不能退換貨🚫
        </div>
        <div class="my-2 text-xl font-medium text-white sm:text-xl">
          且因訂製關係，製作等待時間較長，建議先與師傅溝通
        </div>
      </div>
      <!--顏色展示 -->
      <div class="w-full mb-40">
        <colorSwiperPages
          :specialColor="specialColor"
          :basicColor="basicColor"
        ></colorSwiperPages>
      </div>
      <!-- 價目及尺寸表說明文字 -->
      <div class="mx-auto max-w-2xl text-center mb-4">
        <div class="my-6 text-4xl font-medium text-white sm:text-4xl">
          🔥🔥價目及尺寸表🔥🔥
        </div>
        <div class="my-2 text-xl font-medium text-white sm:text-xl">
          可加價$700，加購專利轉座(360度旋轉)
        </div>
        <div class="my-2 text-xl font-medium text-white sm:text-xl">
          特式卡夢：中魚時，手把距離較省力！
        </div>
      </div>
      <!-- 價目及尺寸表 -->
      <div class="w-full mb-40">
        <priceList></priceList>
      </div>
      <!-- 所有照片說明文字 -->
      <div class="mx-auto max-w-2xl text-center mb-4">
        <div class="my-6 text-4xl font-medium text-white sm:text-4xl">
          🔥🔥產品展示🔥🔥
        </div>
      </div>
      <!-- 所有照片 -->
      <div class="w-full mb-40 flex flex-col">
        <allPhoto :allPhotoList="allPhotoList"></allPhoto>
      </div>
      <!-- 賣場連結 -->
      <div class="mx-auto text-center mb-40">
        <shopLink :gotoFB="gotoFB" :gotoShopee="gotoShopee"></shopLink>
      </div>
    </section>
    <!-- footer -->
    <footerBlock :gotoFB="gotoFB" :gotoShopee="gotoShopee"></footerBlock>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import detailPhoto from "@/components/allPhoto/detailPhoto.vue";
import cubeSwiperPages from "@/components/colorBlock/cubeSwiper.vue";
import colorSwiperPages from "@/components/colorBlock/colorChunk.vue";
import priceList from "@/components/table/priceList.vue";
import allPhoto from "@/components/allPhoto/allPhoto.vue";
import shopLink from "@/components/shopLink/shopLink.vue";
import footerBlock from "@/components/footerBlock/footerBlock.vue";

const showText_handle = ref(false);
const showText_Base = ref(false);
const showText_skeleton = ref(false);

const grayList = [
  require("@/assets/輪子/灰色/灰色_把手01.jpg"),
  require("@/assets/輪子/灰色/灰色_底座01.jpg"),
  require("@/assets/輪子/灰色/灰色_側面01.jpg"),
  require("@/assets/輪子/灰色/灰色_底座02.jpg"),
];

const cubeSwiperPhoto = [
  require("@/assets/輪子/方塊輪播/三色.jpg"),
  require("@/assets/輪子/方塊輪播/灰色.jpg"),
  require("@/assets/輪子/方塊輪播/紅色.jpg"),
  require("@/assets/輪子/方塊輪播/藍色.jpg"),
  require("@/assets/輪子/方塊輪播/金色.jpg"),
];

const specialColor = [
  { color: "rgba(255, 192, 203)", colorName: "淺紅色" },
  { color: "rgba(255, 201, 153)", colorName: "桃紅色" },
  { color: "rgba(128, 0, 128)", colorName: "紫色" },
  { color: "rgba(0, 128, 0)", colorName: "墨綠色" },
  { color: "rgba(0, 255, 0)", colorName: "綠色" },
  { color: "rgba(128, 255, 128)", colorName: "淺綠色" },
  { color: "rgba(255, 165, 0)", colorName: "桔色" },
  { color: "rgba(255, 255, 0)", colorName: "金黃色" },
  { color: "rgba(230, 190, 0)", colorName: "K金色" },
  { color: "rgba(192, 64, 0)", colorName: "青銅色" },
  { color: "rgba(64, 64, 64)", colorName: "咖啡色" },
  { color: "rgba(139, 99, 33)", colorName: "深鈦色" },
  { color: "rgba(0, 0, 128)", colorName: "海軍色" },
  { color: "rgba(0, 128, 255)", colorName: "水藍色" },
  { color: "rgba(75, 0, 130)", colorName: "靛紫色" },
  { color: "rgba(168, 168, 168)", colorName: "鈦色" },
  { color: "rgba(128, 128, 128)", colorName: "鈦灰色" },
  { color: "rgba(192, 192, 192)", colorName: "灰色" },
];

const basicColor = [
  { color: "rgba(0, 0, 0)", colorName: "黑色" },
  { color: "rgba(139, 58, 58)", colorName: "棗紅色" },
  { color: "rgba(0, 0, 128)", colorName: "寶藍色" },
];
// 照片集 放棄顯示文字 樣式很怪
const allPhotoList = [
  { pic: require("@/assets/輪子/show/灰色_專利手把.jpg"), msg: "專利手把" },
  { pic: require("@/assets/輪子/show/灰色_綁線.jpg"), msg: "專利手把" },
  { pic: require("@/assets/輪子/show/紅色_一般手把.jpg"), msg: "專利手把" },
  { pic: require("@/assets/輪子/show/紅色_正面.jpg"), msg: "專利手把" },
  { pic: require("@/assets/輪子/show/藍色_專利手把.jpg"), msg: "專利手把" },
  { pic: require("@/assets/輪子/show/金色_正面.jpg"), msg: "專利手把" },
  { pic: require("@/assets/輪子/show/專利轉座.jpg"), msg: "專利手把" },
  { pic: require("@/assets/輪子/show/專利轉座2.jpg"), msg: "專利手把" },
];

onMounted(() => {
  topPhoto();
});

const scrollToDetail = () => {
  const element = document.querySelector(".flex.justify-between.relative");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const gotoFB = () => {
  window.location.href =
    "https://www.facebook.com/p/%E6%A8%82%E5%92%96%E5%A4%A7%E7%89%A9%E8%BC%AA-%E5%89%8D%E6%89%93%E8%BC%AA%E5%B0%88%E8%B3%A3-100057736566821/?paipv=0&eav=AfZNmTkk1RANAAMz2q9BU9nvITP3hUrZ5r7_mS2CXaVBq9W6iAgobArv8l_TJ8QDBN4&_rdr";
};

const gotoShopee = () => {
  window.location.href =
    "https://shopee.tw/jinnana55123?categoryId=100637&entryPoint=ShopByPDP&itemId=7390264223&upstream=search";
};

// 首頁圖片動畫
const topPhoto = () => {
  AOS.init();
  gsap.to(".title__photo", {
    x: "0.2rem", // 圖片寬度 20rem 的一半加上抖動範圍
    duration: 1,
    onComplete: () => {
      // 第一個動畫結束後執行
      gsap.to(".title__photo", {
        x: "-0.5rem",
        duration: 0.1,
        onComplete: () => {
          // 第二個動畫結束後執行
          gsap.to(".title__photo", {
            x: "0rem",
            duration: 0.2,
          });
        },
      });
    },
  });
};
</script>
<style scoped>
/* 漸層背景 */
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
