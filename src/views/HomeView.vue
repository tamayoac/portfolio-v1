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

    <!-- Resume Section -->
    <section
      v-if="resumeLink"
      class="animate-fade-in animate-delay-300 rounded-lg border border-stone-200/60 dark:border-stone-800/60 bg-white/75 dark:bg-stone-900/70 shadow-sm shadow-stone-900/10 px-4 py-5 sm:px-5 sm:py-6"
    >
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
      >
        <div class="space-y-1">
          <div
            class="text-[11px] uppercase tracking-[0.18em] text-stone-500 dark:text-stone-500"
          >
            Resume
          </div>
          <p class="text-sm text-stone-700 dark:text-stone-300">
            Download my latest CV to view experience, skills, and projects.
          </p>
        </div>
        <a
          :href="resumeLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm font-semibold text-stone-800 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
        >
          <span>Download Resume</span>
          <svg
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
            />
          </svg>
        </a>
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

const resumeLink = computed(() => {
  return portfolio.value?.resumeUrl || "/resume.pdf";
});

onMounted(async () => {
  await loadPortfolio();
});
</script>
