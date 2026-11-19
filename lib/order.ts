import { money } from "@/lib/menu"
import { deliveryFee } from "@/lib/delivery"

export interface Line { key: string; id: string; name: string; price: number; qty: number; removed: string[]; note: string }
export type Fulfilment = "delivery" | "collection"
export const PAYMENTS = ["Cash", "EFT", "Card (send me a payment link)"] as const
export interface OrderInput { ref: string; lines: Line[]; fulfilment: Fulfilment; area: string; address: string; name: string; phone: string; payment: string; notes: string }

export function totals(lines: Line[], fulfilment: Fulfilment, area: string) {
  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0)
  const fee = fulfilment === "delivery" ? deliveryFee(area) : 0
  const toConfirm = fulfilment === "delivery" && fee === null
  return { subtotal, fee: fee ?? 0, toConfirm, total: subtotal + (fee ?? 0) }
}
export function lineText(l: Line) {
  const extras = [l.removed.length ? `no ${l.removed.join(", no ")}` : "", l.note].filter(Boolean).join("; ")
  return `${l.qty} x ${l.name} (${money(l.price * l.qty)})${extras ? `: ${extras}` : ""}`
}
export function buildMessage(o: OrderInput) {
  const t = totals(o.lines, o.fulfilment, o.area)
  const out = [
    "*KEDI KOTA ORDER*", `Ref: ${o.ref}`, `Name: ${o.name.trim() || "..."}`, ...(o.phone.trim() ? [`Phone: ${o.phone.trim()}`] : []), "", "*Order*",
    ...o.lines.map(lineText), "", `Subtotal: ${money(t.subtotal)}`,
    o.fulfilment === "collection" ? "Collection: no delivery fee" : t.toConfirm ? "Delivery: fee to be confirmed (outside our usual area)" : `Delivery: ${money(t.fee)}`,
    t.toConfirm ? `Total: ${money(t.subtotal)} plus delivery fee` : `Total: ${money(t.total)}`,
    `Payment: ${o.payment}`,
  ]
  if (o.fulfilment === "delivery") out.push("", `Deliver to: ${o.address.trim() || "..."}`, `Area: ${o.area || "Not chosen"}`)
  else out.push("", "I will collect at 122 Caledon Drive, Norkem Park")
  if (o.notes.trim()) out.push("", `Notes: ${o.notes.trim()}`)
  return out.join("\n")
}
