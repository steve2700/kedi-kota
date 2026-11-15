import Image from "next/image"
export const PHOTOS: { file: string; alt: string; title: string }[] = [
  { file: "kedi-kota-garlic-toasted-kota-twin-stack-on-board.jpg", alt: "Two garlic toasted Kedi Kota kotas stacked on a board", title: "Twin stack" },
  { file: "kedi-kota-stacked-kota-with-chips-egg-and-peri-peri-sauce.jpg", alt: "Kota stacked with chips, egg and peri peri sauce", title: "Peri peri stack" },
  { file: "kedi-kota-loaded-kota-with-polony-egg-cheese-and-chips.jpg", alt: "Loaded kota with polony, egg, cheese and chips", title: "Loaded kota" },
  { file: "kedi-kota-toasted-kota-with-egg-patty-cheese-and-sauce.jpg", alt: "Toasted kota with egg, patty, cheese and sauce", title: "Toasted and saucy" },
  { file: "kedi-kota-kota-with-chips-egg-patty-and-russian.jpg", alt: "Kota with chips, egg, patty and Russian", title: "Patty and Russian" },
]
export function PhotoRibbon() {
  const row = (hidden: boolean) => PHOTOS.map((p) => (
    <div key={`${hidden}-${p.file}`} aria-hidden={hidden || undefined} className="relative h-80 w-64 shrink-0 overflow-hidden rounded-[2rem] border-4 border-ink bg-silver">
      <Image src={`/${p.file}`} alt={hidden ? "" : p.alt} fill sizes="260px" className="object-cover" />
    </div>
  ))
  return (
    <div className="overflow-hidden py-2" aria-label="Photos of our kotas">
      <div className="strip flex w-max gap-5 pr-5">{row(false)}{row(true)}{row(true)}</div>
    </div>
  )
}
