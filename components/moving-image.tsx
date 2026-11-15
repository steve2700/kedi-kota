import Image from "next/image"
const drifts = ["drift-a", "drift-b", "drift-c"]
export function MovingImage({ src, alt, className = "", sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", priority = false, variant = 0, position = "center" }: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean; variant?: number; position?: string }) {
  return (
    <div className={`relative isolate overflow-hidden bg-silver ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${drifts[variant % 3]}`} style={{ objectPosition: position }} />
    </div>
  )
}
