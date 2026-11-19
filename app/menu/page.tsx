import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { MenuBrowser } from "@/components/menu-browser"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Menu and Prices: Kotas, Chips and Spiral Potatoes",
  description: "Kedi Kota menu and prices: Just Kota R20, Kota 1 R35, Kota 2 R45, Kota 3 R65, Kota 4 R90, Combo R75, spiral potato, cup chips, box chips. Order online in Kempton Park.",
  alternates: { canonical: "/menu" },
}
export default function MenuPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Menu", href: "/menu" }]} title="The menu" mark={["menu"]} text="Choose a kota, add sides, and send your order on WhatsApp." image={{ src: "/kedi-kota-stacked-kota-with-chips-egg-and-peri-peri-sauce.jpg", alt: "Kedi Kota kota stacked with chips, egg and peri peri sauce" }}>
        <Link href="#kotas" className="inline-flex h-12 items-center rounded-full border-4 border-white bg-signal px-7 font-extrabold text-white transition hover:bg-signal-dark">Pick a kota</Link>
      </PageHero>
      <section id="kotas" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-16"><MenuBrowser /></section>
      <CtaBand />
    </>
  )
}
