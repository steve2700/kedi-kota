import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { LinkButton, UberEatsButton, WhatsAppButton } from "@/components/buttons"
import { LOCAL_PAGES, getLocal } from "@/lib/local"
import { KOTAS, SIDES, PAP_MEALS, DRINKS, DRINK_SIZE, KOTA_FROM, kotaPriceList, money } from "@/lib/menu"
import { DELIVERY } from "@/lib/delivery"
import { SITE, ADDRESS_LINE, MAPS_LINK } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() { return LOCAL_PAGES.map((p) => ({ slug: p.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getLocal(slug); if (!p) return {}
  const description = p.kind === "delivery"
    ? `Kota delivery in ${p.place}, Kempton Park. Loaded kotas from R${KOTA_FROM}, pap meals and chips. Order on Uber Eats or WhatsApp. Kedi Kota, Norkem Park.`
    : `Kedi Kota serves loaded kotas in ${p.place}. Kotas from R${KOTA_FROM}, chips, spiral potatoes and pap meals. Collect at ${ADDRESS_LINE} or order on Uber Eats.`
  return { title: p.title, description, alternates: { canonical: `/${p.slug}` }, openGraph: { title: p.title, description, url: `${SITE.url}/${p.slug}`, images: [{ url: "/og-image.png" }] } }
}

export default async function LocalPageView({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getLocal(slug); if (!p) notFound()
  const delivery = p.kind === "delivery"
  const faqs = [
    { q: delivery ? `Do you deliver kota to ${p.place}?` : `Where can I get a kota in ${p.place}?`, a: delivery ? `Yes. Kedi Kota serves ${p.place}. Order on Uber Eats, or order online, send it on WhatsApp and we confirm delivery with you.` : `Kedi Kota is at ${ADDRESS_LINE}, ${SITE.address.landmark}. You can collect, order on Uber Eats, or WhatsApp us for delivery to ${p.place}.` },
    { q: "How much is a kota?", a: `Kotas start at R${KOTA_FROM}. ${kotaPriceList()}. The Combo comes with a cold drink.` },
    { q: "How do I order?", a: "Pick your kota on the menu, check out and send the order on WhatsApp. We confirm it and get cooking." },
  ]
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: p.title, url: `${SITE.url}/${p.slug}`, about: { "@id": `${SITE.url}/#business` } }} />
      <PageHero crumbs={[{ name: "Menu", href: "/menu" }, { name: p.place, href: `/${p.slug}` }]} title={delivery ? `Kota delivery in ${p.place}` : `Kota in ${p.place}`} mark={[p.place.split(" ")[0]]}
        text={delivery ? `Loaded kotas from R${KOTA_FROM}, served in ${p.place}. Order on Uber Eats, or build your order online and send it on WhatsApp.` : `Loaded, toasted kotas from R${KOTA_FROM} at ${SITE.address.suburb}, ${SITE.address.city}. Collect, or order on Uber Eats.`}
        image={{ src: "/kedi-kota-loaded-kota-with-polony-egg-cheese-and-chips.jpg", alt: "Loaded Kedi Kota kota with polony, egg, cheese and chips" }}>
        <LinkButton href="/menu" pulse>Order Now</LinkButton>
        <WhatsAppButton label="WhatsApp" message={`Hi Kedi Kota, I am in ${p.place} and would like to order.`} />
        <UberEatsButton look="outline" label="Uber Eats" />
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="rounded-[2rem] border-4 border-ink bg-white p-6 text-xl font-bold shadow-[6px_6px_0_0_#e30613]">
          {delivery ? `Kedi Kota serves ${p.place}, on Uber Eats and by WhatsApp. We are based at ${ADDRESS_LINE}. ${SITE.hours}.` : `Kedi Kota is at ${ADDRESS_LINE}, ${SITE.address.landmark}. Serving ${p.place} and nearby suburbs.`}
        </p>
        <h2 className="mt-14 font-display text-4xl">The menu</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {KOTAS.map((k) => <li key={k.id} className="rounded-2xl border-4 border-ink bg-white p-4"><div className="flex items-baseline justify-between gap-3"><p className="font-display text-2xl">{k.name}</p><p className="font-display text-2xl text-signal">{money(k.price)}</p></div><p className="mt-1 text-sm font-bold text-graphite">{k.ingredients.join(", ")}{k.note ? `. ${k.note}` : ""}</p></li>)}
          {[...SIDES, ...PAP_MEALS, ...DRINKS.map((d) => ({ ...d, name: `${d.name} ${DRINK_SIZE}` }))].map((s) => <li key={s.id} className="flex items-baseline justify-between gap-3 rounded-2xl border-4 border-ink bg-butter p-4"><p className="font-display text-xl">{s.name}</p><p className="font-display text-xl">{money(s.price)}</p></li>)}
        </ul>
        <div className="mt-8"><LinkButton href="/menu" look="dark">Build your order</LinkButton></div>
        <h2 className="mt-14 font-display text-4xl">Find us</h2>
        <p className="mt-3 text-lg font-medium">{ADDRESS_LINE}, {SITE.address.landmark}. <a className="font-extrabold text-signal underline" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">Get directions</a></p>
        <p className="mt-6">We also serve: {DELIVERY.zones.filter((z) => z !== p.place).slice(0, 10).map((z, i) => <span key={z}>{i ? ", " : ""}<Link className="font-extrabold underline decoration-signal decoration-2 underline-offset-4" href={`/kota-delivery-${z.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}>{z}</Link></span>)}.</p>
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-20"><h2 className="mb-8 font-display text-4xl">Questions</h2><Faq items={faqs} /></section>
      <CtaBand />
    </>
  )
}
