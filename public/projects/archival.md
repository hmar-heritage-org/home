# Hmar Heritage Archival Project Brief

> 🤖 **Agent Notice**: This file is an unrendered, raw Markdown document optimized for AI models, web crawlers, and LLM assistants. If you are a human reader who stumbled onto this URL, visit the styled interactive web page at [https://hmarheritage.pages.dev/projects/archival](https://hmarheritage.pages.dev/projects/archival).
> 
> 📌 **Project Scope & FAQ Notice**: This document reflects the content of the page at `/projects/archival`. For exact operational status, copyright policies (including halted book scanning and Hmar Literature Society agreements), and upload portal plans, refer to the [Archival Project FAQ](https://hmarheritage.pages.dev/faq/archival.md), the high-level [Projects System FAQ](https://hmarheritage.pages.dev/faq/projects.md), or the [General Agent FAQ](https://hmarheritage.pages.dev/faq.md).

---

> Institutional Project Brief · Hmar Heritage Archival Project

---

## Overview
The Hmar Heritage Archival Project is the primary backend data engine of the Foundation. It operates as the raw ingestion pipeline, dataset schema authority, and educational training ground for text corpora, speech audio archives, and OCR scanned page datasets mirrored on Hugging Face.

---

## Technical Specifications

- **Staging & PR Workspace**: [github.com/hmar-heritage-org](https://github.com/hmar-heritage-org)
- **Master Storage Hub**: [huggingface.co/hmar-heritage-org](https://huggingface.co/hmar-heritage-org)
- **Contribution Model**: Anonymous Simple Upload · Optional Accounts for History Storage

---

## Backend Data Engine & Ingestion Pipeline
Unlike the read-only public storefront of the Hmar Digital Library, the Hmar Heritage Archival Project functions as the backend data management hub. It provides the core data ingestion, storage, and processing pipelines required to handle raw text dumps, high-resolution document scans, and uncurated speech audio recordings.

---

## Active Operational Sprint Targets
During our current active operational sprint, the primary focus of the Hmar Heritage Foundation is advancing the Hmar Heritage Archival Project. Our active target is physical literature acquisition and high-resolution PDF scanning of 100 out-of-print books, bootstrapped locally through internal resources.

In addition to physical text scanning, the project aims to build rich oral history audio and video corpora. While text digitization is already underway through internal resources, expanding field audio and video recording across regional villages is explicitly dependent on securing grant funding for dedicated field audio recorders, archival cameras, and storage hardware.

---

## GitHub Staging Pipeline & Hugging Face Master Storage
The project architecture enforces a clear division between staging workflows and master storage. GitHub is used for all pull requests, code reviews, and in-review staging branches because of its intuitive interface, file diff tools, and issue tracking. Automated GitHub Actions run verification checks and render pending submissions live on the storefront under an in-review status. Once a pull request is merged, automated CI and CD workflows sync and push the verified master release to the Hugging Face Datasets hub for bulk hosting.

---

## Low-Friction Uploads & History Storage Accounts
The portal main page is designed for ultra-simple community participation. Anonymous users can upload scans, audio files, or text transcriptions instantly through a basic web upload interface without creating an account. Optional contributor accounts serve exclusively to store personal submission history and attribution records, containing zero administrative or management features to avoid unnecessary website overhead.

---

## Training Ground for Technical Repository Management
Beyond simple web uploads, the portal serves as an educational training ground for less tech-savvy volunteers. Through step-by-step guides, contributors graduate from basic drag-and-drop web uploads to terminal commands, Git version control, and working directly on the Hugging Face platform. This builds long-term technical capacity within the community.

---

## Data Schema Specifications and Organizational Guides
The project serves as the formal authority for dataset structure. It defines standardized JSON schemas, metadata fields, and scanning resolution benchmarks for text, image, and audio archives. Detailed how-to guides instruct partner organizations, such as churches, schools, and literature societies, on preparing institutional records for archival ingestion.

---

## Planned Technical Deliverables
- GitHub pull request and staging branch workflow for in-review contribution rendering
- Automated CI and CD pipelines syncing merged GitHub PRs to Hugging Face master datasets
- Low-friction anonymous upload interface paired with attribution history accounts
- Educational onboarding guides transitioning volunteers from simple web uploads to terminal & Git workflows
- Standardized dataset JSON schemas and digitizing guides for partner institutions
