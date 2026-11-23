import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { DELIVERY } from "@/lib/delivery"
import { ADDRESS_LINE, SITE } from "@/lib/site"

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Answers about Kedi Kota kotas, delivery, collection, payment and how to order in Norkem Park, Kempton Park.", alternates: { canonical: "/faq" } }
const items = [
  { q: "What is a kota?", a: "A kota, also called a quarter, is a hollowed quarter loaf of bread filled with chips and fillings such as polony, Russian, egg, cheese and sauce. It is a South African street food favourite." },
  { q: "How do I order?", a: "Pick your kota and sides on the menu, check out and send the order on WhatsApp. We confirm it and get cooking." },
  { q: "Are you on Uber Eats?", a: "Yes. Kedi Kota is now on Uber Eats. You can also order on this website and send it on WhatsApp." },
  { q: "Do you deliver, and where?", a: `We serve Kempton Park and the areas around it: ${DELIVERY.zones.join(", ")}. We confirm delivery with you on WhatsApp, or you can order on Uber Eats.` },
  { q: "Can I collect my order?", a: `Yes. Collect from ${ADDRESS_LINE}. ${SITE.hours}.` },
  { q: "Do you sell pap meals?", a: "Yes. We have pap with hardbody chicken, mogodu, hlogo, a mogodu and hlogo mix, or chicken malana. See the menu for prices." },
  { q: "What kind of onion, patty and ribs do you use?", a: "Our onion is red onion. The patty is a chicken patty, and the ribs on Kota 4 are chicken ribs." },
  { q: "How can I pay?", a: "Cash, EFT, or card using a payment link we send you on WhatsApp." },
  { q: "Can I change what is in my kota?", a: "Yes. On the menu you can leave out any ingredient, and you can add notes at checkout." },
  { q: "What comes with the Combo?", a: "The Combo is a loaded kota with chips, tomato, lettuce, pickle, red onion, ham, Russian, egg, cheese and a chicken patty, plus a cold drink." },
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
