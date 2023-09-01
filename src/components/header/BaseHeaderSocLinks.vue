<script setup>
import FbIcon from "../icons/FbIcon.vue";
import InstagramIcon from "../icons/InstagramIcon.vue";
</script>
<template>
  <div class="flex items-center">
    <a href="https://www.instagram.com" target="_blank"
      class="w-8 h-8 rounded-full bg-primary-light mr-4 flex items-center justify-center cursor-pointer"
    >
      <InstagramIcon />
    </a>
    <a href="https:/www.facebook.com" target="_blank"
      class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center cursor-pointer"
    >
      <FbIcon />
    </a>
  </div>
</template>
