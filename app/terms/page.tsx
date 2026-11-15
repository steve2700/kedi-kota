import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = { title: "Terms of Service", description: "Terms for ordering from Kedi Kota.", alternates: { canonical: "/terms" } }
export default function Page() {
  const h = "mt-10 font-display text-3xl"; const p = "mt-3 text-lg font-medium leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Terms", href: "/terms" }]} title="Terms of service" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className={p}>By ordering from Kedi Kota you agree to these terms.</p>
        <h2 className={h}>Orders</h2>
        <p className={p}>An order is only confirmed once we confirm it with you on WhatsApp. Prices on the website are in rand and may change. The total we confirm with you is the price you pay.</p>
        <h2 className={h}>Delivery fees</h2>
        <p className={p}>Delivery is R40 in our usual delivery area. Outside it, the fee is confirmed with you before delivery.</p>
        <h2 className={h}>Allergies</h2>
        <p className={p}>Our food contains bread, egg, dairy and meat. Tell us about allergies before you order. We cannot guarantee any item is free of allergens.</p>
        <h2 className={h}>Photos</h2>
        <p className={p}>Photos show real kotas and are for illustration. Your kota may look different.</p>
        <h2 className={h}>Refunds and cancellations</h2>
        <p className={p}>See our refunds and cancellations policy.</p>
        <h2 className={h}>Liability</h2>
        <p className={p}>To the extent allowed by law, Kedi Kota is not liable for loss arising from use of this website.</p>
      </article>
    </>
  )
}
