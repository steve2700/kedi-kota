import Image from "next/image"
const slides: [string, string][] = [
  ["kedi-kota-garlic-toasted-kota-twin-stack-on-board.jpg", "Two garlic toasted Kedi Kota kotas stacked with chips, egg, patty and sauces"],
  ["kedi-kota-stacked-kota-with-chips-egg-and-peri-peri-sauce.jpg", "Kedi Kota kota stacked with chips, egg, cheese and peri peri sauce"],
  ["kedi-kota-loaded-kota-with-polony-egg-cheese-and-chips.jpg", "Loaded Kedi Kota kota with polony, egg, cheese and chips"],
  ["kedi-kota-toasted-kota-with-egg-patty-cheese-and-sauce.jpg", "Toasted Kedi Kota kota with egg, patty, cheese and sauce"],
  ["kedi-kota-kota-with-chips-egg-patty-and-russian.jpg", "Kedi Kota kota with chips, egg, patty and Russian"],
]
export function HeroStage() {
  return (
    <div className="relative pb-6">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-ink bg-ink shadow-[10px_10px_0_0_#e30613]" role="group" aria-label="Photos of our kotas">
        {slides.map(([file, alt], i) => (
          <div key={file} className="slide absolute inset-0" style={{ animationDelay: `${i * 6}s` }}>
            <Image src={`/${file}`} alt={alt} fill priority={i === 0} sizes="(min-width: 1024px) 40vw, 100vw" className={`object-cover ${["drift-a", "drift-b", "drift-c", "drift-a", "drift-b"][i]}`} />
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="wiggle absolute -right-3 top-6 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-ink bg-signal text-center text-white shadow-lg sm:-right-6 sm:h-32 sm:w-32">
        <span className="text-[11px] font-extrabold uppercase tracking-widest">Kotas from</span><span className="font-display text-4xl leading-none sm:text-5xl">R20</span>
      </div>
      <div aria-hidden="true" className="bob absolute -left-3 bottom-2 flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-ink bg-butter text-center text-ink shadow-lg sm:-left-8 sm:h-28 sm:w-28">
        <span className="text-[10px] font-extrabold uppercase tracking-widest">Delivery</span><span className="font-display text-3xl leading-none sm:text-4xl">R40</span>
      </div>
    </div>
  )
}
