import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconRight: IconRight,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-[11px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#1747E8] hover:bg-[#123CC7] text-white shadow-sm hover:shadow-md focus:ring-[#1747E8]/40",
    secondary:
      "bg-white hover:bg-[#F7F9FC] text-[#102A56] border border-[#102A56] hover:border-[#102A56] focus:ring-[#102A56]/30",
    outline:
      "bg-white hover:bg-[#F7F9FC] text-[#172B4D] border border-[#E2E8F0] hover:border-[#CBD5E1] focus:ring-[#CBD5E1]",
    ghost:
      "bg-transparent hover:bg-[#EEF4FF] text-[#64748B] hover:text-[#1747E8] focus:ring-[#1747E8]/20",
    darkSecondary:
      "bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white/60 focus:ring-white/40",
    danger:
      "bg-red-600 hover:bg-red-500 text-white shadow-sm focus:ring-red-500",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {IconRight && <IconRight className="w-4 h-4 shrink-0" />}
    </button>
  );
}
