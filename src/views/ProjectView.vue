<template>
  <div class="animate-fade-in">
    <!-- Header -->
    <div class="flex justify-between items-center mb-12">
      <button
        @click="goBack"
        class="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors group"
      >
        <svg
          class="w-4 h-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back
      </button>

      <dark-mode-toggle />
    </div>

    <!-- Project Content -->
    <div class="space-y-4">
      <div
        class="rounded-lg border border-stone-200/60 dark:border-stone-800/60 bg-white/75 dark:bg-stone-900/70 shadow-lg shadow-stone-900/20 backdrop-blur px-3.5 py-5 sm:px-4 sm:py-6"
      >
        <header class="space-y-1.5">
          <div
            class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-stone-500 dark:text-stone-500"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Project Overview
          </div>
          <h1
            class="font-display text-[24px] sm:text-[28px] font-bold text-stone-900 dark:text-stone-50 tracking-tight"
          >
            {{ currentProject?.name }}
          </h1>
          <a
            v-if="currentProject?.projectUrl"
            :href="currentProject?.projectUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-semibold text-stone-800 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
          >
            <span>View Live Project</span>
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </header>

        <div class="mt-4 space-y-5">
          <div class="prose-minimal text-stone-700 dark:text-stone-200">
            <custom-text :value="currentProject?.description" />
          </div>

          <div
            v-if="currentProject?.technologies?.length"
            class="flex flex-wrap gap-2"
          >
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-500"
            >
              Tech Stack
            </span>
            <div class="w-full flex flex-wrap gap-2">
              <span
                v-for="tech in currentProject?.technologies"
                :key="tech.name"
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-[12px] font-medium"
              >
                <span>{{ tech.name }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-lg overflow-hidden border border-stone-200/60 dark:border-stone-800/60 bg-white/65 dark:bg-stone-900/60 shadow-md shadow-stone-900/12"
      >
        <project-image-gallery :images="currentProject?.images" />
      </div>

      <div
        class="rounded-lg border border-stone-200/60 dark:border-stone-800/60 bg-white/70 dark:bg-stone-900/70 shadow-sm shadow-stone-900/10 px-3.5 py-4 sm:px-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectImageGallery from "@/components/common/ProjectImageGallery.vue";
import CustomText from "@/components/common/CustomText.vue";
import DarkModeToggle from "@/components/common/DarkModeToggle.vue";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { usePortfolioStore } from "@/store/portfolioStore";

const route = useRoute();
const router = useRouter();
const portfolioStore = usePortfolioStore();
const { portfolio } = storeToRefs(portfolioStore);

const currentProject = computed(() => {
  return portfolio.value?.projects.find(
    (project) => project.slug === route.params.slug
  );
});

const resumeLink = computed(() => {
  return portfolio.value?.resumeUrl || "/resume.pdf";
});

const goBack = () => {
  router.back();
};
</script>
