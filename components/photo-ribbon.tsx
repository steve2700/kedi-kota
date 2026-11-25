import Image from "next/image"
export const PHOTOS: { file: string; alt: string; title: string }[] = [
  { file: "kedi-kota-tall-loaded-kota-vienna-cheese-egg.jpg", alt: "Tall loaded Kedi Kota kota with vienna, cheese, egg and chips on a garlic toasted loaf", title: "Stacked high" },
  { file: "kedi-kota-garlic-toasted-kota-peri-peri-sauce.jpg", alt: "Garlic toasted Kedi Kota kota with egg, cheese and peri peri sauce", title: "Garlic toasted" },
  { file: "kedi-kota-loaded-kota-with-sprite.jpg", alt: "Loaded Kedi Kota kota with cheese sauce and a cold Sprite", title: "Kota and a Sprite" },
  { file: "kedi-kota-loaded-kota-with-fanta.jpg", alt: "Loaded Kedi Kota kota with vienna, cheese and a cold Fanta", title: "Kota and a Fanta" },
  { file: "kedi-kota-pap-hardbody-chicken-coleslaw-morogo.jpg", alt: "Pap with hardbody chicken, coleslaw and morogo", title: "Pap and hardbody chicken" },
  { file: "kedi-kota-pap-mogodu-morogo-beetroot.jpg", alt: "Pap with mogodu, morogo and beetroot", title: "Pap and mogodu" },
  { file: "kedi-kota-pap-chicken-malana-morogo-beetroot.jpg", alt: "Pap with chicken malana, morogo and beetroot", title: "Pap and chicken malana" },
  { file: "kedi-kota-pap-chicken-malana-with-coca-cola.jpg", alt: "Pap with chicken malana, morogo and beetroot next to a Coca-Cola", title: "Pap meal and a Coke" },
  { file: "kedi-kota-pap-slow-cooked-meat-coleslaw-morogo.jpg", alt: "Pap with slow cooked meat, coleslaw and morogo", title: "Slow cooked and tender" },
  { file: "kedi-kota-shop-front-norkem-park.jpg", alt: "The Kedi Kota shop front in Norkem Park, Kempton Park, with outdoor seating", title: "Find us in Norkem Park" },
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
