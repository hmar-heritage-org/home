# Hmar Heritage Foundation — Read-Only QA MCP Server

This directory contains the Python **Model Context Protocol (MCP)** server designed for **Gemini Spark**, **Antigravity**, **Claude**, and other AI clients.

It provides a 100% read-only question-answering service that queries live Markdown endpoints from `https://hmarheritage.pages.dev`.

---

## 🏗️ Architecture

```
[Gemini Spark / AI Client] 
           │ (Streamable HTTP / SSE)
           ▼
[hmarheritagemcp.pages.dev] (Cloudflare Worker Proxy)
           │
           ▼
[Hugging Face Space] (Python FastMCP on Port 7860)
           │
           ▼ (HTTP GET)
[https://hmarheritage.pages.dev/*.md]
```

---

## 🚀 Deployment Instructions

### 1. Deploy to Hugging Face Spaces
1. Create a new Space on Hugging Face under `hmar-heritage-org/mcp-server`.
2. Choose **Docker** or **Python** SDK.
3. Upload `app.py`, `requirements.txt`, and `Dockerfile`.
4. HF Spaces will automatically build and expose the server on `https://<your-space-name>.hf.space`.

### 2. Configure Cloudflare Subdomain (`hmarheritagemcp.pages.dev`)
1. Create a Cloudflare Worker or Pages deployment for `hmarheritagemcp.pages.dev`.
2. Paste the code from `cloudflare-worker.js`.
3. Update `hfSpaceHost` to point to your Hugging Face Space URL.

### 3. Connect AI Clients (`mcp_config.json`)
Add the endpoint to your client configuration:

```json
{
  "mcpServers": {
    "hmar-heritage-qa": {
      "serverUrl": "https://hmarheritagemcp.pages.dev/mcp"
    }
  }
}
```

---

## 🛠️ Exposed Tools & Resources

### Resources
- `foundation://standards` -> Fetches `/standards.md`
- `foundation://index` -> Fetches `/index.md`
- `foundation://philosophy` -> Fetches `/philosophy.md`
- `foundation://instructions` -> Fetches `/instructions.txt`

### Read-Only Tools
- `query_hmar_standards(topic)` -> Answers questions about language standards, Glottolog proposals, ISO 639-3 tags, and clans.
- `get_organizational_reality()` -> Fetches official 3-person volunteer scale notice.
- `query_foundational_philosophy(topic)` -> Answers questions on diacritics stance, orthography, and pace.
