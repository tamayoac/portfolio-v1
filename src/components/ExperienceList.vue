<template>
  <div class="px-10 py-6">
    <ul v-if="experiences.length">
      <li
        v-for="experience in experiences"
        :key="experience._id"
        class="flex flex-wrap p-3 rounded-lg hover:shadow-md hover:bg-gray-500 dark:hover:bg-indigo-900"
      >
        <div class="flex-grow-0 flex-shrink-0 basis-1/5">
          <div class="text-xs">
            {{ formatYear(experience.from) }} - {{ formatYear(experience.to) }}
          </div>
        </div>
        <div class="flex-grow flex-shrink basis-0">
          <h1 class="text-lg hover:text-blue-500 text-black dark:text-white">
            {{ experience.jobTitle }} at
            <a :href="experience.link" target="_blank">{{
              experience.company
            }}</a>
          </h1>
          <div class="text-xs">{{ experience.description }}</div>

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
import { defineProps } from "vue";
import { Framework } from "@/types/frameworkType";
import FrameworkPill from "@/components/Common/FrameworkPill.vue";
const props = defineProps<{
  experiences: Array<{
    _id: string;
    jobTitle: string;
    company: string;
    description: string;
    from: string;
    to: string;
    link: string;
    frameworks: Framework[];
  }>;
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
