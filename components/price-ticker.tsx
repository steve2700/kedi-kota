import Link from "next/link"
import { KOTAS, SIDES, PAP_MEALS, kotaLabel, money } from "@/lib/menu"

const items = [
  ...KOTAS.map((k) => ({ name: kotaLabel(k), price: money(k.price) })),
  ...SIDES.map((s) => ({ name: s.name, price: money(s.price) })),
  ...PAP_MEALS.filter((s) => s.id !== "pap-mix").map((s) => ({ name: s.name, price: money(s.price) })),
]

export function PriceTicker() {
  return (
    <section aria-label="Our menu and prices" className="on-dark border-y-4 border-ink bg-signal py-4 sm:py-5">
      <div className="mx-auto max-w-7xl px-5">
        <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-center">
          {items.map((item) => (
            <li key={item.name} className="shrink-0 snap-start">
              <Link href="/menu" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/60 bg-white/10 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-white hover:text-signal">
                <span>{item.name}</span>
                <span aria-hidden="true" className="text-butter">·</span>
                <span>{item.price}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-center text-xs font-bold text-white/80 md:hidden">Swipe for more menu prices</p>
      </div>
    </section>
  )
}
