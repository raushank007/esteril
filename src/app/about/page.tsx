// src/app/about/page.tsx
import { Target, Eye, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Efficiency Driven by <span className="text-blue-500">Experience</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            We specialize in designing, engineering, and manufacturing automated processing systems
            for the Pharmaceutical and Bio-Pharmaceutical industries.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            At Esteril Process Solutions, we are dedicated to delivering smarter solutions that drive industry transformation.
            Since our inception, we have set benchmarks in providing cutting-edge solutions for healthcare companies.
          </p>
          <p className="text-slate-600 leading-relaxed">
            With over two decades of experience, we execute projects from front-end engineering study to detailed design,
            fabrication, and commissioning. We proudly serve over 100 multinational companies both in India and abroad.
          </p>
        </div>

        {/* Mission / Vision Cards */}
        <div className="space-y-6">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-4 mb-3">
              <Eye className="text-blue-600" size={32} />
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            </div>
            <p className="text-slate-700">
              To explore new opportunities, optimize processes, and design innovative solutions for emerging challenges.
              We aim to lead the global industrial landscape as a growth partner for our clients.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
             <div className="flex items-center gap-4 mb-3">
              <Target className="text-blue-600" size={32} />
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            </div>
            <p className="text-slate-700">
              To enhance our clients' credibility through exceptional focus and astute project management.
              We are committed to redefining boundaries in sterile formulations and biopharmaceuticals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}