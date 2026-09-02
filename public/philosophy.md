# Foundational Philosophy — Hmar Heritage Foundation

> 🤖 **Agent Notice**: This file is an unrendered, raw Markdown document optimized for AI models, web crawlers, and LLM assistants. If you are a human reader who stumbled onto this URL, visit the styled interactive web page at [https://hmarheritage.pages.dev/philosophy](https://hmarheritage.pages.dev/philosophy).

---

> On scope, realism, unattributed groundwork, and the generational nature of open language preservation.

---

## Section I · The Illusion of Instant Results
When people hear about digitizing books, standardizing software locales, or creating AI datasets, it is natural to imagine a quick outcome: a smartphone update that magically turns every screen into Hmar overnight, or a major tech giant launching a full translation engine next month.

We must be completely honest with ourselves and our community: **this is not how open language infrastructure works.**

Building digital tools for a regional language is not a 6-month product launch. It is a slow and steady process. We may digitize hundreds of physical manuscripts, compile thousands of terminology keys, and host open datasets for years before tech companies take notice. Recognizing this reality is not pessimism. It is the practical foundation for long-term work.

---

## Section II · Unattributed Groundwork & The Absence of Credit
Building infrastructure is often invisible and thankless. When a developer five years from now uses our datasets on Hugging Face or imports our translation keys to add Hmar support to an app, they probably won't even know our names and definitely won't cite this foundation.

**That is not a failure. That is the point of open stewardship.**

If we do this work seeking personal credit or commercial payouts, we will quickly get discouraged. We create open schemas, digital archives, and glossaries so anyone can build upon them freely, without asking for permission.

---

## Section III · Language Evolution & Cultural Survival
Languages do not get left behind simply because there were not enough native speakers or because nobody researched them. Languages fade when they fail to adapt and evolve into the dominant mediums of their era.

In the past, evolution meant transitioning from oral traditions into written corpora. Today, evolution just means bridging the gap between static research papers and functional software tools, which, in simple words, means **data**.

The reason Hebrew, Aramaic, and Ancient Greek are still spoken or studied today is because they were meticulously documented. And while documentation alone doesn't actually guarantee a language will remain relevant, it ensures that it remains available for future generations. Languages evolve regardless of how a community feels about linguistic purity. English transformed continuously across centuries, from medieval dialects to modern digital slang. It became a global language specifically because it adapted to every new era. The language changed, but the culture survived. No native speaker denies their heritage simply because they cannot read 10th-century Old English. Adaptation does not destroy culture, it is how culture survives.

Debates over diacritics and orthographic purity come from a deep, genuine love for our language. But we must acknowledge historical reality: expressing Hmar in Latin script was already an act of adaptation. Arguing for rigid purity contradicts its own roots. The only purity to argue for is adaptation. The shoe is not the foot, it can never be the foot.

The argument that diacritics are strictly necessary to identify how words sound is fundamentally flawed. English does not lack diacritics because it doesn't technically need them, but because we've come to agree on how a word should sound based on the context. For instance, readers distinguish between *"I live in the city"* and *"The event is broadcast live"* based on surrounding context. If a reader cannot identify how a word is pronounced from its sentence, it simply shows a lack of familiarity with the living language.

Grammar books exist to describe the grammar rules of a language, not to dictate the grammar rules of a language. Just because a textbook uses diacritics to express a sound or pronunciation, it does not become a rule.

Language is a tool; it is not us. We are the history, the memory, and the living culture. A tool exists to serve its people, and when the era changes, the tool must adapt so the culture survives.

However, this foundation does not advocate for the removal of diacritics, but it does recognize the absurdity of linguistic purity. We maintain that how language evolves is not up to any institution, foundation, or philosophical framework, but the people themselves.

---

## Section IV · Global Standards for Latin Scripts
The debate over diacritics directly affects how we collect data. Some argue that typing *"tr"* or *"t"* instead of *"ṭ"* invalidates dataset quality, but this represents a narrow academic view of linguistics that ignores how software actually works, and these incorrect usages can simply be regarded "alternative spellings". Furthermore, it assumes every written content is grammatically correct or should be.

Diacritics are not just visual marks; they are technical dependencies. For a diacritic-heavy language to function digitally, it requires a complete, unbroken ecosystem:
- The Operating System must natively support the locale.
- The System Fonts must render the glyphs without breaking into blank boxes.
- The Virtual Keyboards must feature dedicated, easily accessible layouts so users don't have to hunt through long-press menus just to type a single word.

Major global languages with over ten centuries of traceable linguistic history, like French, German, and Spanish, do not use diacritics in their ISO software tags because plain ASCII is the universal software standard. And these languages can support diacritics in app menus because they have corporate backing and massive open-source communities maintaining their software stacks. Hmar does not yet have native OS integration or an army of open-source maintainers. If Mozilla adopts a diacritic-heavy locale but Android, Apple, or Microsoft does not, or if a website requires dotted characters while users are forced to type on a standard English mobile keyboard, the system breaks. And we will be the ones abandoning our own language then.

Forcing diacritics creates an asymmetric search problem. Under the hood, computers perform exact binary matches. If our database rigidly stores data with diacritics (like *"ṭang"*) and a user searches using a standard keyboard (*"tang"*), the computer sees a total mismatch and returns zero results. Major languages bypass this by deploying massive, expensive runtime search analyzers to strip and map characters on the fly. A grassroots, open-source project does not have the luxury of building custom linguistic software layers for every local app or database.

Furthermore, if the speech community ever develops a native writing system or decides to adopt a non-Latin script, linguistic purity is justifiable. But as long as we rely on an adapted Latin alphabet without systemic OS integration, dropping diacritics in software locales is the only sensible option for universal compatibility, or at least until Hmar becomes a first-class language in the digital ecosystem, like Assamese or Bengali.

---

## Section V · Using "Incorrect" Grammar is OK
One of the biggest reasons people hesitate to contribute to archives is the fear of making grammatical mistakes. Many native speakers hesitate to submit stories, record audio, or write text because they worry their grammar isn't "pure" or formal enough.

We want to state that **using non-standard or "incorrect" grammar is completely okay.** Linguistics is descriptive, not prescriptive. Our mission is to capture how Hmar is actually spoken and written by real people today, not to enforce a rigid textbook ideal. Informal letters, oral folklore, youth slang, internet shorthand, and dialectal variations are precious records of a living culture.

If we reject real-world communication because it fails a formal grammar test, we throw away half of our living history. An open archive must belong to every speaker, not just grammarians.

From a software perspective, this is equally critical. If AI translation models, speech recognition tools, and search indexes are trained exclusively on artificially flawless grammar, they become brittle. Including natural, un-sanitized human communication in our open datasets ensures that the digital tools we build are resilient, fault-tolerant, and capable of understanding how people actually communicate in daily life. This is also why modern AI assistants can understand messy user prompts filled with typos and broken syntax that would confuse a human proofreader.

---

## Section VI · Bridging Academic Research and Community Realities
To be clear about who we are: **we do not conduct original academic research, we do not publish scholarly papers, and none of us are formal university linguists. We are also not training complex AI models ourselves.**

Our role is much simpler and practical: **we synthesize information, generate structured open datasets, and build low-barrier platforms that enable non-technical community members to create data.**

Right now, a major bottleneck in language preservation is that academic research sits idle. Brilliant papers written by university scholars and native linguists exist in isolated PDFs, university repositories, and obscure websites. But beyond corporate motives, there is no practical medium for that research to be used. The theoretical foundation to build voice synthesis, dictionaries, or translation tools exists, but because there are no open, structured datasets, there is no probability for the open-source community to take notice, and as we've all come to realize, modern technology and the internet at large rest on the shoulders of this open-source community.

Furthermore, academic papers alone cannot build working language tools, much like you can't cook a meal with just a recipe book. It is straightforward to generate audio programmatically even without artificial intelligence, but without an open, standardized map of how written words actually sound out loud, making a computer pronounce a language correctly is essentially trying to paint in the dark. To build functional software, voice assistants, or translation tools, you need the actual ingredients: standardized phonetic sound maps, real-world language usage data, authentic speech audio, raw document scans, and clean transcriptions. Collecting and packaging these real-world ingredients at scale is something even well-funded academic institutions struggle to do alone without open, community-driven platforms. We exist to bridge that exact gap.

While the core task itself is simple, *create datasets*, it still requires thoughtful engineering to structure data so it is clean, usable, and standardized. It does not require a PhD in computer science, but it does require a basic understanding of modern data structures and experience in data manipulation, which is something we definitely need help with. So if you are a developer, data wrangler, or hobbyist with free time and want to help, do not hesitate to reach out and join us.

---

## Section VII · Setting Community Expectations
To every writer, student, linguist, and elder who joins this initiative: we ask that you enter this work with clear eyes and deep patience.

Scanning a rare folk songbook to PDF today will not change the world tomorrow. Translating twenty smartphone confirmation popups this weekend will not force operating systems to update on Monday. But doing this quiet work ensures that our rare literature is never lost to physical decay, and that when future generations of Hmar engineers, scholars, and creators arrive, the open door and the foundational tools are already waiting for them.

---

## Section VIII · Sustainable Pace & Burnout Prevention
While it would technically be ideal for the foundation to run non-stop 365 days a year, it is completely unrealistic to expect volunteers, contributors, or anybody, really, not to get burnt out.

Instead of forcing artificial year-round daily output, we operate in focused, seasonal project sprints. When we have the time, energy, and resources, we run active data sprints for physical book scanning, dictionary extraction, and dataset cleanups. When we need to recharge, plan, or focus on our personal lives, we step back.

This approach prevents burnout and keeps our work sustainable for the long haul, while keeping our open repositories, GitHub, and contribution portals accessible to everyone 365 days a year.

---

## Section IX · Funding & Financial Independence
For any foundation to exist meaningfully, it must remain independent, transparent, and grounded in self-reliance. This initiative is bootstrapped using personal resources, volunteer time, and internal passion rather than corporate sponsorships or institutional payrolls.

This financial independence ensures that our priorities are dictated solely by cultural stewardship and community need, free from commercial motives or external agendas.

As our work scales, acquiring out-of-print books, purchasing high-resolution scanning hardware, hosting large audio archives, and funding field collection, we will seek non-encumbering academic research grants, cultural preservation grants, and community support.

Our financial policy is simple and unyielding: **we will never paywall, sell, or commercialize raw datasets or cultural scans.** Every grant, donation, or resource received goes directly into acquiring physical archival materials, maintaining infrastructure, and building open tools for future generations.

---

## Section X · Planting Trees Whose Shade We May Never Sit Under
> *"A society grows great when old men plant trees in whose shade they shall never sit."* — Ancient Proverb

Cultural preservation follows this same timeless principle. If we do nothing because we cannot guarantee commercial results or personal recognition, our language risks gradual digital domain loss.

The Hmar Heritage Foundation exists to open the door, lay down the permanent groundwork, and safeguard our primary archives. Whether commercial tech giants adopt these resources next year or twenty years from now, the foundation will remain open, free, and unencumbered for all.
