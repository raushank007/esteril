// src/app/systems/page.tsx
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
// 1. Import the Sanity client (Adjust the path if your sanity folder is outside src)
import { client } from '@/sanity/lib/client';

// 2. Write the GROQ Query
// This asks Sanity for all documents of type "system"
// The 'imageUrl' line is a neat trick to resolve the image reference directly to a URL
// Add this ONE line right here:
export const revalidate = 60; // Revalidates the page every 60 seconds
const SYSTEMS_QUERY = `*[_type == "system"]{
  _id,
  title,
  "slug": slug.current,
  category,
  compliance,
  "imageUrl": mainImage.asset->url,
  description
}`;

// 3. Make the page async so it can fetch data on the server
export default async function SystemsPage() {

  // 4. Fetch the live data
  const systems = await client.fetch(SYSTEMS_QUERY);

  return (
    <main className="min-h-screen bg-slate-50 pt-20">

      {/* 1. Page Header */}
      <div className="max-w-7xl mx-auto mb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          Our <span className="text-blue-600">Product Line</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Explore our range of validated process vessels and automated skids designed for high-purity pharmaceutical applications.
        </p>
      </div>

      {/* 2. The Dynamic Product Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {/* We map over the live 'systems' array now, not the mock data! */}
        {systems.map((system: any) => (
          <div key={system._id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

            {/* Product Image */}
            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <img
                src={system.imageUrl || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"} // Fallback image if none uploaded
                alt={system.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                 <Badge text={system.category} type="category" />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{system.title}</h3>

              {/* Display a snippet of the description */}
              {system.description && (
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  {system.description}
                </p>
              )}

              {/* Compliance Badges */}
              <div className="flex flex-wrap gap-1 mb-6">
                {system.compliance?.map((cert: string) => (
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

      {/* 3. Work Flow & Process Section (Unchanged) */}
      <section className="bg-white py-24 px-6 border-t border-slate-200">
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

            {/* Steps omitted for brevity in snippet, leave your existing 3 steps here! */}
            <div className="relative z-10 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 text-3xl font-black group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tailored Solution</h3>
              <p className="text-slate-600 leading-relaxed">Your vision is at the center of all processes. With the exchange of ideas & dialogues, we identify crucial factors & priorities to provide the best possible solution. With our handpicked expert planners and designers we plan & design projects with high attention to detail.</p>
            </div>

            <div className="relative z-10 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 text-3xl font-black group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Life Cycle</h3>
              <p className="text-slate-600 leading-relaxed">Our decades of experience with our advanced manufacturing process & technology helps us to create unique solutions with complete aseptic design. With our modern quality management process we ensure the best quality solution for you.</p>
            </div>

            <div className="relative z-10 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 text-3xl font-black group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Qualification & Validation</h3>
              <p className="text-slate-600 leading-relaxed">With your help for installing & validation process, we ensure a quick qualification process. We work closely with you throughout the product life cycle with training & after-sales services.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}