<template>
  <div class="name-title-details">
    <portable-text :value="introductionContent" :components="components" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, h, computed } from "vue";

const props = defineProps<{
  introduction: string;
}>();

const introductionContent = computed(() => {
  return props.introduction;
});

const components = {
  block: {
    normal: (_: any, { slots }: any) => {
      return h("p", { class: "text-2xl mb-4" }, slots.default?.());
    },
    h1: (_: any, { slots }: any) => {
      return h("h1", { class: "text-5xl text-indigo-600" }, slots.default?.());
    },
    h4: (_: any, { slots }: any) => {
      return h("h4", { class: "text-lg font-light my-3" }, slots.default?.());
    },
  },
};
</script>

<style scoped>
.name-title-details {
  text-align: left;
  padding: 20px;
}
h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}
h2 {
  font-size: 1.5em;
  color: #666;
  margin-bottom: 10px;
}
p {
  font-size: 1em;
  color: #888;
}
</style>
