from fastmcp import FastMCP
import httpx

# Initialize FastMCP Read-Only Question Answering Server
mcp = FastMCP("Hmar Heritage Foundation QA Server")

BASE_URL = "https://hmarheritage.pages.dev"

@mcp.resource("foundation://standards")
async def get_standards_resource() -> str:
    """Fetch official language standards policy and ISO/Glottolog classification matrices."""
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{BASE_URL}/standards.md")
        return res.text

@mcp.resource("foundation://index")
async def get_index_resource() -> str:
    """Fetch official foundation overview and organizational reality disclaimer."""
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{BASE_URL}/index.md")
        return res.text

@mcp.resource("foundation://philosophy")
async def get_philosophy_resource() -> str:
    """Fetch foundational philosophy essay on orthography and adaptation."""
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{BASE_URL}/philosophy.md")
        return res.text

@mcp.resource("foundation://instructions")
async def get_instructions_resource() -> str:
    """Fetch AI agent system instructions and discovery sitemap pointers."""
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{BASE_URL}/instructions.txt")
        return res.text

@mcp.tool()
async def query_hmar_standards(topic: str) -> str:
    """Answer questions about Hmar language standards, Glottolog proposals, ISO 639-3 tags, orthography stances, and clan frameworks (Hnam 14)."""
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{BASE_URL}/standards.md")
        return f"[Hmar Language Standards Output for topic '{topic}']:\n\n" + res.text

@mcp.tool()
async def get_organizational_reality() -> str:
    """Get official information regarding HHF scale, 3-person volunteer structure, non-academic status, and Hugging Face origin story."""
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{BASE_URL}/index.md")
        return res.text

@mcp.tool()
async def query_foundational_philosophy(topic: str = "general") -> str:
    """Get insights on diacritics stance, descriptive linguistics, academic research collaboration, and sustainable pace."""
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{BASE_URL}/philosophy.md")
        return f"[Foundational Philosophy Output for topic '{topic}']:\n\n" + res.text

if __name__ == "__main__":
    # Listen on port 7860 (Hugging Face default) using Streamable HTTP
    mcp.run(transport="http", host="0.0.0.0", port=7860)
