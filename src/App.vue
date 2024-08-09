<template>
  <div class="app-container">
    <div class="left-section">
      <about-section />
    </div>
    <div class="right-section">
      <profile-header />
      <experience-list />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileHeader from "./components/ProfileHeader.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceList from "./components/ExperienceList.vue";
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
