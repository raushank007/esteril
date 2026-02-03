// src/lib/types.ts

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface SterileSystem {
  _id: string;
  title: string;
  slug: string;
  category: 'cip' | 'sip' | 'vessel';
  mainImage: string;
  technicalSpecs: TechnicalSpec[];
  compliance: string[];
  model3dUrl?: string; // This will link to files in your src/assets/models
}