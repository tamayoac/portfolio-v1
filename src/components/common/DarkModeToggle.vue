<template>
  <button
    @click="toggleDarkMode"
    class="relative w-10 h-10 flex items-center justify-center rounded-full text-stone-500 hover:text-stone-700 dark:text-stone-500 dark:hover:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-all duration-200"
    :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun Icon -->
    <svg
      v-if="isDarkMode"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
    <!-- Moon Icon -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0112.003 21c-5.385 0-9.752-4.367-9.752-9.752a9.717 9.717 0 016.002-9.002c.85-.4 1.24.63.54 1.06a7.5 7.5 0 1010.215 10.215c.43-.7 1.46-.31 1.06.54z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useDarkModeStore } from "@/store/darkModeStore";
import { storeToRefs } from "pinia";

const darkModeStore = useDarkModeStore();

const { isDarkMode } = storeToRefs(darkModeStore);

const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
};

onMounted(() => {
  darkModeStore.initializeDarkMode();
});
</script>
