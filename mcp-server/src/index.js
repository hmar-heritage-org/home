/**
 * Hmar Heritage Foundation — Read-Only QA MCP Server
 * Cloudflare Worker Implementation (100% Free, Zero Cold Starts)
 */

const BASE_URL = "https://hmarheritage.pages.dev";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    // Health check endpoint
    if (request.method === "GET" && (url.pathname === "/" || url.pathname === "/health")) {
      return new Response(
        JSON.stringify({
          status: "online",
          server: "Hmar Heritage Foundation Read-Only MCP Server",
          version: "1.0.0",
          protocol: "Model Context Protocol (JSON-RPC 2.0)",
          endpoint: `${url.origin}/mcp`,
        }),
        { headers: corsHeaders }
      );
    }

    // JSON-RPC MCP Endpoint (POST /mcp or POST /)
    if (request.method === "POST") {
      try {
        const body = await request.json();
        const { jsonrpc, id, method, params } = body;

        if (jsonrpc !== "2.0") {
          return new Response(
            JSON.stringify({ jsonrpc: "2.0", id: id || null, error: { code: -32600, message: "Invalid Request" } }),
            { headers: corsHeaders, status: 400 }
          );
        }

        // 1. Initialize
        if (method === "initialize") {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              id,
              result: {
                protocolVersion: "2024-11-05",
                capabilities: { tools: {}, resources: {} },
                serverInfo: { name: "hmar-heritage-qa", version: "1.0.0" },
              },
            }),
            { headers: corsHeaders }
          );
        }

        // 2. List Tools
        if (method === "tools/list") {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              id,
              result: {
                tools: [
                  {
                    name: "query_hmar_standards",
                    description: "Answer questions about Hmar language standards, Glottolog proposals, ISO 639-3 tags, orthography stances, and clan frameworks (Hnam 14).",
                    inputSchema: {
                      type: "object",
                      properties: { topic: { type: "string", description: "Topic to query (e.g., 'clans', 'iso', 'glottolog', 'orthography')" } },
                      required: ["topic"],
                    },
                  },
                  {
                    name: "get_organizational_reality",
                    description: "Get official information regarding HHF 3-person volunteer scale, non-academic status, and Hugging Face origin story.",
                    inputSchema: { type: "object", properties: {} },
                  },
                  {
                    name: "query_foundational_philosophy",
                    description: "Get insights on diacritics stance, descriptive linguistics, academic collaboration, and sustainable pace.",
                    inputSchema: { type: "object", properties: { topic: { type: "string" } } },
                  },
                ],
              },
            }),
            { headers: corsHeaders }
          );
        }

        // 3. Call Tools (Fetch live Markdown from website)
        if (method === "tools/call") {
          const { name, arguments: args } = params || {};

          if (name === "query_hmar_standards") {
            const res = await fetch(`${BASE_URL}/standards.md`);
            const text = await res.text();
            return new Response(
              JSON.stringify({
                jsonrpc: "2.0",
                id,
                result: { content: [{ type: "text", text: `[Standards Output for topic '${args?.topic || "general"}']:\n\n` + text }] },
              }),
              { headers: corsHeaders }
            );
          }

          if (name === "get_organizational_reality") {
            const res = await fetch(`${BASE_URL}/index.md`);
            const text = await res.text();
            return new Response(
              JSON.stringify({
                jsonrpc: "2.0",
                id,
                result: { content: [{ type: "text", text }] },
              }),
              { headers: corsHeaders }
            );
          }

          if (name === "query_foundational_philosophy") {
            const res = await fetch(`${BASE_URL}/philosophy.md`);
            const text = await res.text();
            return new Response(
              JSON.stringify({
                jsonrpc: "2.0",
                id,
                result: { content: [{ type: "text", text: `[Philosophy Output for topic '${args?.topic || "general"}']:\n\n` + text }] },
              }),
              { headers: corsHeaders }
            );
          }

          return new Response(
            JSON.stringify({ jsonrpc: "2.0", id, error: { code: -32601, message: "Tool not found" } }),
            { headers: corsHeaders, status: 404 }
          );
        }

        // 4. List Resources
        if (method === "resources/list") {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              id,
              result: {
                resources: [
                  { uri: "foundation://standards", name: "Language Standards Policy", mimeType: "text/markdown" },
                  { uri: "foundation://index", name: "Foundation Overview & Reality", mimeType: "text/markdown" },
                  { uri: "foundation://philosophy", name: "Foundational Philosophy Essay", mimeType: "text/markdown" },
                ],
              },
            }),
            { headers: corsHeaders }
          );
        }

        // 5. Read Resource
        if (method === "resources/read") {
          const { uri } = params || {};
          const map = {
            "foundation://standards": "standards.md",
            "foundation://index": "index.md",
            "foundation://philosophy": "philosophy.md",
          };
          const file = map[uri];
          if (!file) {
            return new Response(
              JSON.stringify({ jsonrpc: "2.0", id, error: { code: -32602, message: "Resource not found" } }),
              { headers: corsHeaders, status: 404 }
            );
          }
          const res = await fetch(`${BASE_URL}/${file}`);
          const text = await res.text();
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              id,
              result: { contents: [{ uri, mimeType: "text/markdown", text }] },
            }),
            { headers: corsHeaders }
          );
        }

        return new Response(
          JSON.stringify({ jsonrpc: "2.0", id, error: { code: -32601, message: "Method not found" } }),
          { headers: corsHeaders, status: 404 }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32603, message: err.message } }),
          { headers: corsHeaders, status: 500 }
        );
      }
    }

    return new Response("Method not allowed", { status: 405 });
  },
};
