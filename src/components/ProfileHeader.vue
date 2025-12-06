<template>
  <div class="profile-header">
    <custom-text
      :value="introductionContent"
      :components="customTextComponents"
    />
  </div>
</template>

<script setup lang="ts">
import { h, computed } from "vue";
import CustomText from "@/components/common/CustomText.vue";

const props = defineProps<{
  introduction?: string;
}>();

const introductionContent = computed(() => {
  return props.introduction;
});

// Custom components for minimalist styling
const customTextComponents = {
  block: {
    normal: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "p",
        {
          class:
            "text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-3",
        },
        slots.default?.()
      );
    },
    h1: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "h1",
        {
          class:
            "font-display text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tighter mb-2",
        },
        slots.default?.()
      );
    },
    h2: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "h2",
        {
          class: "text-xl font-medium text-stone-700 dark:text-stone-300 mb-4",
        },
        slots.default?.()
      );
    },
    h4: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "h4",
        {
          class:
            "text-sm uppercase tracking-widest text-stone-500 dark:text-stone-500 font-medium mb-3",
        },
        slots.default?.()
      );
    },
  },
};
</script>

<style scoped>
.profile-header {
  @apply text-left;
}
</style>
