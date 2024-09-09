<template>
  <div class="flex flex-wrap px-6 py-6">
    <div class="flex-grow-0 flex-shrink-0 basis-1/5">
      <div class="pr-6">
        <img
          v-if="modifiedImages.length"
          :src="modifiedImages[0].url"
          :alt="`First image for ${project.name}`"
          class="border-2 border-gray-700 rounded"
        />
      </div>
    </div>
    <div class="flex-grow flex-shrink basis-0">
      <div class="header">
        <router-link :to="`/project/${project.slug}`">{{
          project.name
        }}</router-link>
      </div>
      <sanity-text :value="project.description" />
      <div class="icon-container gap-3 mt-4">
        <CustomSVG
          v-for="technology in project.technologies"
          :key="technology.name"
          :framework="technology"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "@/types/projectType";
import { defineProps, computed } from "vue";
import { urlFor } from "@/utils/imageUrlBuilder";
import CustomSVG from "@/components/common/CustomSVG.vue";
import SanityText from "@/components/common/SanityText.vue";
const props = defineProps<{
  project: Project;
}>();

const modifiedImages = computed(() => {
  return (
    props.project.images?.map((image) => {
      return {
        ...image,
        url: urlFor(image).width(400).url(),
      };
    }) || []
  );
});
</script>
