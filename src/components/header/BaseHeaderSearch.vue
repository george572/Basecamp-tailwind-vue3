<script setup>
import SearchIcon from "../icons/SearchIcon.vue";
defineProps({
  hideSearchBar: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div
    class="relative"
    :class="{
      'w-[48px] h-[48px] bg-primary-light rounded-[64px] px-5 ml-4 outline-primary-purple leading-3':
        hideSearchBar,
    }"
  >
    <SearchIcon class="absolute right-5 top-3.5 cursor-pointer" :class="{'mx-auto !left-0 !right-0' : hideSearchBar}"/>
    <input
      v-if="!hideSearchBar"
      type="text"
      placeholder="ძიება"
      class="w-[224px] h-[48px] bg-primary-light rounded-[64px] px-5 ml-4 outline-primary-purple leading-3"
    />
  </div>
</template>
