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
    <div class="space-y-8">
      <header>
        <h1
          class="font-display text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-4"
        >
          {{ currentProject?.name }}
        </h1>
        <div v-if="currentProject?.projectUrl" class="mt-2">
          <a
            :href="currentProject?.projectUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            <span>View Live Project</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      <div class="prose-minimal">
        <custom-text :value="currentProject?.description" />
      </div>

      <project-image-gallery :images="currentProject?.images" />
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
