import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hacompany.com.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/proyectos/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
