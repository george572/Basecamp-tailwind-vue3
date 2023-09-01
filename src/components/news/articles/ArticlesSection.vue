<script setup>
import { articlesData } from "../../../utils/data/articlesData";
import BaseBadge from "../../base/BaseBadge.vue";

const getImageUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};
</script>

<template>
  <div class="articles-section-wrapper">
    <div
      class="article-content bg-white rounded-base-radius p-2 cursor-pointer"
      v-for="article in articlesData"
      :key="article.id"
    >
      <img
        :src="getImageUrl(article.imageSrc)"
        alt=""
        class="rounded-base-radius object-cover w-[100%]"
      />
      <div class="flex pt-1">
        <BaseBadge :content="article.date"></BaseBadge>
        <BaseBadge :content="article.topic"></BaseBadge>
      </div>
      <div class="px-2 pb-1">
        <div class="text-base overflow-hidden">
          {{ article.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-content img {
    height: 96px;
  }
  .article-content:nth-child(5) img {
    height: 280px;
  }
  .article-content:nth-child(1) {
    grid-area: article-1;
  }
  .article-content:nth-child(2) {
    grid-area: article-2;
  }
  .article-content:nth-child(3) {
    grid-area: article-3;
  }
  .article-content:nth-child(4) {
    grid-area: article-4;
  }
  .article-content:nth-child(5) {
    grid-area: large-article;
  }
.articles-section-wrapper {
  display: grid;
  grid-row-gap: 24px;
  grid-column-gap: 20px;
  grid-template-rows: repeat(2, minmax(188px, auto));
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "article-1 large-article article-2"
    "article-3 large-article article-4";
}

@media only screen and (max-width: 1080px) {
  .articles-section-wrapper {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-template-areas:
      "large-article large-article"
      "article-1 article-2"
      "article-3 article-4";
  }
}

@media only screen and (max-width: 640px) {
  .articles-section-wrapper {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr;
    grid-column-gap: 32px;
    grid-template-areas:
      "large-article large-article"
      "article-1 article-1"
      "article-2 article-2"
      "article-3 article-3"
      "article-4 article-4";
  }
  .article-content img {
    height: 160px;
  }
}


</style>
