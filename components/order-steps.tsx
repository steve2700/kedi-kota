"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  { t: "Pick your kota", d: "Choose a kota and sides from the menu. Leave out anything you do not like." },
  { t: "Check out", d: "Add your name, number and address, or choose to collect." },
  { t: "Send on WhatsApp", d: "Your order opens in WhatsApp, ready to send. We confirm it." },
  { t: "Pay and enjoy", d: "Pay cash, EFT or card. We cook, you eat." },
]
export function OrderSteps() {
  const ref = useRef<HTMLOListElement | null>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.2 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return (
    <ol ref={ref} className={`steps ${on ? "in" : ""} grid gap-5 sm:grid-cols-2 lg:grid-cols-4`}>
      {steps.map((s, i) => (
        <li key={s.t} className="step rounded-[2rem] border-4 border-ink bg-white p-6 shadow-[6px_6px_0_0_#0e0e0e]" style={{ "--i": i } as React.CSSProperties}>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal font-display text-xl text-white">{i + 1}</span>
          <h3 className="mt-4 text-2xl leading-tight">{s.t}</h3>
          <p className="mt-2 font-medium text-graphite">{s.d}</p>
        </li>
      ))}
    </ol>
  )
}
