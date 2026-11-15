import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SITE } from "@/lib/site"

export const metadata: Metadata = { title: "Refunds and Cancellations Policy", description: "Kedi Kota cancellation and refund policy for kota orders in Kempton Park.", alternates: { canonical: "/refunds-and-cancellations" } }
export default function Page() {
  const h = "mt-10 font-display text-3xl"; const p = "mt-3 text-lg font-medium leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Refunds and cancellations", href: "/refunds-and-cancellations" }]} title="Refunds and cancellations" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className={p}>Our food is made fresh to order, so please read this before you order. Nothing here limits your rights under the Consumer Protection Act.</p>
        <h2 className={h}>Cancelling an order</h2>
        <p className={p}>You can cancel for free before we start preparing your food. Message us on WhatsApp as soon as you can. Once we have started cooking, we cannot cancel the order, because the food has been made for you.</p>
        <h2 className={h}>If something is wrong</h2>
        <p className={p}>If your order is wrong, missing items, or arrives in poor condition, tell us on WhatsApp straight away and send a photo. We will fix it by remaking the item or refunding the affected part of your order.</p>
        <h2 className={h}>If we cannot deliver</h2>
        <p className={p}>If we cannot deliver your order, we will tell you. You can choose to collect it, or we will refund anything you have paid.</p>
        <h2 className={h}>How refunds are paid</h2>
        <p className={p}>Refunds go back to the way you paid: cash refunds at collection or delivery, EFT refunds to your bank account and card refunds to your card. We aim to refund within 7 days.</p>
        <h2 className={h}>Contact</h2>
        <p className={p}>WhatsApp {SITE.phoneDisplay} or email {SITE.email}.</p>
      </article>
    </>
  )
}
