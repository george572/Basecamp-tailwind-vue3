<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["link-click"]);
</script>

<template>
  <ul
    v-if="links && links.length > 0"
    class="flex flex-col absolute top-[80px] min-w-[180px] shadow-big-shadow rounded-base-radius py-4 px-5 z-50 bg-white"
  >
    <li
      v-for="navLink in links"
      :key="navLink.title"
      class="py-3 font-noto-regular cursor-pointer font-bannerCaps"
    >
      <router-link
        v-if="navLink.route"
        @click="() => emit('link-click')"
        :to="{ path: navLink.route }"
        class="text-interface-dark-2 hover:bg-[#F5F8FF] hover:text-primary-purple px-5 py-4 rounded-2xl"
      >
        {{ navLink.title }}
      </router-link>
    </li>
  </ul>
</template>
