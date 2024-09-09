<template>
  <div
    id="app"
    class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
  >
    <div class="flex flex-col md:flex-row h-screen">
      <div
        :class="leftSectionClass"
        class="bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors transition-width duration-500 ease-in-out"
      >
        <div
          v-if="!isLoading"
          class="flex flex-col justify-between items-stretch mb-[24rem]"
        >
          <profile-header :introduction="portfolioData?.introduction" />
          <social-section :socials="portfolioData?.socials" />
        </div>
      </div>

      <div
        :class="rightSectionClass"
        class="overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900 transition-colors transition-width duration-500 ease-in-out"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileHeader from "@/components/ProfileHeader";
import SocialSection from "@/components/SocialSection";
import { usePortfolioStore } from "@/store/portfolioStore";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const portfolioStore = usePortfolioStore();
const { portfolio, loading } = storeToRefs(portfolioStore);
const { loadPortfolio } = portfolioStore;

const portfolioData = portfolio;
const isLoading = loading;
const route = useRoute();

const leftSectionClass = computed(() => {
  return route.name === "project" ? "w-full md:w-1/3" : "w-full md:w-1/2";
});

const rightSectionClass = computed(() => {
  return route.name === "project" ? "w-full md:w-2/3" : "w-full md:w-1/2";
});

onMounted(async () => {
  await loadPortfolio();
});
</script>
