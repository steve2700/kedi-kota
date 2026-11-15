import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"
import { LOCAL_PAGES } from "@/lib/local"

export const dynamic = "force-static"
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({ url: `${SITE.url}${path}`, lastModified: now, changeFrequency, priority })
  return [page("", 1, "weekly"), page("/menu", 0.9, "weekly"), page("/gallery", 0.7), page("/find-us", 0.8), page("/faq", 0.6), ...LOCAL_PAGES.map((p) => page(`/${p.slug}`, p.kind === "area" ? 0.8 : 0.6)), page("/delivery-and-collection", 0.4), page("/refunds-and-cancellations", 0.4), page("/privacy", 0.2, "yearly"), page("/terms", 0.2, "yearly")]
}
