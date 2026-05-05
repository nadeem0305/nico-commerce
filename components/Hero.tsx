import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-neutral-950">
      <Image
        src="/hero.avif"
        alt="New Season Collection"
        fill
        priority // CRITICAL: Loads this immediately for SEO/Performance
        className="object-cover opacity-80"
        sizes="100vw"
        quality={90}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6 pb-16 bg-linear-to-t from-black via-black/20 to-transparent">
        <div className="flex flex-col items-center text-center">
          {/* Centering the text often feels more premium for startups */}
          <h1 className="text-5xl font-bold tracking-tighter text-white mb-2 uppercase">
            New Era <br /> Essentials
          </h1>
          <p className="text-neutral-300 mb-8 max-w-70">
            Streetwear designed for the movement.
          </p>

          <Link
            href="#shop"
            className="w-full max-w-xs bg-white text-black py-4 font-bold rounded-full active:scale-95"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
