// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Badge from '@/components/ui/Badge';
import { MOCK_SYSTEMS } from '@/lib/mockData';
import Link from 'next/link';

export default function HomePage() {
  // We'll just show the first 3 products as a "Featured" section
  const featuredSystems = MOCK_SYSTEMS.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">


      <main>
        {/* 1. Hero Section */}
        <section className="relative bg-slate-900 py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Efficiency Driven by <span className="text-blue-500">Experience</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              We engineer automated processing systems for the Pharmaceutical industry.
              From R&D to Commercial Manufacturing, we deliver confidence.
            </p>
            <Link
              href="/systems"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20"
            >
              Explore Solutions
            </Link>
          </div>
        </section>

        {/* 2. Featured Products Grid */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Systems</h2>
              <p className="text-slate-500 mt-2">Precision equipment for sterile processing.</p>
            </div>
            <Link href="/systems" className="text-blue-600 font-semibold hover:underline">
              View all products →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSystems.map((system) => (
              <div key={system._id} className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img
                    src={system.mainImage}
                    alt={system.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <Badge text={system.category} type="category" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{system.title}</h3>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {system.compliance.map(cert => (
                      <Badge key={cert} text={cert} />
                    ))}
                  </div>
                  <Link
                    href={`/systems/${system.slug}`}
                    className="block w-full text-center py-3 border border-slate-900 text-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}