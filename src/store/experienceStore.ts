import { defineStore } from "pinia";
import { fetchExperiences } from "@/sanity/experience";
import type { Experience } from "@/types/experienceType";

export const useExperienceStore = defineStore("experience", {
  state: () => ({
    experiences: [] as Experience[],
    loading: false as boolean,
    error: null as string | null,
  }),
  actions: {
    async loadExperiences() {
      this.loading = true;
      try {
        const experiences = await fetchExperiences();

        this.experiences = experiences.sort((a, b) => {
          const dateA = new Date(a.from).getTime();
          const dateB = new Date(b.from).getTime();
          return dateB - dateA;
        });
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
        this.error = "Failed to load experiences";
      } finally {
        this.loading = false;
      }
    },
  },
});
