<template>
  <div
    id="app"
    class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors"
  >
    <DarkModeToggle />
    <div class="flex h-full">
      <div
        class="left-section flex-1 bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors"
      >
        <ProfileHeader />
      </div>
      <div
        class="right-section flex-grow overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900 transition-colors"
      >
        <AboutSection />
        <ExperienceList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileHeader from "./components/ProfileHeader.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceList from "./components/ExperienceList.vue";
import DarkModeToggle from "./components/Common/DarkModeToggle.vue";
</script>

<style>
.app-container {
  @apply flex h-screen;
}
.left-section {
  @apply flex-1 bg-gray-100 flex items-center justify-center;
}
.right-section {
  @apply flex-2 overflow-y-auto p-6;
}
</style>
