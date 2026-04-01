"use client";

import { useMemo } from "react";
import { prepare, layout } from "@chenglou/pretext";
import FastTextCard from "./FastTextCard";

interface CMSItem {
  id: string;
  title: string;
  content: string;
}

export default function MasonryFeed({ items }: { items: CMSItem[] }) {
  const columnWidth = 320;

  // Calculate total heights for the masonry layout BEFORE rendering anything
  const columns = useMemo(() => {
    let leftColHeight = 0;
    let rightColHeight = 0;
    const cols: { left: CMSItem[]; right: CMSItem[] } = { left: [], right: [] };

    items.forEach((item) => {
      // Run the text through the measurement engine
      const prepTitle = prepare(item.title, 'bold 20px Inter');
      const prepContent = prepare(item.content, '16px Inter');

      // Calculate the physical height this item will consume
      const itemHeight =
        layout(prepTitle, columnWidth - 32, 24).height +
        layout(prepContent, columnWidth - 32, 24).height +
        48; // Account for the 32px vertical padding + 16px gap margin

      // Greedy algorithm: assign the item to the shortest column
      if (leftColHeight <= rightColHeight) {
        cols.left.push(item);
        leftColHeight += itemHeight + 16;
      } else {
        cols.right.push(item);
        rightColHeight += itemHeight + 16;
      }
    });

    return cols;
  }, [items]);

  return (
    <div className="flex gap-6 items-start justify-center w-full max-w-4xl mx-auto">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {columns.left.map((item) => (
          <FastTextCard
            key={item.id}
            title={item.title}
            description={item.content}
            containerWidth={columnWidth}
          />
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {columns.right.map((item) => (
          <FastTextCard
            key={item.id}
            title={item.title}
            description={item.content}
            containerWidth={columnWidth}
          />
        ))}
      </div>
    </div>
  );
}