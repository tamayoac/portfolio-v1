<template>
  <div
    id="app"
    class="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 transition-colors duration-300"
  >
    <div class="flex flex-col lg:flex-row min-h-screen">
      <!-- Left Section - Profile -->
      <div
        :class="leftSectionClass"
        class="relative bg-stone-100 dark:bg-stone-900 flex items-center justify-center transition-all duration-500 ease-out"
      >
        <div
          class="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-px bg-gradient-to-b from-transparent via-stone-700/40 dark:via-stone-200/25 to-transparent"
        ></div>
        <div
          v-if="!isLoading"
          class="flex flex-col px-8 lg:px-12 py-16 lg:py-0 max-w-md animate-fade-in"
        >
          <profile-header :introduction="portfolioData?.introduction" />
          <social-section :socials="portfolioData?.socials" />
        </div>

        <!-- Loading state -->
        <div v-else class="flex items-center justify-center">
          <div
            class="w-6 h-6 border-2 border-stone-300 dark:border-stone-600 border-t-stone-600 dark:border-t-stone-300 rounded-full animate-spin"
          ></div>
        </div>
      </div>

      <!-- Right Section - Content -->
      <div
        :class="rightSectionClass"
        class="overflow-y-auto bg-gradient-to-br from-stone-50 via-stone-100 to-stone-50 dark:from-stone-950 dark:via-stone-900 dark:to-black transition-all duration-500 ease-out"
      >
        <div class="max-w-2xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <transition name="slide-fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileHeader from "@/components/ProfileHeader.vue";
import SocialSection from "@/components/SocialSection.vue";
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
  return route.name === "project"
    ? "w-full lg:w-[35%] lg:fixed lg:h-screen lg:left-0"
    : "w-full lg:w-1/2 lg:fixed lg:h-screen lg:left-0";
});

const rightSectionClass = computed(() => {
  return route.name === "project"
    ? "w-full lg:w-[65%] lg:ml-[35%] min-h-screen"
    : "w-full lg:w-1/2 lg:ml-[50%] min-h-screen";
});

onMounted(async () => {
  await loadPortfolio();
});
</script>
