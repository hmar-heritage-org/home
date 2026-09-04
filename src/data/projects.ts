export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string[];
  status: 'active' | 'planning' | 'ongoing';
  lead: string;
  tags: string[];
  icon: string;
  sections: {
    heading: string;
    body: string;
  }[];
  milestones: {
    title: string;
    date: string;
    done: boolean;
  }[];
  resources?: {
    label: string;
    href: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: 'archival',
    title: 'Hmar Heritage Archival Project',
    shortTitle: 'Hmar Heritage Archival',
    tagline: 'Digitizing public domain materials and structuring open datasets for the Hmar language.',
    description:
      'The primary initiative of the Foundation, focused on structuring public domain internet data, securing publication copyright waivers, and hosting open datasets on Hugging Face.',
    longDescription: [
      'The Hmar Heritage Archival Project is the primary project of the Foundation. Our current operational focus is digitizing and structuring public domain data already available on the internet as the most immediate and accessible starting point.',
      'We are actively collecting physical books, but we strictly hold off on scanning or digitizing them until formal copyright waivers are secured. We plan to engage with the Hmar Literature Society (HLS) and the Hmar MIL Monitoring Committee to secure waivers for their publications, while holding ongoing discussions on how to obtain copyright waivers from individual community members.',
      'All structured master data is hosted open-access on Hugging Face under the hmar-heritage-org organization. Current active repositories include hmar-names, wordlist, zo-bible, corpus-archive, and numeral-words. Once field equipment and grant funding are secured, we will pivot heavily to audio and video recording of oral heritage.',
    ],
    status: 'active',
    lead: 'Hmar Heritage Archival Team',
    tags: ['Public Domain', 'Hugging Face', 'Copyright Waivers', 'Open Data', 'Corpora'],
    icon: 'Archive',
    sections: [
      {
        heading: 'Current Focus: Internet Public Domain',
        body: 'We prioritize extracting, cleaning, and structuring existing public domain text, lexicons, and religious corpora from the web into standardized machine-readable formats. This establishes instant, reliable open data while broader physical digitizing pipelines are prepared.',
      },
      {
        heading: 'Physical Books & Copyright Waivers',
        body: 'Physical book collection is underway, but digitization is paused until legal copyright waivers are in place. We are working to establish agreements with the Hmar Literature Society and the Hmar MIL Monitoring Committee for official publications, alongside developing community-wide waiver guidelines for private family works.',
      },
      {
        heading: 'Hugging Face Datasets Hub',
        body: 'Our active datasets are hosted publicly on Hugging Face at hmar-heritage-org. Live datasets include hmar-names (10.2M+ records), wordlist (43.5k+ entries), numeral-words (1M+ entries), zo-bible, and corpus-archive.',
      },
      {
        heading: 'Future Roadmap: Audio, Video & Funding',
        body: 'Securing sustainable funding is our most critical priority. Once recording equipment and grants are acquired, we will pivot to field audio and video recording of oral literature, which offers a far richer medium for cultural preservation than static images.',
      },
    ],
    milestones: [
      { title: 'Hugging Face hmar-heritage-org org setup', date: '2024', done: true },
      { title: 'Dataset releases: hmar-names, wordlist, numeral-words', date: '2024 - 2025', done: true },
      { title: 'Corpus & Bible datasets (zo-bible, corpus-archive)', date: '2025 Q1', done: true },
      { title: 'Hmar Literature Society & MIL Committee waiver outreach', date: '2025 Q3', done: false },
      { title: 'Community copyright waiver framework', date: '2025 Q4', done: false },
      { title: 'Grant funding & Field audio/video recording hardware acquisition', date: '2026', done: false },
    ],
    resources: [
      { label: 'Hugging Face hmar-heritage-org Hub', href: 'https://huggingface.co/hmar-heritage-org' },
      { label: 'Dataset Specification & Waiver Guidelines', href: '/resources' },
    ],
  },
  {
    slug: 'locale',
    title: 'Open Locale Project',
    shortTitle: 'Open Locale',
    tagline: 'Open-source keyboards, locale data, and software localization for the Hmar language.',
    description:
      'Developing open-source keyboard layouts, Unicode locale data (CLDR), and software translations so that the Hmar language lives natively on modern devices.',
    longDescription: [
      'The Hmar language (ISO 639-3: hmar) is spoken by communities across Manipur, Mizoram, Assam, Meghalaya, and Tripura. Yet despite a rich oral and literary tradition, the language has minimal digital footprint — no standardized keyboard layout, no operating-system locale, and virtually no localized software.',
      'This project addresses that gap. We build and maintain open-source keyboard layouts for all major platforms (Windows, macOS, Linux, Android, iOS), contribute Hmar locale data to the Unicode CLDR project, and coordinate volunteer translators to localize essential software — from web browsers to educational tools.',
    ],
    status: 'planning',
    lead: 'Language Engineering Working Group',
    tags: ['Unicode', 'CLDR', 'Keyboard Layout', 'Localization', 'ISO 639-3'],
    icon: 'Keyboard',
    sections: [
      {
        heading: 'Keyboard Layouts',
        body: 'We maintain a unified Hmar keyboard layout based on the Latin script used by the community, with dead-key support for tone diacritics and special characters. Layouts are available for Windows (via MSKLC), macOS (via Ukelele), Linux (via xkb), and mobile platforms (via Keyman). All layouts are released under the MIT license.',
      },
      {
        heading: 'CLDR Locale Data',
        body: 'We contribute Hmar locale data to the Unicode Common Locale Data Repository (CLDR), including date formats, number patterns, calendar conventions, and display names. Our goal is full coverage in the CLDR survey tool so that operating systems and applications can offer Hmar as a system language.',
      },
      {
        heading: 'Code Disambiguation',
        body: 'The Hmar language is identified by ISO 639-3 code "hmar" and Glottolog identifier "cent2330". The deprecated code "zom" was previously used in some systems and databases. We maintain a cross-reference table and work with standards bodies to ensure consistent usage. See our Standards page for the full reference.',
      },
      {
        heading: 'Software Localization',
        body: 'Our volunteer translator community localizes open-source software into Hmar. Current priorities include: the Firefox browser, the GNOME desktop environment, and the Kolibri educational platform. We use the open-source Weblate platform for translation management.',
      },
    ],
    milestones: [
      { title: 'Hmar keyboard layout v1.0 (desktop)', date: '2024 Q2', done: true },
      { title: 'Keyman mobile keyboard release', date: '2024 Q4', done: true },
      { title: 'CLDR locale data submission', date: '2025 Q1', done: true },
      { title: 'Firefox browser localization (50%)', date: '2025 Q3', done: false },
      { title: 'GNOME desktop localization (30%)', date: '2025 Q4', done: false },
      { title: 'CLDR full coverage', date: '2026 Q2', done: false },
    ],
    resources: [
      { label: 'Hmar Keyboard Layout (Windows)', href: '/resources' },
      { label: 'Hmar Keyboard Layout (macOS)', href: '/resources' },
      { label: 'Keyman Keyboard for Mobile', href: '/resources' },
    ],
  },
  {
    slug: 'wikipedia',
    title: 'Wikimedia & Open Knowledge',
    shortTitle: 'Wikimedia',
    tagline: 'Building the Hmar Wikipedia Incubator (Wp/hmr) and growing an active editor community.',
    description:
      'Providing institutional stewardship and guidelines for the Hmar language encyclopedia project on Wikimedia Incubator Wp/hmr, while rallying community volunteers to qualify for a full hmr.wikipedia.org subdomain.',
    longDescription: [
      'The Hmar Wikipedia Incubator Initiative (Wp/hmr) is the foundational seed for what will become the official Hmar-language Wikipedia. Currently hosted on incubator.wikimedia.org/wiki/Wp/hmr, the workspace has established core templates, main categories, a set of 10–20 seed articles, and preliminary policy drafts. However, it currently operates without an administrator and relies on a single active volunteer.',
      'The primary requirement for securing a standalone domain launch at hmr.wikipedia.org from the Wikimedia Language Committee (LangCom) is a sustained multi-editor community. LangCom evaluates editor activity and community participation rather than raw page count alone. Fostering an open, welcoming environment for new contributors is our highest operational focus.',
    ],
    status: 'active',
    lead: 'Hmar Wikipedia Incubator Team',
    tags: ['Wikimedia Incubator', 'Wp/hmr', 'LangCom', 'Lead Sections', 'Open Collaboration'],
    icon: 'Globe',
    sections: [
      {
        heading: 'Getting Started: Lead-Section Strategy',
        body: 'To make contributing manageable, we prioritize lead-section drafting via Wp/hmr/Wikipedia:Lead_section_cho_um. Instead of requiring lengthy encyclopedic treatises from day one, volunteers can quickly create short, well-structured introductory paragraphs for core topics like regional history, geography, clan heritage, and literature.',
      },
      {
        heading: 'Open-Source Philosophy: Don\'t Fear Imperfection',
        body: 'No contributor should hesitate to write because of grammar concerns or spelling doubts. Open knowledge relies on continuous, iterative refinement. If everything were perfect on day one, there would be nothing left for the community to build together. Jump in, share what you know, and let the community polish articles over time.',
      },
      {
        heading: 'Policies & Style Guides',
        body: 'Volunteers can begin by reviewing Wp/hmr/Wikipedia:Hriet_ding_pawimaw ("Important to Know") and exploring current policy pages. Developing style guides and orthographic conventions early helps maintain consistency as the editing base grows.',
      },
    ],
    milestones: [
      { title: 'Wikimedia Incubator Wp/hmr setup', date: '2024', done: true },
      { title: 'Core templates, categories & 10–20 seed articles created', date: '2024 - 2025', done: true },
      { title: 'Lead section list setup (Lead_section_cho_um)', date: '2025 Q1', done: true },
      { title: 'Recruit first 5 regular community editors', date: '2025 Q3', done: false },
      { title: 'Draft style guides & core orthography policies', date: '2025 Q4', done: false },
      { title: 'Wikimedia LangCom audit & hmr.wikipedia.org subdomain launch', date: '2026', done: false },
    ],
    resources: [
      { label: 'Wikimedia Incubator Wp/hmr Home', href: 'https://incubator.wikimedia.org/wiki/Wp/hmr' },
      { label: 'Essential Info: Wp/hmr/Wikipedia:Hriet_ding_pawimaw', href: 'https://incubator.wikimedia.org/wiki/Wp/hmr/Wikipedia:Hriet_ding_pawimaw' },
      { label: 'Lead Section Article List (Lead_section_cho_um)', href: 'https://incubator.wikimedia.org/wiki/Wp/hmr/Wikipedia:Lead_section_cho_um' },
    ],
  },
  {
    slug: 'lexicon',
    title: 'Hmar Customary Lexicon',
    shortTitle: 'Customary Lexicon',
    tagline: 'An open digital dictionary and terminology index for the Hmar language.',
    description:
      'Building a community-maintained, open-source digital dictionary of Hmar words, customary terms, and phrases — with definitions in Hmar, English, and Mizo.',
    longDescription: [
      'The Hmar Customary Lexicon is a living, community-maintained dictionary. Unlike a traditional print dictionary, it grows continuously as community members contribute words, definitions, example sentences, and audio pronunciations.',
      'The lexicon covers three domains: (1) general vocabulary — everyday words and their meanings; (2) customary terms — words specific to Hmar clan governance, land tenure, and ritual practice that have no direct English equivalent; (3) oral literature vocabulary — archaic and poetic terms found in Hmar Hla (songs) and folktales.',
      'All data is published under the Creative Commons Attribution-ShareAlike license and is available as downloadable JSON, CSV, and TEI-XML for use in apps, research, and language learning tools.',
    ],
    status: 'planning',
    lead: 'Lexicon Working Group',
    tags: ['Dictionary', 'Lexicon', 'TEI-XML', 'Open Data', 'CC BY-SA'],
    icon: 'BookOpen',
    sections: [
      {
        heading: 'Dictionary Architecture',
        body: 'Each entry contains: headword (in Hmar), part of speech, definition (in Hmar and English), example sentence, audio pronunciation (where available), etymology notes, and cross-references to related entries. Entries are tagged by domain (general, customary, literary) and by clan dialect where variants exist.',
      },
      {
        heading: 'Customary Terminology',
        body: 'A special focus of the lexicon is customary terms — words that describe Hmar-specific concepts of governance, land, kinship, and ritual. For example, "Inpui" refers to the great clan assembly, a concept central to Hmar social organization. These entries include anthropological notes and references to the customary literature.',
      },
      {
        heading: 'Data Formats & API',
        body: 'The lexicon is available as downloadable JSON and CSV for developers, and as TEI-XML for digital humanities researchers. A read-only REST API provides programmatic access to search and retrieval. All data is versioned and citable via persistent identifiers.',
      },
    ],
    milestones: [
      { title: 'Schema design & data model', date: '2024 Q3', done: true },
      { title: 'Seed corpus: 1,000 entries', date: '2024 Q4', done: true },
      { title: 'Audio pronunciation framework', date: '2025 Q1', done: true },
      { title: 'Public API launch', date: '2025 Q3', done: false },
      { title: '5,000 entries', date: '2026 Q1', done: false },
      { title: 'TEI-XML export', date: '2026 Q2', done: false },
    ],
    resources: [
      { label: 'Lexicon Data (JSON)', href: '/resources' },
      { label: 'Lexicon Data (CSV)', href: '/resources' },
      { label: 'API Documentation', href: '/resources' },
    ],
  },
  {
    slug: 'cultural-artifacts',
    title: 'Cultural Artifacts Stewardship',
    shortTitle: 'Cultural Artifacts',
    tagline: 'Documenting physical village relics, musical instruments, and loom patterns.',
    description:
      'A photographic and descriptive catalog of Hmar cultural artifacts — from traditional looms and musical instruments to ceremonial objects and everyday tools.',
    longDescription: [
      'Hmar villages hold a rich material culture that is rapidly disappearing. Wooden looms, bamboo flutes, ceremonial dao (machetes), woven shawls, and ritual objects are still found in homes and community spaces, but younger generations increasingly lack the context to understand their significance.',
      'This project documents these artifacts through high-resolution photography, 3D scanning where feasible, and detailed descriptive records. Each artifact is photographed in context, cataloged with its customary name, function, and provenance, and published in an open catalog.',
      'We do not collect or remove artifacts from their communities. Our work is purely documentary — we create a digital record that preserves knowledge about these objects for future generations.',
    ],
    status: 'planning',
    lead: 'Artifacts Documentation Team',
    tags: ['Artifacts', 'Photography', '3D Scanning', 'Material Culture', 'Catalog'],
    icon: 'Camera',
    sections: [
      {
        heading: 'Documentation Process',
        body: 'Each artifact is documented with: (1) high-resolution photography from multiple angles; (2) a descriptive record including customary name, materials, dimensions, maker, and age; (3) an oral history interview with the custodian about the artifact’s use and significance; (4) where feasible, photogrammetry for 3D model generation.',
      },
      {
        heading: 'Categories',
        body: 'We document five categories: (1) Textiles — Puon (woven wraps), shawls, and their patterns; (2) Musical instruments — bamboo flutes, drums, and the penghleng (mouth harp); (3) Tools — dao, weaving implements, and agricultural tools; (4) Ceremonial objects — ritual items used in festivals and life-cycle events; (5) Everyday objects — baskets, utensils, and household items.',
      },
      {
        heading: 'Community Consent',
        body: 'No artifact is documented without the consent of its custodian. Sacred or ritually restricted objects are documented only with explicit community approval, and access to certain records may be restricted at the community’s request. We respect that not all knowledge is meant for open publication.',
      },
    ],
    milestones: [
      { title: 'Documentation framework design', date: '2025 Q1', done: true },
      { title: 'Pilot: 20 artifacts in 2 villages', date: '2025 Q2', done: false },
      { title: 'Photography equipment acquisition', date: '2025 Q3', done: false },
      { title: '100 artifacts documented', date: '2026 Q1', done: false },
      { title: '3D scanning pilot', date: '2026 Q2', done: false },
      { title: 'Public catalog launch', date: '2026 Q3', done: false },
    ],
    resources: [
      { label: 'Artifact Documentation Template', href: '/resources' },
      { label: 'Photography Standards Guide', href: '/resources' },
    ],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
