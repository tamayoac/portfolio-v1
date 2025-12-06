<template>
  <article class="card-hover group">
    <div class="flex flex-col gap-3 sm:gap-4">
      <!-- Content -->
      <div class="flex-1 min-w-0">
        <!-- Project Title -->
        <h3 class="text-base font-medium text-stone-800 dark:text-stone-200">
          <router-link
            :to="`/project/${project.slug}`"
            class="inline-flex items-center gap-1 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors"
          >
            {{ project.name }}
            <svg
              class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </router-link>
        </h3>

        <!-- Description -->
        <div
          class="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
        >
          <custom-text :value="project.shortDescription" />
        </div>

        <!-- External URL -->
        <div v-if="project.projectUrl" class="mt-3">
          <a
            :href="project.projectUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link-arrow text-sm font-medium"
          >
            View Live Project
          </a>
        </div>

        <!-- Technologies -->
        <div
          v-if="project.technologies?.length"
          class="flex flex-wrap gap-2 mt-4"
        >
          <CustomSVG
            v-for="technology in project.technologies"
            :key="technology.name"
            :framework="technology"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Project } from "@/types/projectType";
import CustomSVG from "@/components/common/CustomSVG.vue";
import CustomText from "@/components/common/CustomText.vue";

defineProps<{
  project: Project;
}>();
</script>
