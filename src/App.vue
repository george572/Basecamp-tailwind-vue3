<script setup>
import { RouterView } from 'vue-router';
import BaseHeader from './components/header/BaseHeader.vue';
</script>

<template>
  <div>
    <BaseHeader class="px-4"/>
    <RouterView class="mx-auto py-4 lg:py-11 px-4"/>
  </div>
</template>

<style scoped>
</style>
