<template>
  <div>
    <portable-text :value="value" :components="customComponents" />
  </div>
</template>

<script setup lang="ts">
import { h, defineProps } from "vue";

const props = defineProps<{
  value: any;
  components?: Record<string, any>;
}>();

const defaultComponents = {
  block: {
    normal: (_: any, { slots }: any) => {
      return h("p", { class: "text-md mb-2" }, slots.default?.());
    },
    h1: (_: any, { slots }: any) => {
      return h(
        "h1",
        { class: "text-5xl text-indigo-600 mb-4" },
        slots.default?.()
      );
    },
    h2: (_: any, { slots }: any) => {
      return h(
        "h2",
        { class: "text-3xl font-semibold mb-4" },
        slots.default?.()
      );
    },
    h4: (_: any, { slots }: any) => {
      return h("h4", { class: "text-lg font-light mb-4" }, slots.default?.());
    },
  },
};

const customComponents = { ...defaultComponents, ...props.components };
</script>

<style scoped>
p {
  color: #333;
}

h1 {
  color: #1a202c;
}

h2 {
  color: #2d3748;
}

h4 {
  color: #4a5568;
}
</style>
