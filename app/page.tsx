import type { Metadata } from "next"
import Link from "next/link"
import { LinkButton, UberEatsButton, WhatsAppButton } from "@/components/buttons"
import { SocialLinks } from "@/components/social-links"
import { HeroStage } from "@/components/hero-stage"
import { PriceTicker } from "@/components/price-ticker"
import { PhotoRibbon } from "@/components/photo-ribbon"
import { KotaBuilder } from "@/components/kota-builder"
import { OrderSteps } from "@/components/order-steps"
import { WordReveal } from "@/components/word-reveal"
import { ScrollText } from "@/components/scroll-text"
import { CountUp } from "@/components/count-up"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { KOTAS, KOTA_FROM } from "@/lib/menu"
import { DELIVERY } from "@/lib/delivery"
import { SITE, ADDRESS_LINE, MAPS_LINK } from "@/lib/site"

export const metadata: Metadata = { title: { absolute: "Kedi Kota | Kota in Norkem Park, Kempton Park | Order Online" }, alternates: { canonical: "/" } }

const faqs = [
  { q: "What is a kota?", a: "A kota, also called a quarter, is a hollowed quarter loaf of bread filled with chips and fillings such as polony, Russian, egg, cheese and sauce. It is a South African street food favourite." },
  { q: "Are you on Uber Eats?", a: "Yes. Kedi Kota is now on Uber Eats, so you can order there too. You can also order on this website and send it on WhatsApp, or collect." },
  { q: "Do you deliver?", a: "We serve Kempton Park and the areas around it, including Norkem Park, Edleen, Van Riebeeck Park, Croydon, Esther Park, Terenure, Chloorkop, Tembisa, Phomolong, Glen Marais, Rhodesfield and Birchleigh North. Order on Uber Eats, or WhatsApp us and we confirm delivery with you." },
  { q: "Do you sell pap meals?", a: "Yes. We have pap with hardbody chicken, mogodu, hlogo, a mogodu and hlogo mix, or chicken malana. See the menu for prices." },
  { q: "What is on a kota?", a: "Our kotas have chips, tomato, lettuce, pickle, red onion, ham, polony, Russian, vienna, egg and cheese, depending on the kota. The patty is a chicken patty, and Kota 4 comes with chicken ribs." },
  { q: "How do I order?", a: "Pick your kota on the menu, check out and send your order on WhatsApp. We confirm it and get cooking." },
  { q: "How can I pay?", a: "You can pay cash, by EFT, or by card using a payment link we send you on WhatsApp." },
  { q: "Can I collect?", a: `Yes. Collect from ${ADDRESS_LINE}, ${SITE.address.landmark}. Open 7 days, 9am to 7pm.` },
]

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-steel" aria-label="Welcome">
        <div aria-hidden="true" className="absolute -right-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-butter/60 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
          <div>
            <p className="kicker inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-graphite">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-signal" />
              Norkem Park · Kempton Park
            </p>
            <h1 className="mt-6 max-w-2xl text-[clamp(2.35rem,5vw,4.25rem)] leading-[0.96]">
              <span className="block">Kota fix?</span>
              <span className="mt-2 inline-block -rotate-1 rounded-2xl bg-signal px-3 pb-1 text-white">Sorted.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-graphite sm:text-xl">
              Loaded, toasted kotas from R{KOTA_FROM}, plus chips, pap meals and cold drinks. Collect in Norkem Park, order on Uber Eats, or send your order on WhatsApp.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
              <LinkButton href="/menu" size="md" className="sm:h-14 sm:px-9 sm:text-lg">Browse menu</LinkButton>
              <WhatsAppButton size="md" label="WhatsApp" message="Hi Kedi Kota, I would like to order." className="sm:h-14 sm:px-9 sm:text-lg" />
              <UberEatsButton size="md" look="outline" label="Uber Eats" className="sm:h-14 sm:px-9 sm:text-lg" />
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-xs font-extrabold text-graphite">
              {[`Kotas from R${KOTA_FROM}`, "Now on Uber Eats", "Open 7 days, 9am to 7pm", "Cash, EFT or card"].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-1 sm:px-5 lg:px-0"><HeroStage /></div>
        </div>
      </section>

      <PriceTicker />

      <section id="builder" aria-label="Build your kota" className="mx-auto max-w-7xl px-5 py-14 sm:py-16">
        <p className="mb-3"><span className="kicker text-chrome">01 PICK YOUR KOTA</span></p>
        <WordReveal as="h2" text="Choose your kota" className="mb-8 max-w-3xl text-4xl leading-[1.08] md:text-5xl" mark={["kota"]} />
        <KotaBuilder />
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <p className="font-bold text-graphite">Want sides with that?</p>
          <LinkButton href="/menu" look="dark" size="md">See the full menu</LinkButton>
        </div>
      </section>

      <section aria-label="How to order" className="mx-auto max-w-7xl px-5 py-14 sm:py-16">
        <p className="mb-3"><span className="kicker text-chrome">02 HOW TO ORDER</span></p>
        <WordReveal as="h2" text="Order in four easy steps" className="mb-8 text-4xl md:text-5xl" />
        <OrderSteps />
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <LinkButton href="/menu" size="md">Start your order</LinkButton>
          <p className="text-sm font-bold text-graphite">Choose delivery or collect. We confirm your order on WhatsApp.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <p className="kicker text-chrome">WHY KEDI KOTA</p>
          <ScrollText className="mt-5 font-display text-3xl leading-[1.2] md:text-5xl" text="Fresh chips, toasted bread, real fillings and plenty of sauce. Stacked high and served hot. Because it is more than a kota." />
          <div className="mt-14 grid grid-cols-3 gap-6">
            {[[KOTAS.length, "kotas on the menu", ""], [KOTA_FROM, "kotas from", "R"], [7, "days a week", ""]].map(([n, l, p]) => (
              <div key={l as string} className="border-l-8 border-signal pl-4">
                <p className="font-display text-5xl md:text-7xl">{p as string}<CountUp to={n as number} /></p>
                <p className="mt-1 font-bold text-graphite">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" aria-label="From our kitchen">
        <div className="mx-auto mb-8 max-w-7xl px-5">
          <p className="mb-3"><span className="kicker text-chrome">03 FROM OUR KITCHEN</span></p>
          <WordReveal as="h2" text="Straight off the board" className="text-4xl md:text-5xl" />
        </div>
        <PhotoRibbon />
        <div className="mx-auto mt-8 max-w-7xl px-5"><LinkButton href="/gallery" look="dark" size="md">See the gallery</LinkButton></div>
      </section>


      <section className="on-dark border-y-4 border-ink bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <p className="mb-3"><span className="kicker text-butter">04 FIND US</span></p>
            <WordReveal as="h2" text="Come and get it, or we bring it" className="text-4xl leading-[1.08] md:text-5xl" />
            <p className="mt-5 text-xl font-medium text-silver">{ADDRESS_LINE}. {SITE.address.landmark}.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-full bg-butter px-7 font-extrabold text-ink transition hover:brightness-95">Get directions</a>
              <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-full border-2 border-white/70 px-7 font-extrabold transition hover:bg-white hover:text-ink">Watch us on TikTok</a>
              <SocialLinks tone="dark" />
            </div>
          </div>
          <div className="rounded-[2rem] border-4 border-white p-6">
            <p className="font-display text-3xl text-butter">Now on Uber Eats</p>
            <p className="mt-3 text-lg font-medium text-silver">We serve Kempton Park and the areas around it, including:</p>
            <ul className="mt-4 flex flex-wrap gap-2">{DELIVERY.zones.slice(0, 14).map((z) => <li key={z} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold">{z}</li>)}</ul>
            <div className="mt-5 flex flex-wrap gap-3"><UberEatsButton look="butter" size="md" /><WhatsAppButton size="md" label="Ask on WhatsApp" message="Hi Kedi Kota, do you deliver to my area?" /></div>
            <p className="mt-4 text-sm text-silver">Open 7 days, 9am to 7pm. Collection is free, and we confirm delivery with you on WhatsApp.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <WordReveal as="h2" text="Questions" className="mb-10 text-4xl md:text-5xl" />
        <Faq items={faqs} />
      </section>
      <CtaBand />
    </>
  )
}
