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
  address: { street: "122 Storms Road", suburb: "Norkem Park", city: "Kempton Park", postal: "1618", landmark: "By Green Gate" },
  tiktok: "https://www.tiktok.com/@kedikota",
  instagram: "https://www.instagram.com/kedikota",
  facebook: "https://www.facebook.com/profile.php?id=61596777394162",
  hours: "Open 7 days, 9am to 7pm" as string | null,
  uberEats: "https://www.ubereats.com/za/store/kedi-kota/Ll98wZE4U5mLRezsb-tsqg?diningMode=DELIVERY",
}
export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.suburb}, ${SITE.address.city}, ${SITE.address.postal}`
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ADDRESS_LINE} South Africa`)}`
export const WA_LINK = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
