<script setup>
import { popularNews } from "../../../utils/data/popularNews";

const getImageUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};
</script>

<template>
  <div class="bg-white rounded-base-radius px-3 py-5">
    <h2 class="text-xl font-bannerCaps pb-3">პოპულარული</h2>
    <div class="max-h-[618px] overflow-y-scroll divide-y-2 divide-dashed">
      <div
        v-for="news in popularNews"
        :key="news.id"
        class="flex py-4 text-primary-purple cursor-pointer"
      >
        <img :src="getImageUrl(news.imageSrc)" alt="" class="w-[96px]" />
        <div class="pl-2">
          <p class="text-interface-dark-2 text-sm font-normal overflow-hidden">{{ news.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
