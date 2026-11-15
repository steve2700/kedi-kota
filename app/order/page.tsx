import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Checkout } from "@/components/checkout"

export const metadata: Metadata = { title: "Your Order", description: "Check out your Kedi Kota order and send it on WhatsApp.", robots: { index: false, follow: true }, alternates: { canonical: "/order" } }
export default function OrderPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Your order", href: "/order" }]} title="Check out" mark={["out"]} text="Check your order, add your details and send it on WhatsApp. We confirm it and get cooking." />
      <section className="mx-auto max-w-7xl px-5 py-12"><Checkout /></section>
    </>
  )
}
