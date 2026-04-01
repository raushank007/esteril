"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { prepare, layout } from "@chenglou/pretext";
import { ShieldCheck } from "lucide-react";

interface PretextStandardCardProps {
  title: string;
  description: string;
}

export default function PretextStandardCard({ title, description }: PretextStandardCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(300);

  // 1. Add a mounted state to track when we are safely in the browser
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Component has mounted in the browser
    setIsMounted(true);

    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setContentWidth(entries[0].contentRect.width - 64);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const measurements = useMemo(() => {
    // 2. Guard Clause: If we are on the server OR not yet mounted, return auto height
    if (typeof window === 'undefined' || !isMounted) {
      return {
        titleHeight: 'auto',
        descHeight: 'auto',
      };
    }

    try {
      // 3. Now it is completely safe to use the browser's Canvas API
      const preparedTitle = prepare(title, "bold 24px Inter");
      const preparedDesc = prepare(description, "16px Inter");

      const titleLayout = layout(preparedTitle, contentWidth, 32);
      const descLayout = layout(preparedDesc, contentWidth, 28);

      return {
        titleHeight: titleLayout.height,
        descHeight: descLayout.height,
      };
    } catch (error) {
      console.error("Text layout measurement failed:", error);
      return { titleHeight: 'auto', descHeight: 'auto' };
    }
  }, [title, description, contentWidth, isMounted]);

  return (
    <div
      ref={containerRef}
      className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full"
    >
      <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
        <ShieldCheck className="text-blue-600 w-7 h-7" />
      </div>

      <div style={{ height: measurements.titleHeight, marginBottom: "16px" }}>
        <h3 className="text-2xl font-bold text-slate-900 leading-[32px] m-0">
          {title}
        </h3>
      </div>

      <div style={{ height: measurements.descHeight }}>
        <p className="text-slate-600 leading-[28px] m-0">
          {description}
        </p>
      </div>
    </div>
  );
}