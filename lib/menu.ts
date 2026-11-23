export interface Kota { id: string; name: string; price: number; ingredients: string[]; note?: string; tag?: string }
export interface Side { id: string; name: string; price: number; group: string }

export const KOTAS: Kota[] = [
  { id: "just-kota", name: "Just Kota", price: 25, ingredients: ["chips", "tomato", "red onion", "cucumber", "polony", "cheese"], tag: "Starter" },
  { id: "kota-1", name: "Kota 1", price: 35, ingredients: ["chips", "tomato", "red onion", "cucumber", "polony", "Russian"] },
  { id: "kota-2", name: "Kota 2", price: 50, ingredients: ["chips", "tomato", "lettuce", "red onion", "polony", "vienna", "egg", "cheese"] },
  { id: "kota-3", name: "Kota 3", price: 65, ingredients: ["chips", "tomato", "lettuce", "pickle", "red onion", "ham", "Russian", "egg", "cheese", "chicken patty"], tag: "Fan favourite" },
  { id: "kota-4", name: "Kota 4", price: 90, ingredients: ["chips", "tomato", "red onion", "lettuce", "pickle", "ham", "polony", "Russian", "egg", "cheese", "chicken patty", "vienna", "chicken ribs"], tag: "The big one" },
  { id: "combo", name: "Combo", price: 75, ingredients: ["chips", "tomato", "lettuce", "pickle", "red onion", "ham", "Russian", "egg", "cheese", "chicken patty"], note: "Comes with a cold drink", tag: "Kota and drink" },
]
export const SIDES: Side[] = [
  { id: "spiral-potato", name: "Spiral potato, small", price: 10, group: "Spiral potato" },
  { id: "spiral-potato-large", name: "Spiral potato, large", price: 20, group: "Spiral potato" },
  { id: "cup-chips", name: "Cup chips", price: 15, group: "Chips and Russian" },
  { id: "box-chips", name: "Box chips", price: 40, group: "Chips and Russian" },
  { id: "box-chips-russian", name: "Box chips with Russian", price: 50, group: "Chips and Russian" },
  { id: "russian-alone", name: "Russian alone", price: 20, group: "Chips and Russian" },
]
export const PAP_MEALS: Side[] = [
  { id: "pap-hardbody", name: "Pap + hardbody chicken", price: 80, group: "Pap meals" },
  { id: "pap-mogodu", name: "Pap + mogodu", price: 80, group: "Pap meals" },
  { id: "pap-hlogo", name: "Pap + hlogo", price: 80, group: "Pap meals" },
  { id: "pap-mogodu-hlogo", name: "Pap + mogodu and hlogo mix", price: 90, group: "Pap meals" },
  { id: "pap-chicken-malana", name: "Pap + chicken malana", price: 60, group: "Pap meals" },
]
export const DRINK_SIZE = "400ml"
export const DRINKS: Side[] = [
  { id: "drink-coke", name: "Coca-Cola", price: 15, group: "Cold drinks" },
  { id: "drink-sprite", name: "Sprite", price: 15, group: "Cold drinks" },
  { id: "drink-fanta", name: "Fanta", price: 15, group: "Cold drinks" },
]
/** Cheapest kota, used in "kotas from R25" copy so it never goes out of date. */
export const KOTA_FROM = Math.min(...KOTAS.map((k) => k.price))
export const money = (n: number) => `R${n}`
export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
/** "Just Kota R25, Kota 1 R35 ..." for descriptions. */
export const kotaPriceList = () => KOTAS.map((k) => `${k.name} ${money(k.price)}`).join(", ")
