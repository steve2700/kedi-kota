import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { SITE, ADDRESS_LINE, MAPS_LINK } from "@/lib/site"
import { DELIVERY, slugify } from "@/lib/delivery"

export function Footer() {
  const h = "font-display text-xl text-white"
  const a = "block py-1 text-silver transition hover:text-butter"
  return (
    <footer className="on-dark border-t-4 border-ink bg-ink pb-24 pt-16 text-silver md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs leading-relaxed">Loaded kotas, chips and spiral potatoes in Norkem Park, Kempton Park. Order online, collect or get it delivered.</p>
          <Image src="/logo-butterfly.png" alt="" width={60} height={77} className="mt-6 h-16 w-auto opacity-90" />
        </div>
        <div>
          <h3 className={h}>Find us</h3>
          <p className="mt-3 leading-relaxed">{ADDRESS_LINE}<br />{SITE.address.landmark}</p>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-extrabold text-butter hover:underline">Get directions</a>
          <p className="mt-4">{SITE.hours ?? "Ask us on WhatsApp for today's opening times."}</p>
        </div>
        <div>
          <h3 className={h}>Order</h3>
          <div className="mt-3">
            <Link href="/menu" className={a}>Menu</Link><Link href="/order" className={a}>Your order</Link><Link href="/gallery" className={a}>Gallery</Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} className={a} target="_blank" rel="noopener noreferrer">WhatsApp {SITE.phoneDisplay}</a>
            <a href={SITE.tiktok} className={a} target="_blank" rel="noopener noreferrer">TikTok @kedikota</a>
            <Link href="/faq" className={a}>FAQ</Link>
          </div>
        </div>
        <div>
          <h3 className={h}>Delivery areas</h3>
          <div className="mt-3 grid grid-cols-2 gap-x-4">{DELIVERY.zones.slice(0, 8).map((z) => <Link key={z} href={`/kota-delivery-${slugify(z)}`} className={a}>{z}</Link>)}</div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 pt-6 text-sm md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} Kedi Kota. All rights reserved.</p>
        <p className="flex flex-wrap gap-x-5 gap-y-1"><Link href="/delivery-and-collection" className="hover:text-white">Delivery and collection</Link><Link href="/refunds-and-cancellations" className="hover:text-white">Refunds and cancellations</Link><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link></p>
      </div>
    </footer>
  )
}
