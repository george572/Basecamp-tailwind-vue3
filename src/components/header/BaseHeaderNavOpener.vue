<script setup>
defineProps({
  openNav: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const emit = defineEmits(["openNav"]);
</script>
<template>
  <div
    @click="() => emit('openNav')"
    class="flex flex-col lg:hidden items-center justify-center mx-2 rounded-full bg-primary-light w-[48px] h-[48px]"
  >
    <span
      class="w-[18px] h-[2px] bg-interface-black"
      :class="{ 'rotate-45 transition-all ease-in relative': openNav }"
    ></span>
    <span class="w-[18px] h-[2px] bg-interface-black my-1" :class="{ hidden: openNav }"></span>
    <span
      class="w-[18px] h-[2px] bg-interface-black"
      :class="{ 'rotate-[-45deg] transition-all ease-in relative bottom-[2px]': openNav }"
    ></span>
  </div>
</template>
