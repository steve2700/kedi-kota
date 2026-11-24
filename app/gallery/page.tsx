import type { Metadata } from "next"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { WordReveal } from "@/components/word-reveal"
import { CtaBand } from "@/components/cta-band"
import { PHOTOS } from "@/components/photo-ribbon"
import { SocialLinks } from "@/components/social-links"

export const metadata: Metadata = { title: "Gallery: Our Loaded Kotas", description: "Photos of Kedi Kota's loaded, toasted kotas with chips, egg, patty, cheese and sauce in Norkem Park, Kempton Park.", alternates: { canonical: "/gallery" } }
export default function GalleryPage() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden border-b-4 border-ink bg-ink text-white">
        <div aria-hidden="true" className="absolute -right-24 top-0 -z-10 h-full w-[34%] skew-x-[-10deg] bg-signal" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-8 md:py-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div>
            <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} tone="dark" />
            <WordReveal as="h1" text="Look at these kotas" mark={["kotas"]} className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-5xl" />
            <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-silver">Real kotas from our kitchen. Hungry yet?</p>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[2rem] border-4 border-white bg-silver shadow-[8px_8px_0_0_#0e0e0e] lg:max-w-none">
            <Image src="/kedi-kota-garlic-toasted-kota-twin-stack-on-board.jpg" alt="Two garlic toasted Kedi Kota kotas on a board" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p) => (
            <li key={p.file} className="overflow-hidden rounded-[2rem] border-4 border-ink bg-white shadow-[6px_6px_0_0_#0e0e0e]">
              <div className="relative aspect-[4/5]"><Image src={`/${p.file}`} alt={p.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div>
              <p className="px-5 py-4 font-display text-2xl">{p.title}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-lg font-extrabold">Follow us for more kotas</p>
        <SocialLinks tone="light" className="mt-3" />
      </section>
      <CtaBand />
    </>
  )
}
