import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Point to where your markdown files live
const systemsDirectory = path.join(process.cwd(), 'src/content/systems');
const pagesDirectory = path.join(process.cwd(), 'src/content/pages');
const settingsDirectory = path.join(process.cwd(), 'src/content/settings');

// --- SYSTEMS CONTENT ---

export function getAllSystemSlugs() {
  // Safety check: Return empty array if directory doesn't exist yet
  if (!fs.existsSync(systemsDirectory)) {
    return [];
  }

  // Filter out non-markdown files (like .DS_Store)
  const fileNames = fs.readdirSync(systemsDirectory)
    .filter((fileName) => fileName.endsWith('.md'));

  // Remove the '.md' extension to get just the slug
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}

export function getSystemBySlug(slug: string) {
  const fullPath = path.join(systemsDirectory, `${slug}.md`);

  // Safety check if someone types a bad URL
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter parses the frontmatter and the main body separately
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: {
      title: data.title || '',
      category: data.category || '',
      imageUrl: data.imageUrl || '',
      model3dUrl: data.model3dUrl || null,
      advantages: data.advantages || '',
      compliance: data.compliance || [],
      technicalSpecs: data.technicalSpecs || []
    },
    content: content.trim(), // The main markdown body
  };
}

export function getAllSystemsData() {
  if (!fs.existsSync(systemsDirectory)) {
    return [];
  }

  // Filter out non-markdown files
  const fileNames = fs.readdirSync(systemsDirectory)
    .filter((fileName) => fileName.endsWith('.md'));

  const allSystems = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(systemsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      _id: slug, // Using slug as the unique ID
      slug,
      title: data.title || 'Untitled',
      category: data.category || 'Uncategorized',
      compliance: data.compliance || [], // Make sure this is an array in your .md frontmatter
      imageUrl: data.imageUrl || '',
      // Create a short snippet from the main markdown body for the card description
      description: content.length > 120 ? content.substring(0, 120) + '...' : content.trim(),
    };
  });

  return allSystems;
}


// --- PAGES CONTENT ---

export function getAboutPageData() {
  const fullPath = path.join(pagesDirectory, 'about.md');

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // We parse the content body into paragraphs so we can map them in the UI easily
  const paragraphs = content
    .split('\n\n')
    .filter(p => p.trim() !== '')
    .map(p => p.trim());

  return {
    stats: data.companyStats || [],
    team: data.leadershipTeam || [],
    paragraphs: paragraphs
  };
}

export function getCompliancePageData() {
  const fullPath = path.join(pagesDirectory, 'compliance.md');

  // Safety check if the file hasn't been created yet
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // For this page, all our content lives in the structural frontmatter data
  const { data } = matter(fileContents);

  return {
    title: data.title || "Validation & Compliance",
    introText: data.introText || "Every Esteril system is accompanied by a comprehensive documentation package.",
    standards: data.standards || [],
    documentationIntro: data.documentationIntro || "Your turnover package includes:",
    documentationList: data.documentationList || [],
    sampleReportUrl: data.sampleReportUrl || null
  };
}
export function getServicesPageData() {
  const fullPath = path.join(pagesDirectory, 'services.md');

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    title: data.title || "Our Services",
    introParagraph1: data.introParagraph1 || "",
    introParagraph2: data.introParagraph2 || "",
    services: data.services || [],
    validationSection: data.validationSection || {
      title: "Custom Design & Validation",
      intro: "Technology integration and design synthesis are at the core of our systems.",
      fat: {
        title: "Factory Acceptance Test (FAT)",
        description: "All equipment undergoes a rigorous FAT at our facility.",
        location: "Esteril Facility"
      },
      sat: {
        title: "Site Acceptance Test (SAT)",
        description: "Conducted once installed on-site.",
        location: "Client Site"
      }
    }
  };
}

export function getFooterData() {
  const fullPath = path.join(settingsDirectory, 'footer.md');

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    description: data.description || "Precision engineering for the pharmaceutical industry.",
    address: data.address || "123 Industrial Estate, Peenya, Bangalore",
    phone: data.phone || "+91 98190 37120",
    email: data.email || "sales@esteril.in"
  };
}