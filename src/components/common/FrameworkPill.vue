<template>
  <span
    class="inline-flex items-center px-2.5 py-1 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-md text-xs font-medium transition-colors hover:bg-stone-300 dark:hover:bg-stone-700"
  >
    {{ frameworkName }}
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Framework } from "@/types/frameworkType";

const props = defineProps<{
  framework: Framework;
}>();

const frameworkName = computed(() => props.framework.name);
</script>
