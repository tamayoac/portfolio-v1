<template>
  <div class="px-6 py-6">
    <div class="flex-grow-0 flex-shrink-0 basis-1/5">
      <div class="text-xs font-bold text-gray-400 py-1">
        {{ formatYear(experience.from) }} - {{ formatYear(experience.to) }}
      </div>
    </div>
    <div class="flex-grow flex-shrink basis-0">
      <a :href="experience.link" class="header">
        {{ experience.jobTitle }} •
        <a target="_blank">{{ experience.company }}</a>
      </a>
      <div class="description">
        <portable-text :value="experience.description" />
      </div>

      <div v-if="useIcon" class="icon-container gap-3">
        <CustomSVG
          v-for="framework in experience.frameworks"
          :key="framework.name"
          :framework="framework"
        />
      </div>
      <div v-else class="icon-container gap-2">
        <framework-pill
          v-for="framework in experience.frameworks"
          :key="framework.name"
          :framework="framework"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import FrameworkPill from "@/components/Common/FrameworkPill.vue";
import CustomSVG from "@/components/Common/CustomSVG.vue";
import { Experience } from "@/types/experienceType";
const props = defineProps<{
  experience: Experience;
  useIcon: boolean;
}>();

const formatYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.getFullYear();
};
</script>

<style scoped>
h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}
h3 {
  font-size: 1.2em;
  margin: 5px 0;
}
p {
  font-size: 1em;
  color: #555;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 15px;
}
</style>
