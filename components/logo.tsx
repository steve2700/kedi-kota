import Image from "next/image"
import Link from "next/link"
export function Logo({ tone = "light", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const dark = tone === "dark"
  return (
    <Link href="/" aria-label="Kedi Kota home" className={`group flex items-center gap-3 ${className}`}>
      <Image src="/kedi-kota-logo-circle.png" alt="" width={64} height={64} priority className="h-14 w-14 rounded-full shadow-md shadow-ink/20 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105 sm:h-16 sm:w-16" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-2xl sm:text-3xl ${dark ? "text-white" : "text-ink"}`}>Kedi <span className="text-signal">Kota</span></span>
        <span className={`mt-1 text-[10px] font-extrabold uppercase tracking-[0.22em] sm:text-xs ${dark ? "text-silver" : "text-graphite"}`}>More than a kota</span>
      </span>
    </Link>
  )
}
