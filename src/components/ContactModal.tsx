"use client";

import { useEffect, useState } from 'react';
import { X, Send, Mail, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // --- PASTE YOUR FORMSPREE URL HERE ---
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdalljpe";

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
        form.reset(); // Clear the form
        setTimeout(() => {
          onClose(); // Close modal automatically after 2 seconds
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
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={status === "submitting" ? undefined : onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">

        {/* Header */}
        <div className="bg-slate-900 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Mail className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">General Inquiry</h3>
              <p className="text-sm text-slate-400">How can we help you today?</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={status === "submitting"}
            className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors disabled:opacity-50"
          >
            <X size={20} className="text-slate-300" />
          </button>
        </div>

        {/* Success Message overlay */}
        {status === "success" ? (
          <div className="p-12 flex flex-col items-center justify-center text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-emerald-500 animate-bounce" />
            <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
            <p className="text-slate-500">Thank you. Our engineering team will review your requirements and contact you shortly.</p>
          </div>
        ) : (
          /* The Form */
          <form className="p-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
                <input
                  required
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Work Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                />
              </div>
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
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Area of Interest</label>
              <select
                name="interest"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-white"
              >
                <option value="Manufacturing Vessels">Manufacturing Vessels & Skids</option>
                <option value="CIP/SIP">CIP / SIP Systems</option>
                <option value="Automation">Automation Solutions</option>
                <option value="Services">Services (Orbital Welding, Boroscopy, etc.)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Message / Requirements</label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Please describe your project requirements or questions..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm font-bold text-center">Oops! There was a problem submitting your form.</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <Send size={18} className={status === "submitting" ? "animate-pulse" : ""} />
              {status === "submitting" ? "Sending..." : "Send Inquiry"}
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