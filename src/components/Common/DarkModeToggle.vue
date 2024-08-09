<template>
  <button @click="toggleDarkMode" class="dark-mode-toggle">
    {{ isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode" }}
  </button>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

// Reactive state to track dark mode status
const isDarkMode = ref(false);

// Function to toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};

// Persist dark mode preference in localStorage
watchEffect(() => {
  localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode.value));
});

// Initialize dark mode based on saved preference
if (localStorage.getItem("isDarkMode") === "true") {
  isDarkMode.value = true;
  document.documentElement.classList.add("dark");
}
</script>

<style scoped>
.dark-mode-toggle {
  padding: 10px 20px;
  background-color: #3490dc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dark-mode-toggle:hover {
  background-color: #2779bd;
}
</style>
