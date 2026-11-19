import Link from "next/link"
import { Logo } from "@/components/logo"
import { SITE, ADDRESS_LINE, MAPS_LINK } from "@/lib/site"
import { DELIVERY, slugify } from "@/lib/delivery"

export function Footer() {
  const heading = "font-display text-xl text-white"
  const link = "block rounded-sm py-1.5 text-silver/85 transition-colors hover:text-butter focus-visible:text-butter"
  const legalLink = "transition-colors hover:text-butter focus-visible:text-butter"

  return (
    <footer className="on-dark border-t-4 border-ink bg-ink pb-24 pt-8 text-silver md:pb-10 md:pt-12">
      <div className="mx-auto max-w-7xl px-5">
        <section aria-labelledby="footer-order-heading" className="flex flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-signal px-6 py-7 text-white shadow-xl shadow-black/20 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="kicker text-white/75">Make it a kota day</p>
            <h2 id="footer-order-heading" className="mt-2 font-display text-3xl leading-tight sm:text-4xl">Your next favourite starts here.</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">Pick your favourites, order online, then choose delivery across Kempton Park or collection in Norkem Park.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/menu" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-extrabold text-ink transition hover:bg-butter">Explore the menu<span aria-hidden="true" className="ml-2 text-xl">→</span></Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 px-5 font-extrabold text-white transition hover:bg-white/10">WhatsApp us</a>
          </div>
        </section>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.8fr_1.1fr] lg:gap-12">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver/80">Loaded kotas, chips and spiral potatoes in Norkem Park, Kempton Park. Made for your next proper kota fix.</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-extrabold">
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-butter transition hover:text-white">WhatsApp {SITE.phoneDisplay}</a>
              <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="text-butter transition hover:text-white">TikTok @kedikota</a>
            </div>
          </div>

          <section aria-labelledby="footer-find-us">
            <h2 id="footer-find-us" className={heading}>Find us</h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-silver/85">{ADDRESS_LINE}<br />{SITE.address.landmark}</address>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-extrabold text-butter transition hover:text-white">Get directions<span aria-hidden="true">↗</span></a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver/70">{SITE.hours ?? "Ask us on WhatsApp for today's opening times."}</p>
          </section>

          <nav aria-labelledby="footer-order-links">
            <h2 id="footer-order-links" className={heading}>Explore</h2>
            <div className="mt-3">
              <Link href="/menu" className={link}>Menu</Link>
              <Link href="/order" className={link}>Your order</Link>
              <Link href="/gallery" className={link}>Gallery</Link>
              <Link href="/faq" className={link}>FAQs</Link>
              <Link href="/delivery-and-collection" className={link}>Delivery & collection</Link>
            </div>
          </nav>

          <section aria-labelledby="footer-delivery-areas">
            <h2 id="footer-delivery-areas" className={heading}>Delivery areas</h2>
            <p className="mt-2 text-sm leading-relaxed text-silver/70">Fresh kota delivery around Kempton Park.</p>
            <div className="mt-3 grid grid-cols-2 gap-x-3">
              {DELIVERY.zones.slice(0, 8).map((zone) => (
                <Link key={zone} href={`/kota-delivery-${slugify(zone)}`} className={link}>{zone}</Link>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-silver/65 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Kedi Kota. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/refunds-and-cancellations" className={legalLink}>Refunds & cancellations</Link>
            <Link href="/privacy" className={legalLink}>Privacy</Link>
            <Link href="/terms" className={legalLink}>Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
