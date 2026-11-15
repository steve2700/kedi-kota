// Contact details for Kedi Kota. Change them here and the whole site updates.
export const SITE = {
  name: "Kedi Kota",
  tagline: "More Than A Kota",
  url: "https://www.kedikota.co.za",
  phoneDisplay: "061 999 4973",
  phoneTel: "+27619994973",
  whatsapp: "27619994973",
  // TODO: confirm the real email address
  email: "info@kedikota.co.za",
  address: { street: "122 Caledon Drive", suburb: "Norkem Park", city: "Kempton Park", postal: "1618", landmark: "By Green Gate" },
  tiktok: "https://www.tiktok.com/@kedikota",
  // TODO: add trading hours, for example "Mon to Sat 10am to 9pm". Leave null until confirmed.
  hours: null as string | null,
}
export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.suburb}, ${SITE.address.city}, ${SITE.address.postal}`
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ADDRESS_LINE} South Africa`)}`
export const WA_LINK = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
