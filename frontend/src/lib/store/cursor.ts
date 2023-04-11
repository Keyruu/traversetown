import { cubicOut } from "svelte/easing";
import { writable } from 'svelte/store';
import { spring, tweened } from "svelte/motion";

export const coords = spring(
  { x: 0, y: 0 },
  {
    stiffness: 0.2,
    damping: 0.7
  }
);

export const scale = tweened(1, {
  duration: 400,
  easing: cubicOut
});

export const extraStyles = writable(getStylesString());
export const icon = writable("");

export function getStylesString(color = '#4a4a4a', mix_blend_mode = 'difference') {
  return `background: ${color}; mix-blend-mode: ${mix_blend_mode};`;
}

export function changeMouse(scaleP: number, extraStylesP: string) {
  scale.set(scaleP);
  extraStyles.set(extraStylesP);
}

export function resetMouse() {
  changeMouse(1, getStylesString());
}