<template>
  <div class="flex justify-end px-6">
    <dark-mode-toggle />
  </div>
  <div>
    <about-section :about="portfolio?.about" />
    <experience-list
      v-for="experience in sortedExperiences"
      :key="experience._id"
      :experience="experience"
      :useIcon="portfolio?.isSvg"
      class="flex flex-wrap py-3"
    />
    <div class="border-t border-gray-800"></div>
    <project-list
      v-for="project in portfolio?.projects"
      :key="project._id"
      :project="project"
    />
  </div>
</template>

<script setup lang="ts">
import DarkModeToggle from "@/components/common/DarkModeToggle.vue";
import AboutSection from "@/components/AboutSection";
import ExperienceList from "@/components/ExperienceList";
import ProjectList from "@/components/ProjectList";
import { usePortfolioStore } from "@/store/portfolioStore";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
import { Experience } from "../types/experienceType";

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
