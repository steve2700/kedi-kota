import { KOTAS, SIDES, money } from "@/lib/menu"
const items = [...KOTAS.map((k) => `${k.name} ${money(k.price)}`), ...SIDES.map((s) => `${s.name} ${money(s.price)}`)]
export function PriceTicker() {
  const row = (hidden: boolean) => items.map((t) => (
    <span key={`${hidden}-${t}`} className="flex items-center gap-8">
      <span aria-hidden={hidden || undefined} className="whitespace-nowrap font-display text-4xl text-white md:text-6xl">{t}</span>
      <span aria-hidden="true" className="h-5 w-5 shrink-0 rounded-full bg-butter" />
    </span>
  ))
  return (
    <section aria-label="Our menu and prices" className="on-dark border-y-4 border-ink bg-signal py-8">
      <div className="overflow-hidden"><div className="strip-fast flex w-max items-center gap-8 pr-8">{row(false)}{row(true)}</div></div>
    </section>
  )
}
