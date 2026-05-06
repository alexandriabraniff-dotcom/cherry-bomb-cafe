import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Cherry Bomb Cafe",
  description:
    "Cherry Bomb Cafe offers a full cafe experience, an artisan pantry and gift shop, and an extraordinary private Moroccan event space in Ashton, Adelaide Hills.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-[380px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/garden.png"
          alt="The lush fern garden path leading to Cherry Bomb Cafe in Ashton"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1612]/60" />
        <div className="relative z-10 text-center pt-28">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547] mb-2">
            What we offer
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#F1E8D4]">
            Services
          </h1>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-32 px-6 text-center">
        <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-8" />
        <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#8B1A1A] mb-4">
          Coming soon
        </p>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#5a4a3a] italic">
          Information coming soon.
        </p>
      </section>
    </>
  );
}
