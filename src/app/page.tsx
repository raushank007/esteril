import { MOCK_SYSTEMS } from '@/lib/mockData';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          Our <span className="text-blue-600">Product Line</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Explore our range of validated process vessels and automated skids designed for high-purity pharmaceutical applications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_SYSTEMS.map((system) => (
          <div key={system._id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <img
                src={system.mainImage}
                alt={system.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                 <Badge text={system.category} type="category" />
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{system.title}</h3>

              {/* New: Display a 2-line snippet of the description */}
              {system.description && (
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  {system.description}
                </p>
              )}

              <div className="flex flex-wrap gap-1 mb-6">
                {system.compliance.map(cert => (
                  <Badge key={cert} text={cert} />
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href={`/systems/${system.slug}`}
                  className="block w-full text-center py-3 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}