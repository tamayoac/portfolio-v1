<template>
  <div class="svg-container" v-tooltip="framework.name">
    <div
      v-html="svgContent"
      class="text-stone-500 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { Framework } from "@/types/frameworkType";
import { computed } from "vue";

const props = defineProps<{
  framework: Framework;
}>();

const svgContent = computed(() => {
  return props.framework.svgIcon?.replace(
    "<svg ",
    '<svg style="width: 22px; height: 22px;" '
  );
});
</script>

<style scoped>
.svg-container {
  @apply inline-flex items-center justify-center;
}
</style>
