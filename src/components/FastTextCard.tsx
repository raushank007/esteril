"use client";

import { useMemo } from "react";
import { prepare, layout } from "@chenglou/pretext";

interface FastTextCardProps {
  title: string;
  description: string;
  containerWidth?: number;
}

export default function FastTextCard({
  title,
  description,
  containerWidth = 320
}: FastTextCardProps) {

  // Pre-calculate heights purely in JavaScript without triggering DOM reflows!
  const measurements = useMemo(() => {
    // 1. Prepare the text.
    // CRITICAL: The font string MUST perfectly match your CSS font shorthand.
    const preparedTitle = prepare(title, 'bold 20px Inter');
    const preparedDesc = prepare(description, '16px Inter');

    // 2. Layout to get precise heights based on container width minus padding (32px)
    // We pass the expected line-height (24px for both in this case)
    const titleLayout = layout(preparedTitle, containerWidth - 32, 24);
    const descLayout = layout(preparedDesc, containerWidth - 32, 24);

    return {
      titleHeight: titleLayout.height,
      descHeight: descLayout.height,
    };
  }, [title, description, containerWidth]);

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 overflow-hidden"
      style={{ width: containerWidth }}
    >
      {/* Container pre-allocated to exact calculated height */}
      <div style={{ height: measurements.titleHeight }}>
        <h2 className="text-[20px] font-bold leading-[24px] font-inter m-0 text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-4" style={{ height: measurements.descHeight }}>
        <p className="text-[16px] leading-[24px] font-inter text-gray-600 m-0">
          {description}
        </p>
      </div>
    </div>
  );
}