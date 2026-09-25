/**
 * The RUS "Current" graphic system.
 *
 * Derived from the RUS logo: the italic R is cut by a two-tone lightning bolt
 * (red shadow + yellow strike). This module provides:
 *
 *  BOLT_PATH      — the bolt silhouette as an SVG path (viewBox 0 0 120 200)
 *  BoltMark       — the bolt as a reusable SVG component (optional red shadow)
 *  RusWordmark    — RUS symbol + typographic wordmark ("RUS ELECTRICAL")
 *  CurrentLine    — an SVG <path> pre-wired with the travelling-current
 *                   animation (stroke-dash flow, disabled by the global
 *                   reduced-motion override)
 *
 *  PlateLink      — notched plate CTA (bottom-right corner sheared), used for
 *                   route-page CTAs so the bolt angle recurs in chrome
 *
 * Consumed by: Navbar, Hero, Services, Residential, Commercial, Process,
 * ServiceVehicle, PageHero and all route pages. Keep geometry consistent —
 * the bolt angle is the brand.
 */

import Link from "next/link";

export const BOLT_PATH = "M76 4 L26 96 L52 96 L18 196 L104 76 L72 76 Z";
export const BOLT_VIEWBOX = "0 0 120 200";

const PLATE_CLIP =
  "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)";

export function BoltMark({
  className = "",
  shadow = false,
}: {
  className?: string;
  shadow?: boolean;
}) {
  return (
    <svg
      viewBox={BOLT_VIEWBOX}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {shadow && (
        <path d={BOLT_PATH} transform="translate(-7 7)" fill="#E51B23" />
      )}
      <path d={BOLT_PATH} />
    </svg>
  );
}

/**
 * Typographic wordmark. The bitmap logo stays in the footer / print context;
 * nav uses crisp type so the mark survives any resolution.
 */
export function RusWordmark({
  className = "",
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <BoltMark shadow className="h-8 w-auto text-rus-yellow" />
      <span className="flex flex-col leading-none">
        <span className="flex items-baseline gap-2">
          <span className="text-lg font-black tracking-tight text-rus-yellow">
            RUS
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-rus-white">
            Electrical
          </span>
        </span>
        {showTagline && (
          <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-rus-grey/70">
            done in a proper way
          </span>
        )}
      </span>
    </span>
  );
}

/**
 * A path that a pulse of "current" travels along. Render inside an <svg>.
 * `pathLength={1}` normalises the dash math so .current-line works at any
 * path length. Falls back to a static hairline under reduced-motion via the
 * global CSS override.
 */
/**
 * Notched plate CTAs. Bottom-right corner is sheared off at the same angle as
 * the bolt's lower blade. `primary` = yellow plate (action); `ghost` =
 * hairline outline (secondary affordance).
 */
export function PlateLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-200";
  const skin =
    variant === "primary"
      ? "bg-rus-yellow text-rus-black hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
      : "border border-rus-white/25 text-rus-white hover:border-rus-yellow/60 hover:bg-rus-yellow/5";
  return (
    <Link
      href={href}
      className={`${base} ${skin} plate-cta ${variant === "primary" ? "plate-cta-primary" : ""} ${className}`}
      style={{ clipPath: PLATE_CLIP }}
    >
      {children}
      {/* Electrical hover: rail segment crosses the edge, terminal lights */}
      <span className="plate-rail" aria-hidden="true" />
      <span className="plate-terminal" aria-hidden="true" />
    </Link>
  );
}

export function CurrentLine({
  d,
  strokeWidth = 1.5,
  opacity = 0.9,
}: {
  d: string;
  strokeWidth?: number;
  opacity?: number;
}) {
  return (
    <path
      d={d}
      pathLength={1}
      className="current-line"
      stroke="#FFC400"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      fill="none"
      opacity={opacity}
    />
  );
}
