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
  motto: "Digital Preservation & Cultural Stewardship",
  tagline: "Empowering, standardizing, and preserving Hmar culture, language, and digital presence.",
  description:
    "The Hmar Heritage Foundation is a non-profit digital stewardship organization for Hmar culture online, leading cultural upliftment, language standardization for software locales and glossaries, raw archival preservation, and open AI datasets.",
  domain: "hmar.page",
  contactEmail: "daiopch54@gmail.com",
  secondaryEmail: "donalmuoloi@gmail.com",
  githubUrl: "https://github.com/hmar-heritage-org",
  huggingFaceUrl: "https://huggingface.co/hmar-heritage-org",
  meta: {
    title: "Hmar Heritage Foundation | Digital Preservation & Cultural Stewardship",
    description:
      "Official website of the Hmar Heritage Foundation. Pioneering digital preservation, language standardization, software locales, and open cultural archives.",
  },
  hero: {
    badge: "Digital Stewardship & Preservation · Est. 2024",
    title: "Hmar Heritage Foundation",
    description:
      "A non-profit foundation dedicated to cultural upliftment, language standardization for software locales and glossaries, raw archival scanning, and open AI datasets.",
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
      id: "library",
      projectCode: "VAULT-02",
      title: "Hmar Digital Library",
      shortDescription:
        "High-resolution PDF vault for classic books, rare manuscripts, folk songs, and historical records.",
      fullDescription:
        "The primary community literature project where students, elders, and researchers browse and download individual PDF scans of physical books, historical records, and traditional songbooks.",
      status: "In Planning",
      iconName: "BookOpen",
      category: "Digital Archive",
      targetUrl: "#",
      githubUrl: "https://github.com/hmar-heritage-org",
      notes: "Hosted on Firebase Storage & Static Hosting. Collects public domain texts and works with author permissions.",
      grantScope: "Endangered Literature & Archival Grants (ELDP Legacy Material Grant, British Library EAP, Ministry of Culture)",
      deliverables: [
        "Individual PDF downloads of classic Hmar literature",
        "Historical manuscript and songbook archival scans",
        "Accessible online reading for community members",
      ],
    },
    {
      id: "archival",
      projectCode: "CORPUS-03",
      title: "Hmar Heritage Archival Project",
      shortDescription:
        "Bulk raw text corpora, speech audio recordings, and OCR scanned page datasets on Hugging Face.",
      fullDescription:
        "A comprehensive dataset archival project providing data scientists and AI researchers with 1-click bulk downloads of raw text corpora, speech audio recordings, and OCR page image sets for computational language model training.",
      status: "Active",
      iconName: "Database",
      category: "Raw AI Datasets",
      targetUrl: "https://huggingface.co/hmar-heritage-org",
      githubUrl: "https://github.com/hmar-heritage-org",
      notes: "Mirrored on Hugging Face Datasets hub for 1-click load_dataset integration.",
      grantScope: "Computational Linguistics & AI Research Grants (Hugging Face, AI4Bharat, DST)",
      deliverables: [
        "1-click bulk ZIP and Tarball downloads of raw scans and text corpora",
        "Speech audio archives and transcribed text datasets",
        "Hugging Face integration via load_dataset hmar-heritage-org",
        "Raw OCR page image sets for computer vision models",
      ],
    },
    {
      id: "locale",
      projectCode: "LOCALE-01",
      title: "Open Locale Project",
      shortDescription:
        "Language-agnostic software internationalization platform stewarded by HHF, with Hmar (hmr-IN) as flagship implementation.",
      fullDescription:
        "An open software localization platform providing regional and minority languages of Northeast India with standardized translation keys (i18n JSON, PO, XML files), Supabase staging workflows, and 1-click platform exporters.",
      status: "In Planning",
      iconName: "Globe",
      category: "Software Locale",
      targetUrl: "#",
      githubUrl: "https://github.com/hmar-heritage-org",
      notes: "Language-agnostic platform featuring Hmar (hmr-IN) as its inaugural reference dataset.",
      grantScope: "Open Source Software & Technical i18n Grants (Mozilla, Linux Foundation, Google CLDR)",
      deliverables: [
        "Language-agnostic software locale platform with Hmar as flagship dataset",
        "Supabase real-time staging database with non-technical Language Verifier roles",
        "Automated 1-click exporters for Android (strings.xml), Web (JSON), iOS, and Linux (PO)",
        "Unicode Common Locale Data Repository CLDR integration",
      ],
    },
    {
      id: "wikipedia",
      projectCode: "WIKI-05",
      title: "Hmar Wikipedia Incubator Initiative",
      shortDescription:
        "Building a thriving Hmar encyclopedia project on Wikimedia Incubator towards full Wikipedia launch.",
      fullDescription:
        "The official institutional initiative stewarding the Hmar language encyclopedia project on Wikimedia Incubator (Wp/hmr). We organize weekly lead-section drafting quotas (10 articles per week), orthographic verification, and editor support to qualify for full domain launch (hmr.wikipedia.org).",
      status: "Active",
      iconName: "Globe",
      category: "Community Knowledge",
      targetUrl: "https://incubator.wikimedia.org/wiki/Wp/hmr",
      githubUrl: "https://github.com/hmar-heritage-org",
      notes: "Official institutional workspace on Wikimedia Incubator Wp/hmr under Hmar Heritage Foundation stewardship.",
      grantScope: "Wikimedia Community & Knowledge Equity Grants (Wikimedia Foundation Implementation Grants)",
      deliverables: [
        "Institutional backing and stewardship for Wikimedia Incubator Wp/hmr",
        "Weekly 10 lead-section article drafting quota and editor support",
        "Orthographic verification and dictionary alignment with Hmar Open Lexicon",
        "Preparation for Language Committee (LangCom) review towards hmr.wikipedia.org",
      ],
    },
    {
      id: "lexicon",
      projectCode: "LEXICON-04",
      title: "Hmar Open Lexicon",
      shortDescription:
        "Standardizing technical glossaries and building open Hmar-English-Mizo lexical databases.",
      fullDescription:
        "A dedicated lexicography project serving students, writers, and translators with standardized technical definitions, etymology, and open lookup APIs.",
      status: "In Planning",
      iconName: "BookOpen",
      category: "Lexicography",
      targetUrl: "#",
      githubUrl: "https://github.com/hmar-heritage-org",
      notes: "Dual web application interfaces for dictionary and technical term lookup.",
      grantScope: "Dictionary & Lexicography Grants (Central Institute of Indian Languages CIIL, Sahitya Akademi)",
      deliverables: [
        "Dual web application interfaces for dictionary and technical term lookup",
        "Hmar-English and Hmar-Mizo lexical lookup databases",
        "Technical and scientific term standardization",
        "Open API for app developers",
      ],
    },
  ] as ProjectPointer[],
  navigation: [
    { name: "Home", href: "/" },
    { name: "Mission", href: "/manifesto" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "Standards", href: "/standards" },
    { name: "Projects", href: "/projects" },
    { name: "Resources", href: "/resources" },
    { name: "People", href: "/people" },
    { name: "Join", href: "/join" },
  ],
};
