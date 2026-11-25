export interface Kota { id: string; name: string; price: number; ingredients: string[]; note?: string; tag?: string }
export interface Side { id: string; name: string; price: number; group: string }

export const KOTAS: Kota[] = [
  { id: "kota-1", name: "Budget Bliss", tag: "Kota 1", price: 35, ingredients: ["chips", "egg", "chicken patty", "cheese", "tomato", "cucumber", "red onion", "atchaar", "lettuce"] },
  { id: "kota-2", name: "Street Boss", tag: "Kota 2", price: 65, ingredients: ["chips", "polony", "Russian", "egg", "cheese", "chicken patty", "tomato", "cucumber", "red onion", "atchaar", "lettuce"] },
  { id: "kota-3", name: "Mega Munch", tag: "Kota 3", price: 80, ingredients: ["chips", "vienna", "chicken patty", "egg", "cheese", "tomato", "cucumber", "red onion", "atchaar", "lettuce"] },
  { id: "kota-4", name: "Royal Beast", tag: "Kota 4", price: 110, ingredients: ["chips", "polony", "egg", "cheese", "Russian", "chicken patty", "boneless chicken rib", "vienna", "tomato", "cucumber", "red onion", "atchaar", "lettuce"] },
]
/** "Kota 1: Budget Bliss", used in the cart, WhatsApp message and price lists. */
export const kotaLabel = (k: Kota) => (k.tag ? `${k.tag}: ${k.name}` : k.name)

export const SIDES: Side[] = [
  { id: "cup-chips", name: "Cup chips", price: 20, group: "Chips and snacks" },
  { id: "box-chips", name: "Box chips", price: 40, group: "Chips and snacks" },
  { id: "box-chips-russian", name: "Box chips with Russian", price: 55, group: "Chips and snacks" },
  { id: "russian-alone", name: "Russian alone", price: 20, group: "Chips and snacks" },
  { id: "magwinya", name: "Magwinya", price: 2, group: "Chips and snacks" },
]
export const PAP_MEALS: Side[] = [
  { id: "pap-hardbody", name: "Pap + hardbody chicken", price: 80, group: "Pap meals" },
  { id: "pap-mogodu", name: "Pap + mogodu", price: 80, group: "Pap meals" },
  { id: "pap-trotters", name: "Pap + trotters", price: 80, group: "Pap meals" },
  { id: "pap-hlogo", name: "Pap + hlogo", price: 80, group: "Pap meals" },
  { id: "pap-mix", name: "Pap + mogodu, hlogo and hardbody mix (choose 2 veg)", price: 110, group: "Pap meals" },
  { id: "pap-chicken-malana", name: "Pap + chicken malana", price: 60, group: "Pap meals" },
]
export const MEAT_SIDES: Side[] = [
  { id: "meat-hardbody", name: "Hardbody", price: 65, group: "Meat sides" },
  { id: "meat-mogodu", name: "Mogodu", price: 65, group: "Meat sides" },
  { id: "meat-trotters", name: "Trotters", price: 65, group: "Meat sides" },
  { id: "meat-hlogo", name: "Hlogo", price: 65, group: "Meat sides" },
  { id: "meat-mogodu-hlogo", name: "Mogodu and hlogo mix", price: 65, group: "Meat sides" },
  { id: "meat-chicken-malana", name: "Chicken malana", price: 40, group: "Meat sides" },
]
export const VEG_SIDES: Side[] = [
  { id: "side-morogo", name: "Morogo", price: 15, group: "Sides" },
  { id: "side-beetroot", name: "Beetroot", price: 15, group: "Sides" },
  { id: "side-coleslaw", name: "Coleslaw", price: 15, group: "Sides" },
  { id: "side-atchaar", name: "Atchaar", price: 15, group: "Sides" },
  { id: "side-extra-pap", name: "Extra pap", price: 20, group: "Sides" },
]
export const EXTRAS: Side[] = [
  { id: "extra-egg", name: "Egg", price: 5, group: "Extras" },
  { id: "extra-chicken-patty", name: "Chicken patty", price: 10, group: "Extras" },
  { id: "extra-vienna", name: "Vienna", price: 5, group: "Extras" },
  { id: "extra-cheese", name: "Cheese", price: 5, group: "Extras" },
  { id: "extra-chicken-rib", name: "Chicken rib", price: 10, group: "Extras" },
]
export const DRINK_SIZE = "400ml"
export const DRINKS: Side[] = [
  { id: "drink-coke", name: "Coca-Cola", price: 15, group: "Cold drinks" },
  { id: "drink-sprite", name: "Sprite", price: 15, group: "Cold drinks" },
  { id: "drink-fanta", name: "Fanta Orange", price: 15, group: "Cold drinks" },
]
/** Everything that is not a kota, in menu order. Used for lists on area pages, search data and llms.txt. */
export const OTHER_SECTIONS: { title: string; items: Side[] }[] = [
  { title: "Chips and snacks", items: SIDES },
  { title: "Pap meals", items: PAP_MEALS },
  { title: "Meat sides", items: MEAT_SIDES },
  { title: "Sides", items: VEG_SIDES },
  { title: "Extras", items: EXTRAS },
  { title: `Cold drinks (${DRINK_SIZE})`, items: DRINKS },
]
/** Cheapest kota, used in "kotas from R35" copy so it never goes out of date. */
export const KOTA_FROM = Math.min(...KOTAS.map((k) => k.price))
export const money = (n: number) => `R${n}`
export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
/** "Kota 1: Budget Bliss R35, Kota 2: Street Boss R65 ..." for descriptions. */
export const kotaPriceList = () => KOTAS.map((k) => `${kotaLabel(k)} ${money(k.price)}`).join(", ")
