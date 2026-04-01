import Link from 'next/link';
import ProductDetail from '@/components/ProductDetail';
// 1. Import your local markdown helpers instead of Sanity
import { getAllSystemSlugs, getSystemBySlug } from '@/lib/markdown';

// 2. Generate static routes at build time based on your local .md files
export async function generateStaticParams() {
  const slugs = getAllSystemSlugs();
  return slugs; // Returns an array like: [{ slug: 'cip-sip-system' }, ...]
}

// 3. Fetch the local markdown data for this specific URL
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Retrieve the parsed markdown file
  const systemData = getSystemBySlug(slug);

  // If someone types a wrong URL or the markdown file doesn't exist, show this
  if (!systemData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">System Not Found</h1>
        <Link href="/systems" className="text-blue-600 hover:underline">
          Return to Catalog
        </Link>
      </div>
    );
  }

  // 4. Format the markdown data to exactly match what your ProductDetail component expects
  const formattedProduct = {
    _id: systemData.slug,
    slug: systemData.slug,
    title: systemData.frontmatter.title,
    category: systemData.frontmatter.category,
    compliance: systemData.frontmatter.compliance,
    imageUrl: systemData.frontmatter.imageUrl,
    model3dUrl: systemData.frontmatter.model3dUrl,
    // We use the main markdown body as the primary description
    description: systemData.content,
    advantages: systemData.frontmatter.advantages,
    // Make sure to pass the technical specs if your .md files have them
    technicalSpecs: (systemData.frontmatter as any).technicalSpecs || [],
  };

  // 5. Render the page using our existing ProductDetail UI
  return (
    <div className="min-h-screen bg-slate-50 pb-20">

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 mb-8">
        <div className="max-w-7xl mx-auto flex items-center text-sm">
          <Link href="/" className="text-slate-500 hover:text-blue-600 font-medium">Home</Link>
          <span className="mx-2 text-slate-300">/</span>
          <Link href="/systems" className="text-slate-500 hover:text-blue-600 font-medium">Systems</Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900 font-bold truncate">{formattedProduct.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* We pass the local Markdown data straight into your UI component! */}
        <ProductDetail system={formattedProduct} />
      </div>
    </div>
  );
}