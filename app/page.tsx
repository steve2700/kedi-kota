import type { Metadata } from "next"
import Link from "next/link"
import { LinkButton, WhatsAppButton } from "@/components/buttons"
import { HeroStage } from "@/components/hero-stage"
import { PriceTicker } from "@/components/price-ticker"
import { PhotoRibbon } from "@/components/photo-ribbon"
import { KotaBuilder } from "@/components/kota-builder"
import { OrderSteps } from "@/components/order-steps"
import { WordReveal } from "@/components/word-reveal"
import { ScrambleText } from "@/components/scramble-text"
import { ScrollText } from "@/components/scroll-text"
import { CountUp } from "@/components/count-up"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { KOTAS } from "@/lib/menu"
import { DELIVERY } from "@/lib/delivery"
import { SITE, ADDRESS_LINE, MAPS_LINK } from "@/lib/site"

export const metadata: Metadata = { title: { absolute: "Kedi Kota | Kota in Norkem Park, Kempton Park | Order Online" }, alternates: { canonical: "/" } }

const faqs = [
  { q: "What is a kota?", a: "A kota, also called a quarter, is a hollowed quarter loaf of bread filled with chips and fillings such as polony, Russian, egg, cheese and sauce. It is a South African street food favourite." },
  { q: "How much is delivery?", a: `Delivery is R${DELIVERY.flatFee} in our usual delivery area. If you are further out, we confirm the fee with you on WhatsApp before we deliver.` },
  { q: "How do I order?", a: "Pick your kota on the menu, check out and send your order on WhatsApp. We confirm it and get cooking." },
  { q: "How can I pay?", a: "You can pay cash, by EFT, or by card using a payment link we send you on WhatsApp." },
  { q: "Can I collect?", a: `Yes. Collect from ${ADDRESS_LINE}, ${SITE.address.landmark}. There is no delivery fee on collection.` },
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
              Loaded, toasted and stacked high. Kotas from R20, with chips, spiral potatoes and more. Grab yours in Norkem Park or get delivery across Kempton Park.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
              <LinkButton href="/menu" size="md" className="sm:h-14 sm:px-9 sm:text-lg">Order now</LinkButton>
              <WhatsAppButton size="md" label="WhatsApp" message="Hi Kedi Kota, I would like to order." className="sm:h-14 sm:px-9 sm:text-lg" />
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-xs font-extrabold text-graphite">
              {["Kotas from R20", "Delivery R40", "Cash, EFT or card"].map((item) => (
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

      <section id="builder" className="mx-auto max-w-7xl px-5 py-20">
        <p className="mb-3"><ScrambleText text="01 BUILD YOUR KOTA" className="kicker text-chrome" /></p>
        <WordReveal as="h2" text="Pick one and watch it stack up" className="mb-10 max-w-3xl text-4xl leading-[1.08] md:text-5xl" mark={["stack"]} />
        <KotaBuilder />
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <ScrambleText text="WHY KEDI KOTA" className="kicker text-chrome" />
          <ScrollText className="mt-5 font-display text-3xl leading-[1.2] md:text-5xl" text="Fresh chips, toasted bread, real fillings and plenty of sauce. Stacked high and served hot. Because it is more than a kota." />
          <div className="mt-14 grid grid-cols-3 gap-6">
            {[[KOTAS.length, "kotas on the menu", ""], [20, "kotas from", "R"], [40, "flat delivery", "R"]].map(([n, l, p]) => (
              <div key={l as string} className="border-l-8 border-signal pl-4">
                <p className="font-display text-5xl md:text-7xl">{p as string}<CountUp to={n as number} /></p>
                <p className="mt-1 font-bold text-graphite">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="kitchen">
        <div className="mx-auto mb-8 max-w-7xl px-5">
          <p className="mb-3"><ScrambleText text="02 FROM OUR KITCHEN" className="kicker text-chrome" /></p>
          <WordReveal as="h2" text="Straight off the board" className="text-4xl md:text-5xl" />
        </div>
        <PhotoRibbon />
        <div className="mx-auto mt-8 max-w-7xl px-5"><LinkButton href="/gallery" look="dark" size="md">See the gallery</LinkButton></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <p className="mb-3"><ScrambleText text="03 HOW IT WORKS" className="kicker text-chrome" /></p>
        <WordReveal as="h2" text="Four steps to your kota" className="mb-10 text-4xl md:text-5xl" />
        <OrderSteps />
      </section>

      <section className="on-dark border-y-4 border-ink bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <p className="mb-3"><ScrambleText text="04 FIND US" className="kicker text-butter" /></p>
            <WordReveal as="h2" text="Come and get it, or we bring it" className="text-4xl leading-[1.08] md:text-5xl" />
            <p className="mt-5 text-xl font-medium text-silver">{ADDRESS_LINE}. {SITE.address.landmark}.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-full bg-butter px-7 font-extrabold text-ink transition hover:brightness-95">Get directions</a>
              <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-full border-2 border-white/70 px-7 font-extrabold transition hover:bg-white hover:text-ink">Watch us on TikTok</a>
            </div>
          </div>
          <div className="rounded-[2rem] border-4 border-white p-6">
            <p className="font-display text-3xl text-butter">Delivery R{DELIVERY.flatFee}</p>
            <p className="mt-3 text-lg font-medium text-silver">We deliver across Kempton Park, including:</p>
            <ul className="mt-4 flex flex-wrap gap-2">{DELIVERY.zones.slice(0, 10).map((z) => <li key={z} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold">{z}</li>)}</ul>
            <p className="mt-4 text-sm text-silver">Further out? We confirm the fee on WhatsApp before we deliver.</p>
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
