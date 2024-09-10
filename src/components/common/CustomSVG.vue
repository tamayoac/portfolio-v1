<template>
  <div class="svg-container" v-tooltip="framework.name">
    <div v-html="svgContent"></div>
  </div>
</template>

<script setup lang="ts">
import { Framework } from "@/types/frameworkType";
import { defineProps, computed } from "vue";

const props = defineProps<{
  framework: Framework;
}>();

const svgContent = computed(() => {
  return props.framework.svgIcon?.replace(
    "<svg ",
    '<svg style="width: 25px; height: 25px;" '
  );
});
</script>

<style scoped>
.svg-container {
  display: inline-block;
  position: relative;
}

.svg-container svg {
  width: 50px;
  height: auto;
}
</style>
