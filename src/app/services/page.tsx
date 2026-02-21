// src/app/services/page.tsx
import { Camera, Zap, Sparkles, PenTool, CheckCircle, ClipboardCheck, Microscope, Factory, Settings } from 'lucide-react';
import { client } from '@/sanity/lib/client';

export default async function ServicesPage() {

  // 1. Fetch live data
  const query = `*[_type == "servicesPage"][0] {
    title,
    introParagraph1,
    introParagraph2,
    services[]{
      title,
      description,
      objectives,
      advantages,
      imageCaption,
      "imageUrl": image.asset->url
    },
    validationSection
  }`;

  const data = await client.fetch(query);

  // 2. Safe Fallbacks using your exact text
  const pageData = data || {
    title: "Our Services",
    introParagraph1: "At Esteril Process Solutions, we are fully committed to being customer-focused, ensuring that every promise we make is one we can deliver on time and with precision.",
    introParagraph2: "As a performance-driven and customer-centric company, we are constantly striving to improve every aspect of our business. This dedication ensures that our products and services consistently meet or exceed our clients’ expectations, fostering trust and long-term success.",
    services: [
      {
        title: "Boroscopy / Videoscopy",
        description: "We provide Boroscopy services widely utilized across pharmaceuticals, chemical plants, and food processing. These services are essential for ensuring the integrity and quality of equipment in critical applications.",
        objectives: ["Inspect pipes for internal surface finish & weld joints.", "Determine internal defects (corrosion, pitting, cracks).", "Detect foreign objects (dust, chips).", "Documentation of orbital welding joints."],
        advantages: ["High-Resolution image documentation.", "Concentrated remote operation.", "Compatible with various subject observations."],
        imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800",
        imageCaption: "Boroscopy Inspection"
      },
      {
        title: "Orbital Welding Service",
        description: "A precise technique where the welding tool rotates 360° around a stationary workpiece. Using computer-controlled systems, we produce consistent, repeatable welds with minimal operator intervention.",
        objectives: ["Consistent, high-quality TIG weld joints.", "Determine erosion or extraneous problems.", "Minimize operator error in tube welding."],
        advantages: ["Boosts productivity with automation.", "Program saving & printout of parameters.", "Improved workplace safety.", "Easy to repeat quality (Validation ready)."],
        imageUrl: "https://images.unsplash.com/photo-1504917595217-d414ba2087ce?q=80&w=800",
        imageCaption: "Orbital Welding"
      },
      {
        title: "Electropolishing Service",
        description: "An electrochemical process that removes surface material through anodic dissolution. This technique levels micro-peaks and valleys, creating an ultra-clean, corrosion-resistant surface.",
        objectives: ["Remove micro peaks & valleys.", "Create surfaces easier to sterilize.", "Improve anticorrosive properties."],
        advantages: ["Superior to mechanical polishing.", "Lustrous, aesthetically improved finish.", "Microscopically smooth surface."],
        imageUrl: "https://images.unsplash.com/photo-1611288875704-3700b0d36cb7?q=80&w=800",
        imageCaption: "Surface Finish < 0.3 Ra"
      }
    ],
    validationSection: {
      title: "Custom Design & Validation",
      intro: "Technology integration and design synthesis are at the core of our systems. We provide comprehensive documentation including DQ, IQ, OQ, P&ID, and isometric drawings.",
      fat: {
        title: "Factory Acceptance Test (FAT)",
        description: "All equipment undergoes a rigorous FAT at our facility. We invite customers to review the system’s construction, performance, and documentation firsthand before dispatch.",
        location: "Esteril Facility"
      },
      sat: {
        title: "Site Acceptance Test (SAT)",
        description: "Conducted once installed on-site. Equipment is connected to utilities, and comprehensive test results are reported, including handling of any deviations, in the presence of the client.",
        location: "Client Site"
      }
    }
  };

  // Icon array to keep the UI dynamic and beautiful
  const iconList = [Camera, Zap, Sparkles, Factory, Settings];

  return (
    <main className="bg-white min-h-screen pb-24">

      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            {pageData.title.split(' ')[0]} <span className="text-blue-500">{pageData.title.split(' ')[1] || ''}</span>
          </h1>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>{pageData.introParagraph1}</p>
            <p>{pageData.introParagraph2}</p>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {pageData.services?.map((service: any, i: number) => {

          // Select an icon from our list, loop back if we have more services than icons
          const MainIcon = iconList[i % iconList.length];
          const isEven = i % 2 === 0;

          return (
            <div key={i} className="grid md:grid-cols-2 gap-12 items-center">

              {/* Text Block */}
              <div className={isEven ? "order-2 md:order-1" : "order-2"}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <MainIcon className="text-blue-600 w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid gap-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Microscope size={18} /> Objectives
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                      {service.objectives?.map((obj: string, j: number) => <li key={j}>{obj}</li>)}
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <CheckCircle size={18} /> Advantages
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-800 list-disc list-inside">
                      {service.advantages?.map((adv: string, k: number) => <li key={k}>{adv}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image Block */}
              <div className={`bg-slate-100 rounded-3xl aspect-[4/3] relative overflow-hidden group shadow-xl ${isEven ? "order-1 md:order-2" : "order-1"}`}>
                <img
                  src={service.imageUrl || "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <MainIcon className="text-blue-400 w-6 h-6" />
                  <span className="text-white font-bold tracking-widest uppercase text-sm">{service.imageCaption || service.title}</span>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* 3. VALIDATION SECTION */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-6 border border-slate-100">
              <PenTool className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              {pageData.validationSection?.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {pageData.validationSection?.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAT Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border-t-4 border-blue-600 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <ClipboardCheck className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{pageData.validationSection?.fat?.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {pageData.validationSection?.fat?.description}
              </p>
              <div className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold inline-block tracking-widest uppercase">
                Location: {pageData.validationSection?.fat?.location}
              </div>
            </div>

            {/* SAT Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border-t-4 border-emerald-500 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-50 p-3 rounded-xl">
                  <CheckCircle className="text-emerald-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{pageData.validationSection?.sat?.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {pageData.validationSection?.sat?.description}
              </p>
              <div className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold inline-block tracking-widest uppercase">
                Location: {pageData.validationSection?.sat?.location}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}