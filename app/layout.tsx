import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@fontsource/bowlby-one/400.css"
import "@fontsource/manrope/500.css"
import "@fontsource/manrope/700.css"
import "@fontsource/manrope/800.css"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileBar } from "@/components/mobile-bar"
import { JsonLd } from "@/components/json-ld"
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/analytics"
import { SITE } from "@/lib/site"
import { KOTAS, SIDES } from "@/lib/menu"
import { DELIVERY } from "@/lib/delivery"

export const viewport: Viewport = { themeColor: "#e30613" }

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Kedi Kota | Kota in Norkem Park, Kempton Park | Order Online", template: "%s | Kedi Kota" },
  description: "Kedi Kota serves loaded kotas, chips and spiral potatoes in Norkem Park, Kempton Park. Kotas from R20. Order online, collect or get it delivered for R40. Order on WhatsApp.",
  keywords: ["kota Kempton Park", "kota Norkem Park", "kota delivery Kempton Park", "kota near me", "street food Kempton Park", "Kedi Kota", "chips and polony kota"],
  applicationName: "Kedi Kota",
  authors: [{ name: "Kedi Kota", url: SITE.url }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }], other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#e30613" }] },
  manifest: "/site.webmanifest",
  openGraph: { type: "website", locale: "en_ZA", url: SITE.url, siteName: "Kedi Kota", title: "Kedi Kota | More Than A Kota", description: "Loaded kotas in Norkem Park, Kempton Park. Order online. Delivery R40.", images: [{ url: "/og-image.png", width: 1424, height: 752, alt: "Kedi Kota loaded kota, More Than A Kota" }] },
  twitter: { card: "summary_large_image", title: "Kedi Kota | More Than A Kota", description: "Loaded kotas in Norkem Park, Kempton Park. Order online.", images: ["/og-image.png"] },
  category: "Restaurants",
  other: { "geo.region": "ZA-GP", "geo.placename": "Norkem Park, Kempton Park" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": ["FastFoodRestaurant", "LocalBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  slogan: SITE.tagline,
  url: SITE.url,
  image: `${SITE.url}/og-image.png`,
  logo: `${SITE.url}/kedi-kota-logo-circle.png`,
  telephone: SITE.phoneTel,
  email: SITE.email,
  servesCuisine: ["South African", "Street food", "Kota"],
  priceRange: "R",
  address: { "@type": "PostalAddress", streetAddress: `${SITE.address.street}, ${SITE.address.suburb}`, addressLocality: SITE.address.city, addressRegion: "Gauteng", postalCode: SITE.address.postal, addressCountry: "ZA" },
  sameAs: [SITE.tiktok],
  areaServed: DELIVERY.zones.map((z) => ({ "@type": "Place", name: z })),
  acceptsReservations: false,
  hasMenu: {
    "@type": "Menu", name: "Kedi Kota menu",
    hasMenuSection: [
      { "@type": "MenuSection", name: "Kotas", hasMenuItem: KOTAS.map((k) => ({ "@type": "MenuItem", name: k.name, description: `${k.ingredients.join(", ")}${k.note ? `. ${k.note}` : ""}`, offers: { "@type": "Offer", price: k.price, priceCurrency: "ZAR" } })) },
      { "@type": "MenuSection", name: "Sides", hasMenuItem: SIDES.map((s) => ({ "@type": "MenuItem", name: s.name, offers: { "@type": "Offer", price: s.price, priceCurrency: "ZAR" } })) },
    ],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        {GOOGLE_ADS_CONVERSION_ID && (<><script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`} /><script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ADS_CONVERSION_ID}');` }} /></>)}
        <JsonLd data={schema} />
      </head>
      <body>
        <CartProvider>
          <a href="#main" className="skip">Skip to main content</a>
          <Header />
          <main id="main" tabIndex={-1} className="pb-[76px] outline-none md:pb-0">{children}</main>
          <Footer />
          <MobileBar />
        </CartProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
