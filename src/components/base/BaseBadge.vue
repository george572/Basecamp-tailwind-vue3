<script setup>
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-[85px] h-[28px] bg-primary-light my-3 mx-1 rounded-base-radius text-xs text-center leading-[28px] cursor-pointer font-bold"
  >
    {{ content }}
  </div>
</template>
