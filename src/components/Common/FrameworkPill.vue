<template>
  <li
    class="px-3 py-1 bg-gradient-to-r from-indigo-900 to-indigo-500 text-indigo-300 rounded-full text-xs transition-colors"
  >
    {{ framework.name }}
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  framework: {
    name: string;
  };
}>();
</script>
