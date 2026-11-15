import { SITE, ADDRESS_LINE } from "@/lib/site"
import { KOTAS, SIDES, money } from "@/lib/menu"
import { DELIVERY } from "@/lib/delivery"

export function llmsShort() {
  return `# Kedi Kota

> Kedi Kota ("More Than A Kota") sells loaded kotas, chips and spiral potatoes in Norkem Park, Kempton Park, South Africa. Order online, collect or get it delivered. Delivery is ${money(DELIVERY.flatFee)} in our usual area.

Website: ${SITE.url}
WhatsApp: ${SITE.phoneDisplay}
Address: ${ADDRESS_LINE} (${SITE.address.landmark})
TikTok: ${SITE.tiktok}

## Menu
${KOTAS.map((k) => `- ${k.name}, ${money(k.price)}: ${k.ingredients.join(", ")}${k.note ? `. ${k.note}` : ""}`).join("\n")}
${SIDES.map((s) => `- ${s.name}, ${money(s.price)}`).join("\n")}

## Delivery
Delivery costs ${money(DELIVERY.flatFee)} in: ${DELIVERY.zones.join(", ")}. Outside these areas the fee is confirmed on WhatsApp. Collection from ${ADDRESS_LINE} has no delivery fee.

## How to order
Build an order at ${SITE.url}/menu, check out at ${SITE.url}/order and send it on WhatsApp. Pay cash, EFT or card.

## Pages
- [Menu](${SITE.url}/menu)
- [Order](${SITE.url}/order)
- [Gallery](${SITE.url}/gallery)
- [Find us](${SITE.url}/find-us)
- [FAQ](${SITE.url}/faq)
`
}
export const llmsFull = llmsShort
