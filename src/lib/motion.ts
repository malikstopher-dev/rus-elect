"use client";

import { useSyncExternalStore } from "react";
import type { Easing } from "framer-motion";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot(): boolean {
  return false;
}

// Hydration-safe: server snapshot is always false, client subscribes to
// matchMedia changes. No setState inside effects, no render-time branching.
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );
}

// Premium motion language: calm, deliberate, fast enough not to slow the user.
// Bezier tuples are the runtime format framer-motion accepts for custom easings.
export const easings: Record<"smooth" | "snappy" | "gentle" | "sharp", Easing> = {
  smooth: [0.16, 1, 0.3, 1],
  snappy: [0.2, 0, 0, 1],
  gentle: [0.25, 0.46, 0.45, 0.94],
  sharp: [0.4, 0, 0.2, 1],
};

export const transitions = {
  fast: { duration: 0.2, ease: easings.sharp },
  normal: { duration: 0.4, ease: easings.smooth },
  slow: { duration: 0.7, ease: easings.smooth },
  entrance: { duration: 0.9, ease: easings.smooth },
  stagger: { duration: 0.6, ease: easings.smooth },
};

export function createStaggeredTransition(
  index: number,
  baseDelay: number = 0.1,
  maxDelay: number = 0.6
) {
  return { delay: Math.min(baseDelay * index, maxDelay) };
}

export const fadeInUp = (reduced: boolean) => ({
  initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.entrance,
});

export const fadeInLeft = (reduced: boolean) => ({
  initial: reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: transitions.entrance,
});

export const fadeInRight = (reduced: boolean) => ({
  initial: reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: transitions.entrance,
});

export const maskReveal = (reduced: boolean) => ({
  initial: reduced ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 100% 0 0)" },
  animate: { clipPath: "inset(0 0 0 0)" },
  transition: { ...transitions.entrance, duration: 1.1 },
});

export const lineDraw = (reduced: boolean, delay: number = 0) => ({
  initial: reduced ? { pathLength: 1, pathOffset: 0 } : { pathLength: 0, pathOffset: 1 },
  animate: { pathLength: 1, pathOffset: 0 },
  transition: { duration: reduced ? 0 : 1.2, ease: easings.smooth, delay },
});

export const scaleIn = (reduced: boolean) => ({
  initial: reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: transitions.entrance,
});
