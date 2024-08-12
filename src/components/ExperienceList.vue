<template>
  <div class="px-14 py-6">
    <ul v-if="hasExperiences">
      <li
        v-for="experience in sortedExperiences"
        :key="experience._id"
        class="flex flex-wrap py-3"
      >
        <div class="flex-grow-0 flex-shrink-0 basis-1/5">
          <div class="text-xs font-bold text-gray-400 py-1">
            {{ formatYear(experience.from) }} - {{ formatYear(experience.to) }}
          </div>
        </div>
        <div class="flex-grow flex-shrink basis-0">
          <a
            :href="experience.link"
            class="text-lg dark:hover:text-indigo-700 text-black dark:text-white"
          >
            {{ experience.jobTitle }} •
            <a target="_blank">{{ experience.company }}</a>
          </a>
          <div class="text-sm text-gray-400 pt-2">
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
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import FrameworkPill from "@/components/Common/FrameworkPill.vue";
import CustomSVG from "@/components/Common/CustomSVG.vue";
import { Experience } from "@/types/experienceType";
const props = defineProps<{
  experiences: Experience[];
  useIcon: boolean;
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
.icon-container {
  @apply flex flex-wrap mt-4;
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
