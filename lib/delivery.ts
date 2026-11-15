// Delivery rules. Change them here.
export const DELIVERY = {
  flatFee: 40,
  // TODO: confirm the real delivery radius, then edit this list of suburbs that get the flat fee.
  zones: ["Norkem Park", "Kempton Park CBD", "Birchleigh", "Birch Acres", "Glen Marais", "Bonaero Park", "Rhodesfield", "Aston Manor", "Esther Park", "Terenure", "Isando", "Spartan", "Pomona", "Edleen", "Van Riebeeck Park", "Kempton Park West"],
  otherLabel: "Somewhere else",
}
export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
/** Delivery fee in rand, or null when the shop has to confirm it. */
export function deliveryFee(area: string): number | null {
  if (!area) return null
  return DELIVERY.zones.includes(area) ? DELIVERY.flatFee : null
}
