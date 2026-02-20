// src/components/Navbar.tsx
"use client"; // Required for useState and onClick events

import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal'; // Import the new modal

export default function Navbar() {
  // State to manage the modal visibility
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Branding */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              ESTERIL<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-600">
            <Link href="/systems" className="hover:text-blue-600 transition-colors">Systems</Link>
            <Link href="/compliance" className="hover:text-blue-600 transition-colors">Compliance</Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          </div>

          {/* Action Button - Now triggers the modal */}
          <button
            onClick={() => setIsInquiryOpen(true)}
            className="bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
          >
            Inquiry
          </button>
        </div>
      </nav>

      {/* Render the modal outside the nav flow */}
      <ContactModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </>
  );
}