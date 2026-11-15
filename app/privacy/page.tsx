import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SITE, ADDRESS_LINE } from "@/lib/site"

export const metadata: Metadata = { title: "Privacy Policy", description: "How Kedi Kota collects, uses and protects your personal information.", alternates: { canonical: "/privacy" } }
export default function Page() {
  const h = "mt-10 font-display text-3xl"; const p = "mt-3 text-lg font-medium leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy", href: "/privacy" }]} title="Privacy policy" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className={p}>Kedi Kota respects your privacy and handles personal information in line with the Protection of Personal Information Act (POPIA).</p>
        <h2 className={h}>Who we are</h2>
        <p className={p}>Kedi Kota, {ADDRESS_LINE}. WhatsApp {SITE.phoneDisplay}.</p>
        <h2 className={h}>What we collect</h2>
        <p className={p}>When you place an order we receive your name, phone number, delivery address and what you ordered, through WhatsApp. Your cart on this website is saved only in your own browser so it is still there when you come back. We do not store your order on our website.</p>
        <h2 className={h}>How we use it</h2>
        <p className={p}>We use your information to prepare and deliver your order and to contact you about it. We do not sell your information.</p>
        <h2 className={h}>Sharing</h2>
        <p className={p}>We only share information where it is needed to deliver your order or where the law requires it.</p>
        <h2 className={h}>Analytics</h2>
        <p className={p}>We use privacy friendly analytics to understand how the website is used.</p>
        <h2 className={h}>Your rights</h2>
        <p className={p}>You can ask to see, correct or delete the personal information we hold about you. Email {SITE.email}.</p>
      </article>
    </>
  )
}
