<script setup>
import { navigationStructure } from "../../utils/data/navigationStructure";
import BaseHeaderNavDropdown from "./BaseHeaderNavDropdown.vue";
import { RouterLink } from "vue-router";
import DropDownArrow from "../icons/DropDownArrow.vue";
import { ref, onMounted } from "vue";

defineProps({
  openNav: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const navigationLinks = ref(navigationStructure);
const showDropDownMenu = ref(false);
const hasTouchedMenu = ref(true);
const navParentRef = ref(null);
const navChildRef = ref(null);
const maxNavWidth = ref(710);
const navRearranged = ref(false);

onMounted(() => {
  navChildRefResizeObserver.observe(navChildRef.value);
  navParentRefResizeObserver.observe(navParentRef.value);
});

const navChildRefResizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const { width } = entry.contentRect;
    if (width >= maxNavWidth.value && window.innerWidth > 1080) {
      rearrangeNavigation("hide");
    }
  }
});

const navParentRefResizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const { width } = entry.contentRect;

    if (width < maxNavWidth.value && !navRearranged.value && window.innerWidth > 1080) {
      rearrangeNavigation("hide");
      navRearranged.value = true;
    } else if (width >= maxNavWidth.value && navRearranged.value && window.innerWidth > 1080) {
      rearrangeNavigation("show");
      navRearranged.value = false;
    }
  }
});

const rearrangeNavigation = (action) => {
  let lastNavItem = navigationLinks.value[navigationLinks.value.length - 2];
  let navDropdownItem = navigationLinks.value[navigationLinks.value.length - 1];

  if (action === "hide") {
    navDropdownItem.children.unshift(lastNavItem);
    navigationLinks.value.splice(navigationLinks.value.indexOf(lastNavItem), 1);
  } else {
    lastNavItem = navDropdownItem.children[0];
    navigationLinks.value.splice(navigationLinks.value.length - 1, 0, lastNavItem);
    navDropdownItem.children.splice(navDropdownItem.children.indexOf(lastNavItem), 1);
  }
};
</script>

<template>
  <nav
    class="hidden absolute lg:static lg:flex flex-col lg:flex-row items-center lg:items-start lg:max-w-[710px] w-[100%] px-3 lg:px-0 lg:mx-10 z-50"
    :class="{ '!flex left-0 mx-0 w-99 top-20 animate-navFromTop z-50 h-[100vh] bg-white': openNav }"
    ref="navParentRef"
  >
    <ul
      class="flex lg:items-center mb-5 md:mb-0"
      ref="navChildRef"
      :class="{ 'flex-col w-[100%] items-start overflow-y-scroll h-[70vh]': openNav }"
    >
      <li
        v-for="navLink in navigationLinks"
        :key="navLink.title"
        class="py-4 px-4 lg:py-0 font-noto-regular cursor-pointer font-bannerCaps"
      >
        <router-link
          v-if="navLink.route"
          :to="{ path: navLink.route }"
          class="text-interface-dark-2 hover:text-primary-purple leading-[3px]"
        >
          {{ navLink.title }}
        </router-link>
        <div
          v-else-if="navLink.children.length > 0"
          class="flex items-center py-4"
          @mouseover="showDropDownMenu = true"
          @mouseleave="hasTouchedMenu ? (showDropDownMenu = false) : (showDropDownMenu = true)"
        >
          <span class="pr-1 text-interface-dark-2 hover:text-primary-purple">{{
            navLink.title
          }}</span>
          <DropDownArrow class="mb-1" :arrow-color="showDropDownMenu" />
          <BaseHeaderNavDropdown
            :links="navLink.children"
            @link-click="showDropDownMenu = false"
            v-if="showDropDownMenu"
            @mouseleave="showDropDownMenu = false"
            @mouseover="hasTouchedMenu = true"
          />
        </div>
      </li>
    </ul>
    <slot></slot>
  </nav>
</template>
