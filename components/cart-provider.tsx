"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import type { Line } from "@/lib/order"

interface Ctx {
  lines: Line[]; count: number; subtotal: number; ready: boolean
  add: (item: { id: string; name: string; price: number }, opts?: { removed?: string[]; note?: string; qty?: number }) => void
  setQty: (key: string, qty: number) => void
  remove: (key: string) => void
  clear: () => void
}
const CartCtx = createContext<Ctx | null>(null)
const KEY = "kedi-kota-cart-v1"

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Line[]>([])
  const [ready, setReady] = useState(false)
  useEffect(() => { try { const raw = localStorage.getItem(KEY); if (raw) setLines(JSON.parse(raw)) } catch {} setReady(true) }, [])
  useEffect(() => { if (ready) { try { localStorage.setItem(KEY, JSON.stringify(lines)) } catch {} } }, [lines, ready])
  const add: Ctx["add"] = useCallback((item, opts = {}) => {
    const removed = [...(opts.removed ?? [])].sort(); const note = (opts.note ?? "").trim()
    const key = `${item.id}|${removed.join(",")}|${note}`
    setLines((prev) => prev.find((l) => l.key === key)
      ? prev.map((l) => (l.key === key ? { ...l, qty: l.qty + (opts.qty ?? 1) } : l))
      : [...prev, { key, id: item.id, name: item.name, price: item.price, qty: opts.qty ?? 1, removed, note }])
  }, [])
  const setQty = useCallback((key: string, qty: number) => setLines((p) => (qty <= 0 ? p.filter((l) => l.key !== key) : p.map((l) => (l.key === key ? { ...l, qty } : l)))), [])
  const remove = useCallback((key: string) => setLines((p) => p.filter((l) => l.key !== key)), [])
  const clear = useCallback(() => setLines([]), [])
  const value = useMemo<Ctx>(() => ({ lines, ready, add, setQty, remove, clear, count: lines.reduce((s, l) => s + l.qty, 0), subtotal: lines.reduce((s, l) => s + l.price * l.qty, 0) }), [lines, ready, add, setQty, remove, clear])
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}
export function useCart() { const c = useContext(CartCtx); if (!c) throw new Error("useCart must be used inside CartProvider"); return c }
