<script setup>
import BaseHeaderNav from "./BaseHeaderNav.vue";
import BaseHeaderLogo from "./BaseHeaderLogo.vue";
import BaseHeaderSocLinks from "./BaseHeaderSocLinks.vue";
import BaseHeaderSearch from "./BaseHeaderSearch.vue";
import BaseHeaderNavOpener from "./BaseHeaderNavOpener.vue";
import { ref, computed } from "vue";

const IsMobileScreen = computed(() => window.innerWidth < 640);
const openNav = ref(false);
</script>

<template>
  <header class="w-99 bg-interface-white-1">
    <div class="flex justify-between mx-auto py-6 items-center max-w-[1312px]">
      <BaseHeaderLogo />
      <BaseHeaderNav :open-nav="openNav">
        <BaseHeaderSocLinks v-if="IsMobileScreen" class="mb-5" />
      </BaseHeaderNav>
      <div class="flex items-center">
        <BaseHeaderSocLinks v-if="!IsMobileScreen" />
        <BaseHeaderSearch :hide-search-bar="IsMobileScreen" />
        <BaseHeaderNavOpener @open-nav="openNav = !openNav" :open-nav="openNav" />
      </div>
    </div>
  </header>
</template>
