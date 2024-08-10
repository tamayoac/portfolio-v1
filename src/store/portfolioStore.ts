import { defineStore } from "pinia";
import { fetchPortfolio } from "@/sanity/portfolio";
import type { Portfolio } from "@/types/portfolioType";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    portfolio: null as Portfolio | null,
    loading: false as boolean,
    error: null as string | null,
  }),

  actions: {
    async loadPortfolio() {
      this.loading = true;
      this.error = null;
      try {
        const portfolio = await fetchPortfolio();
        if (portfolio) {
          this.portfolio = portfolio;
        } else {
          this.error = "Portfolio not found";
          this.portfolio = null;
        }
      } catch (error) {
        console.error("Failed to fetch portfolio:", error);
        this.error = "Failed to load portfolio";
        this.portfolio = null;
      } finally {
        this.loading = false;
      }
    },
  },
});
