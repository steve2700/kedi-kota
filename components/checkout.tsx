"use client"

import Link from "next/link"
import { useEffect, useState, type FormEvent } from "react"
import { WhatsAppIcon } from "@/components/icons"
import { UberEatsLogo } from "@/components/buttons"
import { useCart } from "@/components/cart-provider"
import { DELIVERY } from "@/lib/delivery"
import { PAYMENTS, buildMessage, type Fulfilment } from "@/lib/order"
import { ADDRESS_LINE, SITE, WA_LINK } from "@/lib/site"
import { money } from "@/lib/menu"
import { trackWhatsAppClick } from "@/lib/analytics"

const field = "h-12 w-full rounded-2xl border-4 border-ink bg-white px-4 text-base font-semibold placeholder:text-chrome focus:border-signal focus:outline-none"
const chip = (on: boolean) => `rounded-full border-4 border-ink px-5 py-2.5 text-base font-extrabold transition active:scale-95 ${on ? "bg-signal text-white" : "bg-white hover:bg-silver"}`
const label = "font-display text-xl"

export function Checkout() {
  const { lines, ready, setQty, remove, clear, subtotal } = useCart()
  const [fulfilment, setFulfilment] = useState<Fulfilment>("delivery")
  const [area, setArea] = useState("")
  const [address, setAddress] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [payment, setPayment] = useState<string>(PAYMENTS[0])
  const [notes, setNotes] = useState("")
  const [ref, setRef] = useState("KK000000")
  useEffect(() => setRef(`KK${Math.floor(100000 + Math.random() * 900000)}`), [])

  const needsAddress = fulfilment === "delivery"
  const readyToSend = lines.length > 0 && name.trim() && (!needsAddress || (address.trim() && area))
  const message = buildMessage({ ref, lines, fulfilment, area, address, name, phone, payment, notes })

  const send = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!readyToSend) return
    trackWhatsAppClick()
    window.open(WA_LINK(message), "_blank", "noopener,noreferrer")
  }

  if (!ready) return <p className="py-10 text-lg font-bold">Loading your order...</p>
  if (!lines.length) {
    return (
      <div className="rounded-[2rem] border-4 border-ink bg-white p-10 text-center shadow-[8px_8px_0_0_#e30613]">
        <p className="font-display text-4xl">Your order is empty</p>
        <p className="mt-3 text-lg text-graphite">Pick a kota and it shows up here.</p>
        <Link href="/menu" className="mt-6 inline-flex h-14 items-center rounded-full border-4 border-ink bg-signal px-8 text-lg font-extrabold text-white">See the menu</Link>
      </div>
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form id="checkout-form" onSubmit={send} className="space-y-8">
        <section className="rounded-[2rem] border-4 border-ink bg-white p-6">
          <h2 className="font-display text-3xl">Your order</h2>
          <ul className="mt-4 divide-y-2 divide-ink/10">
            {lines.map((l) => (
              <li key={l.key} className="flex items-center justify-between gap-3 py-4">
                <div className="min-w-0">
                  <p className="font-display text-xl">{l.name}</p>
                  {(l.removed.length > 0 || l.note) && <p className="text-sm font-bold text-graphite">{[l.removed.length ? `No ${l.removed.join(", no ")}` : "", l.note].filter(Boolean).join("; ")}</p>}
                  <p className="font-extrabold text-signal">{money(l.price * l.qty)}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2" role="group" aria-label={`Quantity of ${l.name}`}>
                  <button type="button" onClick={() => setQty(l.key, l.qty - 1)} aria-label={`One less ${l.name}`} className="h-10 w-10 rounded-full border-2 border-ink bg-white text-xl font-extrabold hover:bg-silver">-</button>
                  <span className="w-6 text-center font-extrabold" aria-live="polite">{l.qty}</span>
                  <button type="button" onClick={() => setQty(l.key, l.qty + 1)} aria-label={`One more ${l.name}`} className="h-10 w-10 rounded-full border-2 border-ink bg-ink text-xl font-extrabold text-white hover:bg-graphite">+</button>
                  <button type="button" onClick={() => remove(l.key)} className="ml-1 rounded-full px-3 py-2 text-sm font-extrabold text-signal underline">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-3"><Link href="/menu" className="rounded-full border-4 border-ink px-5 py-2 font-extrabold hover:bg-ink hover:text-white">Add more</Link><button type="button" onClick={clear} className="rounded-full px-5 py-2 font-extrabold text-graphite underline">Clear order</button></div>
        </section>

        <section className="rounded-[2rem] border-4 border-ink bg-white p-6">
          <fieldset>
            <legend className={label}>Delivery or collection?</legend>
            <div className="mt-3 flex flex-wrap gap-3">
              <button type="button" aria-pressed={fulfilment === "delivery"} onClick={() => setFulfilment("delivery")} className={chip(fulfilment === "delivery")}>Delivery</button>
              <button type="button" aria-pressed={fulfilment === "collection"} onClick={() => setFulfilment("collection")} className={chip(fulfilment === "collection")}>I will collect</button>
            </div>
          </fieldset>
          {fulfilment === "delivery" ? (
            <div className="mt-6 grid gap-5">
              <label className="block"><span className={label}>Your area <span aria-hidden="true">*</span><span className="sr-only">(required)</span></span>
                <select required className={`${field} mt-2`} value={area} onChange={(e) => setArea(e.target.value)}>
                  <option value="">Choose your area</option>
                  {DELIVERY.zones.map((z) => <option key={z} value={z}>{z}</option>)}
                  <option value={DELIVERY.otherLabel}>{DELIVERY.otherLabel}</option>
                </select>
              </label>
              <p className="rounded-2xl bg-butter px-4 py-3 font-extrabold">We confirm your delivery with you on WhatsApp. Prefer Uber Eats? <a href={SITE.uberEats} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 align-middle underline decoration-signal decoration-4 underline-offset-4"><UberEatsLogo className="h-6 w-6" />Order on Uber Eats</a>.</p>
              <label className="block"><span className={label}>Delivery address <span aria-hidden="true">*</span><span className="sr-only">(required)</span></span><input required className={`${field} mt-2`} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="House number, street, complex" autoComplete="street-address" /></label>
            </div>
          ) : (
            <p className="mt-5 rounded-2xl bg-butter px-4 py-3 font-extrabold">Collect at {ADDRESS_LINE}. Open 7 days, 9am to 7pm.</p>
          )}
        </section>

        <section className="rounded-[2rem] border-4 border-ink bg-white p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block"><span className={label}>Your name <span aria-hidden="true">*</span><span className="sr-only">(required)</span></span><input required className={`${field} mt-2`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" /></label>
            <label className="block"><span className={label}>Phone number <span className="text-sm font-bold text-graphite">(optional)</span></span><input className={`${field} mt-2`} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Only if you want a call" type="tel" autoComplete="tel" /></label>
          </div>
          <fieldset className="mt-6"><legend className={label}>How will you pay?</legend>
            <div className="mt-3 flex flex-wrap gap-3">{PAYMENTS.map((p) => <button key={p} type="button" aria-pressed={payment === p} onClick={() => setPayment(p)} className={chip(payment === p)}>{p}</button>)}</div>
          </fieldset>
          <label className="mt-6 block"><span className={label}>Anything else?</span><input className={`${field} mt-2`} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="For example: which cold drink with my combo" /></label>
        </section>
      </form>

      <aside className="self-start lg:sticky lg:top-28" aria-label="Order summary">
        <div className="rounded-[2rem] border-4 border-ink bg-ink p-6 text-white shadow-[8px_8px_0_0_#e30613]">
          <div className="flex items-baseline justify-between"><p className="font-display text-2xl">Summary</p><p className="kicker text-butter">{ref}</p></div>
          <dl className="mt-5 space-y-3 text-lg">
            <div className="flex justify-between border-t-2 border-white/20 pt-3 text-2xl"><dt className="font-display">Total</dt><dd className="font-display text-butter">{money(subtotal)}</dd></div>
          </dl>
          <button id="send-order" type="submit" form="checkout-form" disabled={!readyToSend} className="mt-6 flex h-16 w-full items-center justify-center gap-3 rounded-full border-4 border-white bg-[#25D366] text-lg font-extrabold text-ink transition hover:bg-[#1fbd5b] active:scale-[0.98] disabled:cursor-not-allowed disabled:border-white/30 disabled:bg-white/10 disabled:text-white/50">
            <WhatsAppIcon className="h-7 w-7" />Send on WhatsApp
          </button>
          <p className="mt-3 text-center text-sm text-silver">{readyToSend ? "WhatsApp opens with your order ready to send. We confirm it and get cooking." : fulfilment === "delivery" ? "Add your name, area and address to send. Your phone number is optional." : "Add your name to send. Your phone number is optional."}</p>
          <details className="mt-5 text-sm text-silver"><summary className="cursor-pointer font-extrabold text-white">Preview the message</summary><pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-white/10 p-4 font-sans">{message}</pre></details>
        </div>
      </aside>
    </div>
  )
}
