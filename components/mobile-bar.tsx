"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { WhatsAppIcon } from "@/components/icons"
import { useCart } from "@/components/cart-provider"
import { WA_LINK } from "@/lib/site"
import { money } from "@/lib/menu"
import { trackWhatsAppClick } from "@/lib/analytics"

export function MobileBar() {
  const { count, subtotal } = useCart()
  const path = usePathname()
  const onOrder = path === "/order"
  return (
    <>
      <a href={WA_LINK("Hi Kedi Kota, I have a question.")} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} aria-label="Chat with Kedi Kota on WhatsApp" className="group fixed bottom-6 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-xl shadow-black/30 transition hover:scale-105 md:flex">
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon className="relative h-8 w-8" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-extrabold text-white opacity-0 transition group-hover:opacity-100">Chat on WhatsApp</span>
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-2 border-t-4 border-ink bg-steel p-3 md:hidden">
        <Link href={count && !onOrder ? "/order" : "/menu"} className="ring flex h-12 items-center justify-center gap-2 rounded-full bg-signal px-3 text-center font-extrabold text-white active:scale-95">
          {count && !onOrder ? `Checkout ${count} ${count === 1 ? "item" : "items"}, ${money(subtotal)}` : "Order now"}
        </Link>
        <a href={WA_LINK("Hi Kedi Kota, I have a question.")} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} aria-label="Chat on WhatsApp" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-ink active:scale-95"><WhatsAppIcon className="h-6 w-6" /></a>
      </div>
    </>
  )
}
