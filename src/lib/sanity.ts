// src/lib/sanity.ts
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2026-01-31',
  useCdn: true, // Use CDN for faster global response
});

// Helper to fetch all systems for the product grid
export async function getSystems() {
  const query = `*[_type == "product"] {
    _id,
    title,
    "slug": slug.current,
    category,
    "mainImage": mainImage.asset->url,
    technicalSpecs,
    compliance,
    "model3dUrl": cadModel.asset->url
  }`;
  return await client.fetch(query);
}