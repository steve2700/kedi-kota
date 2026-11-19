"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { useCart } from "@/components/cart-provider"
import { money } from "@/lib/menu"

const links = [{ href: "/menu", label: "Menu" }, { href: "/gallery", label: "Gallery" }, { href: "/find-us", label: "Find us" }, { href: "/faq", label: "FAQ" }]

export function Header() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const { count, subtotal } = useCart()
  useEffect(() => setOpen(false), [path])
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = "" } }, [open])
  const item = "px-3 py-2 text-[15px] font-extrabold text-ink/80 transition hover:text-signal"
  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-steel/95 backdrop-blur">
      <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center lg:flex">{links.map((l) => <Link key={l.href} href={l.href} className={item}>{l.label}</Link>)}</nav>
        <div className="flex items-center gap-3">
          <Link href="/order" className="flex h-12 items-center gap-2 rounded-full border-2 border-ink bg-white px-4 text-sm font-extrabold transition hover:bg-ink hover:text-white" aria-label={`Your order: ${count} ${count === 1 ? "item" : "items"}`}>
            <span className={`flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-sm ${count ? "bg-signal text-white" : "bg-silver text-ink"}`}>{count}</span>
            <span className="hidden sm:inline">{count ? money(subtotal) : "Your order"}</span>
          </Link>
          <Link href="/menu" className="ring hidden h-12 items-center rounded-full bg-signal px-7 text-base font-extrabold text-white transition hover:bg-signal-dark sm:flex">Order now</Link>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-ink/5 transition hover:bg-ink/10 lg:hidden">
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[88px] overflow-y-auto bg-steel px-5 pb-28 pt-4 lg:hidden">
          <Link href="/menu" className="mb-2 block rounded-full bg-signal px-6 py-4 text-center font-display text-2xl text-white">Order now</Link>
          {links.map((l) => <Link key={l.href} href={l.href} className="block border-b border-ink/10 py-4 font-display text-3xl">{l.label}</Link>)}
          <Link href="/order" className="block border-b border-ink/10 py-4 font-display text-3xl">Your order ({count})</Link>
        </div>
      )}
    </header>
  )
}
