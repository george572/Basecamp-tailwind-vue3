<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import SwiperNavigationArrow from "../../icons/SwiperNavigationArrow.vue";
import { famousFacts } from "../../../utils/data/famousFacts";

const modules = [Navigation];

const getImageUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};
</script>

<template>
  <div class="py-5 px-4 bg-white rounded-base-radius">
    <div class="flex justify-between items-center pb-5">
      <h2 class="text-base font-bannerCaps">ცნობილი ფაქტები</h2>
      <div class="flex">
        <SwiperNavigationArrow id="prevFact" class="mx-2 shadow-small-shadow" />
        <SwiperNavigationArrow id="nextFact" class="mx-2 shadow-small-shadow" :rotateIcon="true" />
      </div>
    </div>
    <swiper
      class="rounded-base-radius"
      :modules="modules"
      :spaceBetween="25"
      :navigation="{ enabled: true, prevEl: '#prevFact', nextEl: '#nextFact' }"
      :slidesPerView="'auto'"
    >
      <swiper-slide
        class="h-[100%] w-[350px] rounded-base-radius bg-primary-light p-4 flex flex-col cursor-pointer"
        :lazy="false"
        v-for="data in famousFacts"
        :key="data.id"
      >
        <img :src="getImageUrl(data.imageSrc)" alt="" class="rounded-base-radius" />
        <h2 class="text-base pt-3 overflow-hidden">{{ data.title }}</h2>
      </swiper-slide>
    </swiper>
  </div>
</template>
