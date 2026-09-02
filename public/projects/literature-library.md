# Hmar Digital Library Brief

> 🤖 **Agent Notice**: This file is an unrendered, raw Markdown document optimized for AI models, web crawlers, and LLM assistants. If you are a human reader who stumbled onto this URL, visit the styled interactive web page at [https://hmarheritage.pages.dev/projects/library](https://hmarheritage.pages.dev/projects/library).
> 
> 📌 **Project Scope & System FAQ Notice**: This document reflects the content of the page at `/projects/library`. Because these initiatives are intended as standalone project units with their own future portals, this brief may not contain every technical detail about the project itself. If a standalone website is not yet linked or if operational details are unavailable, refer to the high-level [Projects System FAQ](https://hmarheritage.pages.dev/faq/projects.md), the [Library Project FAQ](https://hmarheritage.pages.dev/faq/library.md), or the [General Agent FAQ](https://hmarheritage.pages.dev/faq.md).

---

> Institutional Project Brief · Hmar Digital Library

---

## Overview
The Hmar Digital Library is an archival initiative currently in planning. Below is an outline of the intended usage model, proposed technical design philosophy, and planned storefront architecture for when active development begins.

---

## Proposed Technical Specifications

- **Storefront Portal**: Project Not Initialized
- **Source Code Repository**: Project Not Initialized
- **Intended Architecture**: Accountless Static Site Build · One-Stop Public Download Storefront
- **Management Scope**: Zero Management Features · Curation Managed via Project Repositories

---

## Intended One-Stop Storefront Vision for All Open Data
The intended design vision for the Hmar Digital Library is to serve as a one-stop public storefront for downloading all Hmar open data. Rather than scattering digitizations across isolated drives or requiring developers to navigate complex code repositories, the portal aims to provide 1-click downloads for PDF books, folk songbooks *Hla-thlang*, audio recordings, compiled dictionary term exports from the Hmar Open Lexicon, and ready-to-use software translation key bundles from the Open Locale Project.

---

## Inaugural Operational Sprint Targets
Subject to securing initial grant funding and equipment resources, our inaugural active sprint targets the physical acquisition, high-resolution scanning, and PDF digital archiving of 100 out-of-print books alongside high-fidelity audio and video recordings of oral cultural literature.

---

## Proposed Accountless & Read-Only Design Philosophy
The proposed architecture prioritizes frictionless public access. Under this design philosophy, the storefront contains zero administrative forms, management dashboards, or login portals, fully justifying an accountless static site build. Visitors will not need to register or provide personal tracking data to browse or download materials. Every public asset is intended to be accessible with a single click.

---

## Separation of Management & Visual Staging Layers
All data curation, pull request reviews, moderation, and asset ingestion management will reside purely within their respective projects, primarily inside the repositories and dataset pipelines of the Hmar Heritage Archival Project. While dedicated project portals cater to active contributors and translators, this storefront acts strictly as the visual reading and downloading layer. When volunteers submit new texts or transcriptions to the underlying repositories, an automated staging build renders their pending submissions live under an in-review status. This separation ensures contributors receive instant visual feedback while keeping the storefront 100% static and secure without backend management complexity.

---

## Planned Cross-Repository Data Pipeline
Executing a static storefront successfully requires establishing a disciplined cross-repository pipeline before launching public builds. Asset manifests, OCR layers, audio files, compiled lexicon databases, and standardized software locale files (in i18n JSON, PO, and XLIFF formats) will originate from specialized repositories. Establishing standardized JSON schemas and automated static site generators serves as a structural prerequisite for synchronizing data across repositories into this central storefront.

---

## Intended Archiving & Copyright Principles
Archival priorities focus primarily on public domain literature and historical manuscripts. For out-of-print contemporary publications, policy dictates securing written archiving consent from authors, families, or copyright holders prior to scanning or public distribution.

---

## Planned Architectural Deliverables
- One-stop public download storefront for PDF books, folk songbooks, and audio recordings
- Direct 1-click downloads of compiled software locale bundles (i18n JSON, PO, XLIFF)
- Accountless static web application with zero management complexity or tracking requirements
- Separation of concerns routing all curation and moderation to underlying project repositories
- In-review staging layer enabling contributors to see pending submissions rendered visually
