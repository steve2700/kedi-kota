import { DELIVERY, slugify } from "@/lib/delivery"

export interface LocalPage { slug: string; place: string; title: string; kind: "area" | "delivery"; inZone: boolean }
export const LOCAL_PAGES: LocalPage[] = [
  { slug: "kota-kempton-park", place: "Kempton Park", title: "Kota in Kempton Park | Kedi Kota", kind: "area", inZone: true },
  { slug: "kota-norkem-park", place: "Norkem Park", title: "Kota in Norkem Park | Kedi Kota", kind: "area", inZone: true },
  ...DELIVERY.zones.map((z) => ({ slug: `kota-delivery-${slugify(z)}`, place: z, title: `Kota Delivery in ${z} | Kedi Kota`, kind: "delivery" as const, inZone: true })),
]
export const getLocal = (slug: string) => LOCAL_PAGES.find((p) => p.slug === slug)
