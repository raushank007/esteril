// src/app/systems/[slug]/page.tsx
import { MOCK_SYSTEMS } from '@/lib/mockData';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';

export async function generateStaticParams() {
  return MOCK_SYSTEMS.map((system) => ({
    slug: system.slug,
  }));
}

// 1. Make the function 'async'
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {

  // 2. Await the params before using them
  const { slug } = await params;

  // 3. Now use the unwrapped 'slug' variable
  const product = MOCK_SYSTEMS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">System Not Found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center text-sm">
          <Link href="/" className="text-slate-500 hover:text-blue-600 font-medium">Home</Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900 font-bold">{product.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-6">
        <ProductDetail system={product} />
      </div>
    </div>
  );
}