import { PageHero } from "@/components/page-hero"
import { LinkButton } from "@/components/buttons"
export default function NotFound() {
  return (
    <PageHero crumbs={[{ name: "Page not found", href: "/404" }]} title="That page is not on the menu" text="The page you are looking for does not exist. Head to the menu instead.">
      <LinkButton href="/menu">See the Menu</LinkButton>
      <LinkButton href="/" look="white">Back to home</LinkButton>
    </PageHero>
  )
}
