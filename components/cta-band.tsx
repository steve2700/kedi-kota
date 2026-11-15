import { LinkButton, WhatsAppButton } from "@/components/buttons"
import { RotatingWord } from "@/components/rotating-word"

export function CtaBand({ text = "Build your order online and send it on WhatsApp. We confirm it and get cooking." }: { text?: string }) {
  return (
    <section className="on-dark relative isolate overflow-hidden border-t-4 border-ink bg-signal py-20 text-white">
      <div aria-hidden="true" className="absolute -right-10 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-ink/20" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl leading-[1.08] md:text-6xl"><span className="block">Hungry?</span><span className="mt-1 block"><RotatingWord interval={2200} words={["Order now.", "Build your kota.", "Get it delivered."]} className="rounded-2xl bg-ink px-3 pb-1 text-white" /></span></h2>
          <p className="mt-4 text-lg font-medium">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <LinkButton href="/menu" look="dark">See the Menu</LinkButton>
          <WhatsAppButton message="Hi Kedi Kota, I would like to order." label="Order on WhatsApp" />
        </div>
      </div>
    </section>
  )
}
