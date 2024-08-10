<template>
  <div class="experiences">
    <ul v-if="experiences.length">
      <li
        v-for="experience in experiences"
        :key="experience._id"
        class="flex flex-wrap hover:bg-gray-100 p-3 rounded-lg hover:shadow-md"
      >
        <div class="flex-grow-0 flex-shrink-0 basis-1/5">
          <p class="text-sm">
            {{ formatYear(experience.from) }} - {{ formatYear(experience.to) }}
          </p>
        </div>
        <div class="flex-grow flex-shrink basis-0">
          <h1 class="text-lg">
            {{ experience.jobTitle }} at
            <a :href="experience.link" target="_blank">{{
              experience.company
            }}</a>
          </h1>
          <p>{{ experience.description }}</p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li
              v-for="framework in experience.frameworks"
              :key="framework.name"
              class="px-3 py-1 bg-blue-500 text-white rounded-full text-sm shadow-md hover:bg-blue-600 transition-colors"
            >
              {{ framework.name }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useExperienceStore } from "@/store/experienceStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const experienceStore = useExperienceStore();

const { experiences, loading, error } = storeToRefs(experienceStore);

const { loadExperiences } = experienceStore;

const formatYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

onMounted(async () => {
  await loadExperiences();
});
</script>

<style scoped>
.experiences {
  padding: 20px;
}
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
