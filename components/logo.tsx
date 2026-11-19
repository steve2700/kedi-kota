import Image from "next/image"
import Link from "next/link"

export function Logo({ tone = "light", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const dark = tone === "dark"
  return (
    <Link href="/" aria-label="Kedi Kota home" className={`group flex items-center gap-3 ${className}`}>
      <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-md shadow-ink/20 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105 sm:h-16 sm:w-16 ${dark ? "border-white/40" : "border-ink"}`}>
        <Image src="/logo-butterfly.png" alt="" width={40} height={52} priority className="h-10 w-auto sm:h-11" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-2xl sm:text-3xl ${dark ? "text-white" : "text-ink"}`}>Kedi <span className="text-signal">Kota</span></span>
        <span className={`mt-1 text-[10px] font-extrabold uppercase tracking-[0.22em] sm:text-xs ${dark ? "text-silver" : "text-graphite"}`}>More than a kota</span>
      </span>
    </Link>
  )
}
