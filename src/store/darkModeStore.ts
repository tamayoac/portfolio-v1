import { defineStore } from "pinia";

export const useDarkModeStore = defineStore("darkMode", {
  state: () => ({
    isDarkMode: localStorage.getItem("isDarkMode") === "true",
  }),

  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("isDarkMode", String(this.isDarkMode));
      document.documentElement.classList.toggle("dark", this.isDarkMode);
    },

    initializeDarkMode() {
      const storedMode = localStorage.getItem("isDarkMode");
      this.isDarkMode = storedMode !== null ? storedMode === "true" : false;
      document.documentElement.classList.toggle("dark", this.isDarkMode);
    },
  },
});
