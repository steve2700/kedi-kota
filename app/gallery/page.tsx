import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { PHOTOS } from "@/components/photo-ribbon"
import { SITE } from "@/lib/site"

export const metadata: Metadata = { title: "Gallery: Our Loaded Kotas", description: "Photos of Kedi Kota's loaded, toasted kotas with chips, egg, patty, cheese and sauce in Norkem Park, Kempton Park.", alternates: { canonical: "/gallery" } }
export default function GalleryPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Gallery", href: "/gallery" }]} title="Look at these kotas" mark={["kotas"]} text="Real kotas from our kitchen. Hungry yet?" image={{ src: "/kedi-kota-garlic-toasted-kota-twin-stack-on-board.jpg", alt: "Two garlic toasted Kedi Kota kotas on a board", position: "center 40%" }} />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p) => (
            <li key={p.file} className="overflow-hidden rounded-[2rem] border-4 border-ink bg-white shadow-[6px_6px_0_0_#0e0e0e]">
              <div className="relative aspect-[4/5]"><Image src={`/${p.file}`} alt={p.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div>
              <p className="px-5 py-4 font-display text-2xl">{p.title}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-lg font-medium">More on <a className="font-extrabold text-signal underline" href={SITE.tiktok} target="_blank" rel="noopener noreferrer">TikTok @kedikota</a>.</p>
      </section>
      <CtaBand />
    </>
  )
}
