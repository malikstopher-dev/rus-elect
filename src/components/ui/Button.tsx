"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, FileText } from "lucide-react";
import { useReducedMotion } from "@/lib/motion";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "call" | "quote";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: "arrow" | "phone" | "quote";
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

function getIcon(icon?: "arrow" | "phone" | "quote") {
  if (icon === "arrow") return <ArrowRight className="w-4 h-4" aria-hidden="true" />;
  if (icon === "phone") return <Phone className="w-4 h-4" aria-hidden="true" />;
  if (icon === "quote") return <FileText className="w-4 h-4" aria-hidden="true" />;
  return null;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const reduced = useReducedMotion();

  const sizeStyles = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-10 py-4.5 text-base",
  };

  const variantStyles = {
      primary:
        "bg-rus-yellow text-rus-black hover:bg-rus-yellow/90 active:bg-rus-yellow active:scale-[0.98]",
    secondary:
      "bg-rus-graphite text-rus-white border border-rus-white/10 hover:border-rus-yellow/30 hover:bg-rus-graphite/80 active:scale-[0.98]",
    outline:
      "bg-transparent text-rus-white border border-rus-white/20 hover:border-rus-yellow/50 hover:bg-rus-yellow/5 active:scale-[0.98]",
    call: "bg-rus-yellow text-rus-black hover:bg-rus-yellow/90 active:scale-[0.98]",
    quote:
      "bg-rus-black text-rus-white border border-rus-white/20 hover:border-rus-yellow/50 hover:bg-rus-yellow/5 hover:text-rus-yellow active:scale-[0.98]",
  };

  const baseClassName = `relative inline-flex items-center justify-center font-semibold tracking-wide transition-all outline-none focus-visible:ring-2 focus-visible:ring-rus-yellow/50 focus-visible:ring-offset-2 focus-visible:ring-offset-rus-black ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

    const renderIcon = (position: "left" | "right") => {
      if (!icon || iconPosition !== position) return null;
      return <span className="flex-shrink-0">{getIcon(icon)}</span>;
    };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={baseClassName}
        whileTap={reduced ? {} : { scale: 0.97 }}
        whileHover={reduced ? {} : { y: -1 }}
      >
        <span className={`flex items-center ${iconPosition === "left" ? "flex-row" : "flex-row"}`}>
          {renderIcon("left")}
          <span className="relative z-10">{children}</span>
          {renderIcon("right")}
        </span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={baseClassName}
      whileTap={reduced ? {} : { scale: 0.97 }}
      whileHover={reduced ? {} : { y: -1 }}
    >
      <span className="flex items-center">
        {renderIcon("left")}
        <span className="relative z-10">{children}</span>
        {renderIcon("right")}
      </span>
    </motion.button>
  );
}
