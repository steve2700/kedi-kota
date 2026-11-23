"use client"

import Link from "next/link"
import { UberEatsLogo } from "@/components/buttons"
import { useState } from "react"
import { KOTAS, SIDES, PAP_MEALS, DRINKS, DRINK_SIZE, cap, money } from "@/lib/menu"
import { SITE } from "@/lib/site"
import { useCart } from "@/components/cart-provider"

function KotaCard({ k }: { k: (typeof KOTAS)[number] }) {
  const { add } = useCart()
  const [removed, setRemoved] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [flash, setFlash] = useState(0)
  const toggle = (i: string) => setRemoved((r) => (r.includes(i) ? r.filter((x) => x !== i) : [...r, i]))
  return (
    <article className="flex flex-col rounded-[2rem] border-4 border-ink bg-white p-6 shadow-[6px_6px_0_0_#0e0e0e]">
      <div className="flex items-start justify-between gap-3">
        <div><p className="kicker text-chrome">{k.tag ?? "Kota"}</p><h3 className="font-display text-3xl">{k.name}</h3></div>
        <span className="rounded-full bg-signal px-4 py-1.5 font-display text-2xl text-white">{money(k.price)}</span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {k.ingredients.map((i) => <li key={i} className={`rounded-full border-2 border-ink px-3 py-1 text-sm font-bold ${removed.includes(i) ? "bg-silver line-through opacity-50" : "bg-steel"}`}>{cap(i)}</li>)}
        {k.note && <li className="rounded-full bg-butter px-3 py-1 text-sm font-extrabold">{k.note}</li>}
      </ul>
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="mt-4 w-fit text-sm font-extrabold underline decoration-signal decoration-4 underline-offset-4">{open ? "Hide options" : "Leave something out"}</button>
      {open && (
        <div className="swap mt-3 flex flex-wrap gap-2" role="group" aria-label={`Leave out of ${k.name}`}>
          {k.ingredients.map((i) => <button key={i} type="button" aria-pressed={removed.includes(i)} onClick={() => toggle(i)} className={`rounded-full border-2 px-3 py-1.5 text-sm font-bold transition ${removed.includes(i) ? "border-signal bg-signal text-white" : "border-ink bg-white hover:bg-silver"}`}>{removed.includes(i) ? `No ${i}` : cap(i)}</button>)}
        </div>
      )}
      <div className="mt-auto flex flex-col gap-3 pt-6">
        <button type="button" onClick={() => { add({ id: k.id, name: k.name, price: k.price }, { removed }); setFlash((n) => n + 1) }} className="h-12 w-full rounded-full border-4 border-ink bg-signal px-6 text-base font-extrabold text-white transition hover:bg-signal-dark active:scale-95">Add to order</button>
        {flash > 0 && <span key={flash} className="pop self-start rounded-full bg-butter px-4 py-2 text-sm font-extrabold" role="status"><Link href="/order">Added · review order</Link></span>}
      </div>
    </article>
  )
}

function SideRow({ s }: { s: (typeof SIDES)[number] }) {
  const { add, lines, setQty } = useCart()
  const line = lines.find((l) => l.id === s.id && !l.removed.length && !l.note)
  return (
    <li className="flex items-center justify-between gap-3 rounded-2xl border-4 border-ink bg-white px-4 py-3">
      <div><p className="font-display text-xl">{s.name}</p><p className="font-extrabold text-signal">{money(s.price)}</p></div>
      {line ? (
        <div className="flex items-center gap-2" role="group" aria-label={`Quantity of ${s.name}`}>
          <button type="button" onClick={() => setQty(line.key, line.qty - 1)} aria-label={`One less ${s.name}`} className="h-10 w-10 rounded-full border-2 border-ink bg-white text-xl font-extrabold hover:bg-silver">-</button>
          <span className="w-6 text-center font-extrabold" aria-live="polite">{line.qty}</span>
          <button type="button" onClick={() => setQty(line.key, line.qty + 1)} aria-label={`One more ${s.name}`} className="h-10 w-10 rounded-full border-2 border-ink bg-ink text-xl font-extrabold text-white hover:bg-graphite">+</button>
        </div>
      ) : (
        <button type="button" onClick={() => add({ id: s.id, name: s.name, price: s.price })} className="h-10 rounded-full border-2 border-ink bg-signal px-5 text-sm font-extrabold text-white transition hover:bg-signal-dark active:scale-95">Add</button>
      )}
    </li>
  )
}

export function MenuBrowser() {
  const { count, subtotal } = useCart()
  const groups = Array.from(new Set(SIDES.map((s) => s.group)))
  return (
    <div>
      <h2 className="font-display text-4xl md:text-5xl">Kotas</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{KOTAS.map((k) => <KotaCard key={k.id} k={k} />)}</div>
      <h2 className="mt-16 font-display text-4xl md:text-5xl">Chips and sides</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g}>
            <h3 className="font-display text-2xl text-signal">{g}</h3>
            <ul className="mt-3 grid gap-3">{SIDES.filter((s) => s.group === g).map((s) => <SideRow key={s.id} s={s} />)}</ul>
          </div>
        ))}
      </div>
      <h2 className="mt-16 font-display text-4xl md:text-5xl">Pap meals</h2>
      <p className="mt-2 text-lg font-medium text-graphite">Hot, filling pap meals.</p>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">{PAP_MEALS.map((s) => <SideRow key={s.id} s={s} />)}</ul>
      <h2 className="mt-16 font-display text-4xl md:text-5xl">Cold drinks</h2>
      <p className="mt-2 text-lg font-medium text-graphite">{DRINK_SIZE} bottles, all R15.</p>
      <ul className="mt-6 grid gap-3 md:grid-cols-3">{DRINKS.map((s) => <SideRow key={s.id} s={s} />)}</ul>
      <p className="mt-10 text-center text-lg font-bold">Also on <a href={SITE.uberEats} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 align-middle underline decoration-signal decoration-4 underline-offset-4"><UberEatsLogo className="h-7 w-7" />Uber Eats</a></p>
      <div className="mt-6 rounded-[2rem] border-4 border-ink bg-butter p-6 text-center md:flex md:items-center md:justify-between md:text-left">
        <p className="font-display text-2xl">{count ? `${count} ${count === 1 ? "item" : "items"} in your order: ${money(subtotal)}` : "Your order is empty. Add something tasty."}</p>
        <Link href={count ? "/order" : "#kotas"} className="mt-4 inline-flex h-14 items-center rounded-full border-4 border-ink bg-ink px-8 text-lg font-extrabold text-white transition hover:bg-graphite md:mt-0">{count ? "Review your order" : "Start with a kota"}</Link>
      </div>
    </div>
  )
}
