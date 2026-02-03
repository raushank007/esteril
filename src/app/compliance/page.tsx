import { ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export default function CompliancePage() {
  const standards = [
    {
      id: "fda",
      title: "USFDA 21 CFR Part 11",
      description: "Electronic records and signatures compliance for all our automated control systems.",
      icon: <FileText className="w-8 h-8 text-blue-600" />
    },
    {
      id: "asme",
      title: "ASME BPE 2022",
      description: "Bio-Processing Equipment standards for design, materials, and surface finishes (Ra < 0.4μm).",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    },
    {
      id: "gmp",
      title: "cGMP Guidelines",
      description: "Current Good Manufacturing Practices ensuring consistent quality and safety.",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Validation & <span className="text-blue-500">Compliance</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every Esteril system is accompanied by a comprehensive documentation package (DQ, IQ, OQ)
            guaranteeing full traceability from raw material to final installation.
          </p>
        </div>
      </section>

      {/* 2. The Standards Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {standards.map((std) => (
            <div key={std.id} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {std.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{std.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{std.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Documentation Details (The "Why Us" Section) */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">The Documentation Package</h2>
            <p className="text-slate-600">
              We don't just deliver a tank; we deliver a validated system. Your turnover package includes:
            </p>

            <ul className="space-y-4 mt-4">
              {[
                "Material Test Certificates (MTC 3.1)",
                "Weld Maps & Boroscopy Reports",
                "Surface Roughness (Ra) Reports",
                "Hydrotest & Passivation Reports",
                "Calibration Certificates"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual placeholder for a document preview */}
          <div className="flex-1 bg-white border border-slate-200 p-2 rounded-xl shadow-lg rotate-2 hover:rotate-0 transition-all duration-500">
            <div className="bg-slate-100 aspect-[3/4] rounded-lg flex items-center justify-center border border-dashed border-slate-300">
              <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Sample DQ Report</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}