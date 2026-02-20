// src/components/InquiryModal.tsx
"use client";

import { useEffect, useState } from 'react';
import { X, Send, CheckCircle, FileText } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function InquiryModal({ isOpen, onClose, productName }: InquiryModalProps) {
  // --- PASTE YOUR FORMSPREE URL HERE ---
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdaabwn";

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStatus("idle"); // Reset status when opened
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => {
          onClose(); // Close automatically after success
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={status === "submitting" ? undefined : onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">

        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FileText className="text-blue-600 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Request Specs</h3>
              <p className="text-sm text-slate-500">
                Inquiry for: <span className="font-semibold text-blue-600">{productName}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={status === "submitting"}
            className="p-2 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors disabled:opacity-50"
          >
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Success Message */}
        {status === "success" ? (
          <div className="p-12 flex flex-col items-center justify-center text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-emerald-500 animate-bounce" />
            <h3 className="text-2xl font-bold text-slate-900">Request Sent!</h3>
            <p className="text-slate-500">We will email the validation documents for the <strong>{productName}</strong> shortly.</p>
          </div>
        ) : (
          /* Form */
          <form className="p-6 space-y-4" onSubmit={handleSubmit}>

            {/* HIDDEN FIELD: Automatically sends the product name to your email */}
            <input type="hidden" name="product_inquiry" value={productName} />

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Work Email</label>
              <input
                required
                name="email"
                type="email"
                placeholder="engineer@company.com"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Company Name</label>
              <input
                required
                name="company"
                type="text"
                placeholder="e.g. Acme Pharma Solutions"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Technical Requirements (Optional)</label>
              <textarea
                name="message"
                rows={3}
                placeholder="I am interested in the IQ/OQ specs for this system..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm font-bold text-center">Oops! There was a problem submitting your request.</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-slate-900 hover:bg-blue-600 disabled:bg-slate-400 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Send size={18} className={status === "submitting" ? "animate-pulse" : ""} />
              {status === "submitting" ? "Sending Request..." : "Request Documents"}
            </button>

            <p className="text-center text-xs text-slate-400">
              Our engineering team typically responds within 24 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}