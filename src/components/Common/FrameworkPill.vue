<template>
  <li
    class="px-3 py-1 bg-indigo-800 text-indigo-300 rounded-full text-xs transition-colors"
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
