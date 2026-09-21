import React from "react";
import { Badge } from "./Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  badgeVariant = "brand",
  dark = false,
}) {
  const alignMap = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start",
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignMap[align]} ${className}`}>
      {eyebrow && (
        <div className="mb-4">
          <Badge
            variant={dark ? "dark" : badgeVariant}
            size="md"
            dot
            dotColor={dark ? "bg-[#4D7CFF]" : "bg-[#1747E8]"}
          >
            {eyebrow}
          </Badge>
        </div>
      )}
      {title && (
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
            dark ? "text-white" : "text-[#102A56]"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
            dark ? "text-[#B8C5D9]" : "text-[#64748B]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
