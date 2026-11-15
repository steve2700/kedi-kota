export interface Kota { id: string; name: string; price: number; ingredients: string[]; note?: string; tag?: string }
export interface Side { id: string; name: string; price: number; group: string }

export const KOTAS: Kota[] = [
  { id: "just-kota", name: "Just Kota", price: 20, ingredients: ["chips", "tomato", "onion", "cucumber", "polony", "cheese"], tag: "Starter" },
  { id: "kota-1", name: "Kota 1", price: 35, ingredients: ["chips", "tomato", "onion", "cucumber", "polony", "Russian"] },
  { id: "kota-2", name: "Kota 2", price: 45, ingredients: ["chips", "tomato", "lettuce", "onion", "polony", "vienna", "egg", "cheese"] },
  { id: "kota-3", name: "Kota 3", price: 65, ingredients: ["chips", "tomato", "lettuce", "pickle", "onion", "ham", "Russian", "egg", "cheese", "patty"], tag: "Fan favourite" },
  { id: "kota-4", name: "Kota 4", price: 90, ingredients: ["chips", "tomato", "onion", "lettuce", "pickle", "ham", "polony", "Russian", "egg", "cheese", "patty", "vienna", "ribs"], tag: "The big one" },
  { id: "combo", name: "Combo", price: 75, ingredients: ["chips", "tomato", "lettuce", "pickle", "onion", "ham", "Russian", "egg", "cheese", "patty"], note: "Comes with a 330ml drink", tag: "Kota and drink" },
]
export const SIDES: Side[] = [
  { id: "spiral-potato", name: "Spiral potato", price: 10, group: "Spiral potato" },
  { id: "spiral-potato-large", name: "Spiral potato, large", price: 20, group: "Spiral potato" },
  { id: "cup-chips", name: "Cup chips", price: 15, group: "Chips" },
  { id: "box-chips", name: "Box chips", price: 30, group: "Chips" },
  { id: "box-chips-russian", name: "Box chips with Russian", price: 45, group: "Chips" },
]
export const money = (n: number) => `R${n}`
export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
