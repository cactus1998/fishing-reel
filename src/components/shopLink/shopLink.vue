<template>
  <div>
    <div class="mt-6 mb-12 text-4xl font-medium text-white md:text-4xl">
      🔥賣場連結🔥
    </div>
    <div class="my-4 text-xl font-medium text-white md:text-xl">
      <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-gray-600 to-blue-500 group-hover:from-gray-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        @click="gotoFB()"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          臉書私訊下單
        </span>
      </button>
    </div>
    <div class="my-4 text-xl font-medium text-white md:text-xl">
      <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-orange-600 to-red-500 group-hover:from-orange-600 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
        @click="gotoShopee()"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          蝦皮賣場
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import defineProps from "vue";
const props = defineProps({
  grayList: Array,
  gotoFB: Function,
  gotoShopee: Function,
});

const gotoShopee = () => {
  props.gotoShopee();
};

const gotoFB = () => {
  props.gotoFB();
};
</script>
