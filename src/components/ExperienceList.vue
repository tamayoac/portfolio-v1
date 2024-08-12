<template>
  <div class="px-10 py-6">
    <ul v-if="hasExperiences">
      <li
        v-for="experience in sortedExperiences"
        :key="experience._id"
        class="flex flex-wrap p-3 rounded-lg hover:shadow-md hover:bg-gray-500 dark:hover:bg-indigo-800"
      >
        <div class="flex-grow-0 flex-shrink-0 basis-1/5">
          <div class="text-xs font-bold text-gray-400 py-1">
            {{ formatYear(experience.from) }} - {{ formatYear(experience.to) }}
          </div>
        </div>
        <div class="flex-grow flex-shrink basis-0">
          <h1 class="text-lg hover:text-blue-500 text-black dark:text-white">
            {{ experience.jobTitle }} •
            <a :href="experience.link" target="_blank">{{
              experience.company
            }}</a>
          </h1>
          <div class="text-xs text-gray-400">
            <portable-text :value="experience.description" />
          </div>

          <ul class="flex flex-wrap gap-2 mt-2">
            <framework-pill
              v-for="framework in experience.frameworks"
              :key="framework.name"
              :framework="framework"
            />
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import FrameworkPill from "@/components/Common/FrameworkPill.vue";
import { Experience } from "@/types/experienceType";
const props = defineProps<{
  experiences: Experience[];
}>();

const hasExperiences = computed(() => props.experiences.length > 0);

const sortedExperiences = computed(() => {
  return [...props.experiences].sort((a, b) => {
    const dateA = new Date(a.to).getTime() || new Date(a.from).getTime();
    const dateB = new Date(b.to).getTime() || new Date(b.from).getTime();
    return dateB - dateA;
  });
});

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
