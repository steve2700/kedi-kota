import Image from "next/image"
import { KOTA_FROM } from "@/lib/menu"

const slides = [
  "kedi-kota-garlic-toasted-kota-twin-stack-on-board.jpg",
  "kedi-kota-stacked-kota-with-chips-egg-and-peri-peri-sauce.jpg",
  "kedi-kota-loaded-kota-with-polony-egg-cheese-and-chips.jpg",
  "kedi-kota-toasted-kota-with-egg-patty-cheese-and-sauce.jpg",
  "kedi-kota-kota-with-chips-egg-patty-and-russian.jpg",
]

export function HeroStage() {
  return (
    <div className="relative mx-auto w-full max-w-[38rem] lg:max-w-none">
      <figure className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[3px] border-ink bg-ink shadow-[10px_10px_0_0_#e30613]" role="img" aria-label="Two loaded Kedi Kota kotas with chips, egg, sauces and toasted bread">
        {slides.map((file, i) => (
          <div key={file} className="slide absolute inset-0" style={{ animationDelay: `${i * 6}s` }}>
            <Image
              src={`/${file}`}
              alt=""
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className={`object-cover ${["drift-a", "drift-b", "drift-c", "drift-a", "drift-b"][i]}`}
            />
          </div>
        ))}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
          <span className="kicker text-butter">The Kedi way</span>
          <span className="mt-1 block font-display text-2xl leading-tight sm:text-3xl">More than a kota.</span>
        </figcaption>
      </figure>
      <div aria-hidden="true" className="absolute -right-2 -top-4 flex -rotate-3 flex-col items-center rounded-2xl border-2 border-ink bg-signal px-4 py-3 text-white shadow-[4px_4px_0_0_#0e0e0e] sm:-right-4 sm:-top-5">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em]">Kotas from</span>
        <span className="font-display text-3xl leading-none">R{KOTA_FROM}</span>
      </div>
    </div>
  )
}
