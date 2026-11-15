import type { Metadata } from "next"
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
      <PageHero crumbs={[{ name: "Menu", href: "/menu" }]} title="The menu" mark={["menu"]} text="Pick your kota and sides. Leave out anything you do not like, then check out and send it on WhatsApp." image={{ src: "/kedi-kota-stacked-kota-with-chips-egg-and-peri-peri-sauce.jpg", alt: "Kedi Kota kota stacked with chips, egg and peri peri sauce" }} />
      <section className="mx-auto max-w-7xl px-5 py-16"><MenuBrowser /></section>
      <CtaBand />
    </>
  )
}
