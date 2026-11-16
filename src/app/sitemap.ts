import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://yamikaperera.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/work/origis-field-services",
    "/work/flo-recruiter",
    "/work/dataplay",
    "/work/meta11",
    "/work/sri-lanka-chatbot",
    "/about",
    "/resume",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
  }));
}
