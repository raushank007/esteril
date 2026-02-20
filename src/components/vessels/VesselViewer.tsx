"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, OrbitControls, Html } from "@react-three/drei";
import { Suspense, useState } from "react";

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

export default function VesselViewer({ modelPath }: { modelPath: string }) {
  return (
    <div className="h-full min-h-[500px] w-full bg-slate-50 relative cursor-move">
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
      <div className="text-slate-500 font-bold text-sm animate-pulse">Loading Model...</div>
    </Html>
  );
}