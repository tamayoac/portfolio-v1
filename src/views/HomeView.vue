<template>
  <div class="space-y-16">
    <!-- Dark Mode Toggle -->
    <div class="flex justify-end -mt-4 -mr-2">
      <dark-mode-toggle />
    </div>

    <!-- About Section -->
    <section class="animate-fade-in">
      <about-section :about="portfolio?.about" />
    </section>

    <!-- Experience Section -->
    <section class="animate-fade-in animate-delay-100">
      <h2 class="section-title">Experience</h2>
      <div class="space-y-2">
        <experience-list
          v-for="experience in sortedExperiences"
          :key="experience._id"
          :experience="experience"
          :useIcon="portfolio?.isSvg"
        />
      </div>
    </section>

    <!-- Projects Section -->
    <section class="animate-fade-in animate-delay-200">
      <h2 class="section-title">Projects</h2>
      <div class="space-y-2">
        <project-list
          v-for="project in portfolio?.projects"
          :key="project._id"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import DarkModeToggle from "@/components/common/DarkModeToggle.vue";
import AboutSection from "@/components/AboutSection.vue";
import ExperienceList from "@/components/ExperienceList.vue";
import ProjectList from "@/components/ProjectList.vue";
import { usePortfolioStore } from "@/store/portfolioStore";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
import { Experience } from "../types/experienceType";

const portfolioStore = usePortfolioStore();

const { portfolio } = storeToRefs(portfolioStore);

const { loadPortfolio } = portfolioStore;

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
