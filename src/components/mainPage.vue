<template>
  <div class="background max-w-screen">
    <div class="absolute top-4 right-4">
      <LanguageSwitcher />
    </div>
    <section
      class="title mx-auto max-w-7xl px-6 lg:px-8 w-full flex flex-col items-center"
    >
      <div
        class="mx-auto flex max-w-2xl items-center justify-between mt-10 px-4"
      >
        <div class="flex items-center space-x-2">
          <img
            src="@/assets/logo.png"
            alt=""
            class="h-12 w-12 lg:h-20 lg:w-20"
          />
          <span
            class="text-5xl lg:text-7xl font-black tracking-tight text-white whitespace-nowrap"
          >
            {{ $t("title") }}
          </span>
        </div>
      </div>
      <div
        class="title__photo text-white mt-32"
        style="transform: translateX(-100vw)"
      >
        <img
          src="@/assets/輪子/去背/灰色_正面_去被.png"
          alt=""
          class="mainPhoto max-h-80 max-w-80 md:max-w-96 md:max-h-96"
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
              ><div class="">{{ $t("handle") }}</div></span
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
          class="absolute top-56 md:top-64 right-0"
          @click="scrollToDetail"
          @mouseover="showText_Base = true"
          @mouseleave="showText_Base = false"
        >
          <div class="flex items-center">
            <span
              v-if="showText_Base"
              class="absolute bottom-16 text-white inline-block bg-gray-600 px-4 py-1 text-base font-semibold rounded-md whitespace-nowrap"
              ><div class="">{{ $t("swivel_base") }}</div></span
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
              ><div class="">{{ $t("aluminum_frame") }}</div></span
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
      <div class="mx-auto max-w-2xl text-center mt-16 mb-40">
        <div
          class="my-6 text-2xl md:text-3xl lg:text-4xl font-medium text-nowrap text-white"
        >
          🔥{{ $t("slogan") }}🔥
        </div>
        <div class="my-2 text-md md:text-xl lg:text-2xl font-medium text-white">
          {{ $t("description") }}
        </div>
      </div>
      <div class="detail__photo text-white w-full">
        <detailPhoto :grayList="grayList"></detailPhoto>
      </div>
      <div class="mx-auto max-w-3xl text-center mb-40">
        <div
          class="my-6 text-2xl md:text-3xl lg:text-4xl font-medium text-nowrap text-white"
        >
          🔥{{ $t("detail_title") }}🔥
        </div>
        <div class="my-2 text-md md:text-xl lg:text-2xl font-medium text-white">
          {{ $t("detail_description") }}
        </div>
      </div>
      <div class="max-w-2xl">
        <cubeSwiperPages :photoList="cubeSwiperPhoto"></cubeSwiperPages>
      </div>
      <div class="mx-auto max-w-2xl text-center mb-4">
        <div
          class="my-6 text-2xl md:text-3xl lg:text-4xl font-medium text-nowrap text-white"
        >
          🔥{{ $t("color_display_title") }}🔥
        </div>
        <div class="my-2 text-md md:text-xl lg:text-2xl font-medium text-white">
          {{ $t("color_description_1") }}
        </div>
        <div class="my-2 text-md md:text-xl lg:text-2xl font-medium text-white">
          {{ $t("color_description_2") }}
        </div>
      </div>
      <div class="w-full mb-40">
        <colorSwiperPages
          :specialColor="specialColor"
          :basicColor="basicColor"
        ></colorSwiperPages>
      </div>
      <div class="mx-auto max-w-2xl text-center mb-4">
        <div
          class="my-6 text-2xl md:text-3xl lg:text-4xl font-medium text-nowrap text-white"
        >
          🔥{{ $t("price_and_size_title") }}🔥
        </div>
        <div class="my-2 text-md md:text-xl lg:text-2xl font-medium text-white">
          {{ $t("price_and_size_description_1") }}
        </div>
        <div class="my-2 text-md md:text-xl lg:text-2xl font-medium text-white">
          {{ $t("price_and_size_description_2") }}
        </div>
      </div>
      <div class="w-full mb-40">
        <priceList></priceList>
      </div>
      <div class="mx-auto max-w-xl md:max-w-2xl text-center mb-4">
        <div
          class="my-6 text-2xl md:text-3xl lg:text-4xl font-medium text-nowrap text-white"
        >
          🔥{{ $t("finished_product_title") }}🔥
        </div>
      </div>
      <div class="w-full mb-40 flex flex-col">
        <allPhoto :allPhotoList="allPhotoList"></allPhoto>
      </div>
      <div class="mx-auto text-center mb-40">
        <shopLink :gotoFB="gotoFB" :gotoShopee="gotoShopee"></shopLink>
      </div>
    </section>
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
import LanguageSwitcher from "@/components/language/LanguageSwitcher.vue";

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
