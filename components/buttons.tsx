"use client"

import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { SITE, WA_LINK } from "@/lib/site"
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics"

const base = "group inline-flex items-center justify-center gap-2.5 rounded-full font-extrabold transition duration-200 active:scale-95 focus-visible:outline-offset-4"
const sizes = { md: "h-12 px-7 text-base", lg: "h-14 px-9 text-lg" }
const looks = {
  red: "bg-signal text-white hover:bg-signal-dark hover:shadow-lg hover:shadow-signal/40",
  dark: "bg-ink text-white hover:bg-graphite",
  butter: "bg-butter text-ink hover:brightness-95",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  outlineLight: "border-2 border-white/70 text-white hover:bg-white hover:text-ink",
  white: "bg-white text-ink hover:bg-silver",
  green: "bg-[#25D366] text-ink hover:bg-[#1fbd5b] hover:shadow-lg hover:shadow-[#25D366]/30",
}
type Size = keyof typeof sizes
type Look = keyof typeof looks
const Roll = ({ children }: { children: ReactNode }) => <span className="roll"><span>{children}</span><span aria-hidden="true">{children}</span></span>

export function LinkButton({ href, children, size = "lg", look = "red", className = "", pulse = false }: { href: string; children: ReactNode; size?: Size; look?: Look; className?: string; pulse?: boolean }) {
  return <Link href={href} className={`${base} ${sizes[size]} ${looks[look]} ${pulse ? "ring" : ""} ${className}`}><Roll>{children}</Roll></Link>
}
export function CallButton({ size = "lg", look = "dark", label = "Call Now", className = "" }: { size?: Size; look?: Look; label?: string; className?: string }) {
  return <a href={`tel:${SITE.phoneTel}`} onClick={trackCallClick} className={`${base} ${sizes[size]} ${looks[look]} ${className}`}><PhoneIcon className="h-5 w-5" /><Roll>{label}</Roll></a>
}
export function UberEatsLogo({ className = "h-6 w-6" }: { className?: string }) {
  return <Image src="/ubereats-logo.png" alt="" width={64} height={64} aria-hidden="true" className={`${className} shrink-0 rounded-md`} />
}
export function UberEatsButton({ size = "lg", look = "dark", label = "Order on Uber Eats", className = "" }: { size?: Size; look?: Look; label?: string; className?: string }) {
  return <a href={SITE.uberEats} target="_blank" rel="noopener noreferrer" className={`${base} ${sizes[size]} ${looks[look]} ${className}`}><UberEatsLogo className="h-7 w-7" /><Roll>{label}</Roll></a>
}
export function WhatsAppButton({ size = "lg", look = "green", label = "WhatsApp Us", message = "Hi Kedi Kota, I have a question.", className = "" }: { size?: Size; look?: Look; label?: string; message?: string; className?: string }) {
  return <a href={WA_LINK(message)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className={`${base} ${sizes[size]} ${looks[look]} ${className}`}><WhatsAppIcon className="h-6 w-6" /><Roll>{label}</Roll></a>
}
