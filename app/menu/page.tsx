import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { MenuBrowser } from "@/components/menu-browser"
import { CtaBand } from "@/components/cta-band"
import { kotaPriceList } from "@/lib/menu"

export const metadata: Metadata = {
  title: "Menu and Prices: Kotas, Chips, Pap Meals and Drinks",
  description: `Kedi Kota menu and prices: ${kotaPriceList()}, chips, pap meals from R60, meat sides, extras and cold drinks. Order online in Kempton Park.`,
  alternates: { canonical: "/menu" },
}
export default function MenuPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Menu", href: "/menu" }]} title="The menu" mark={["menu"]} text="Choose a kota, add sides, pap meals or a cold drink, and send your order on WhatsApp." image={{ src: "/kedi-kota-tall-loaded-kota-vienna-cheese-egg.jpg", alt: "Tall loaded Kedi Kota kota with vienna, cheese and egg on a garlic toasted loaf" }}>
        <Link href="#kotas" className="inline-flex h-12 items-center rounded-full border-4 border-white bg-signal px-7 font-extrabold text-white transition hover:bg-signal-dark">Pick a kota</Link>
      </PageHero>
      <section id="kotas" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-16"><MenuBrowser /></section>
      <CtaBand />
    </>
  )
}
