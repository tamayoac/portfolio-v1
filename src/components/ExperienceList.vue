<template>
  <article class="card-hover group">
    <div class="flex flex-col sm:flex-row gap-4">
      <!-- Date Column -->
      <div class="sm:w-36 flex-shrink-0">
        <time
          class="text-xs font-medium text-stone-500 dark:text-stone-500 tabular-nums"
        >
          {{ fromLabel }} — {{ toLabel }}
        </time>
      </div>

      <!-- Content Column -->
      <div class="flex-1 min-w-0">
        <!-- Title & Company -->
        <h3
          class="text-base font-medium text-stone-800 dark:text-stone-200 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors"
        >
          <a
            v-if="experience?.link"
            :href="experience?.link"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline underline-offset-4 decoration-stone-300 dark:decoration-stone-700"
          >
            {{ experience?.jobTitle }}
          </a>
          <span v-else>{{ experience?.jobTitle }}</span>
          <span class="text-stone-400 dark:text-stone-600 mx-2">·</span>
          <span class="text-stone-600 dark:text-stone-400 font-normal">{{
            experience?.company
          }}</span>
        </h3>

        <!-- Description -->
        <div
          class="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
        >
          <custom-text :value="experience?.description" />
        </div>

        <!-- Technologies (pill style) -->
        <div v-if="techPills.length" class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="tech in techPills"
            :key="tech"
            class="inline-flex items-center px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-xs font-medium text-stone-700 dark:text-stone-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import CustomText from "@/components/common/CustomText.vue";
import { Experience } from "@/types/experienceType";
import { computed } from "vue";

const props = defineProps<{
  experience?: Experience;
  useIcon?: boolean;
}>();

const formatMonthYear = (value?: string) => {
  if (!value) return "Present";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Present";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
};

const fromLabel = computed(() => formatMonthYear(props.experience?.from));
const toLabel = computed(() => formatMonthYear(props.experience?.to));

const techPills = computed(() => {
  return props.experience?.frameworks?.map((f) => f.name).filter(Boolean) || [];
});
</script>
