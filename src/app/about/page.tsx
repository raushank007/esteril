// src/app/about/page.tsx
import { Target, Eye, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export default  async function AboutPage() {
   // 1. UPDATED QUERY: We now ask for companyStats AND the leadershipTeam (with image URLs resolved)
     const query = `*[_type == "siteSettings"][0] {
       companyStats,
       leadershipTeam[]{
         name,
         role,
         "imageUrl": image.asset->url
       }
     }`;

     const data = await client.fetch(query);

     // 2. Set up our variables with safe fallbacks
     const stats = data?.companyStats || [];
     const team = data?.leadershipTeam || [
       // Fallback just in case Sanity hasn't published yet
       { name: "Shishir Mishra", role: "Founder", imageUrl: "/images/founder.jpeg" },
       { name: "Madhumeeta Kumari", role: "Processing engineering", imageUrl: "/images/madhu.jpeg" }
     ];
  return (
    <main className="min-h-screen bg-white pb-24">

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6">
            <Award size={16} /> Est. 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Efficiency Driven by <span className="text-blue-500">Experience.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We specialize in designing, engineering, and manufacturing automated processing systems
            for the Pharmaceutical and Bio-Pharmaceutical industries.
          </p>
        </div>
      </section>

      {/* 2. FLOATING STATS BAR (Now Dynamic!) */}
            <section className="relative z-20 -mt-12 max-w-5xl mx-auto px-6">
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">

                  {/* Map over our live Sanity stats */}
                  {stats.map((stat: { label: string, value: string }) => (
                    <div key={stat.label} className="px-4">
                      <div className="text-4xl font-black text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}

                </div>
              </div>
            </section>

      {/* 3. WHO WE ARE (Modern Split Layout) */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Modern Image Composition */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800"
                alt="Engineering Precision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <ShieldCheck size={40} className="text-blue-400 mb-3" />
                <div className="text-2xl font-bold">Uncompromising</div>
                <div className="text-slate-300">Quality Standards</div>
              </div>
            </div>
            {/* Decorative Background Block */}
            <div className="absolute -inset-4 bg-slate-100 rounded-3xl z-0 transform translate-x-8 translate-y-8" />
          </div>

          {/* Right: Your Exact Text Content */}
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Who We Are</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              At Esteril Process Solutions, we are dedicated to delivering smarter solutions that drive industry transformation. Since our inception, we have set benchmarks in providing cutting-edge solutions for healthcare companies.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              With over two decades of experience, we execute projects from front-end engineering study to detailed design, fabrication, and commissioning. We proudly serve over 100 multinational companies both in India and abroad.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "End-to-End Project Execution",
                "Innovative Design Solutions",
                "Astute Project Management",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/systems" className="inline-block bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-slate-200">
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION CARDS */}
      <section className="bg-slate-50 py-32 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Vision Card - Dark Theme */}
          <div className="bg-slate-900 text-white p-12 rounded-3xl shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
              <Eye size={120} />
            </div>
            <div className="relative z-10">
              <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
                <Eye className="text-blue-400" size={32} />
              </div>
              <h3 className="text-3xl font-black mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                To explore new opportunities, optimize processes, and design innovative solutions for emerging challenges. We aim to lead the global industrial landscape as a growth partner for our clients.
              </p>
            </div>
          </div>

          {/* Mission Card - Light Theme */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
              <Target size={120} />
            </div>
            <div className="relative z-10">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-blue-100">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To enhance our clients' credibility through exceptional focus and astute project management. We are committed to redefining boundaries in sterile formulations and biopharmaceuticals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. LEADERSHIP TEAM (Now Dynamic!) */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Meet the <span className="text-blue-600">Leadership</span></h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">The engineering minds and quality auditors behind our success.</p>
              </div>

              {/* Adjusted to grid-cols-2 to perfectly fit your 2 founders, or it will auto-expand if you add a 3rd! */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {team.map((member: { name: string; role: string; imageUrl: string }) => (
                  <div key={member.name} className="group cursor-pointer">
                    <div className="bg-slate-100 rounded-3xl aspect-square mb-6 overflow-hidden relative">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 font-bold text-sm tracking-widest uppercase mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </section>

    </main>
  );
}