<template>
  <div class="background flex h-screen w-screen">
    <section class="title mx-auto max-w-7xl px-6 lg:px-8">
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
      <div class="title__photo text-white">
        <img
          src="@/assets/輪子/去背/灰色_正面_去被.png"
          alt=""
          class="w-auto h-auto"
        />
      </div>
    </section>
  </div>
</template>
<script setup></script>
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
