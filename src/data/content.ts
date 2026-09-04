export interface Person {
  name: string;
  role: string;
  bio: string;
  location: string;
  initials: string;
  focus: string[];
}

export const people: Person[] = [
  {
    name: 'Donal Muolhoi',
    role: 'Founder & Project Lead',
    bio: 'Leads foundation administration, website infrastructure, dataset engineering in i18n JSON, PO, and XML formats, and manages open repositories on Hugging Face.',
    location: 'Open Infrastructure',
    initials: 'DM',
    focus: ['Administration', 'Data Engineering', 'Hugging Face'],
  },
  {
    name: 'Ephriam Pena',
    role: 'Field Operator & Public Relations',
    bio: 'Coordinates village outreach to collect physical books, out-of-print literature, rare folk songbooks, and oral history recordings from community elders and family archives.',
    location: 'Field Outreach',
    initials: 'EP',
    focus: ['Book Collection', 'Oral History', 'Community Outreach'],
  },
  {
    name: 'Stephen Huolngo',
    role: 'Digitization & Technical Imaging Lead',
    bio: 'Operates high-resolution overhead book scanners and archival cameras, processing raw page scans into clean, searchable PDFs for open digital preservation.',
    location: 'Digital Preservation',
    initials: 'SH',
    focus: ['Overhead Scanning', 'PDF Processing', 'Archival Imaging'],
  },
  {
    name: 'Editorial & Quality Control Lead',
    role: 'Open Position (Volunteer Needed)',
    bio: 'Responsible for orthographic verification, guiding weekly lead-section article drafting on Wikimedia Incubator (Wp/hmr), and reviewing customary lexicon entries.',
    location: 'Wikimedia / Lexicon',
    initials: 'OP',
    focus: ['Wikipedia Incubator', 'Orthography', 'Lexicon Review'],
  },
];

export interface Clan {
  name: string;
  region: string;
  notes: string;
}

export const clans: Clan[] = [
  { name: 'Lawitlang', region: 'Manipur / Mizoram', notes: 'Foundational ancestral clan historically settled in the Tuivai and Barak river basins.' },
  { name: 'Zote', region: 'Mizoram / Manipur', notes: 'Widespread ancestral clan with significant populations across Mizoram, Manipur, and Assam.' },
  { name: 'Ngurte', region: 'Manipur', notes: 'Ancestral clan branch with strong oral history traditions in the highland homelands.' },
  { name: 'Khawbung', region: 'Mizoram / Manipur', notes: 'Core ancestral clan with historical ties across Manipur and Mizoram.' },
  { name: 'Ṭhiek', region: 'Manipur / Mizoram', notes: 'Historically associated with the early literary standard and Tuivai river settlements.' },
  { name: 'Lungṭau', region: 'Manipur', notes: 'Ancestral clan branch known for customary law and village council traditions.' },
  { name: 'Leiri', region: 'Manipur', notes: 'Core ancestral clan with rich oral chronicles centered on the Tuitha river basin.' },
  { name: 'Darngawn', region: 'Mizoram / Assam', notes: 'Ancestral clan known for traditional governance and historical settlements.' },
  { name: 'Pakhuong', region: 'Assam / Manipur', notes: 'Foundational clan branch with historical ties to North Cachar and Manipur.' },
  { name: 'Hrangkhawl', region: 'Assam (Dima Hasao)', notes: 'Ancestral clan concentrated in the Dima Hasao and Cachar districts.' },
  { name: 'Biate', region: 'Assam / Meghalaya', notes: 'Ancient highland clan with distinct dialectal nuances and oral song traditions.' },
  { name: 'Changsan', region: 'Manipur / Assam', notes: 'Ancestral clan cataloged in early ethnographic records across the highland region.' },
  { name: 'Khawlhring', region: 'Mizoram / Manipur', notes: 'Core ancestral clan with historical lineages across Mizoram and Manipur.' },
  { name: 'Faihriem', region: 'Manipur / Assam', notes: 'Historically associated with trade and migration routes between hills and plains.' },
  { name: 'Pautu', region: 'Manipur / Mizoram', notes: 'Ancestral clan branch with historical lineages in the highland homelands.' },
  { name: 'Khelte (Khiengte)', region: 'Manipur / Mizoram', notes: 'Recognized clan branch participating in customary council governance.' },
  { name: 'Rawite', region: 'Manipur', notes: 'Recognized clan branch with distinct weaving and cultural traditions.' },
  { name: 'Sakum', region: 'Manipur / Assam', notes: 'Recognized administrative clan branch documented in customary law registries.' },
  { name: 'Vangsie', region: 'Mizoram', notes: 'Customary clan branch with historical family lineages across Manipur and Mizoram.' },
  { name: 'Sakechep', region: 'Assam / Meghalaya', notes: 'Ancestral clan branch cataloged in customary council records.' },
  { name: 'Ngente', region: 'Mizoram / Manipur', notes: 'Customary clan branch preserved in traditional genealogy registries.' },
];

export interface Resource {
  title: string;
  description: string;
  type: string;
  format: string;
  size: string;
  license: string;
  category: 'keyboard' | 'data' | 'guide' | 'font';
  url?: string;
  hfBadge?: string;
}

export const resources: Resource[] = [
  {
    title: 'Hmar Multi-Source Wordlist (43.5K Entries)',
    description: 'Standardized collection of 43,509 Hmar words, phrases, definitions, and translations compiled from Dr. John H. Pulamte, Upa J. Lungawi, Dr. Thanglung, Upa Dr. VL Tluonga Bapui, and HHF.',
    type: 'Dataset',
    format: 'JSON / HF Dataset',
    size: '43,509 Entries (12.4 MB)',
    license: 'MIT',
    category: 'data',
    hfBadge: 'hmar-heritage-org / wordlist',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/wordlist',
  },
  {
    title: 'Hmar Synthetic Names & Clan Corpus (10.19M)',
    description: '10,193,568 (10.19 Million) unique synthetic Hmar full names generated using traditional compound middle names, gender rules, and clan taxonomy (40 ancestral clans & 253 sub-clans).',
    type: 'Dataset',
    format: 'JSONL.GZ / HF Dataset',
    size: '10.19M Records (240 MB)',
    license: 'MIT',
    category: 'data',
    hfBadge: 'hmar-heritage-org / hmar-names',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/hmar-names',
  },
  {
    title: 'Zo Parallel Bible Corpus (zo-bible)',
    description: 'Sentence-aligned parallel corpus covering 30,974 canonical verses across 8 Zo languages (Hmar CLB & OV, Mizo CLB & OV, Paite, Vaiphei, Thadou, Gangte, Zou) and English (WEB).',
    type: 'Parallel Corpus',
    format: 'JSON / HF Dataset',
    size: '30,974 Verses (18.6 MB)',
    license: 'MIT',
    category: 'data',
    hfBadge: 'hmar-heritage-org / zo-bible',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/zo-bible',
  },
  {
    title: 'Hmar Text Archive & Digital Vault (corpus-archive)',
    description: 'Structured 3-tier digital textual archive preserving Hmar literature, historical accounts, school textbooks, dictionaries, and academic research repositories.',
    type: 'Digital Archive',
    format: 'PDF / JSON / CSV Repo',
    size: '12 Cataloged Repos',
    license: 'CC BY-NC-SA 4.0',
    category: 'data',
    hfBadge: 'hmar-heritage-org / corpus-archive',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/corpus-archive',
  },
  {
    title: 'PMST-Hmar: Person Marking Database',
    description: 'Linguistic database of Hmar person markers, inflected verbal paradigms, pronouns, tokenized IPA morphs, and phonetic sound mappings curated by University of Bern (S. Auderset et al.).',
    type: 'Linguistic Data',
    format: 'CSV + Documentation',
    size: '281 Paradigm Records',
    license: 'CC BY-SA 4.0',
    category: 'data',
    hfBadge: 'University of Bern / PARALEX',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/corpus-archive/tree/main/data/repo/0012',
  },
  {
    title: 'Hmar Grammar (1996) — PDF Scan',
    description: 'Foundational reference work on Hmar grammar, phonology, and sentence structure by P. N. Dutta Baruah and V. L. Tluonga Bapui (CIIL / AIRTSC).',
    type: 'Digitized Book',
    format: 'PDF Scan (0001)',
    size: 'Archival Document',
    license: 'CC BY-NC-SA 4.0',
    category: 'guide',
    hfBadge: 'corpus-archive / data/pdf/0001',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/corpus-archive/tree/main/data/pdf/0001',
  },
  {
    title: 'Hmar Tawng Inchukna (2012) — PDF Scan',
    description: 'Hmar language primer and grammar learning manual authored by Upa Dr. Vanlal Tluonga Bapui.',
    type: 'Digitized Book',
    format: 'PDF Scan (0002)',
    size: 'Archival Document',
    license: 'CC BY-NC-SA 4.0',
    category: 'guide',
    hfBadge: 'corpus-archive / data/pdf/0002',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/corpus-archive/tree/main/data/pdf/0002',
  },
  {
    title: 'Nunrobu-8 (2020) — Class 8 MIL Textbook PDF',
    description: 'Standard Class 8 Hmar Major Indian Language (MIL) literature textbook published by the Hmar Literature Society (HLS).',
    type: 'Textbook',
    format: 'PDF Scan (0003)',
    size: 'School MIL Textbook',
    license: 'CC BY-NC-SA 4.0',
    category: 'guide',
    hfBadge: 'corpus-archive / data/pdf/0003',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/corpus-archive/tree/main/data/pdf/0003',
  },
  {
    title: 'Hmar Chanchin (1987) — Historical Chronicle PDF',
    description: 'Historical chronicle documenting Hmar origins, ancestral migrations, clan lineage, and customary accounts by H. B. Hrangchhuana.',
    type: 'History Book',
    format: 'PDF Scan (0004)',
    size: 'Historical Chronicle',
    license: 'CC BY-NC-SA 4.0',
    category: 'guide',
    hfBadge: 'corpus-archive / data/pdf/0004',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/corpus-archive/tree/main/data/pdf/0004',
  },
  {
    title: 'Oral History Recording Protocol',
    description: 'Step-by-step guide for community members conducting oral history recordings. Covers consent, equipment setup, recording techniques, and metadata documentation.',
    type: 'Guide',
    format: 'PDF Guide',
    size: '1.8 MB',
    license: 'CC BY 4.0',
    category: 'guide',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/corpus-archive',
  },
];
