<script setup>
import { allNews } from "../../../utils/data/allNews";
import TimeCounterIcon from "../../icons/TimeCounterIcon.vue";
</script>

<template>
  <div class="bg-white rounded-base-radius px-3 py-5 all-news">
    <h2 class="text-xl font-bannerCaps pb-3">ყველა სიახლე</h2>
    <div class="max-h-[618px] overflow-y-scroll divide-y-2 divide-dashed">
      <div
        v-for="news in allNews"
        :key="news.id"
        class="flex flex-col py-4 text-primary-purple cursor-pointer"
      >
          <div class="flex items-center">
            <TimeCounterIcon />
            <div class="flex items-center mx-2">
              <span>{{ news.time }}</span>
              <div class="dot w-[4px] h-[4px] rounded-full bg-primary-purple mx-2"></div>
              <span>{{ news.date }}</span>
            </div>
          </div>
          <div class="pt-2">
            <p class="text-black text-sm font-normal overflow-hidden pr-5">{{ news.title }}</p>
          </div>
      </div>
    </div>
  </div>
</template>
