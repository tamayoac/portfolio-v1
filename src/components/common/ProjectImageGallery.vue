<template>
  <div class="mt-8">
    <!-- Image Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="image in images"
        :key="image._id"
        class="group relative aspect-video overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800 cursor-pointer"
        @click="openModal(image)"
      >
        <img
          :src="getImageUrl(image)"
          alt="Project image"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <!-- Overlay on hover -->
        <div
          class="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300"
        ></div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-stone-950/90 backdrop-blur-sm"></div>

          <!-- Modal Content -->
          <div class="relative z-10 max-w-5xl w-full">
            <!-- Close Button -->
            <button
              class="absolute -top-12 right-0 text-stone-400 hover:text-stone-200 transition-colors"
              @click="closeModal"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Image -->
            <img
              :src="getImageUrl(selectedImage)"
              alt="Enlarged project image"
              class="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              @click.stop
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { SanityImage } from "@/types/sanityImageType";
import { ref } from "vue";
import { getImageUrl } from "@/sanityClient";

defineProps<{
  images?: Array<SanityImage>;
}>();

const selectedImage = ref<SanityImage | null>(null);

const openModal = (image: SanityImage) => {
  selectedImage.value = image;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedImage.value = null;
  document.body.style.overflow = "";
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>
