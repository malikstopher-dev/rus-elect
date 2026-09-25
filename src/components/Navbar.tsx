"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { BoltMark } from "@/components/ui/BoltMark";
import { useReducedMotion, easings } from "@/lib/motion";
import { business } from "@/data/business";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/industrial", label: "Industrial" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Quote CTA — a notched plate, not a rectangle. The bottom-right corner cut
 * matches the bolt's tail angle: the "plate" language of the Current system.
 */
export function QuotePlate({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/contact#quote"
      onClick={onClick}
      className={`plate-cta plate-cta-primary group relative inline-flex items-center gap-2 bg-rus-yellow px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-rus-black transition-all duration-200 hover:-translate-y-px hover:brightness-105 active:translate-y-0 ${className}`}
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%)",
      }}
    >
      <BoltMark className="h-3 w-auto text-rus-black" />
      <span>Request a quote</span>
      <span className="plate-rail" aria-hidden="true" />
      <span className="plate-terminal" aria-hidden="true" />
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    // Return focus to the toggle so it never gets lost behind/past the overlay
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Move focus into the panel when it opens so focus can't sit behind it.
  useEffect(() => {
    if (isOpen) panelRef.current?.focus();
  }, [isOpen]);

  // Escape closes the menu.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Close the menu on route change.
  const pathnameRef = useRef(pathname);
  useEffect(() => {
    if (pathnameRef.current !== pathname) {
      pathnameRef.current = pathname;
      setIsOpen(false);
    }
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`sticky top-0 z-[100] transition-colors duration-300 ${
          scrolled || isOpen
            ? "bg-rus-black/95 backdrop-blur-md"
            : "bg-rus-black"
        }`}
      >
      {/* Nav hairline — the rail the current indicator rides on */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-rus-white/10" aria-hidden="true" />

      <nav className="container-rus" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex-shrink-0"
            aria-label="RUS Electrical — home"
          >
            <span className="flex items-center gap-3">
              <BoltMark
                shadow
                className="h-8 w-auto text-rus-yellow transition-transform duration-300 group-hover:-translate-y-px"
              />
              <span className="flex flex-col leading-none">
                <span className="flex items-baseline gap-2">
                  <span className="text-lg font-black tracking-tight text-rus-yellow">
                    RUS
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.22em] text-rus-white">
                    Electrical
                  </span>
                </span>
                <span className="mt-1 hidden font-mono text-[9px] uppercase tracking-[0.3em] text-rus-grey/70 sm:block">
                  done in a proper way
                </span>
              </span>
            </span>
          </Link>

          <nav
            className="hidden h-full items-stretch xl:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative flex items-center px-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-200 2xl:px-3 ${
                    active
                      ? "text-rus-white"
                      : "text-rus-grey hover:text-rus-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {/* Hover preview: a faint half-line */}
                  {!active && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-px origin-left scale-x-0 bg-rus-yellow/40 transition-transform duration-200 group-hover:scale-x-100 2xl:left-3 2xl:right-3" />
                  )}
                  {/* Active: the yellow current line glides between items */}
                  {active && (
                    <motion.span
                      layoutId="nav-current"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-rus-yellow 2xl:left-3 2xl:right-3"
                      transition={{
                        duration: reduced ? 0 : 0.4,
                        ease: easings.smooth,
                      }}
                      aria-hidden="true"
                    >
                      <motion.span
                        className="absolute right-0 top-1/2 h-[3px] w-[3px] -translate-y-1/2 bg-rus-yellow"
                        animate={reduced ? {} : { opacity: [1, 0.25, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                      />
                    </motion.span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop utility cluster — number never wraps */}
          <div className="hidden items-center gap-4 xl:flex">
            <a
              href={business.primaryPhoneLink}
              className="flex items-center gap-2 whitespace-nowrap font-mono text-xs tracking-wider text-rus-grey transition-colors duration-200 hover:text-rus-white"
              aria-label={`Call RUS Electrical on ${business.primaryPhone}`}
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-rus-yellow" />
              {business.primaryPhone}
            </a>
            <QuotePlate />
          </div>

          {/* Tablet range (md–xl): compact utility cluster */}
          <div className="hidden items-center gap-4 md:flex xl:hidden">
            <a
              href={business.primaryPhoneLink}
              className="flex h-10 w-10 items-center justify-center border border-rus-white/15 text-rus-yellow transition-colors hover:border-rus-yellow/50"
              aria-label={`Call RUS Electrical on ${business.primaryPhone}`}
            >
              <Phone className="h-4 w-4" />
            </a>
            <QuotePlate />
          </div>

          <button
            ref={menuButtonRef}
            onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
            className="p-2 text-rus-white transition-colors hover:text-rus-yellow xl:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      </header>

      {/*
        Mobile: full-screen branded panel.
        Sibling of <header>, NOT a child — a backdrop-filter on the header
        would become the containing block for position:fixed and collapse
        this panel to zero height (verified regression).
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
            className="fixed inset-x-0 top-16 bottom-0 z-[90] overflow-y-auto bg-rus-black outline-none xl:hidden"
          >
            <BoltMark
              className="pointer-events-none absolute -right-24 top-1/2 h-[85%] -translate-y-1/2 text-rus-white opacity-[0.04]"
              aria-hidden="true"
            />
            {/* Conductor rail energises on open */}
            <motion.span
              className="pointer-events-none absolute left-5 top-10 bottom-10 w-px origin-top bg-rus-yellow/30"
              initial={reduced ? { scaleY: 1 } : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={reduced ? {} : { scaleY: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            />
            <div className="container-rus relative flex min-h-full flex-col py-8 pl-10">
              <ul className="flex-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={reduced ? {} : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: reduced ? 0 : 0.35,
                      delay: reduced ? 0 : 0.08 + index * 0.05,
                      ease: easings.smooth,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => closeMenu()}
                      className="group flex min-h-[56px] items-center gap-4 border-b border-rus-white/10 py-4"
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      <span
                        className={`font-mono text-xs ${
                          isActive(link.href)
                            ? "text-rus-yellow"
                            : "text-rus-grey/50"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-2xl font-bold uppercase tracking-tight transition-colors ${
                          isActive(link.href)
                            ? "text-rus-white"
                            : "text-rus-grey group-hover:text-rus-white"
                        }`}
                      >
                        {link.label}
                      </span>
                      {isActive(link.href) && (
                        <BoltMark className="ml-auto h-4 w-auto text-rus-yellow" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={reduced ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduced ? 0 : 0.35,
                  delay: reduced ? 0 : 0.4,
                }}
                className="flex flex-col gap-3 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-8"
              >
                <a
                  href={business.primaryPhoneLink}
                  onClick={() => closeMenu()}
                  className="call-cta flex min-h-[52px] items-center justify-center gap-3 border border-rus-white/20 py-4 font-mono text-base tracking-wider text-rus-white"
                >
                  <Phone className="contactor-icon h-4 w-4 text-rus-yellow" />
                  {business.primaryPhone}
                </a>
                <QuotePlate
                  className="w-full justify-center py-4 text-sm"
                  onClick={closeMenu}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

