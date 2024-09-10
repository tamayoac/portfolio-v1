<template>
  <div class="px-6">
    <div class="flex justify-between items-center">
      <button @click="goBack" class="flex items-center space-x-2 py-2 rounded">
        <font-awesome-icon :icon="['fas', 'arrow-left']" class="w-4 h-4" />
      </button>

      <div>
        <dark-mode-toggle />
      </div>
    </div>

    <h2 class="text-2xl font-bold mb-4">{{ currentProject?.name }}</h2>
    <custom-text :value="currentProject?.description" />

    <project-image-gallery :images="currentProject?.images" />
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
