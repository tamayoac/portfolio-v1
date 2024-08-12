import { App } from "vue";
import tooltip from "./tooltip";

export function registerDirectives(app: App) {
  app.directive("tooltip", tooltip);
}
