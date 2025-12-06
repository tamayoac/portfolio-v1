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
    <div class="space-y-10">
      <div
        class="rounded-2xl border border-stone-200/70 dark:border-stone-800/70 bg-white/80 dark:bg-stone-900/70 shadow-2xl shadow-stone-900/30 backdrop-blur px-6 py-8 sm:px-10 sm:py-10"
      >
        <header class="space-y-3">
          <div
            class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Project Overview
          </div>
          <h1
            class="font-display text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight"
          >
            {{ currentProject?.name }}
          </h1>
          <div class="flex flex-wrap items-center gap-3">
            <a
              v-if="currentProject?.projectUrl"
              :href="currentProject?.projectUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors text-sm font-semibold"
            >
              View Live Project
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
          </div>
        </header>

        <div class="mt-6 space-y-8">
          <div class="prose-minimal text-stone-700 dark:text-stone-300">
            <custom-text :value="currentProject?.description" />
          </div>

          <div
            v-if="currentProject?.technologies?.length"
            class="flex flex-wrap gap-2"
          >
            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500"
            >
              Tech Stack
            </span>
            <div class="w-full flex flex-wrap gap-2">
              <span
                v-for="tech in currentProject?.technologies"
                :key="tech.name"
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium"
              >
                <span>{{ tech.name }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-2xl overflow-hidden border border-stone-200/70 dark:border-stone-800/70 bg-white/70 dark:bg-stone-900/60 shadow-xl shadow-stone-900/20"
      >
        <project-image-gallery :images="currentProject?.images" />
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

const goBack = () => {
  router.back();
};
</script>
