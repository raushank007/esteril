// src/app/systems/[slug]/page.tsx
import { client } from '@/sanity/lib/client';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';

// 1. Tell Next.js which pages to pre-build based on Sanity slugs
export const revalidate = 60; // Revalidates the page every 60 seconds
export async function generateStaticParams() {
  const query = `*[_type == "system"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);

  return slugs.map((system: { slug: string }) => ({
    slug: system.slug,
  }));
}

// 2. Fetch the specific product data for this URL
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // This GROQ query finds the ONE system where the slug matches the URL
  const query = `*[_type == "system" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    category,
    compliance,
    "imageUrl": mainImage.asset->url,
    model3dUrl,
    description,
    advantages,
    technicalSpecs,
    "modelUrl": threeDModel.asset->url
  }`;

  // We pass the slug as a variable to the query securely
  const product = await client.fetch(query, { slug });

  // If someone types a wrong URL, show this
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">System Not Found</h1>
        <Link href="/systems" className="text-blue-600 hover:underline">
          Return to Catalog
        </Link>
      </div>
    );
  }

  // 3. Render the page using our existing ProductDetail UI
  return (
    <div className="min-h-screen bg-slate-50 pb-20">

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 mb-8">
        <div className="max-w-7xl mx-auto flex items-center text-sm">
          <Link href="/" className="text-slate-500 hover:text-blue-600 font-medium">Home</Link>
          <span className="mx-2 text-slate-300">/</span>
          <Link href="/systems" className="text-slate-500 hover:text-blue-600 font-medium">Systems</Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900 font-bold truncate">{product.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* We pass the live Sanity data straight into your beautiful UI component! */}
        <ProductDetail system={product} />
      </div>
    </div>
  );
}