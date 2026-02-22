// src/app/page.tsx
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Settings, Factory, Activity, CheckCircle2 } from 'lucide-react';
import { client } from '@/sanity/lib/client';

export const revalidate = 60; // Revalidates the page every 60 seconds
export default async function HomePage() {
  // 1. Fetch the live stats from Sanity
  const query = `*[_type == "siteSettings"][0] {
    companyStats
  }`;
  const data = await client.fetch(query);

  // 2. Fallback to default stats if nothing is published in Sanity yet
  const stats = data?.companyStats || [
    { label: "Years Experience", value: "25+" },
    { label: "Systems Delivered", value: "500+" },
    { label: "Global Clients", value: "100+" },
    { label: "Quality Focus", value: "100%" }
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6">
              <ShieldCheck size={16} /> USFDA & cGMP Compliant
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Efficiency Driven by <span className="text-blue-500">Experience.</span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              We specialize in designing, engineering, and manufacturing automated processing systems for the Pharmaceutical and Bio-Pharmaceutical industries globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/systems"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30"
              >
                Explore Our Systems <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & STATS BAR (Now Dynamic) */}
      <section className="bg-blue-600 text-white py-12 relative z-20 -mt-8 mx-6 md:mx-auto max-w-7xl rounded-2xl shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 divide-x divide-blue-500/50">

          {/* Map over the live Sanity stats */}
          {stats.map((stat: { label: string; value: string }, i: number) => (
            <div key={i} className="text-center px-4">
              <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm font-bold text-blue-200 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}

        </div>
      </section>

      {/* 3. CORE SOLUTIONS GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Our Core <span className="text-blue-600">Solutions</span></h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">End-to-end aseptic processing systems engineered for absolute precision and zero dead-leg compliance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Manufacturing Vessels",
              desc: "Fully integrated skids optimized for medium to high capacities. Ideal for injections and sterile formulations.",
              icon: <Factory size={32} className="text-blue-600" />,
              link: "/systems/manufacturing-vessel-skid"
            },
            {
              title: "CIP / SIP Systems",
              desc: "Automated Cleaning and Sterilization-In-Place skids tailored to your specific time cycles and multi-tank layouts.",
              icon: <Settings size={32} className="text-blue-600" />,
              link: "/systems/cip-sip-system"
            },
            {
              title: "Automation & Control",
              desc: "21 CFR Part 11 compliant PLC-SCADA architectures with Electronic Batch Records (EBR) and strict GAMP guidelines.",
              icon: <Activity size={32} className="text-blue-600" />,
              link: "/systems/automation-systems"
            }
          ].map((category, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{category.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{category.desc}</p>
              <Link href={category.link} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700">
                View Specifications <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WORK FLOW & PROCESS SECTION */}
      <section className="bg-slate-50 py-32 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Work Flow & <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Esteril Process Solutions, we don't just execute projects—we ensure the highest quality solutions & best after-sales service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 text-3xl font-black group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tailored Solution</h3>
              <p className="text-slate-600 leading-relaxed">
                Your vision is at the center of all processes. With the exchange of ideas & dialogues, we identify crucial factors & priorities to provide the best possible solution. With our handpicked expert planners and designers we plan & design projects with high attention to detail.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 text-3xl font-black group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Life Cycle</h3>
              <p className="text-slate-600 leading-relaxed">
                Our decades of experience with our advanced manufacturing process & technology helps us to create unique solutions with complete aseptic design. With our modern quality management process we ensure the best quality solution for you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 text-3xl font-black group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Qualification & Validation</h3>
              <p className="text-slate-600 leading-relaxed">
                With your help for installing & validation process, we ensure a quick qualification process. We work closely with you throughout the product life cycle with training & after-sales services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. THE "WHY US" TECHNICAL ADVANTAGE */}
      <section className="bg-slate-900 py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Engineered for <br /><span className="text-blue-500">Audit Success.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We don't just build tanks; we deliver comprehensive, validated systems. From the initial P&ID to the final Site Acceptance Test (SAT), every weld and surface finish is documented to ensure immediate regulatory clearance.
            </p>

            <ul className="space-y-4">
              {[
                "ASME BPE Compliant Design & Materials",
                "Orbital Welding with Boroscopy Documentation",
                "Electropolished Surfaces (Ra < 0.3μm)",
                "Comprehensive DQ, IQ, OQ, & FAT Packages"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/compliance" className="mt-10 inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all">
              Read Our Compliance Standards
            </Link>
          </div>

          <div className="relative aspect-square rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent mix-blend-overlay" />
            <div className="grid grid-cols-4 gap-4 p-8 w-full h-full opacity-20">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-slate-600 rounded-lg animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
            <div className="absolute text-center">
              <ShieldCheck size={80} className="text-blue-500 mx-auto mb-4 opacity-80" />
              <div className="text-white font-bold tracking-widest uppercase opacity-80">100% Traceability</div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}