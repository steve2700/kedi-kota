"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { useCart } from "@/components/cart-provider"
import { KOTA_FROM, money } from "@/lib/menu"

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/find-us", label: "Find us" },
  { href: "/faq", label: "FAQ" },
]

function isCurrentPage(path: string, href: string) {
  return path === href || path.startsWith(`${href}/`)
}

export function Header() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const { count, subtotal } = useCart()

  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [open])

  const navLink = (href: string) =>
    `rounded-full px-4 py-2 text-sm font-extrabold transition-colors hover:bg-signal/10 hover:text-signal ${isCurrentPage(path, href) ? "bg-signal/10 text-signal" : "text-ink/75"}`

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-steel shadow-[0_8px_24px_rgba(14,14,14,0.06)]">
      <div className="bg-ink text-silver">
        <div className="mx-auto flex h-7 max-w-7xl items-center justify-between gap-3 px-5 text-[10px] font-extrabold uppercase tracking-[0.14em] sm:text-[11px]">
          <p className="flex items-center gap-2"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal" />Norkem Park · Kempton Park</p>
          <p className="hidden text-butter sm:block">Open 7 days, 9am to 7pm · Kotas from R{KOTA_FROM}</p>
        </div>
      </div>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-5 sm:gap-5">
        <Logo className="shrink-0" />
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={navLink(link.href)} aria-current={isCurrentPage(path, link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/order" className="group flex h-11 items-center gap-2 rounded-full border-2 border-ink bg-white py-1 pl-1 pr-3 text-sm font-extrabold transition hover:bg-ink hover:text-white sm:pr-4" aria-label={`Your order: ${count} ${count === 1 ? "item" : "items"}`}>
            <span className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm ${count ? "bg-signal text-white" : "bg-silver text-ink group-hover:bg-white/20 group-hover:text-white"}`}>{count}</span>
            <span className="hidden sm:inline">{count ? money(subtotal) : "Your order"}</span>
          </Link>
          <Link href="/menu" className="ring hidden h-11 items-center rounded-full bg-signal px-5 text-sm font-extrabold text-white transition hover:bg-signal-dark sm:flex">Order online</Link>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-ink/10 bg-white/70 transition hover:bg-white lg:hidden">
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[107px] overflow-y-auto border-t border-ink/10 bg-steel px-5 pb-28 pt-5 shadow-xl lg:hidden">
          <Link href="/menu" className="mb-4 flex items-center justify-between rounded-2xl bg-signal px-5 py-4 font-display text-xl text-white transition hover:bg-signal-dark">
            Order online<span aria-hidden="true" className="font-sans text-2xl">→</span>
          </Link>
          <nav aria-label="Mobile navigation" className="divide-y divide-ink/10">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={`flex items-center justify-between py-4 font-display text-2xl ${isCurrentPage(path, link.href) ? "text-signal" : "text-ink"}`} aria-current={isCurrentPage(path, link.href) ? "page" : undefined}>
                {link.label}<span aria-hidden="true" className="font-sans text-lg text-chrome">↗</span>
              </Link>
            ))}
            <Link href="/order" className="flex items-center justify-between py-4 font-display text-2xl text-ink">
              Your order<span className="rounded-full bg-butter px-3 py-1 font-sans text-sm font-extrabold">{count}</span>
            </Link>
          </nav>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-graphite">Norkem Park · Kempton Park</p>
        </div>
      )}
    </header>
  )
}
