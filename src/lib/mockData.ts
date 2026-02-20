// src/lib/mockData.ts

export interface SterileSystem {
  _id: string;
  title: string;
  slug: string;
  category: "Skid" | "Vessel" | "Automation";
  mainImage: string;
  compliance: string[];
  model3dUrl: string;
  // New fields added to accommodate the scraped content
  description?: string;
  advantages?: string[];
  technicalSpecs: { label: string; value: string }[];
}

const TEST_MODEL_PATH = "/models/test-vessel.glb";

export const MOCK_SYSTEMS: SterileSystem[] = [
  {
    _id: "sys_001",
    title: "Manufacturing Vessel / Skid",
    slug: "manufacturing-vessel-skid",
    category: "Vessel",
    compliance: ["USFDA", "cGMP", "ASME BPE", "21 CFR Part 11"],
    model3dUrl: TEST_MODEL_PATH,
    mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    description: "Our sterile manufacturing vessels are ideal for preparing a wide range of products, including injections, sterile formulations, small-volume preparations, and inhaler solutions. Our fully integrated Manufacturing Vessels/Skids offer a complete end-to-end solution, seamlessly designed to support aseptic processes with 100% cleanability and drainability.",
    advantages: [
      "Tailor-Made for Specific Products/Processes",
      "Heating/Cooling Options",
      "Reliable Solution with Full/Semi-Automated Operation",
      "SIP/CIP options"
    ],
    technicalSpecs: [
      { label: "Contact Parts", value: "SS 316 L (Electropolished < 0.3 Ra)" },
      { label: "Non-Contact Parts", value: "SS 304" },
      { label: "Automation", value: "Fully automated PLC with touch screen HMI/SCADA" },
      { label: "Mixers", value: "Bottom mounted magnetic (Low/Medium/High shear)" },
      { label: "Valves", value: "Flush bottom outlet (Dead leg compliance)" }
    ]
  },
  {
    _id: "sys_002",
    title: "Sterile Holding Vessel / Skid",
    slug: "sterile-holding-vessel-skid",
    category: "Vessel",
    compliance: ["USFDA", "cGMP", "ASME BPE", "21 CFR Part 11"],
    model3dUrl: TEST_MODEL_PATH,
    mainImage: "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=800",
    description: "In pharmaceutical production, various liquids with different properties play a critical role, making their safe and proper storage essential. Fully customizable and optimized for medium to high capacities, our holding systems guarantee 100% cleanability and drainability, providing a reliable solution for your production needs.",
    advantages: [
      "Tailor-Made for Specific Products/Processes",
      "Heating/Cooling Options",
      "Reliable Solution with Full/Semi-Automated Operation",
      "SIP/CIP options"
    ],
    technicalSpecs: [
      { label: "Contact Parts", value: "SS 316 L (Electropolished < 0.3 Ra)" },
      { label: "Non-Contact Parts", value: "SS 304" },
      { label: "Measurement", value: "Load cell or Level sensors" },
      { label: "Connections", value: "Sterile flange connections of top dish" },
      { label: "Drainability", value: "100% Guarantee" }
    ]
  },
  {
    _id: "sys_003",
    title: "CIP-SIP System",
    slug: "cip-sip-system",
    category: "Skid",
    compliance: ["USFDA", "cGMP", "ASME BPE", "21 CFR Part 11"],
    model3dUrl: TEST_MODEL_PATH,
    mainImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    description: "Cleaning-In-Place (CIP) and Sterilization-In-Place (SIP) systems are designed for automatic cleaning and disinfecting, ensuring seamless sanitization and sterilization. These modular, skidded systems are available in both automated and semi-automated models, tailored to the specific time cycles required for cleaning large, fixed, multi-tank systems.",
    advantages: [
      "No Separate Installation Required",
      "Custom Designed as per Product Flow",
      "Heating/Cooling Options",
      "Full/Semi-Automated Operation"
    ],
    technicalSpecs: [
      { label: "Validation", value: "Cleaning validation with riboflavin test" },
      { label: "Welding", value: "Orbital tube welding" },
      { label: "Dosing", value: "Online acid, alkaline dosing provision" },
      { label: "Moisture Control", value: "Sanitary moisture separator & PRV" },
      { label: "Automation", value: "As per USFDA, 21 CFR part 11" }
    ]
  },
  {
    _id: "sys_004",
    title: "CIP System Skids",
    slug: "cip-system-skids",
    category: "Skid",
    compliance: ["USFDA", "cGMP", "ASME BPE"],
    model3dUrl: TEST_MODEL_PATH,
    mainImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    description: "Cleaning-In-Place (CIP) systems provide an efficient solution for system sanitization. We specialize in the design, development, manufacturing, supply, and installation of both mobile and fixed CIP units. Fully customizable, modular, and skidded.",
    advantages: [
      "Fast and Easy Installation",
      "Portable and Compact",
      "Tank/Tank-less System",
      "Full/Semi-Automated Operation"
    ],
    technicalSpecs: [
      { label: "Skid Material", value: "SS 304 polished skid" },
      { label: "Contact Parts", value: "SS 316 L, mirror polished" },
      { label: "Dosing", value: "Online acid, alkaline dosing provision" },
      { label: "Mixers", value: "Bottom-mounted magnetic mixers" },
      { label: "Validation", value: "Riboflavin test ready" }
    ]
  },
  {
    _id: "sys_005",
    title: "SIP System Skids",
    slug: "sip-system-skids",
    category: "Skid",
    compliance: ["USFDA", "cGMP", "ASME BPE", "21 CFR Part 11"],
    model3dUrl: TEST_MODEL_PATH,
    mainImage: "https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?q=80&w=800",
    description: "Sterilization-In-Place (SIP) systems are designed for automatic disinfection, providing a reliable solution for sterilization needs. We supply and install both mobile and fixed SIP units, tailored to the required sterilization time cycle.",
    advantages: [
      "Fast and Easy Installation",
      "Portable and Compact",
      "Full/Semi-Automated Operation",
      "Tailor-Made for Custom Requirements"
    ],
    technicalSpecs: [
      { label: "Safety", value: "Sanitary moisture separator & pressure regulating valve" },
      { label: "Automation", value: "Flexible process parameters setting (Recipes)" },
      { label: "Welding", value: "Orbital tube welding" },
      { label: "Connections", value: "Sterile flange connections of top dish" }
    ]
  },
  {
    _id: "sys_006",
    title: "Automation Systems",
    slug: "automation-systems",
    category: "Automation",
    compliance: ["USFDA", "21 CFR Part 11", "GAMP 5"],
    model3dUrl: TEST_MODEL_PATH,
    mainImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    description: "At Esteril Process Solutions, we develop reliable, user-friendly automation systems that streamline and seamlessly sequence processes. Our system designs ensure the harmonious integration of various equipment, optimizing performance and efficiency.",
    advantages: [
      "Harmonious integration of equipment",
      "Optimized and safe operations",
      "User-friendly interfaces",
      "Consistent and repeatable precision"
    ],
    technicalSpecs: [
      { label: "System Core", value: "PLC-SCADA open solution" },
      { label: "Compliance", value: "Automation as per USFDA, 21 CFR part 11" },
      { label: "Guidelines", value: "Designed as per GAMP guidelines" },
      { label: "Control", value: "HMI / IPC controls for localized control" },
      { label: "Data Integrity", value: "Electronic Batch Records (EBR)" }
    ]
  }
];