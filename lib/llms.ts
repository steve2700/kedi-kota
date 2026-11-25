import { SITE, ADDRESS_LINE } from "@/lib/site"
import { KOTAS, OTHER_SECTIONS, kotaLabel, money } from "@/lib/menu"
import { DELIVERY } from "@/lib/delivery"

export function llmsShort() {
  return `# Kedi Kota

> Kedi Kota ("More Than A Kota") sells loaded kotas, chips, pap meals and more in Norkem Park, Kempton Park, South Africa. Open 7 days, 9am to 7pm. Order online, on Uber Eats, or collect.

Website: ${SITE.url}
WhatsApp: ${SITE.phoneDisplay}
Address: ${ADDRESS_LINE} (${SITE.address.landmark})
Hours: ${SITE.hours}
Uber Eats: ${SITE.uberEats}
Instagram: ${SITE.instagram}
Facebook: ${SITE.facebook}
TikTok: ${SITE.tiktok}

## Menu
${KOTAS.map((k) => `- ${kotaLabel(k)}, ${money(k.price)}: ${k.ingredients.join(", ")}${k.note ? `. ${k.note}` : ""}`).join("\n")}
${OTHER_SECTIONS.map((sec) => `\n## ${sec.title}\n${sec.items.map((s) => `- ${s.name}, ${money(s.price)}`).join("\n")}`).join("\n")}

## Delivery
We serve: ${DELIVERY.zones.join(", ")}. Delivery is confirmed on WhatsApp, or order on Uber Eats. Collection from ${ADDRESS_LINE} is free.

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
