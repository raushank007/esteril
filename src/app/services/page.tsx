// src/app/services/page.tsx
import { Camera, Zap, Sparkles, PenTool, CheckCircle, ClipboardCheck, Microscope, Factory } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen pb-24">

      {/* 1. Hero & Commitment Section */}
      <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            Our <span className="text-blue-500">Services</span>
          </h1>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              At Esteril Process Solutions, we are fully committed to being <span className="text-white font-bold">customer-focused</span>,
              ensuring that every promise we make is one we can deliver on time and with precision.
            </p>
            <p>
              As a performance-driven and customer-centric company, we are constantly striving to improve every aspect of our business.
              This dedication ensures that our products and services consistently meet or exceed our clients’ expectations,
              fostering trust and long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Technical Services (Alternating Layout) */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* Service 1: Boroscopy */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <Camera className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Boroscopy / Videoscopy</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We provide Boroscopy services widely utilized across pharmaceuticals, chemical plants, and food processing.
              These services are essential for ensuring the integrity and quality of equipment in critical applications.
            </p>

            <div className="grid gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Microscope size={18} /> Objectives
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                  <li>Inspect pipes for internal surface finish & weld joints.</li>
                  <li>Determine internal defects (corrosion, pitting, cracks).</li>
                  <li>Detect foreign objects (dust, chips).</li>
                  <li>Documentation of orbital welding joints.</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle size={18} /> Advantages
                </h4>
                <ul className="space-y-2 text-sm text-blue-800 list-disc list-inside">
                  <li>High-Resolution image documentation.</li>
                  <li>Concentrated remote operation.</li>
                  <li>Compatible with various subject observations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Refactor for Service 1 */}
          <div className="order-1 md:order-2 bg-slate-100 rounded-3xl aspect-[4/3] relative overflow-hidden group shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000"
              alt="Boroscopy Inspection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <Camera className="text-blue-400 w-6 h-6" />
              <span className="text-white font-bold tracking-widest uppercase text-sm">Boroscopy Inspection</span>
            </div>
          </div>
        </div>

        {/* Service 2: Orbital Welding */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Visual Refactor for Service 2 */}
          <div className="bg-slate-100 rounded-3xl aspect-[4/3] relative overflow-hidden group shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000"
              alt="Orbital Welding"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
               <Zap className="text-blue-400 w-6 h-6" />
               <span className="text-white font-bold tracking-widest uppercase text-sm">Orbital Welding</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <Zap className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Orbital Welding Service</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              A precise technique where the welding tool rotates 360° around a stationary workpiece.
              Using computer-controlled systems, we produce consistent, repeatable welds with minimal operator intervention.
            </p>

            <div className="grid gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Factory size={18} /> Objectives
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                  <li>Consistent, high-quality TIG weld joints.</li>
                  <li>Determine erosion or extraneous problems.</li>
                  <li>Minimize operator error in tube welding.</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle size={18} /> Advantages
                </h4>
                <ul className="space-y-2 text-sm text-blue-800 list-disc list-inside">
                  <li>Boosts productivity with automation.</li>
                  <li>Program saving & printout of parameters.</li>
                  <li>Improved workplace safety.</li>
                  <li>Easy to repeat quality (Validation ready).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3: Electropolishing */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <Sparkles className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Electropolishing Service</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              An electrochemical process that removes surface material through anodic dissolution.
              This technique levels micro-peaks and valleys, creating an ultra-clean, corrosion-resistant surface.
            </p>

            <div className="grid gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Microscope size={18} /> Objective
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                  <li>Remove micro peaks & valleys.</li>
                  <li>Create surfaces easier to sterilize.</li>
                  <li>Improve anticorrosive properties.</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle size={18} /> Advantages
                </h4>
                <ul className="space-y-2 text-sm text-blue-800 list-disc list-inside">
                  <li>Superior to mechanical polishing.</li>
                  <li>Lustrous, aesthetically improved finish.</li>
                  <li>Microscopically smooth surface.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Refactor for Service 3 */}
          <div className="order-1 md:order-2 bg-slate-100 rounded-3xl aspect-[4/3] relative overflow-hidden group shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000"
              alt="Electropolishing Surface Finish"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
               <Sparkles className="text-blue-400 w-6 h-6" />
               <span className="text-white font-bold tracking-widest uppercase text-sm">Surface Finish &lt; 0.3 Ra</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Custom Design & Validation Process (FAT/SAT) */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-6 border border-slate-100">
              <PenTool className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Custom Design & Validation</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Technology integration and design synthesis are at the core of our systems.
              We provide comprehensive documentation including DQ, IQ, OQ, P&ID, and isometric drawings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAT Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border-t-4 border-blue-600 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <ClipboardCheck className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Factory Acceptance Test (FAT)</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                All equipment undergoes a rigorous FAT at our facility. We invite customers to review the system’s construction,
                performance, and documentation firsthand before dispatch.
              </p>
              <div className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold inline-block tracking-widest uppercase">
                Location: Esteril Facility
              </div>
            </div>

            {/* SAT Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border-t-4 border-emerald-500 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-50 p-3 rounded-xl">
                  <CheckCircle className="text-emerald-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Site Acceptance Test (SAT)</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Conducted once installed on-site. Equipment is connected to utilities, and comprehensive test results are reported,
                including handling of any deviations, in the presence of the client.
              </p>
              <div className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold inline-block tracking-widest uppercase">
                Location: Client Site
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}