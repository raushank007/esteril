// src/components/ui/Badge.tsx
import React from 'react';

interface BadgeProps {
  text: string;
  type?: 'compliance' | 'category';
}

export default function Badge({ text, type = 'compliance' }: BadgeProps) {
  // Logic to switch colors based on the "type" prop
  // 'compliance' = Green (Good for USFDA/cGMP tags)
  // 'category' = Blue (Good for "Vessel" or "CIP" tags)

  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border";

  const typeStyles = type === 'compliance'
    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
    : "bg-blue-50 text-blue-700 border-blue-200";

  return (
    <span className={`${baseStyles} ${typeStyles}`}>
      {text}
    </span>
  );
}