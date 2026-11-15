# Kedi Kota Website

Next.js (App Router), TypeScript, Tailwind CSS v4.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
```

## Change things in one place
| What | Where |
| --- | --- |
| Phone, WhatsApp, email, address, hours, TikTok | `lib/site.ts` |
| Menu and prices | `lib/menu.ts` |
| Delivery fee and delivery suburbs | `lib/delivery.ts` |
| The WhatsApp order message | `lib/order.ts` |
| Colours and animations | `app/globals.css` |

## TODO before launch
- Add trading hours in `lib/site.ts` (`hours`).
- Confirm the delivery radius and edit the suburb list in `lib/delivery.ts`.
- Confirm the email address in `lib/site.ts`.
- Add the Yoco payment link process (see below).

## Card payments later
Orders are already built as one structured object (`lib/order.ts`). To add real "Pay now" checkout with Yoco, send that object to a small server route that creates a Yoco checkout and confirms payment with a webhook. Keep the Yoco secret key in a private environment variable, never in the code.
