import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/icons"
import { SITE } from "@/lib/site"

const LINKS = [
  { name: "Instagram", href: SITE.instagram, Icon: InstagramIcon },
  { name: "Facebook", href: SITE.facebook, Icon: FacebookIcon },
  { name: "TikTok", href: SITE.tiktok, Icon: TikTokIcon },
]

/** Round icon buttons for our social profiles. `tone` picks colours for dark or light backgrounds. */
export function SocialLinks({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const look = tone === "dark" ? "border-white/70 text-white hover:bg-butter hover:text-ink hover:border-butter" : "border-ink bg-white text-ink hover:bg-signal hover:text-white hover:border-signal"
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="Our social media">
      {LINKS.map(({ name, href, Icon }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Kedi Kota on ${name}`} title={name} className={`inline-flex h-11 w-11 items-center justify-center rounded-full border-2 transition ${look}`}>
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  )
}
