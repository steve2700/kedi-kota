import { money } from "@/lib/menu"
import { ADDRESS_LINE } from "@/lib/site"

export interface Line { key: string; id: string; name: string; price: number; qty: number; removed: string[]; note: string }
export type Fulfilment = "delivery" | "collection"
export const PAYMENTS = ["Cash", "EFT", "Card (send me a payment link)"] as const
export interface OrderInput { ref: string; lines: Line[]; fulfilment: Fulfilment; area: string; address: string; name: string; phone: string; payment: string; notes: string }

export function totals(lines: Line[]) {
  return { subtotal: lines.reduce((s, l) => s + l.price * l.qty, 0) }
}
export function lineText(l: Line) {
  const extras = [l.removed.length ? `no ${l.removed.join(", no ")}` : "", l.note].filter(Boolean).join("; ")
  return `${l.qty} x ${l.name} (${money(l.price * l.qty)})${extras ? `: ${extras}` : ""}`
}
export function buildMessage(o: OrderInput) {
  const t = totals(o.lines)
  const out = [
    "*KEDI KOTA ORDER*", `Ref: ${o.ref}`, `Name: ${o.name.trim() || "..."}`, ...(o.phone.trim() ? [`Phone: ${o.phone.trim()}`] : []), "", "*Order*",
    ...o.lines.map(lineText), "", `Total: ${money(t.subtotal)}`,
    o.fulfilment === "collection" ? "Collection" : "Delivery: please confirm the delivery details with me",
    `Payment: ${o.payment}`,
  ]
  if (o.fulfilment === "delivery") out.push("", `Deliver to: ${o.address.trim() || "..."}`, `Area: ${o.area || "Not chosen"}`)
  else out.push("", `I will collect at ${ADDRESS_LINE}`)
  if (o.notes.trim()) out.push("", `Notes: ${o.notes.trim()}`)
  return out.join("\n")
}
