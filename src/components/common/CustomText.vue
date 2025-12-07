<template>
  <portable-text :value="value" :components="customComponents" />
</template>

<script setup lang="ts">
import { h } from "vue";

const props = defineProps<{
  value: unknown;
  components?: Record<string, unknown>;
}>();

const defaultComponents = {
  block: {
    normal: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "p",
        {
          class:
            "text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-3 last:mb-0",
        },
        slots.default?.()
      );
    },
    h1: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "h1",
        {
          class:
            "font-display text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-4",
        },
        slots.default?.()
      );
    },
    h2: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "h2",
        {
          class:
            "font-display text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-4",
        },
        slots.default?.()
      );
    },
    h3: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "h3",
        {
          class: "text-xl font-medium text-stone-800 dark:text-stone-200 mb-3",
        },
        slots.default?.()
      );
    },
    h4: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "h4",
        {
          class:
            "text-sm uppercase tracking-widest text-stone-500 font-medium mb-3",
        },
        slots.default?.()
      );
    },
  },
  marks: {
    strong: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "strong",
        { class: "font-semibold text-stone-800 dark:text-stone-200" },
        slots.default?.()
      );
    },
    em: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h("em", { class: "italic" }, slots.default?.());
    },
    link: (
      { value }: { value: { href?: string } },
      { slots }: { slots: { default?: () => unknown } }
    ) => {
      return h(
        "a",
        {
          href: value?.href,
          target: "_blank",
          rel: "noopener noreferrer",
          class:
            "underline decoration-stone-300 dark:decoration-stone-700 underline-offset-4 hover:decoration-stone-500 dark:hover:decoration-stone-500 transition-colors",
        },
        slots.default?.()
      );
    },
  },
  list: {
    bullet: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "ul",
        {
          class:
            "list-disc pl-5 space-y-2 text-base text-stone-600 dark:text-stone-400 mb-3 last:mb-0",
        },
        slots.default?.()
      );
    },
    number: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h(
        "ol",
        {
          class:
            "list-decimal pl-5 space-y-2 text-base text-stone-600 dark:text-stone-400 mb-3 last:mb-0",
        },
        slots.default?.()
      );
    },
  },
  listItem: {
    bullet: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h("li", {}, slots.default?.());
    },
    number: (_: unknown, { slots }: { slots: { default?: () => unknown } }) => {
      return h("li", {}, slots.default?.());
    },
  },
};

const customComponents = { ...defaultComponents, ...props.components };
</script>
