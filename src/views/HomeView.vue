<script setup>
import MainNews from "../components/news/main-news/MainNews.vue";
import AllNews from "../components/news/all-news/AllNews.vue";
import FamousFacts from "../components/news/facts/FamousFacts.vue";
import PopularNews from "../components/news/popular-news/PopularNews.vue";
import ArticlesSection from "../components/news/articles/ArticlesSection.vue";
</script>

<template>
  <main class="w-[100%]">
    <div class="news-grid max-w-[1312px] mx-auto">
      <MainNews class="main-news" />
      <AllNews class="all-news" />
      <FamousFacts class="facts h-[100%]" />
      <PopularNews class="popular self-start" />
      <ArticlesSection class="articles" />
    </div>
  </main>
</template>

<style scoped>
.news-grid {
  display: grid;
  display: grid;
  grid-template-areas:
    "mainNews mainNews mainNews allNews"
    "mainNews mainNews mainNews allNews"
    "facts facts facts popular"
    "articles articles articles popular";
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(4, 1fr);
  row-gap: 48px;
  column-gap: 24px;
}

@media only screen and (max-width: 1080px) {
  .news-grid {
    grid-template-rows: repeat(4, auto);
    row-gap: 40px;
    grid-template-areas:
      "mainNews mainNews mainNews mainNews"
      "allNews allNews popular popular"
      "facts facts facts facts"
      "articles articles articles articles";
  }
}

@media only screen and (max-width: 640px) {
  .news-grid {
    grid-template-areas:
      "mainNews mainNews mainNews mainNews"
      "allNews allNews allNews allNews"
      "popular popular popular popular"
      "facts facts facts facts"
      "articles articles articles articles";
  }
}

.main-news {
  grid-area: mainNews;
}
.all-news {
  grid-area: allNews;
}
.facts {
  grid-area: facts;
}
.popular {
  grid-area: popular;
}
.articles {
  grid-area: articles;
}
</style>
