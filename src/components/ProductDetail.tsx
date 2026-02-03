"use client"; // This must be at the top

import { useState } from 'react';
import VesselViewer from './vessels/VesselViewer';
import InquiryModal from './InquiryModal'; // Import the new modal

export default function ProductDetail({ system }: { system: any }) {
  // State to track if modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-0 min-h-[600px] border rounded-2xl overflow-hidden bg-white shadow-sm">
        {/* Left: Interactive 3D */}
        <div className="bg-slate-50 relative border-r border-slate-100">
          <VesselViewer modelPath={system.model3dUrl} />
        </div>

        {/* Right: Technical Specs */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">Technical Profile</span>
            <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{system.title}</h2>
            <p className="text-slate-400 font-mono text-sm">ID: {system._id.slice(0, 8).toUpperCase()}</p>
          </div>

          <div className="space-y-4 mb-10">
            {system.technicalSpecs.map((spec: any) => (
              <div key={spec.label} className="flex justify-between border-b border-slate-100 pb-3">
                <span className="text-sm text-slate-500 font-medium">{spec.label}</span>
                <span className="text-sm text-slate-900 font-bold">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* THE BUTTON: Now opens the modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 hover:shadow-blue-200"
          >
            Request Validation Documents
          </button>
        </div>
      </div>

      {/* The Modal Component (Hidden by default until isModalOpen is true) */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={system.title}
      />
    </>
  );
}