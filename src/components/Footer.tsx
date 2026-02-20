import Link from 'next/link';
import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tighter">
              ESTERIL<span className="text-blue-600">.</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Precision engineering for the pharmaceutical industry.
              Validated aseptic systems designed for USFDA & cGMP compliance.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/esterilprocess/" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/systems" className="hover:text-blue-500 transition-colors">Our Systems</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link href="/compliance" className="hover:text-blue-500 transition-colors">Compliance</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Technical Support</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 mt-0.5 shrink-0" />
                <span>123 Industrial Estate, Peenya, Bangalore</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+91 98190 37120</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span>sales@esteril.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Esteril Engineering Pvt Ltd.</p>
          <p className="mt-2 md:mt-0">Designed for Performance.</p>
        </div>
      </div>
    </footer>
  );
}