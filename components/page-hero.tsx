import type { ReactNode } from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { MovingImage } from "@/components/moving-image"
import { WordReveal } from "@/components/word-reveal"

export function PageHero({ crumbs, title, text, children, image, mark = [], compact = false }: { crumbs: { name: string; href: string }[]; title: string; text?: string; children?: ReactNode; image?: { src: string; alt: string; position?: string }; mark?: string[]; compact?: boolean }) {
  return (
    <section className="on-dark relative isolate overflow-hidden border-b-4 border-ink bg-ink text-white">
      <div aria-hidden="true" className="absolute -right-24 top-0 -z-10 h-full w-[34%] skew-x-[-10deg] bg-signal" />
      <div className={`mx-auto max-w-7xl px-5 ${compact ? "py-7 md:py-9" : "py-14 md:py-20"} ${image ? "grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]" : ""}`}>
        <div>
          <Breadcrumbs items={crumbs} tone="dark" />
          <WordReveal as="h1" text={title} mark={mark} className={`${compact ? "mt-3 text-3xl md:text-4xl" : "mt-6 text-4xl md:text-6xl"} max-w-4xl leading-[1.08]`} />
          {text && <p className={`${compact ? "mt-2 text-lg" : "mt-5 text-xl"} max-w-2xl font-medium leading-relaxed text-silver`}>{text}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && <MovingImage src={image.src} alt={image.alt} position={image.position} priority className="aspect-[4/5] max-h-[520px] rounded-[2.5rem] border-4 border-white shadow-[8px_8px_0_0_#0e0e0e]" sizes="(min-width: 1024px) 34vw, 100vw" />}
      </div>
    </section>
  )
}
