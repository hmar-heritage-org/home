# Open Locale Project Brief

> 🤖 **Agent Notice**: This file is an unrendered, raw Markdown document optimized for AI models, web crawlers, and LLM assistants. If you are a human reader who stumbled onto this URL, visit the styled interactive web page at [https://hmarheritage.pages.dev/projects/locale](https://hmarheritage.pages.dev/projects/locale).
> 
> 📌 **Project Scope & System FAQ Notice**: This document reflects the content of the page at `/projects/locale`. Because these initiatives are intended as standalone project units with their own future portals, this brief may not contain every technical detail about the project itself. If a standalone website is not yet linked or if operational details are unavailable, refer to the high-level [Projects System FAQ](https://hmarheritage.pages.dev/faq/projects.md), the [Locale Project FAQ](https://hmarheritage.pages.dev/faq/locale.md), or the [General Agent FAQ](https://hmarheritage.pages.dev/faq.md).

---

> Institutional Project Brief · Open Locale Project

---

## Overview
The Open Locale Project is an open, language-agnostic software internationalization framework stewarded by the Hmar Heritage Foundation. Designed to provide machine-readable UI translation schemas, Supabase staging workflows, and multi-platform exporters for Northeast Indian regional and minority languages, its inaugural reference implementation is the Hmar (`hmr-IN`) software locale.

---

## Technical Specifications

- **Flagship Locale**: Hmar (`hmr-IN`) · Open to All Regional Languages
- **Staging Engine**: Supabase Realtime Database · Status: Unverified → Verified
- **Phase 1 Focus Points**: Confirmation Modals · System Alerts · Error Dialogs · Action Buttons
- **Moderation Pipeline**: Designated Language Verifiers · Zero Git Experience Required

---

## Open Regional Software Terminology Standardization
The intended design vision for the Open Locale Project is establishing standardized translation keys for web browsers, web application frameworks, desktop operating systems, and mobile platforms across regional languages of Northeast India that lack native locale support. Providing open, machine-readable locale files enables software developers, browser extension creators, and open-source maintainers to add native language support across any digital interface.

---

## Supabase Staging & Language Verifier Pipeline
The platform architecture features a clean, two-tier moderation workflow. Live web edits and community contributions land in a Supabase staging database marked as unverified. Designated Language Verifiers (community scholars, educators, and language stewards) review and approve translations on a simplified web interface without ever needing Git or terminal experience. Once approved, background GitHub Actions automatically compile and push verified master releases to GitHub repositories and Hugging Face mirrors for 1-click platform exports.

---

## Gradual Translation Roadmap & Descriptive Short Phrases
Language evolution cannot be forced overnight by decree. The project establishes a gradual translation roadmap focusing initially on critical, transient user interface elements: deletion confirmation modals, network error dialogs, system alerts, and primary action buttons. Expressing actions through natural, descriptive short phrases is vastly more clear than forcing artificial single-word neologisms, ensuring native speakers adopt terms naturally without software culture shock.

---

## Unicode CLDR & Web Standards Integration
Long-term preservation requires incorporating verified locale specifications into international web and software standards. The project aims to prepare core locale data for submission to the Unicode Common Locale Data Repository. Establishing open, verified locale data serves as the mandatory technical prerequisite for future adoption by major technology entities.

---

## Planned Technical Deliverables
- Language-agnostic locale platform stewarded by the Hmar Heritage Foundation
- Hmar (`hmr-IN`) as the flagship reference implementation
- Supabase real-time database staging with designated non-technical Language Verifier roles
- Automated 1-click exporters for Android (`strings.xml`), Web (`JSON`), iOS (`strings`), and Linux (`.po`)
