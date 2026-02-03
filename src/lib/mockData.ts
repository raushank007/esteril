// src/lib/mockData.ts

// 1. Define the Types (or import them if you have a separate types file)
export interface SterileSystem {
  _id: string;
  title: string;
  slug: string;
  category: "Skid" | "Vessel" | "Automation"; // Updated categories
  mainImage: string;
  compliance: string[];
  model3dUrl: string;
  technicalSpecs: { label: string; value: string }[];
}

// 2. Setup the Model Path
// We will reuse your existing 3D model for all products for now
// (In a real app, you would have different .glb files for each)
const TEST_MODEL_PATH = "/models/test-vessel.glb";

// 3. The Real Data from Esteril.in
export const MOCK_SYSTEMS: SterileSystem[] = [
  {
    _id: "sys_001",
    title: "Automated CIP System",
    slug: "cip-system-skid",
    category: "Skid",
    compliance: ["USFDA", "cGMP", "ASME BPE", "21 CFR Part 11"],
    model3dUrl: TEST_MODEL_PATH,
    // Using a high-quality industrial placeholder since we can't hotlink Esteril's private images directly
    mainImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    technicalSpecs: [
      { label: "Operation", value: "Fully Automated / Semi-Auto" },
      { label: "MOC (Contact)", value: "SS 316L (Ra < 0.4μm)" },
      { label: "MOC (Non-Contact)", value: "SS 304 Matt Finish" },
      { label: "Dosing", value: "Online Acid/Alkali Injection" },
      { label: "Validation", value: "Riboflavin Test Certified" }
    ]
  },
  {
    _id: "sys_002",
    title: "Mobile SIP Unit",
    slug: "sip-system-mobile",
    category: "Skid",
    compliance: ["USFDA", "EN 285", "ISO 17665"],
    model3dUrl: TEST_MODEL_PATH,
    mainImage: "https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?q=80&w=800",
    technicalSpecs: [
      { label: "Type", value: "Mobile / Fixed Unit" },
      { label: "Sterilization", value: "Pure Steam Injection" },
      { label: "Control", value: "PLC with HMI Touchscreen" },
      { label: "Safety", value: "Over-pressure Interlocks" },
      { label: "Documentation", value: "DQ/IQ/OQ/PQ Package" }
    ]
  },
  {
    _id: "sys_003",
    title: "Sterile Manufacturing Vessel",
    slug: "manufacturing-vessel",
    category: "Vessel",
    compliance: ["ASME Sec VIII", "cGMP", "PED"],
    model3dUrl: TEST_MODEL_PATH,
    mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    technicalSpecs: [
      { label: "Capacity", value: "50L to 20,000L" },
      { label: "Agitation", value: "Magnetic / Top Mounted" },
      { label: "Jacketing", value: "Limpet / Dimple Jacket" },
      { label: "Finish", value: "Electropolished < 0.3 Ra" },
      { label: "Drainability", value: "100% (Zero Dead Leg)" }
    ]
  },
  {
    _id: "sys_004",
    title: "Sterile Holding Vessel",
    slug: "sterile-holding-vessel",
    category: "Vessel",
    compliance: ["USFDA", "ASME BPE"],
    model3dUrl: TEST_MODEL_PATH,
    mainImage: "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=800",
    technicalSpecs: [
      { label: "Application", value: "WFI / Buffer Storage" },
      { label: "Orientation", value: "Vertical / Horizontal" },
      { label: "Insulation", value: "Hot/Cold Insulation Cladded" },
      { label: "Accessories", value: "Spray Ball, Vent Filter" },
      { label: "Pressure", value: "-1 to +6 Bar Design" }
    ]
  }
];