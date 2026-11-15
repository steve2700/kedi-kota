"use client"

import Link from "next/link"
import { useState } from "react"
import { KOTAS, cap, money } from "@/lib/menu"
import { useCart } from "@/components/cart-provider"

const COLOUR: Record<string, string> = { chips: "#f5c33b", tomato: "#e53935", onion: "#c9a0dc", cucumber: "#7cb342", lettuce: "#8bc34a", polony: "#f48fb1", cheese: "#ffb300", Russian: "#a1352c", vienna: "#d2691e", egg: "#fff3c4", ham: "#f4a7a0", patty: "#5d4037", ribs: "#3e2723", pickle: "#6b8e23" }
const LIGHT = new Set(["chips", "onion", "cucumber", "lettuce", "polony", "cheese", "egg", "ham"])

/** Pick a kota and watch it stack up. Tap an ingredient to leave it out. */
export function KotaBuilder() {
  const [id, setId] = useState("kota-3")
  const [removed, setRemoved] = useState<string[]>([])
  const [added, setAdded] = useState(0)
  const { add } = useCart()
  const kota = KOTAS.find((k) => k.id === id) ?? KOTAS[0]
  const layers = [...kota.ingredients].reverse()
  const pick = (next: string) => { setId(next); setRemoved([]) }
  const toggle = (ing: string) => setRemoved((r) => (r.includes(ing) ? r.filter((x) => x !== ing) : [...r, ing]))
  const addIt = () => { add({ id: kota.id, name: kota.name, price: kota.price }, { removed }); setAdded((n) => n + 1) }
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div role="tablist" aria-label="Choose a kota" className="grid gap-3 self-start">
        {KOTAS.map((k) => (
          <button key={k.id} role="tab" type="button" aria-selected={k.id === id} onClick={() => pick(k.id)} className={`flex items-center justify-between gap-4 rounded-2xl border-4 border-ink px-5 py-4 text-left transition active:scale-[0.99] ${k.id === id ? "bg-butter shadow-[6px_6px_0_0_#0e0e0e]" : "bg-white hover:bg-silver"}`}>
            <span><span className="block font-display text-2xl">{k.name}</span><span className="text-sm font-bold text-graphite">{k.note ?? `${k.ingredients.length} ingredients`}</span></span>
            <span className="rounded-full bg-signal px-4 py-1.5 font-display text-xl text-white">{money(k.price)}</span>
          </button>
        ))}
      </div>
      <div key={id} className="rounded-[2.5rem] border-4 border-ink bg-white p-6 shadow-[8px_8px_0_0_#e30613] md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><p className="kicker text-chrome">{kota.tag ?? "On the menu"}</p><h3 className="font-display text-4xl md:text-5xl">{kota.name}</h3></div>
          <p className="font-display text-4xl text-signal md:text-5xl">{money(kota.price)}</p>
        </div>
        <p className="mt-2 text-sm font-bold text-graphite">Tap an ingredient to leave it out.</p>
        <div className="mx-auto mt-5 max-w-sm">
          <div className="layer mx-3 h-8 rounded-t-[2rem] border-4 border-b-0 border-ink bg-[#e8b867]" style={{ "--i": layers.length + 1 } as React.CSSProperties} aria-hidden="true" />
          <ul className="flex flex-col">
            {layers.map((ing, i) => {
              const off = removed.includes(ing)
              return (
                <li key={ing} className="layer" style={{ "--i": layers.length - 1 - i } as React.CSSProperties}>
                  <button type="button" onClick={() => toggle(ing)} aria-pressed={off} aria-label={`${off ? "Add back" : "Leave out"} ${ing}`} className={`flex w-full items-center justify-between border-x-4 border-b-2 border-ink px-4 py-2 text-left font-extrabold transition ${off ? "opacity-40" : ""}`} style={{ background: COLOUR[ing] ?? "#ddd", color: LIGHT.has(ing) ? "#0e0e0e" : "#fff" }}>
                    <span className={off ? "line-through" : ""}>{cap(ing)}</span>
                    <span className="text-xs uppercase tracking-widest">{off ? "Left out" : "Tap to remove"}</span>
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="layer h-7 rounded-b-[2rem] border-4 border-ink bg-[#e8b867]" style={{ "--i": 0 } as React.CSSProperties} aria-hidden="true" />
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button type="button" onClick={addIt} className="h-14 rounded-full border-4 border-ink bg-signal px-8 text-lg font-extrabold text-white transition hover:bg-signal-dark active:scale-95">Add to my order</button>
          {added > 0 && <Link href="/order" key={added} className="pop rounded-full bg-ink px-6 py-3 font-extrabold text-white">Added. Go to checkout</Link>}
        </div>
        {removed.length > 0 && <p className="mt-3 text-sm font-bold text-graphite">Without: {removed.join(", ")}</p>}
      </div>
    </div>
  )
}
