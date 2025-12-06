<template>
  <div class="about-section">
    <custom-text :value="aboutContent" :components="customTextComponents" />
  </div>
</template>

<script setup lang="ts">
import { h, computed } from "vue";
import CustomText from "@/components/common/CustomText.vue";

const props = defineProps<{
  about?: string;
}>();

const aboutContent = computed(() => {
  return props.about;
});

// Custom components for minimalist about styling
const customTextComponents = {
  block: {
    normal: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "p",
        {
          class:
            "text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-4 last:mb-0",
        },
        slots.default?.()
      );
    },
    h2: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "h2",
        {
          class:
            "font-display text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4",
        },
        slots.default?.()
      );
    },
  },
};
</script>
