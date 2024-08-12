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
          <ProfileHeader
            :name="portfolio.name"
            :title="portfolio.title"
            :introduction="portfolio.introduction"
          />
          <social-section :socials="portfolio.socials" />
        </div>
      </div>
      <div
        class="right-section flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col"
      >
        <div class="flex justify-end">
          <DarkModeToggle />
        </div>
        <about-section :about="portfolio.about" />
        <experience-list :experiences="portfolio?.experiences" />
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

import { usePortfolioStore } from "@/store/portfolioStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const portfolioStore = usePortfolioStore();

const { portfolio, loading, error } = storeToRefs(portfolioStore);

const { loadPortfolio } = portfolioStore;

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
