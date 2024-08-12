import { DirectiveBinding } from "vue";

interface TooltipElement extends HTMLElement {
  _tooltipSpan?: HTMLSpanElement;
  _tooltipText?: string;
  _showTooltip?: () => void;
  _hideTooltip?: () => void;
}

const tooltipDirective = {
  mounted(el: TooltipElement, binding: DirectiveBinding<string>) {
    const tooltipSpan = document.createElement("span");
    tooltipSpan.textContent = binding.value;
    tooltipSpan.style.position = "absolute";
    tooltipSpan.style.backgroundColor = "black";
    tooltipSpan.style.color = "white";
    tooltipSpan.style.padding = "5px";
    tooltipSpan.style.borderRadius = "4px";
    tooltipSpan.style.visibility = "hidden";
    tooltipSpan.style.transition = "visibility 0.2s, opacity 0.2s";
    tooltipSpan.style.opacity = "0";

    el.appendChild(tooltipSpan);
    el._tooltipSpan = tooltipSpan;
    el._tooltipText = binding.value;

    const showTooltip = () => {
      tooltipSpan.style.visibility = "visible";
      tooltipSpan.style.opacity = "1";
      tooltipSpan.style.top = `${el.offsetHeight}px`;
      tooltipSpan.style.left = "0";
    };

    const hideTooltip = () => {
      tooltipSpan.style.visibility = "hidden";
      tooltipSpan.style.opacity = "0";
    };

    el._showTooltip = showTooltip;
    el._hideTooltip = hideTooltip;

    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mouseleave", hideTooltip);
  },
  updated(el: TooltipElement, binding: DirectiveBinding<string>) {
    if (el._tooltipText !== binding.value) {
      el._tooltipText = binding.value;
      if (el._tooltipSpan) {
        el._tooltipSpan.textContent = binding.value;
      }
    }
  },
  unmounted(el: TooltipElement) {
    if (el._tooltipSpan) {
      el.removeEventListener("mouseenter", el._showTooltip!);
      el.removeEventListener("mouseleave", el._hideTooltip!);
      el.removeChild(el._tooltipSpan);
    }
  },
};

export default tooltipDirective;
