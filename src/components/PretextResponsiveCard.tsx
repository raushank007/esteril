"use client";

import { useMemo, useState, useRef, useEffect, ReactNode } from "react";
import { prepare, layout } from "@chenglou/pretext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PretextResponsiveCardProps {
  variant: "solution" | "workflow";
  title: string;
  description: string;
  icon?: ReactNode;
  stepNumber?: number;
  link?: string;
}

export default function PretextResponsiveCard({
  variant,
  title,
  description,
  icon,
  stepNumber,
  link,
}: PretextResponsiveCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(300);

  // 1. Track whether the component has mounted in the browser
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This only runs in the browser, marking it safe to use Canvas
    setIsMounted(true);

    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setContentWidth(entries[0].contentRect.width - 64);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const measurements = useMemo(() => {
    // 2. Guard Clause: If on the server, return flexible 'auto' heights
    if (typeof window === "undefined" || !isMounted) {
      return {
        titleHeight: "auto",
        descHeight: "auto",
      };
    }

    try {
      // 3. Now it is 100% safe to run the pretext Canvas engine
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
      return { titleHeight: "auto", descHeight: "auto" };
    }
  }, [title, description, contentWidth, isMounted]);

  if (variant === "solution") {
    return (
      <div
        ref={containerRef}
        className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col"
      >
        <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform shrink-0">
          {icon}
        </div>

        <div style={{ height: measurements.titleHeight, marginBottom: "12px" }}>
          <h3 className="text-2xl font-bold text-slate-900 leading-[32px] m-0">
            {title}
          </h3>
        </div>

        <div style={{ height: measurements.descHeight, marginBottom: "32px" }}>
          <p className="text-slate-600 leading-[28px] m-0">
            {description}
          </p>
        </div>

        {link && (
          <Link href={link} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 mt-auto">
            View Specifications <ArrowRight size={16} />
          </Link>
        )}
      </div>
    );
  }

  // Workflow Variant
  return (
    <div
      ref={containerRef}
      className="relative z-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 group"
    >
      <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 text-3xl font-black group-hover:scale-110 transition-transform shrink-0">
        {stepNumber}
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