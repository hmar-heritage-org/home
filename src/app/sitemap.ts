import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hmarheritage.pages.dev";
  const lastModified = new Date();

  const routes = [
    "",
    "/manifesto",
    "/philosophy",
    "/standards",
    "/projects",
    "/resources",
    "/people",
    "/join",
    "/datasets",
    "/get-involved",
    "/terms",
    "/projects/library",
    "/projects/archival",
    "/projects/locale",
    "/projects/wikipedia",
    "/projects/lexicon",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/standards" || route === "/projects" ? 0.9 : 0.8,
  }));
}
