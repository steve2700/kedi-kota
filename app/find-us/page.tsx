import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { DELIVERY, slugify } from "@/lib/delivery"
import { UberEatsButton, WhatsAppButton } from "@/components/buttons"
import { SITE, ADDRESS_LINE, MAPS_LINK } from "@/lib/site"

export const metadata: Metadata = { title: "Find Us: 122 Storms Road, Norkem Park, Kempton Park", description: "Kedi Kota is at 122 Storms Road, Norkem Park, Kempton Park, by Green Gate. Open 7 days, 9am to 7pm. Collect, order on WhatsApp or find us on Uber Eats.", alternates: { canonical: "/find-us" } }
export default function FindUs() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE.url}/find-us`, mainEntity: { "@id": `${SITE.url}/#business` } }} />
      <PageHero crumbs={[{ name: "Find us", href: "/find-us" }]} title="Come and get it" mark={["get"]} text={`${ADDRESS_LINE}. ${SITE.address.landmark}.`} image={{ src: "/kedi-kota-toasted-kota-with-egg-patty-cheese-and-sauce.jpg", alt: "Toasted Kedi Kota kota with egg, patty and cheese" }} />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2">
        <div className="rounded-[2rem] border-4 border-ink bg-white p-8 shadow-[6px_6px_0_0_#0e0e0e]">
          <h2 className="font-display text-3xl">Visit</h2>
          <p className="mt-4 text-xl font-medium">{ADDRESS_LINE}<br />{SITE.address.landmark}</p>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex h-12 items-center rounded-full border-4 border-ink bg-signal px-7 font-extrabold text-white">Get directions</a>
          <h3 className="mt-8 font-display text-2xl">Opening times</h3>
          <p className="mt-2 text-lg font-medium">{SITE.hours}</p>
          <h3 className="mt-8 font-display text-2xl">Talk to us</h3>
          <p className="mt-2 text-lg font-medium">WhatsApp {SITE.phoneDisplay}<br /><a className="font-extrabold text-signal underline" href={SITE.tiktok} target="_blank" rel="noopener noreferrer">TikTok @kedikota</a></p>
        </div>
        <div className="rounded-[2rem] border-4 border-ink bg-butter p-8 shadow-[6px_6px_0_0_#0e0e0e]">
          <h2 className="font-display text-3xl">Areas we serve</h2>
          <p className="mt-3 text-lg font-bold">Collect from us, order on Uber Eats, or WhatsApp us for delivery in:</p>
          <ul className="mt-4 flex flex-wrap gap-2">{DELIVERY.zones.map((z) => <li key={z}><Link href={`/kota-delivery-${slugify(z)}`} className="inline-block rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-extrabold hover:bg-ink hover:text-white">{z}</Link></li>)}</ul>
          <div className="mt-5 flex flex-wrap gap-3"><UberEatsButton size="md" /><WhatsAppButton size="md" label="Ask on WhatsApp" message="Hi Kedi Kota, do you deliver to my area?" /></div>
          <p className="mt-4 font-medium">Not on the list? WhatsApp us and we will tell you if we can get to you.</p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
