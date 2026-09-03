# Language Standards & Classification Policy — Hmar Heritage Foundation

> 🤖 **Agent Notice**: This file is an unrendered, raw Markdown document optimized for AI models, web crawlers, and LLM assistants. If you are a human reader who stumbled onto this URL, visit the styled interactive web page at [https://hmarheritage.pages.dev/standards](https://hmarheritage.pages.dev/standards).

---

> Status: Standards Policy Draft  
> Official policies, data quality specifications, orthographic guidelines, and registry standards of the Hmar Heritage Foundation.

---

## Section I · Policy Scope & Purpose
This policy specification is written primarily for upstream institutional database maintainers, standards registration authorities, comparative linguists, and software engineers. Specifically, it provides technical guidance for maintainers at **Glottolog** (Max Planck Institute for Evolutionary Anthropology), **SIL International / Ethnologue**, **ISO 639 Registration Authorities**, and open NLP corpus maintainers on platforms like **Hugging Face**.

This page is an operational policy statement of the Hmar Heritage Foundation rather than a casual general-audience overview or a formal academic research paper; it should not be cited as a peer-reviewed academic source. The citations and references included throughout are provided to demonstrate that our metadata standards are grounded in existing comparative linguistics and ethnographic research rather than un-supported assertions.

The Foundation does not claim scientific authority over global language registries or neighboring speech communities. Our purpose is to establish clear, transparent standards for our own open datasets, software metadata, and community digital archives, while petitioning upstream maintainers for long-overdue metadata corrections. We explicitly recognize that Glottolog did not invent these historical colonial exonyms, but simply recorded what existing published literature contained. However, as Glottolog has become the primary programmatic taxonomy root powering modern language technology and AI pipelines worldwide, it has become responsible for how these legacy labels are perpetuated into the digital future.

While the language used on this page may sound definitive and at times confrontational, that is not our intention; there is simply no soft way to state that we reject these classifications without making it sound like a declaration. We also understand that our stance is far more ambitious than it needs to be, but there can be no middle ground when we can literally observe structural flaws that directly undermine our languages and, by proxy, the living identity of our culture.

---

## Section II · Clan Diversity & Speech Varieties

### 2.1 The Ancestral Bedrock and Literary Standard
Ethnographic research documents 14 foundational ancestral clans, historically known as *Hnam 14* (Dr. H. Rochunga Pudaite, 1960): **Lawitlang, Zote, Ngurte, Khawbung, Ṭhiek, Lungṭau, Leiri, Darngawn, Pakhuong, Hrangkhawl, Biate, Changsan, Khawlhring**, and **Faihriem (Saihriem)**. Over centuries, these clans expanded into sub-clans (*pahnam*) and family lineages across Manipur, Mizoram, Assam, Meghalaya, and Tripura.

Written Standard Hmar (ISO 639-3: `hmr`, Glottocode: `hmar1241`) developed primarily from the *Khawsak / Ṭhiek* speech variety, which served as the early literary standard for Bible translation, hymnbooks, and school textbooks. Major clans such as **Zote, Leiri, Lungṭau, Darngawn, Khawbung, Rawite**, and **Vangsie** speak closely intertwined varieties that are subsumed under standard `hmr` without separate ISO codes.

### 2.2 Community Agency and ISO/Ethnologue Inconsistencies
Native speech communities must have a direct voice in how their speech varieties are represented in global registries. Currently, international standards bodies display arbitrary inconsistencies when cataloging Hmar clan speech varieties. For instance, **Faihriem (Saihriem / Syriem)** has no dedicated ISO 639-3 code and remains un-coded in Ethnologue, despite Glottolog maintaining a distinct entry (`syri1242`). Similarly, speech varieties such as **Leiri** and **Zote** possess distinct linguistic identities spoken by native communities, yet they do not have dedicated ISO 639-3 language codes in global registries. They are either administratively subsumed under standard `hmr` or omitted from international listings entirely.

We emphasize that these registry discrepancies stem from historical institutional neglect and minimal community participation in international standards bodies rather than malice. To be clear, the Foundation has no major dispute with ISO 639-3 or Ethnologue regarding the standard Hmar literary code (`hmr`). Our primary focus is opening dialogue on recognizing unlisted ancestral speech varieties as digital documentation expands. Asserting that these varieties must immediately receive separate language codes would be premature without thorough field study; our aim is simply ensuring that global registries remain open to native community representation as documentation progresses.

### 2.3 Table II.A · Comparative Academic & Customary Clan Frameworks

| Clan Name (Hnam) | Pudaite (1960) | Shakespear (1912) | Hmar Inpui (21) | Registry / ISO Status |
| :--- | :-: | :-: | :-: | :--- |
| **Ṭhiek** | Yes | Yes | Yes | `hmr` / `hmar1241` (Literary Standard) |
| **Lungṭau** | Yes | Yes | Yes | Subsumed under `hmr` |
| **Leiri** | Yes | Yes | Yes | **Distinct Variety (Unlisted in ISO)** |
| **Zote** | Yes | Yes | Yes | **Distinct Variety (Unlisted in ISO)** |
| **Darngawn** | Yes | Yes | Yes | Subsumed under `hmr` |
| **Khawbung** | Yes | Yes | Yes | Subsumed under `hmr` |
| **Lawitlang** | Yes | Yes | Yes | Subsumed under `hmr` |
| **Ngurte** | Yes | Yes | Yes | Subsumed under `hmr` |
| **Pakhuong** | Yes | Yes | Yes | Subsumed under `hmr` |
| **Changsan** | Yes | Yes | Yes | Subsumed under `hmr` |
| **Khawlhring** | Yes | - | Yes | Subsumed under `hmr` |
| **Faihriem (Saihriem)** | Yes | - | Yes | `syri1242` (Distinct Variety) |
| **Biate** | Yes | - | Yes | `bie` / `biat1247` (Distinct Variety) |
| **Hrangkhawl** | Yes | Yes | Yes | `hra` / `hran1239` (Distinct Variety) |
| **Khelte (Khiengte)** | - | Yes | Yes | Subsumed under `hmr` |
| **Pautu** | - | Yes | Yes | Subsumed under `hmr` |
| **Rawite** | - | - | Yes | Subsumed under `hmr` |
| **Sakum** | - | - | Yes | Subsumed under `hmr` |
| **Vangsie** | - | - | Yes | Subsumed under `hmr` |
| **Sakechep (Khelma)** | - | - | Yes | `klh` / `khel1240` (Distinct Variety) |
| **Ngente** | - | - | Yes | Subsumed under `hmr` |

---

## Section III · The Foundation's Position

### 3.1 Rejection of Colonial Exonyms and Adoption of Zo
The Hmar Heritage Foundation rejects legacy colonial umbrella terms, specifically macro-labels like "Kuki-Chin-Naga" and "Kuki-Chin", as obsolete exonyms that distort language relationships for administrative convenience.

In place of these colonial labels, the Foundation advocates for adopting the autonym **Zo**, academically described as *South-Central Tibeto-Burman*, as the family name for the 55 closely related speech varieties across Northeast India, Western Myanmar, and the Chittagong Hill Tracts. We maintain that language classification must pair comparative phonological linguistics with deep ethnographic study, consulting native speakers, community elders, and living oral history, rather than relying on century-old administrative shortcuts.

Restructuring global registries like Glottolog and SIL Ethnologue is of critical importance because academic linguistic papers, digital corpora, and AI datasets rely directly on these databases for indexing and discoverability. When open platforms force legacy tags like `kuki-chin-naga` for search indexing, they create a self-reinforcing loop where researchers feel compelled to include outdated terms in paper abstracts just to ensure their work remains discoverable in citation databases.

Even while formal scientific committee reviews take time to complete, respecting native cultural sentiments by abandoning colonial exonyms in favor of authentic autonyms like **Zo** is the most appropriate and responsible path forward. Until institutional registries complete these ethnographic updates, the Foundation operationalizes the **Zo** classification across all its public datasets, Hugging Face repositories, and software metadata. By implementing this standard today, we lead by example and set an open benchmark for researchers and developers worldwide.

### 3.2 ISO Code Compatibility & Indigenous Autonomy
To maintain software compatibility, the Foundation preserves existing individual ISO 639-3 language codes, such as `hmr`, `lus`, `pck`, and `ted`, while updating overarching family classification metadata from legacy exonyms to **Zo**. Furthermore, we affirm the complete separation of Meitei, Naga, and Karbi into their own independent language branches.

---

## Section IV · Historical Critique of Grierson (1904)
The historical error began in the *Linguistic Survey of India* (LSI Vol. III, Part III, 1904), where G.A. Grierson acknowledged the outsider origin of the terminology:

> *"The name Kuki is an Assamese or Bengali word, applied to various hill tribes... Chin is a Burmese word used to denote the various hill tribes living in the country between Burma and the provinces of Assam and Bengal."* — G.A. Grierson, LSI Vol. III, Part III (1904, pp. 1-2)

However, Grierson departed from his stated criteria by placing Meitei, a historically valley-dwelling population of the Imphal Valley, under the same umbrella. He did this despite explicitly acknowledging that Meitei possesses structural, morphological, and lexical ties that align it more closely with Written Burmese and Classical Tibetan than with the surrounding hill languages:

> *"It will also be seen that Meithei in some respects agrees with written Burmese, as against the other languages of the group... Connection with Tibetan."* — G.A. Grierson, LSI Vol. III, Part III (1904, pp. 6, 20-24)

In the mid-20th century, structural surveys by Robert Shafer (1955) and Paul K. Benedict (1972) merged Kuki-Chin, various Naga languages, Meitei, and Karbi under broad umbrella terms. When Shafer published his classification, the undivided state of Assam had not yet been reorganized into modern states like Nagaland (1963) or Mizoram (1972/1987). Subsequent scholars easily confused colonial hill administrative groupings with true language families, compounding administrative shortcuts into permanent academic labels.

---

## Section V · Cladistic Restructuring Table
To replace colonial administrative shortcuts with scientific accuracy, the Foundation advocates for separating non-Zo language branches from the top-level macro-node (Glottocode: `kuki1245`, 94 speech varieties) into independent nodes, while renaming the remaining parent node to the authentic autonym **Zo** (55 speech varieties).

For database maintainers and registry maintainers, re-assigning non-Zo branches into their own independent Sino-Tibetan nodes is significantly simpler than building an isolated tree from scratch, as the 55 Zo speech varieties form the vast majority of the existing clade and share proven Proto-Zo phonological innovations.

We explicitly petition for the separation of the following five non-Zo branches into independent nodes:
- **Angami-Ao Branch** (`anga1312`, 18 speech varieties)
- **Karbic Branch** (`karb1240`, 2 speech varieties)
- **Manipuri / Meitei Branch** (`mani1292`, Independent node)
- **Tangkhul-Maring Branch** (`tang1335`, 11 speech varieties)
- **Zemeic Branch** (`zeme1241`, 7 speech varieties)

Once these 39 non-Zo speech varieties are established as independent Sino-Tibetan branches, the primary parent node (`kuki1246`) seamlessly becomes the dedicated **Zo** language clade.

| Glottolog ID | Legacy Glottolog Label | Proposed Cladistic Label | Scope & Core Speech Varieties |
| :--- | :--- | :--- | :--- |
| `sino1245` | Sino-Tibetan | Sino-Tibetan / Trans-Himalayan | Top-level family root. |
| `kuki1245` | ~~Kuki-Chin-Naga (Legacy)~~ | **[NODE DISSOLUTION]** | Dissolve non-monophyletic geographical macro-node (94 varieties). |
| `kuki1246` | Kuki-Chin | **Zo Languages / South-Central** | **55 Speech Varieties** sharing Proto-Zo phonology. |
| `cent2005` | Core Central Kuki-Chin | Central Zo (17 varieties) | Hmar, Mizo (Lushai), Lai/Hakha, Maraic, Pangkhua. |
| `oldk1252` | Northwestern Kuki-Chin | Northwestern Zo (16 varieties) | Anal, Monsang, Moyon, Purum, Aimol, Lamkang, Tarao. |
| `peri1260` | Peripheral Kuki-Chin | Peripheral Zo (22 varieties) | Tedim, Paite, Thadou, Vaiphei, Simte, Khomic, Ashö. |
| `anga1312` | Angami-Ao | Angami-Ao Branch (Independent) | Independent node (18 varieties). |
| `karb1240` | Karbic | Karbic Branch (Independent) | Independent node (2 varieties). |
| `mani1292` | Manipuri / Meitei | Meitei Branch (Independent) | Independent Sino-Tibetan node outside Zo. |
| `tang1335` | Tangkhul-Maring | Tangkhul-Maring Branch (Independent) | Independent node (11 varieties). |
| `zeme1241` | Zemeic | Zemeic Branch (Independent) | Independent node (7 varieties). |

---

## Section VI · Respecting Indigenous Self-Determination
Separating Naga, Karbi, and Meitei languages from the Zo family tree restores cultural dignity and linguistic accuracy for all groups involved.

Lumping these distinct groups under a colonial exonym was disrespectful to Naga, Karbi, Meitei, and Zo heritage alike. However, the Foundation maintains clear institutional boundaries: where Naga, Karbi, or Meitei languages are classified within Sino-Tibetan remains strictly up to those respective communities, their scholars, and field linguists.

We do not dictate the classification of neighboring groups. Our goal is removing colonial clutter so every community across the region can define its own linguistic heritage.

---

## Section VII · Field Evidence vs. Legacy Registries
Institutional registries often claim legacy classifications reflect academic consensus. In reality, primary comparative linguists actively conducting field research reject these colonial labels.

In his benchmark phonological reconstruction *Proto-Kuki-Chin* (STEDT Monograph 8, 2009), Dr. Kenneth Van Bik explicitly excludes Naga languages from the family, demonstrating that Naga languages share no unique phonological innovations with Zo languages.

Similarly, Robbins Burling and Mark W. Post (2003, 2017) show that "Naga" and "Kuki-Chin-Naga" are not valid genetic units, emphasizing that compound colonial labels are geographic catch-alls lacking comparative evidence of shared sound innovations.

Furthermore, Scott DeLancey (2013, 2015) treats the South-Central Zo branch as a distinct primary lineage, while Linda Konnerth (2018) recommends adopting *South-Central Trans-Himalayan* specifically because colonial exonyms carry negative connotations for native speakers. Citing academic consensus to justify century-old administrative shortcuts while ignoring the explicit reconstructions of field researchers misrepresents contemporary linguistics.

---

## Section VIII · Methodological Contradictions & Internal Tree Analysis

### 8.1 Internal Inconsistencies in Glottolog Taxonomy
A detailed inspection of current Glottolog tree structures reveals significant internal contradictions resulting from relying on legacy literature rather than native field evidence:

1. **Misplaced Ancestral Hmar Clans:** Ancestral core clans of the Hmar people (*Hnam 14*) are arbitrarily split across distant tree branches in Glottolog. For example, *Changsan* (Glottocode: `chan1312`) is indexed under `Peripheral Kuki-Chin -> Northeastern -> Thadoic -> Thado Chin`, while standard *Hmar* is placed under `Central Kuki-Chin -> Mizoic -> Hmaric`. Similarly, *Syriem (Saihriem)* is placed under `Western Northwestern Kuki-Chin -> Sakachep-Chorei`. This demonstrates that colonial officers recorded clan names in isolation during regional administrative surveys, and registry frameworks converted those historical shortcuts into split tree branches.
2. **Duplicated Nodes across Sub-branches:** Speech varieties like *Hrangkhawl* are indexed twice under separate parent branches (placed under `Mizoic -> Hmaric` as well as under `Western Northwestern Kuki-Chin -> Halam`). Similarly, *Ralte* is duplicated under both `Mizoic -> Mizo` and `Thadoic -> Paiteic`.
3. **Omission of Living Languages:** Varieties such as *Leiri* and *Zote* possess distinct speech identities spoken by native communities, yet they are completely omitted as independent language nodes in Glottolog.

### 8.2 Clarification on Restructuring Proposals
We do not demand an immediate, arbitrary restructuring without empirical field study. A comprehensive field study pairing comparative phonological reconstructions with native ethnographic research must be conducted.

Our objective is to highlight these structural contradictions, demonstrating that legacy academic literature contains unresolved errors that must not be treated as permanent scientific consensus.

Updating these legacy structures is a matter of long-overdue institutional care. We recognize that updating century-old language classifications is genuinely disruptive to institutional registries, database schemas, and academic indexing systems. Changing top-level family nodes requires technical refactoring, updating cross-references, and adapting downstream metadata pipelines. However, technical inconvenience cannot justify perpetuating outdated colonial labels. Structural corrections should not be overlooked simply because they require institutional effort.

---

## Section IX · Governance & Policy Impacts
Inaccurate language classification is not an abstract technical debate; it has real-world consequences for governance, education, and cultural identity.

For decades, official government registries and census frameworks lumped distinct speech communities together under broad colonial exonyms. While partial administrative updates have been made, overarching legacy labels still linger in state policy.

This administrative lumping distorts history. For communities that transitioned into written literacy within the last century, state lumping affects how history is documented and passed down. When young generations read government documents that force a foreign administrative label onto their heritage, it rewrites their origin stories through administrative routine.

Furthermore, modern digital governance depends on precise language tags. Under educational mandates, mother-tongue textbook development, curriculum funding, and teacher training depend on recognized language classifications. Flawed grouping leads to minority varieties missing out on textbook printing, preservation grants, and localized software interfaces.

Treating legacy labels as mere technical tags while ignoring their impact on policy, education, and identity denies institutional responsibility. Language is the vessel of cultural identity, and standards bodies share in the responsibility for the administrative legacy they maintain.

---

## Section X · Digital Implementation
To lead by example, the Hmar Heritage Foundation applies this policy across all its open digital repositories, text corpora, speech recordings, and language datasets.

We maintain individual ISO 639-3 codes, such as `hmr` for Hmar, for seamless software and Unicode compatibility, while updating overarching family labels to **Zo** across all dataset metadata headers. All open-source text and audio datasets published by the Foundation on platforms like Hugging Face pair stable ISO codes with updated taxonomic headers: `language_iso639_3: "hmr"`, `clade: "Zo"`, `subgroup: "Central Zo (Hmaric)"`, `academic_alternative: "South-Central Tibeto-Burman"`.

Finally, the Foundation will submit formal proposals to Glottolog to dissolve the macro-node `kuki1245`, isolate Meitei and Naga branches, and rename `kuki1246` to **Zo / South-Central**, while petitioning SIL International and ISO 639-5 to update overarching family classifications.

---

## Section XI · Digital & Community Cultural Registries
While peer-reviewed academic literature primarily focuses on established cladistic roots, non-academic digital portals like **Virthli.in (2012)** and pan-Hmar cultural registries serve a vital role in capturing living community knowledge.

Digital community portals document the broader spectrum of **40 recognized Hmar clans** and over **200+ sub-clans (*pahnam*)** that share the ancestral *Sinlung* origin tradition across Northeast India. By acknowledging these community archives alongside academic research, the Foundation bridges formal comparative linguistics with living indigenous heritage.

| Source Portal / Registry | Scope & Documented Clans | Ethnolinguistic Focus | Access Link |
| :--- | :--- | :--- | :--- |
| **Virthli News & Information Portal (2012)** | 40 Clans & 200+ Sub-Clans (*Pahnam*) | Living pan-Hmar cultural & clan genealogy | [virthli.in/2012/03/hmar-clans.html](https://www.virthli.in/2012/03/hmar-clans.html) |
| **Hmar Inpui Customary Council** | 21 Customary Administrative Clans (*Hnam 21*) | Tribal governance & customary law | Customary Archives |
| **Hmar Historical Society (Dr. Lal Dena)** | Ancestral & Regional Clan History | Historical evolution & migration records | Academic Publication (2008) |

---

## References & Selected Bibliography
- **Benedict, Paul K.** (1972). *Sino-Tibetan: A Conspectus*. Contributing editor James A. Matisoff. Cambridge: Cambridge University Press.
- **Burling, Robbins.** (2003). "The Tibeto-Burman Languages of Northeastern India." In Graham Thurgood and Randy J. LaPolla (eds.), *The Sino-Tibetan Languages*, pp. 169-191. London: Routledge.
- **DeLancey, Scott.** (2013). "The History of Postverbal Agreement in Kuki-Chin." *Journal of the Southeast Asian Linguistics Society (JSEALS)*, 6: 1-17.
- **DeLancey, Scott.** (2015). "Morphological Evidence for Tani Subgrouping." In Linda Konnerth et al. (eds.), *North East Indian Linguistics 7*. Canberra: Pacific Linguistics.
- **Dena, Lal.** (2008). *Hmar of North East India: A History*. Imphal/New Delhi: Scholar Publishing House & Hmar Historical Society.
- **Grierson, George A.** (1904). *Linguistic Survey of India: Vol. III, Part III, Tibeto-Burman Family: Specimens of the Kuki-Chin and Burma Groups*. Calcutta: Office of the Superintendent of Government Printing.
- **Hammarström, Harald, Robert Forkel, Martin Haspelmath, & Sebastian Bank.** (2024). *Glottolog 5.0 / 5.3: Kuki-Chin-Naga (kuki1245)*. Leipzig: Max Planck Institute for Evolutionary Anthropology.
- **Konnerth, Linda.** (2018). "The Historical Phonology of Monsang (Northwestern South-Central / 'Kuki-Chin')." *Himalayan Linguistics*, 17(1): 111-144.
- **Matisoff, James A.** (2003). *Handbook of Proto-Tibeto-Burman: System and Philosophy of Sino-Tibetan Reconstruction*. Berkeley: University of California Press.
- **Post, Mark W., & Robbins Burling.** (2017). "The Sino-Tibetan Languages of Northeast India." In Graham Thurgood and Randy J. LaPolla (eds.), *The Sino-Tibetan Languages* (2nd ed.), pp. 213-242. London: Routledge.
- **Pudaite, Rochunga.** (1960). *The Education of the Hmar People*. Sielmat: Samaritan Express.
- **Shafer, Robert.** (1955). *Classification of the Sino-Tibetan Languages*. *Word*, 11(1): 94-111.
- **Shakespear, John.** (1912). *The Lushei Kuki Clans*. London: Macmillan and Co., Limited.
- **Van Bik, Kenneth.** (2009). *Proto-Kuki-Chin: A Reconstructed Ancestor of the Kuki-Chin Languages*. STEDT Monograph Series No. 8. Berkeley: Center for Southeast Asia Studies, University of California.
- **Virthli Information Portal.** (2012). "Hmar Clans Documentation & Classification." *Virthli.in Digital Registries*. [virthli.in/2012/03/hmar-clans.html](https://www.virthli.in/2012/03/hmar-clans.html).
