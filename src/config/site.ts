export interface ProjectPointer {
  id: string;
  projectCode: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: "Active" | "In Planning" | "Incubating" | "Proposed";
  iconName: string;
  category: "Software Locale" | "Digital Archive" | "Raw AI Datasets" | "Community Knowledge" | "Lexicography";
  targetUrl: string;
  githubUrl?: string;
  notes: string;
  grantScope: string;
  deliverables: string[];
}

export const siteConfig = {
  brandName: "Hmar Heritage Foundation",
  fullName: "Hmar Heritage Foundation",
  shortName: "HHF",
  foundedYear: "2024",
  motto: "Cultural Heritage & Digital Stewardship",
  tagline: "Anchoring Hmar ancestral heritage, community identity, and open digital stewardship.",
  description:
    "The Hmar Heritage Foundation is a non-profit digital stewardship organization for Hmar culture online, leading community heritage documentation, oral history preservation, raw archival scanning, and open digital resources.",
  domain: "hmar.page",
  contactEmail: "daiopch54@gmail.com",
  secondaryEmail: "donalmuoloi@gmail.com",
  githubUrl: "https://github.com/hmar-heritage-org",
  huggingFaceUrl: "https://huggingface.co/hmar-heritage-org",
  meta: {
    title: "Hmar Heritage Foundation | Cultural Heritage & Digital Stewardship",
    description:
      "Official website of the Hmar Heritage Foundation. Pioneering community heritage documentation, oral preservation, open software locales, and digital archives.",
  },
  hero: {
    badge: "Digital Stewardship & Preservation · Est. 2024",
    title: "Hmar Heritage Foundation",
    description:
      "A non-profit foundation dedicated to community heritage documentation, oral history preservation, raw archival scanning, open software locales, and digital resources.",
  },
  dataLicensePolicy: {
    headline: "Open Data Usage License & Policy",
    allowed: "Using Foundation datasets and locale keys to build commercial applications, software, or AI models is 100% free and permitted.",
    prohibited: "Selling, paywalling, or commercializing the raw datasets or archival scans themselves as a standalone product is strictly prohibited.",
  },
  manifestoSummary: {
    headline: "Scan Once. Safeguard Forever. Empower Future Generations.",
    intro:
      "True cultural preservation is more than storing old books—it is empowering a language to live, standardizing modern terminology for digital interfaces and software locales, building open dictionaries, and providing raw AI datasets.",
    pillars: [
      {
        title: "Cultural Upliftment & Preservation",
        desc: "Protecting oral history, traditional literature, folk music, and historical manuscripts through low-friction raw digital scanning.",
      },
      {
        title: "Digital Standardization & Locales",
        desc: "Creating standardized Hmar terminology for modern software, smartphone UI and UX interfaces, technical glossaries, and translation tools.",
      },
      {
        title: "Open Knowledge & AI Datasets",
        desc: "Providing open-access dictionary term banks and bulk raw datasets on Hugging Face to ensure Hmar is represented in modern AI models.",
      },
    ],
  },
  projects: [
    {
      id: "archival",
      projectCode: "HHAP-01",
      title: "Hmar Heritage Archival Project (HHAP)",
      shortDescription:
        "The primary digital stewardship umbrella managing Hmar text corpora, digital library scans, open software locales, and dictionary databases.",
      fullDescription:
        "The master digital archival project of the Foundation. HHAP consolidates all digitization initiatives, raw text corpora, speech audio recordings, PDF scans of out-of-print books, software translation keys, and open dictionary databases on Hugging Face and GitHub.",
      status: "Active",
      iconName: "Database",
      category: "Digital Archive",
      targetUrl: "https://huggingface.co/hmar-heritage-org",
      githubUrl: "https://github.com/hmar-heritage-org",
      notes: "Central digital stewardship umbrella managing all digital datasets, locales, and manuscript scans.",
      grantScope: "Digital Preservation, Endangered Literature & AI Corpora Grants (ELDP, British Library EAP, Hugging Face)",
      deliverables: [
        "Digital Library Vault: High-resolution PDF downloads of classic literature and manuscripts",
        "Raw AI Datasets: 1-click bulk text corpora, OCR image sets, and speech audio archives on Hugging Face",
        "Open Locale Platform: Standardized i18n translation keys (JSON/PO) for Android, Web, and iOS",
        "Wikimedia Incubator: Institutional stewardship for Hmar Wikipedia (Wp/hmr)",
        "Hmar Open Lexicon: Standardized technical glossaries and dictionary databases",
      ],
    },
    {
      id: "cultural-artifacts",
      projectCode: "HERITAGE-02",
      title: "Customary Artifacts & Material Culture Preservation",
      shortDescription:
        "Documenting physical traditional textiles, customary regalia, and historical clan artifacts for physical and digital preservation.",
      fullDescription:
        "A dedicated heritage project focused on documenting physical material culture across Hmar villages. This includes capturing high-resolution imagery and customary provenance for traditional weaving motifs (Puan), historical instruments, traditional tools, and ancestral clan regalia.",
      status: "In Planning",
      iconName: "BookOpen",
      category: "Community Knowledge",
      targetUrl: "#",
      githubUrl: "https://github.com/hmar-heritage-org",
      notes: "Physical artifact documentation in collaboration with village elders and cultural stewards.",
      grantScope: "Cultural Heritage, Museum Preservation & Indigenous Material Culture Grants (Ministry of Culture, UNESCO)",
      deliverables: [
        "High-resolution photographic documentation of traditional weaving motifs (Puan)",
        "Customary provenance and historical cataloging of clan heirlooms and artifacts",
        "Community artifact registry for physical and digital exhibition",
      ],
    },
    {
      id: "community-welfare",
      projectCode: "COMMUNITY-03",
      title: "Village Stewardship & Community Support Initiatives",
      shortDescription:
        "Supporting grassroots cultural stewards, village heritage gatherings, and emergency community relief initiatives.",
      fullDescription:
        "Direct community-focused initiatives aimed at supporting ancestral villages, heritage stewards, elder storytellers, and local community welfare projects across rural Hmar regions.",
      status: "In Planning",
      iconName: "Globe",
      category: "Community Knowledge",
      targetUrl: "#",
      githubUrl: "https://github.com/hmar-heritage-org",
      notes: "Grassroots community support and village-level cultural stewardship.",
      grantScope: "Community Development & Indigenous Welfare Grants",
      deliverables: [
        "Direct support for rural village heritage stewards and elder storytellers",
        "Sponsorship for community heritage gatherings and customary workshops",
        "Emergency village support and cultural welfare assistance",
      ],
    },
  ] as ProjectPointer[],
  navigation: [
    { name: "Home", href: "/" },
    { name: "The Hmars", href: "/hmars" },
    { name: "Mission", href: "/manifesto" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "Standards", href: "/standards" },
    { name: "For Grant Officers", href: "/grantmakers" },
    { name: "Projects", href: "/projects" },
    { name: "Resources", href: "/resources" },
    { name: "People", href: "/people" },
    { name: "Join", href: "/join" },
  ],
};
