import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { DELIVERY } from "@/lib/delivery"
import { ADDRESS_LINE, SITE } from "@/lib/site"

export const metadata: Metadata = { title: "Delivery and Collection Policy", description: "How Kedi Kota delivery and collection work: R40 delivery in our usual area, collection at 122 Caledon Drive, Norkem Park.", alternates: { canonical: "/delivery-and-collection" } }
export default function Page() {
  const h = "mt-10 font-display text-3xl"; const p = "mt-3 text-lg font-medium leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Delivery and collection", href: "/delivery-and-collection" }]} title="Delivery and collection" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <h2 className={h}>How ordering works</h2>
        <p className={p}>You build your order on our website and send it to us on WhatsApp. We confirm your order, the total and the time with you on WhatsApp before we start cooking.</p>
        <h2 className={h}>Delivery</h2>
        <p className={p}>Delivery costs R{DELIVERY.flatFee} in our usual delivery area, which includes {DELIVERY.zones.join(", ")}. If you are further out, we confirm the delivery fee with you on WhatsApp before we deliver, and you can choose to collect instead.</p>
        <p className={p}>Please give us a correct address and a phone number we can reach. Delivery times depend on how busy we are, and we will tell you when we confirm your order.</p>
        <h2 className={h}>Collection</h2>
        <p className={p}>Collect from {ADDRESS_LINE}, {SITE.address.landmark}. There is no delivery fee on collection. We will tell you when your order is ready.</p>
        <h2 className={h}>Payment</h2>
        <p className={p}>You can pay cash, by EFT, or by card using a payment link we send you on WhatsApp. Banking details are given on WhatsApp and are never shown publicly on this website.</p>
        <h2 className={h}>Contact</h2>
        <p className={p}>WhatsApp us on {SITE.phoneDisplay} if anything is wrong with your delivery.</p>
      </article>
    </>
  )
}
