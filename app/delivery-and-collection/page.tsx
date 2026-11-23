import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { DELIVERY } from "@/lib/delivery"
import { ADDRESS_LINE, SITE } from "@/lib/site"

export const metadata: Metadata = { title: "Delivery and Collection Policy", description: "How Kedi Kota delivery and collection work: collect at 122 Storms Road, Norkem Park, order on Uber Eats, or WhatsApp us for delivery.", alternates: { canonical: "/delivery-and-collection" } }
export default function Page() {
  const h = "mt-10 font-display text-3xl"; const p = "mt-3 text-lg font-medium leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Delivery and collection", href: "/delivery-and-collection" }]} title="Delivery and collection" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <h2 className={h}>How ordering works</h2>
        <p className={p}>You build your order on our website and send it to us on WhatsApp. We confirm your order, the total and the time with you on WhatsApp before we start cooking.</p>
        <h2 className={h}>Delivery</h2>
        <p className={p}>We serve Kempton Park and the areas around it, including {DELIVERY.zones.join(", ")}. We confirm delivery, and anything it costs, with you on WhatsApp before we deliver. You can also order from us on Uber Eats, or choose to collect instead.</p>
        <p className={p}>Please give us a correct address and a phone number we can reach. Delivery times depend on how busy we are, and we will tell you when we confirm your order.</p>
        <h2 className={h}>Collection</h2>
        <p className={p}>Collect from {ADDRESS_LINE}, {SITE.address.landmark}. Collection is free. We are open 7 days, 9am to 7pm, and we will tell you when your order is ready.</p>
        <h2 className={h}>Payment</h2>
        <p className={p}>You can pay cash, by EFT, or by card using a payment link we send you on WhatsApp. Banking details are given on WhatsApp and are never shown publicly on this website.</p>
        <h2 className={h}>Contact</h2>
        <p className={p}>WhatsApp us on {SITE.phoneDisplay} if anything is wrong with your delivery.</p>
      </article>
    </>
  )
}
