<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import SwiperNavigationArrow from "../../icons/SwiperNavigationArrow.vue";
import BaseBadge from "../../base/BaseBadge.vue";
import { mainNewsData } from "../../../utils/data/mainNewsData";

const pagination = {
  clickable: true,
  renderBullet: (index, className) => {
    return `<div class="${className} opacity-80 w-[8px] h-[8px] mx-1 rounded-full bg-gray-200 block"></div>`;
  },
};

const modules = [Pagination, Navigation];

const getImageUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};
</script>

<template>
  <div class="relative w-[100%] py-3 px-4 bg-white rounded-base-radius">
    <div class="relative">
      <SwiperNavigationArrow id="prev" class="absolute left-5 top-1/3 z-10" />
      <SwiperNavigationArrow id="next" class="absolute right-5 top-1/3 z-10" :rotateIcon="true" />
      <swiper
        class="rounded-base-radius"
        :pagination="pagination"
        :modules="modules"
        loop
        autoplay
        :spaceBetween="5"
        :navigation="{ enabled: true, prevEl: '#prev', nextEl: '#next' }"
      >
        <swiper-slide class="h-[100%]" :lazy="true" v-for="data in mainNewsData" :key="data.id">
          <div class="relative">
            <img
              :src="getImageUrl(data.imageSrc)"
              alt=""
              class="w-[100%] h-[378px] md:h-[478px] object-cover rounded-base-radius"
            />
          </div>
          <div class="flex pt-2">
            <BaseBadge :content="data.date"></BaseBadge>
            <BaseBadge :content="data.topic"></BaseBadge>
          </div>
          <div class="p-2 pb-5">
            <div class="text-xl md:text-2xl overflow-hidden">
              {{ data.title }}
            </div>
            <div class="hidden md:block text-base text-interface-dark-2 pt-3 font-normal overflow-hidden">
              {{ data.subtitle }}
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
.swiper-pagination-horizontal {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 448px !important;
}
.swiper-pagination-bullet-active {
  width: 24px !important;
  background-color: white;
  transition: all 400ms;
  opacity: 1;
}

@media only screen and (max-width: 640px) {
  .swiper-pagination-horizontal {
    top: 348px !important;
  }
}
</style>
