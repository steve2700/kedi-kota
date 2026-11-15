import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { DELIVERY } from "@/lib/delivery"
import { ADDRESS_LINE } from "@/lib/site"

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Answers about Kedi Kota kotas, delivery, collection, payment and how to order in Norkem Park, Kempton Park.", alternates: { canonical: "/faq" } }
const items = [
  { q: "What is a kota?", a: "A kota, also called a quarter, is a hollowed quarter loaf of bread filled with chips and fillings such as polony, Russian, egg, cheese and sauce. It is a South African street food favourite." },
  { q: "How do I order?", a: "Pick your kota and sides on the menu, check out and send the order on WhatsApp. We confirm it and get cooking." },
  { q: "How much is delivery?", a: `Delivery is R${DELIVERY.flatFee} in our usual delivery area. Outside it, we confirm the fee on WhatsApp before we deliver.` },
  { q: "Can I collect my order?", a: `Yes. Collect from ${ADDRESS_LINE}. There is no delivery fee on collection.` },
  { q: "How can I pay?", a: "Cash, EFT, or card using a payment link we send you on WhatsApp." },
  { q: "Can I change what is in my kota?", a: "Yes. On the menu you can leave out any ingredient, and you can add notes at checkout." },
  { q: "What comes with the Combo?", a: "The Combo is a loaded kota with chips, tomato, lettuce, pickle, onion, ham, Russian, egg, cheese and a patty, plus a 330ml drink." },
  { q: "I have an allergy. Can you help?", a: "Please tell us on WhatsApp before you order. Our kitchen handles bread, egg, dairy and meat, so we cannot promise an allergen free kota." },
]
export default function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} title="Questions, answered" mark={["answered"]} text="Everything about ordering, delivery and payment." />
      <section className="mx-auto max-w-4xl px-5 py-16"><Faq items={items} /></section>
      <CtaBand />
    </>
  )
}
