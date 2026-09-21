import React from "react";

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className = "",
  dot = false,
  dotColor = "bg-[#1747E8]",
}) {
  const baseStyles =
    "inline-flex items-center font-mono font-medium rounded-full tracking-wide";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
  };

  const variantStyles = {
    brand:
      "bg-[#EEF4FF] text-[#1747E8] border border-[#1747E8]/20",
    success:
      "bg-[#18A875]/10 text-[#18A875] border border-[#18A875]/25",
    warning:
      "bg-[#F4B740]/15 text-[#B45309] border border-[#F4B740]/30",
    danger:
      "bg-rose-500/10 text-rose-600 border border-rose-500/20",
    neutral:
      "bg-[#F7F9FC] text-[#172B4D] border border-[#E2E8F0]",
    navy:
      "bg-[#102A56]/10 text-[#102A56] border border-[#102A56]/20",
    dark:
      "bg-white/10 text-white border border-white/20",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse shrink-0`}
        />
      )}
      {children}
    </span>
  );
}
