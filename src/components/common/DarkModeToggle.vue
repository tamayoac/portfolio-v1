<template>
  <div class="dark-mode-container">
    <button @click="toggleDarkMode" class="dark-mode-toggle">
      <span v-if="!isDarkMode" aria-label="Switch to dark mode">
        <!-- Moon Icon for Light Mode -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0112.003 21c-5.385 0-9.752-4.367-9.752-9.752a9.717 9.717 0 016.002-9.002.75.75 0 01.902.903A8.214 8.214 0 0012.003 19.5c4.548 0 8.25-3.702 8.25-8.25a8.22 8.22 0 00-2.248-5.75.75.75 0 01.903-.902 9.718 9.718 0 011.594 10.404z"
          />
        </svg>
      </span>
      <span v-else aria-label="Switch to light mode">
        <!-- Sun Icon for Dark Mode -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-yellow-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364 6.364l-1.061-1.061m-9.606 0L7.05 18.364M18.364 5.636l-1.061 1.061m-9.606 0L7.05 5.636M12 5.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5z"
          />
        </svg>
      </span>
    </button>
  </div>
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

<style scoped>
.dark-mode-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.dark-mode-toggle:hover {
  transform: scale(1.1);
}

.dark-mode-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
