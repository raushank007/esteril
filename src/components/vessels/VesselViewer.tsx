"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, OrbitControls, Html } from "@react-three/drei";
import { Suspense, useState, useMemo, useEffect } from "react";
import { Cuboid } from "lucide-react";
// 1. Import advanced Pretext APIs for shrink-wrapping text
import { prepareWithSegments, walkLineRanges, layoutWithLines } from "@chenglou/pretext";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Hotspot({ position, label }: { position: [number, number, number]; label: string }) {
  const [show, setShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. The Pretext Engine: Calculate the exact "Shrink-Wrap" bounding box
  const tooltipDimensions = useMemo(() => {
    // Fallback for Server-Side Rendering
    if (typeof window === "undefined" || !isMounted) {
      return { width: "auto", height: "auto" };
    }

    try {
      // Step A: Prepare the text. (Ensure 'Inter' matches your CSS font)
      // We use 10px bold to match the `text-[10px] font-bold` Tailwind classes
      const prepared = prepareWithSegments(label, "bold 10px Inter");
      const maxAllowedWidth = 150; // The absolute maximum width we allow before wrapping

      // Step B: Shrink-wrap calculation
      // We walk the lines to find the widest single line to act as our container width
      let tightestWidth = 0;
      walkLineRanges(prepared, maxAllowedWidth, (line) => {
        if (line.width > tightestWidth) {
          tightestWidth = line.width;
        }
      });

      // Step C: Calculate the final vertical height using our new tightest width
      // We assume a line-height of 14px for a 10px font
      const finalLayout = layoutWithLines(prepared, tightestWidth, 14);

      // Step D: Add 16px to account for Tailwind's `p-2` (8px padding on all sides)
      return {
        width: Math.ceil(tightestWidth) + 16,
        height: finalLayout.height + 16,
      };
    } catch (error) {
      console.error("Pretext measurement failed:", error);
      return { width: "auto", height: "auto" };
    }
  }, [label, isMounted]);

  return (
    <Html position={position} center distanceFactor={10}>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="relative"
      >
        <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white animate-pulse cursor-pointer shadow-lg" />

        {/* 3. Apply the pre-calculated, deterministic dimensions */}
        {show && (
          <div
            className="absolute left-6 top-0 bg-white p-2 rounded border border-slate-200 text-[10px] font-bold z-10 shadow-xl overflow-hidden pointer-events-none"
            style={{
              width: tooltipDimensions.width,
              height: tooltipDimensions.height,
            }}
          >
            {label}
          </div>
        )}
      </div>
    </Html>
  );
}

export default function VesselViewer({ modelPath }: { modelPath?: string }) {
  if (!modelPath) {
    return (
      <div className="h-full min-h-[500px] w-full bg-slate-50 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300">
        <Cuboid className="w-12 h-12 text-slate-300 mb-4" />
        <p className="text-slate-500 font-medium">3D Model rendering in progress...</p>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[500px] w-full bg-slate-50 relative cursor-move rounded-3xl overflow-hidden border border-slate-200 shadow-inner">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={<Loader />}>
          <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <Stage environment="city" intensity={0.6}>
              <Model url={modelPath} />
            </Stage>

            {/* Example Hotspots - Pretext will now calculate optimal boxes for these */}
            <Hotspot position={[0, 1.5, 0]} label="Main Inlet Valve" />
            <Hotspot position={[1, 0.5, 1]} label="Pressure Relief Sensor (Automated)" />
            <Hotspot position={[-1, -1, 0]} label="Drain" />

          </PresentationControls>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-3">
        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <span className="text-slate-700 font-bold text-sm whitespace-nowrap">Loading 3D Model...</span>
      </div>
    </Html>
  );
}