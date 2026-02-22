"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, OrbitControls, Html } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Cuboid } from "lucide-react"; // Optional: A nice icon for the fallback state

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Hotspot({ position, label }: { position: [number, number, number], label: string }) {
  const [show, setShow] = useState(false);
  return (
    <Html position={position} center distanceFactor={10}>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="relative"
      >
        <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white animate-pulse cursor-pointer shadow-lg" />
        {show && (
          <div className="absolute left-6 top-0 w-32 bg-white p-2 rounded border border-slate-200 text-[10px] font-bold z-10 shadow-xl">
            {label}
          </div>
        )}
      </div>
    </Html>
  );
}

// 1. Make modelPath optional (?) so TypeScript doesn't yell if Sanity data is missing
export default function VesselViewer({ modelPath }: { modelPath?: string }) {

  // 2. Safety Check: If no file was uploaded to Sanity, show a beautiful fallback box instead of crashing
  if (!modelPath) {
    return (
      <div className="h-full min-h-[500px] w-full bg-slate-50 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300">
        <Cuboid className="w-12 h-12 text-slate-300 mb-4" />
        <p className="text-slate-500 font-medium">3D Model rendering in progress...</p>
      </div>
    );
  }

  // 3. If modelPath exists (the Sanity CDN URL), render the canvas!
  return (
    <div className="h-full min-h-[500px] w-full bg-slate-50 relative cursor-move rounded-3xl overflow-hidden border border-slate-200">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={<Loader />}>
          <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <Stage environment="city" intensity={0.6}>
              <Model url={modelPath} />
            </Stage>
            {/* Example Hotspot */}
            <Hotspot position={[0, 1.5, 0]} label="Main Inlet Valve" />
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
        <span className="text-slate-700 font-bold text-sm">Loading 3D Model...</span>
      </div>
    </Html>
  );
}