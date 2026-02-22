// src/components/Footer.tsx
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { client } from '@/sanity/lib/client';

export const revalidate = 60; // Revalidates the page every 60 seconds
export default async function Footer() {
  // 1. Fetch the live footer data from Sanity
  const query = `*[_type == "siteSettings"][0].footerSettings`;
  const footerData = await client.fetch(query);

  // 2. Fallbacks matching your exact provided text
  const data = footerData || {
    description: "Precision engineering for the pharmaceutical industry. Validated aseptic systems designed for USFDA & cGMP compliance.",
    address: "123 Industrial Estate, Peenya, Bangalore",
    phone: "+91 98190 37120",
    email: "sales@esteril.in"
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand & Description */}
        <div className="lg:col-span-1">
          <Link href="/" className="text-2xl font-black text-white tracking-tight flex items-center gap-2 mb-6">
            ESTERIL<span className="text-blue-500">.</span>
          </Link>
          <p className="leading-relaxed text-sm">
            {data.description}
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/systems" className="hover:text-blue-400 transition-colors">Our Systems</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link href="/compliance" className="hover:text-blue-400 transition-colors">Compliance</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Technical Support</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 shrink-0 w-5 h-5" />
              <span>{data.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-blue-500 shrink-0 w-5 h-5" />
              <a href={`tel:${data.phone.replace(/\s+/g, '')}`} className="hover:text-blue-400 transition-colors">
                {data.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-blue-500 shrink-0 w-5 h-5" />
              <a href={`mailto:${data.email}`} className="hover:text-blue-400 transition-colors">
                {data.email}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Esteril Process Solutions. All rights reserved.</p>
        <p className="mt-2 md:mt-0 text-slate-500">ISO 9001:2015 Certified Company</p>
      </div>
    </footer>
  );
}