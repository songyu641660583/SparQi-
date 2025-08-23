<template>
  <router-view/>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isMobile = ref(false);
const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};
  checkIsMobile()

  document.documentElement.style.fontSize = (100 * window.innerWidth / 1920) + 'px';
  window.addEventListener('resize', () => {
    document.documentElement.style.fontSize = (100 * window.innerWidth / 1920) + 'px';
  });
</script>