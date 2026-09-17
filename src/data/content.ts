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
    role: 'Project Lead',
    bio: 'Oversees Foundation operations and overall project management, coordinating organizational planning, general administration, and public repositories.',
    location: 'Project Direction',
    initials: 'DM',
    focus: ['Foundation Operations', 'Project Management', 'Administration'],
  },
  {
    name: 'Stephen Huolngo',
    role: 'Project Co-Lead',
    bio: 'Shares overall project lead responsibilities + public relations, community connections, and outreach.',
    location: 'Operations & PR',
    initials: 'SH',
    focus: ['Project Management', 'Public Relations', 'Community Outreach'],
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
  { name: 'Chawhte', region: 'Manipur / Mizoram', notes: 'Customary clan branch preserved in historical family chronicles and village genealogies.' },
  { name: 'Chawnthei', region: 'Manipur / Mizoram', notes: 'Customary clan branch with ancestral lineages documented in traditional genealogies.' },
  { name: 'Bawm (Bawmzo)', region: 'Mizoram / Chittagong Hills', notes: 'Ancestral clan branch with shared Sinlung origin traditions across the highland region.' },
  { name: 'Chiru (Chawrai)', region: 'Manipur / Assam', notes: 'Customary clan variety cataloged in early historical accounts and clan registers.' },
  { name: 'Pang (Pangkhua)', region: 'Mizoram / Tripura', notes: 'Ancestral clan branch sharing cultural, linguistic, and oral song heritages.' },
];

export interface Resource {
  title: string;
  description: string;
  type: string;
  format: string;
  size: string;
  license: string;
  category: 'data' | 'tools' | 'model' | 'assets';
  url?: string;
  buttonLabel?: string;
  disabled?: boolean;
  statusBadge?: string;
  provenance?: 'community' | 'foundation';
}

export const resources: Resource[] = [
  {
    title: 'assets',
    description: 'Official brand assets repository containing vector SVG and PNG logos, lockups, icons, and favicons for the Hmar Heritage Foundation.',
    type: 'Brand Assets',
    format: 'SVG / PNG',
    size: 'GitHub Repository',
    license: 'MIT',
    category: 'assets',
    url: 'https://github.com/hmar-heritage-org/assets',
    buttonLabel: 'View on GitHub',
  },
  {
    title: 'HmarBERT',
    description: 'BERT-base masked language model fine-tuned from MizBERT on the open Hmar sentences corpus with 109.5M parameters. Supports fill-mask token prediction, contextual embeddings, and representation learning for the Hmar language.',
    type: 'Masked Language Model',
    format: 'PyTorch / SafeTensors',
    size: '109.5M Parameters · 440 MB',
    license: 'MIT',
    category: 'model',
    url: 'https://huggingface.co/azinamotoe/HmarBERT',
    buttonLabel: 'View on Hugging Face',
    statusBadge: 'Community Model',
    provenance: 'community',
  },
  {
    title: 'HmarBERT-mini',
    description: 'Experimental lightweight BERT architecture. Contains tokenizer configurations and vocabulary tokens only; model weights are not yet trained. Unclickable until weights are trained.',
    type: 'Model · Untrained',
    format: 'Tokenizer / Vocab Only',
    size: 'Untrained · Tokens Only',
    license: 'Apache 2.0',
    category: 'model',
    disabled: true,
    buttonLabel: 'Untrained · Tokens Only',
    statusBadge: 'Untrained · Tokens Only',
    provenance: 'community',
  },
  {
    title: 'Dolma',
    description: 'Interactive inference demo hosted on ZeroGPU for testing masked word predictions and fill-mask token completions with HmarBERT in the browser.',
    type: 'Interactive Space',
    format: 'Gradio / ZeroGPU Space',
    size: 'ZeroGPU Web App',
    license: 'MIT',
    category: 'model',
    url: 'https://huggingface.co/spaces/azinamotoe/Dolma',
    buttonLabel: 'Launch Space Demo',
    statusBadge: 'Interactive Demo',
    provenance: 'community',
  },
  {
    title: 'hmaraniam',
    description: 'Zero-dependency Python package for fast offline-first Hmar language identification backed by 97,680 frequency-ranked unigrams and diacritic normalization.',
    type: 'Python Package',
    format: 'PyPI / pip package',
    size: 'v0.2.2 · Python Library',
    license: 'MIT',
    category: 'tools',
    url: 'https://pypi.org/project/hmaraniam/',
    buttonLabel: 'View on PyPI',
  },
  {
    title: 'hmar-heritage-org/hmaraniam',
    description: 'Source code repository for the hmaraniam language detector with automated test suite, packaging metadata, and Zo sibling language diagnostics.',
    type: 'Source Repository',
    format: 'Git Repository',
    size: 'Source Code · 23 Tests',
    license: 'MIT',
    category: 'tools',
    url: 'https://github.com/hmar-heritage-org/hmaraniam',
    buttonLabel: 'View on GitHub',
  },
  {
    title: 'azinamotoe/hmaraniam',
    description: 'Interactive web application for real-time Hmar language detection with dual input modes for direct text and live web URL article extraction plus Zo diagnostics.',
    type: 'Interactive Space',
    format: 'Gradio / HF Space',
    size: 'Live Web Detector',
    license: 'MIT',
    category: 'tools',
    url: 'https://huggingface.co/spaces/azinamotoe/hmaraniam',
    buttonLabel: 'Launch Space Demo',
    statusBadge: 'Community Space',
    provenance: 'community',
  },
  {
    title: 'corpus-archive-tool-for-termux',
    description: 'Mobile TUI tool for Android Termux and Linux to scan storage for scanned books and documents, auto-assign 4-digit catalog IDs, and upload atomic commits to the Hugging Face digital vault.',
    type: 'Mobile CLI / TUI',
    format: 'Python / Termux',
    size: 'Lightweight Script',
    license: 'MIT',
    category: 'tools',
    url: 'https://github.com/hmar-heritage-org/corpus-archive-tool-for-termux',
    buttonLabel: 'View on GitHub',
  },
  {
    title: 'termux-yt-scraper',
    description: 'Lightweight YouTube comments scraper optimized for Android Termux with wake-lock support and automated export to Downloads for collecting conversational Hmar linguistic text.',
    type: 'Mobile CLI / Scraper',
    format: 'Python / Termux',
    size: 'Lightweight Script',
    license: 'MIT',
    category: 'tools',
    url: 'https://github.com/hmar-heritage-org/termux-yt-scraper',
    buttonLabel: 'View on GitHub',
  },
  {
    title: 'sentences',
    description: 'Curated multi-register sentence corpus containing 255,586 sentences and ~4.26 million words across train and test splits spanning literature, news, religious text, and community archives.',
    type: 'Pretraining Corpus',
    format: 'JSONL / Parquet',
    size: '255,586 Sentences · ~4.26M Words',
    license: 'MIT',
    category: 'data',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/sentences',
    buttonLabel: 'View Dataset',
  },
  {
    title: 'wordlist',
    description: 'Standardized collection of 43,509 Hmar entries across 5 dictionaries compiled from Dr. John H. Pulamte, Upa J. Lungawi, Dr. Thanglung, and Upa Dr. VL Tluonga Bapui.',
    type: 'Lexicon Dataset',
    format: 'JSON / Parquet',
    size: '43,509 Entries · 12.9 MB',
    license: 'MIT',
    category: 'data',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/wordlist',
    buttonLabel: 'View Dataset',
  },
  {
    title: 'unigrams',
    description: 'Deduplicated surface vocabulary dataset containing 97,680 unique native Hmar words and active loanwords extracted from web archives and literature with frequency rankings.',
    type: 'Lexical Dataset',
    format: 'JSONL / Parquet',
    size: '97,680 Words · 1.9 MB',
    license: 'CC BY 4.0',
    category: 'data',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/unigrams',
    buttonLabel: 'View Dataset',
  },
  {
    title: 'hmingtluon',
    description: 'Cultural naming registry documenting traditional Hmar given names, clan genealogies across 40 ancestral clans and 253 sub-clans, gender naming conventions, and compound middle names.',
    type: 'Cultural Registry',
    format: 'JSONL / Parquet',
    size: '10.19M Records · 1.19 GB',
    license: 'MIT',
    category: 'data',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/hmingtluon',
    buttonLabel: 'View Dataset',
  },
  {
    title: 'zo-bible',
    description: 'Sentence-aligned parallel corpus covering 31,107 canonical verses across 66 books and 10 translations in 8 Zo languages plus English.',
    type: 'Parallel Corpus',
    format: 'JSON / Parquet',
    size: '31,107 Verses · 59 MB',
    license: 'MIT',
    category: 'data',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/zo-bible',
    buttonLabel: 'View Dataset',
  },
  {
    title: 'numeral-words',
    description: 'Dataset of 999,999 spelled-out Hmar number words mapped to numerical integer values from 1 to 999,999 for mathematical NLP and number tokenization.',
    type: 'Lexical Dataset',
    format: 'JSONL / Parquet',
    size: '999,999 Records · 112 MB',
    license: 'MIT',
    category: 'data',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/numeral-words',
    buttonLabel: 'View Dataset',
  },
  {
    title: 'culture-dump',
    description: 'Digital vault planned for preserving raw web dumps, community blog archives, oral traditions, and cultural text assets. Planned and currently empty.',
    type: 'Digital Vault',
    format: 'ZIP Archives / JSONL',
    size: 'Planned · Currently Empty',
    license: 'CC BY 4.0',
    category: 'data',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/culture-dump',
    buttonLabel: 'View Dataset',
    statusBadge: 'Planned · Empty',
  },
  {
    title: 'zo-cognates',
    description: 'Cross-linguistic comparative cognate dataset planned across Zo languages to track lexical correspondences and sound changes. Planned and currently empty.',
    type: 'Comparative Lexicon',
    format: 'JSONL / Parquet',
    size: 'Planned · Currently Empty',
    license: 'MIT',
    category: 'data',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/zo-cognates',
    buttonLabel: 'View Dataset',
    statusBadge: 'Planned · Empty',
  },
  {
    title: 'corpus-archive',
    description: 'Structured 3-tier digital textual archive preserving Hmar literature, historical accounts, textbooks, dictionaries, and research repositories across 13 cataloged items.',
    type: 'Digital Archive',
    format: 'PDF / JSON / CSV Repo',
    size: '13 Cataloged Repos',
    license: 'CC BY-NC-SA 4.0',
    category: 'data',
    url: 'https://huggingface.co/datasets/hmar-heritage-org/corpus-archive',
    buttonLabel: 'View Archive',
  },
];
