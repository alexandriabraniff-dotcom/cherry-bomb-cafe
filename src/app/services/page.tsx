import Image from "next/image";
import Link from "next/link";
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

      {/* Cafe Dining */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#1A1612] mb-6">
              Caf&eacute; Dining
            </h2>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              Our caf&eacute; is open for breakfast and lunch, serving a rustic homestyle menu
              that changes with the seasons. Every dish is crafted with care using local produce
              from the Piccadilly Valley and beyond.
            </p>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              Whether you want to linger by the fire with a book, watch the garden from a window
              stool, or tuck into a nook with friends &mdash; there is always a corner waiting for you.
            </p>
            <ul className="flex flex-col gap-3 mt-6">
              {["Breakfast & Lunch daily", "Kindred Coffee house blend", "House-made cakes & bakes", "Seasonal specials featuring local produce", "Signature Cherry Pie"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#3a2e24]">
                  <span className="text-[#8B1A1A] mt-0.5 text-lg leading-none">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/interior-stools.png"
            alt="Warm timber window bar at Cherry Bomb Cafe"
            width={680}
            height={500}
            className="w-full h-[440px] object-cover rounded-sm shadow-[0_8px_40px_rgba(26,22,18,0.12)]"
          />
        </div>
      </section>

      {/* Pantry & Shop */}
      <section className="bg-[#2D4A35] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/counter-florals.png"
            alt="The Cherry Bomb Cafe retail counter showcasing artisan goods and products"
            width={680}
            height={500}
            className="w-full h-[440px] object-cover rounded-sm"
          />
          <div>
            <span className="block w-14 h-0.5 bg-[#E8A547] mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#F1E8D4] mb-6">
              The Pantry &amp; Shop
            </h2>
            <p className="text-[#A8B89A] leading-relaxed mb-5">
              Beyond the food, Cherry Bomb is a destination for beautifully curated artisan goods.
              Our retail shelves are lined with things worth giving, keeping, or both.
            </p>
            <ul className="flex flex-col gap-3 mt-6">
              {[
                "Kindred Coffee bean bags",
                "House-made jams & preserves",
                "Artisan oils & pantry goods",
                "Ceramics & handmade pottery",
                "Candles & home fragrance",
                "Books, throws & gift cards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#A8B89A]">
                  <span className="text-[#E8A547] mt-0.5 text-lg leading-none">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Moroccan Room — dark, moody treatment */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="/images/room-plants.png"
          alt="Warm moody interior at Cherry Bomb Cafe perfect for private events"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-[#1A1612]/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-pinyon)] text-6xl text-[#E8A547] mb-4">
            The Moroccan Room
          </p>
          <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-8" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#F1E8D4] mb-6">
            A private event space unlike anything else
          </h2>
          <p className="text-[#C8B89A] leading-relaxed mb-6">
            Tucked within the cafe is our extraordinary private event space, decorated with
            ornate lantern-style lamps, layered Persian rugs, low candlelit brass tables,
            and vintage upholstered furniture.
          </p>
          <p className="text-[#C8B89A] leading-relaxed mb-10">
            Whether you are hosting an intimate birthday dinner, a baby shower, a book club,
            or a corporate gathering, the Moroccan Room transforms every occasion into something
            truly unforgettable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-12">
            {[
              { title: "Private Dining", desc: "Exclusive use of the space for your group" },
              { title: "Special Occasions", desc: "Birthdays, showers, celebrations & more" },
              { title: "Corporate Events", desc: "Unique, memorable gatherings away from the office" },
            ].map((item) => (
              <div key={item.title} className="border border-[#8B1A1A]/50 p-5 rounded-sm">
                <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#E8A547] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A8B89A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/find-us"
            className="inline-block px-10 py-3.5 border border-[#E8A547] text-[#E8A547] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#E8A547]/10 transition-colors rounded-sm"
          >
            Get in Touch to Enquire
          </Link>
        </div>
      </section>

      {/* Sustainability note */}
      <section className="py-16 px-6 bg-[#EDE3CC] text-center">
        <div className="max-w-2xl mx-auto">
          <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#1A1612] mb-4">
            Our Commitment to Sustainability
          </h3>
          <p className="text-[#5a4a3a] leading-relaxed">
            We are committed to being sustainable in every aspect we possibly can &mdash; from
            our locally sourced ingredients to our packaging choices. Because a place worth
            loving is worth looking after.
          </p>
        </div>
      </section>
    </>
  );
}
