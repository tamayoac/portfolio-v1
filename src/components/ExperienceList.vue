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

        <!-- Technologies -->
        <div
          v-if="useIcon && experience?.frameworks?.length"
          class="flex flex-wrap gap-2 mt-4"
        >
          <CustomSVG
            v-for="framework in experience?.frameworks"
            :key="framework.name"
            :framework="framework"
          />
        </div>
        <div
          v-else-if="experience?.frameworks?.length"
          class="flex flex-wrap gap-2 mt-4"
        >
          <framework-pill
            v-for="framework in experience?.frameworks"
            :key="framework.name"
            :framework="framework"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import CustomText from "@/components/common/CustomText.vue";
import FrameworkPill from "@/components/common/FrameworkPill.vue";
import CustomSVG from "@/components/common/CustomSVG.vue";
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
</script>
