"use client";

import { useEffect } from 'react';
import { X, Send } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function InquiryModal({ isOpen, onClose, productName }: InquiryModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* 1. Dark Overlay (Click to close) */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* 2. Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">

        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Request Specs</h3>
            <p className="text-sm text-slate-500">Inquiry for: <span className="font-semibold text-blue-600">{productName}</span></p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message Sent! (Simulation)"); onClose(); }}>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Work Email</label>
            <input
              required
              type="email"
              placeholder="engineer@company.com"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Company Name</label>
            <input
              required
              type="text"
              placeholder="e.g. Acme Pharma Solutions"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Technical Requirements</label>
            <textarea
              rows={3}
              placeholder="I am interested in the IQ/OQ specs for this vessel..."
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Send Request
          </button>

          <p className="text-center text-xs text-slate-400">
            Our engineering team typically responds within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
}