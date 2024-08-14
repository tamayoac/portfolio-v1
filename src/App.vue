<template>
  <div
    v-if="portfolio"
    id="app"
    class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors"
  >
    <div class="flex h-screen">
      <div
        class="left-section flex-1 bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors"
      >
        <div class="flex flex-col">
          <profile-header :introduction="portfolio?.introduction" />
          <social-section :socials="portfolio?.socials" />
        </div>
      </div>
      <div
        class="right-section flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col"
      >
        <div class="flex justify-end">
          <dark-mode-toggle />
        </div>
        <about-section :about="portfolio?.about" />
        <experience-list
          v-for="experience in sortedExperiences"
          :key="experience._id"
          :experience="experience"
          :useIcon="portfolio.isSvg"
          class="flex flex-wrap py-3 hover:bg-indigo-900 hover:shadow-indigo-800/40 hover:shadow-md hover:rounded-md"
        />
        <project-list
          v-for="project in portfolio?.projects"
          :key="project._id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileHeader from "@/components/ProfileHeader.vue";
import AboutSection from "@/components/AboutSection.vue";
import ExperienceList from "@/components/ExperienceList.vue";
import DarkModeToggle from "@/components/Common/DarkModeToggle.vue";
import SocialSection from "@/components/SocialSection.vue";
import ProjectList from "./components/ProjectList.vue";
import { usePortfolioStore } from "@/store/portfolioStore";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
import { Experience } from "./types/experienceType";

const portfolioStore = usePortfolioStore();

const { portfolio, loading, error } = storeToRefs(portfolioStore);

const { loadPortfolio } = portfolioStore;

const hasExperiences = computed(() => {
  return (portfolio.value?.experiences || []).length > 0;
});

const sortedExperiences = computed<Experience[]>(() => {
  const experiences = portfolio.value?.experiences || [];

  return [...experiences].sort((a, b) => {
    const dateA = new Date(a.to || a.from).getTime();
    const dateB = new Date(b.to || b.from).getTime();
    return dateB - dateA;
  });
});

onMounted(async () => {
  await loadPortfolio();
});
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
