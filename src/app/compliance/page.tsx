// src/app/compliance/page.tsx
import { Shield, FileCheck, CheckCircle2, ShieldCheck } from 'lucide-react';
import { client } from '@/sanity/lib/client';
// 1. Import your new component!
import PdfPreviewBox from '@/components/PdfPreviewBox';

export const revalidate = 60; // Revalidates the page every 60 seconds
export default async function CompliancePage() {

  const query = `*[_type == "compliancePage"][0] {
    title,
    introText,
    standards,
    documentationIntro,
    documentationList,
    "sampleReportUrl": sampleReport.asset->url
  }`;

  const data = await client.fetch(query);

  const pageData = data || {
    title: "Validation & Compliance",
    introText: "Every Esteril system is accompanied by a comprehensive documentation package (DQ, IQ, OQ) guaranteeing full traceability from raw material to final installation.",
    standards: [
      { title: "USFDA 21 CFR Part 11", description: "Electronic records and signatures compliance for all our automated control systems." },
      { title: "ASME BPE 2022", description: "Bio-Processing Equipment standards for design, materials, and surface finishes (Ra < 0.4μm)." },
      { title: "cGMP Guidelines", description: "Current Good Manufacturing Practices ensuring consistent quality and safety." }
    ],
    documentationIntro: "We don't just deliver a tank; we deliver a validated system. Your turnover package includes:",
    documentationList: [
      "Material Test Certificates (MTC 3.1)",
      "Weld Maps & Boroscopy Reports",
      "Surface Roughness (Ra) Reports",
      "Hydrotest & Passivation Reports",
      "Calibration Certificates"
    ],
    sampleReportUrl: null
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-24">

      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center justify-center p-4 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
            <Shield className="text-blue-400 w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {pageData.title}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {pageData.introText}
          </p>
        </div>
      </section>

      {/* 2. COMPLIANCE STANDARDS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {pageData.standards?.map((standard: { title: string, description: string }, i: number) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{standard.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DOCUMENTATION PACKAGE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl p-10 md:p-16 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-12 items-center">

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="text-emerald-500 w-8 h-8" />
              <h2 className="text-3xl font-black text-slate-900">The Documentation Package</h2>
            </div>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {pageData.documentationIntro}
            </p>

            <ul className="space-y-4">
              {pageData.documentationList?.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                  <span className="text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Pass the URL directly to our interactive Client Component */}
          <PdfPreviewBox fileUrl={pageData.sampleReportUrl} />

        </div>
      </section>

    </main>
  );
}