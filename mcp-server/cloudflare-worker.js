/**
 * Cloudflare Worker Proxy for hmarheritagemcp.pages.dev
 * 
 * Proxy incoming MCP requests from hmarheritagemcp.pages.dev
 * to the Hugging Face Space running the Python FastMCP server.
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Replace with your actual Hugging Face Space domain (e.g. hmar-heritage-org-mcp-server.hf.space)
    const hfSpaceHost = "https://hmar-heritage-org-mcp-server.hf.space";
    
    const targetUrl = new URL(url.pathname + url.search, hfSpaceHost);
    
    // Pass along headers and request body
    const proxyRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow"
    });
    
    return fetch(proxyRequest);
  }
};
