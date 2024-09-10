<!-- src/components/ProjectImageGallery.vue -->
<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-6">
      <div
        v-for="image in images"
        :key="image._id"
        class="w-full h-52 overflow-hidden border-gray-800 border rounded-lg"
        @click="openModal(image)"
      >
        <img
          :src="getImageUrl(image)"
          alt="Project image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      @click="closeModal"
    >
      <div class="relative">
        <button
          class="absolute top-0 right-0 m-4 text-white text-2xl"
          @click="closeModal"
        >
          &times;
        </button>

        <img
          :src="getImageUrl(selectedImage)"
          alt="Enlarged project image"
          class="max-w-[90vw] max-h-[80vh] object-contain"
          @click.stop
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SanityImage } from "@/types/sanityImageType";
import { defineProps, ref } from "vue";
import { getImageUrl } from "@/sanityClient";

const props = defineProps<{
  images?: Array<SanityImage>;
}>();

const selectedImage = ref<SanityImage | null>(null);

const openModal = (image: SanityImage) => {
  selectedImage.value = image;
};

const closeModal = () => {
  selectedImage.value = null;
};
</script>
