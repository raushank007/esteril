"use client";

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import VesselViewer from './vessels/VesselViewer';
import InquiryModal from './InquiryModal';

export default function ProductDetail({ system }: { system: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-0 min-h-[600px] border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">

        {/* Left: Interactive 3D */}
        <div className="bg-slate-50 relative border-r border-slate-100 min-h-[400px] lg:min-h-full">
          <VesselViewer modelPath={system.model3dUrl} />
        </div>

        {/* Right: Technical Specs & Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-start overflow-y-auto">

          {/* Header */}
          <div className="mb-6">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">
              {system.category}
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{system.title}</h2>
            <p className="text-slate-400 font-mono text-xs">SYS-ID: {system._id.toUpperCase()}</p>
          </div>

          {/* New: Description */}
          {system.description && (
            <p className="text-slate-600 mb-8 leading-relaxed">
              {system.description}
            </p>
          )}

          {/* New: Advantages */}
          {system.advantages && system.advantages.length > 0 && (
            <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                Core Advantages
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {system.advantages.map((adv: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="leading-snug">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Specs */}
          <div className="mb-10 mt-auto">
            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Technical Specifications</h3>
            <div className="space-y-3">
              {system.technicalSpecs.map((spec: any) => (
                <div key={spec.label} className="flex justify-between items-center py-2 border-b border-slate-50 border-dashed">
                  <span className="text-sm text-slate-500 font-medium">{spec.label}</span>
                  <span className="text-sm text-slate-900 font-bold text-right pl-4">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Gen Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 hover:shadow-blue-200"
          >
            Request Validation Documents
          </button>
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={system.title}
      />
    </>
  );
}