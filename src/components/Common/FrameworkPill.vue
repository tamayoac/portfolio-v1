<template>
  <li
    class="px-3 py-1 bg-indigo-800 text-indigo-300 rounded-full text-xs transition-colors"
  >
    {{ frameworkName }}
  </li>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { Framework } from "@/types/frameworkType";
const props = defineProps<{
  framework: Framework;
}>();

const frameworkName = computed(() => props.framework.name);
</script>
