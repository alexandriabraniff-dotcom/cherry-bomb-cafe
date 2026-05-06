import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cherry Bomb Cafe — A little cafe in the Adelaide Hills",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[92vh] min-h-[580px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/counter-florals.png"
          alt="Cherry Bomb Cafe interior showing the counter adorned with bunches of dried flowers hanging from the ceiling"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1A1612]/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">
          <Image
            src="/images/logo.jpg"
            alt="Cherry Bomb Cafe logo"
            width={160}
            height={160}
            className="h-32 w-auto object-contain drop-shadow-2xl"
            priority
          />
          <p
            className="font-[family-name:var(--font-pinyon)] text-5xl md:text-6xl text-[#E8A547]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            A little cafe in the Adelaide Hills
          </p>
          <p className="font-[family-name:var(--font-lora)] text-[#EDE3CC] text-lg md:text-xl max-w-lg leading-relaxed">
            Pull up a velvet chair. The kettle&rsquo;s already on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/menu"
              className="px-8 py-3 bg-[#8B1A1A] text-[#F1E8D4] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#A52A2A] transition-colors rounded-sm"
            >
              View Our Menu
            </Link>
            <Link
              href="/find-us"
              className="px-8 py-3 border border-[#EDE3CC] text-[#EDE3CC] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#EDE3CC]/10 transition-colors rounded-sm"
            >
              Find Us
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#EDE3CC]/70 text-xs tracking-widest uppercase font-[family-name:var(--font-lora)]">Scroll</span>
          <div className="w-px h-8 bg-[#EDE3CC]/40" />
        </div>
      </section>

      {/* ── INTRO STRIP ──────────────────────────────────────── */}
      <section className="bg-[#8B1A1A] py-10 px-6 text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-[#F1E8D4] italic max-w-2xl mx-auto leading-snug">
          &ldquo;Hand-baked daily, by people who love to feed you.&rdquo;
        </p>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/images/baker.png"
              alt="A Cherry Bomb Cafe team member in a red apron slicing freshly baked bread with dried flowers hanging overhead"
              width={680}
              height={500}
              className="w-full h-[480px] object-cover object-center rounded-sm shadow-[0_8px_40px_rgba(26,22,18,0.15)]"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#8B1A1A]/30 rounded-sm hidden lg:block" />
          </div>
          <div className="lg:pl-6">
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#1A1612] mb-6">
              Our Story
            </h2>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              At Cherry Bomb Caf&eacute;, we are passionate about bringing people together over
              delicious food and drinks. Our journey began as a small coffee shop, and we have
              since grown into a full-service caf&eacute; with a whole lot of heart.
            </p>
            <p className="text-[#3a2e24] leading-relaxed mb-8">
              Ambiance plays a big part in how we spoil our customers &mdash; from cosy nooks and
              velvet couches to a library, a fireplace in every room for winter, and low-level
              lighting that makes everything feel like a dream.
            </p>
            <Link
              href="/about"
              className="inline-block font-[family-name:var(--font-lora)] text-sm text-[#8B1A1A] border-b border-[#8B1A1A] pb-0.5 hover:text-[#A52A2A] hover:border-[#A52A2A] transition-colors"
            >
              Read more about us
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE TRIO ─────────────────────────────────────── */}
      <section className="bg-[#EDE3CC] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1A1612]">
              A place for every mood
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/library-fireplace.png",
                alt: "Cosy library nook with a fireplace and warm bookshelves at Cherry Bomb Cafe",
                label: "The Library Nook",
                desc: "Curl up beside the crackling fire with a good book and a warming cup. Our velvet chairs were made for afternoons like this.",
                link: "/about",
              },
              {
                image: "/images/interior-stools.png",
                alt: "Warm cafe interior with timber bar stools and a window overlooking the garden",
                label: "The Counter",
                desc: "Where the magic starts. Watch your Kindred Coffee being carefully crafted, then take it out to the garden or linger at the bar.",
                link: "/menu",
              },
              {
                image: "/images/room-plants.png",
                alt: "Warm terracotta room with clustered plants, candles, and a timber fireplace",
                label: "The Botanica Room",
                desc: "Moody terracotta walls, layered plants, and candlelight. A corner of the Hills that blooms year-round.",
                link: "/services",
              },
            ].map((card) => (
              <Link
                key={card.label}
                href={card.link}
                className="group block overflow-hidden rounded-sm shadow-[0_4px_24px_rgba(26,22,18,0.1)] hover:shadow-[0_8px_40px_rgba(26,22,18,0.18)] transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-[#F1E8D4] p-6">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#1A1612] mb-2">
                    {card.label}
                  </h3>
                  <p className="text-sm text-[#5a4a3a] leading-relaxed">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU TEASER ──────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1A1612] mb-4">
            From Our Kitchen
          </h2>
          <p className="text-[#5a4a3a] max-w-xl mx-auto leading-relaxed">
            Our rustic homestyle menu celebrates the best of local produce from the iconic
            Piccadilly Valley region. Simple, wholesome, and always seasonal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { name: "Kindred Coffee", note: "House blend, roasted with love" },
            { name: "Cherry Pie", note: "Our signature — not to be missed" },
            { name: "House-made Toasties", note: "Golden, crispy, perfectly filled" },
            { name: "Seasonal Specials", note: "Often featuring local donations" },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-[#EDE3CC] p-6 rounded-sm border border-[#d4c4a0] flex flex-col gap-2"
            >
              <span className="block w-6 h-0.5 bg-[#8B1A1A]" />
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612]">
                {item.name}
              </h3>
              <p className="text-xs text-[#6a5a4a] leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block px-10 py-3.5 bg-[#8B1A1A] text-[#F1E8D4] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#A52A2A] transition-colors rounded-sm"
          >
            See Full Menu
          </Link>
        </div>
      </section>

      {/* ── MOROCCAN ROOM CTA ─────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="/images/library-fireplace.png"
          alt="Moody interior of Cherry Bomb Cafe for private events"
          fill
          className="object-cover object-center"
          quality={80}
        />
        <div className="absolute inset-0 bg-[#1A1612]/75" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547] mb-4">
            The Moroccan Room
          </p>
          <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#F1E8D4] mb-6">
            Host your next gathering in something unforgettable
          </h2>
          <p className="text-[#C8B89A] leading-relaxed mb-8">
            Ornate lantern lamps, layered Persian rugs, low candlelit brass tables, and vintage
            upholstered furniture. Our private event space is unlike anything else in the Hills.
          </p>
          <Link
            href="/services"
            className="inline-block px-10 py-3.5 border border-[#E8A547] text-[#E8A547] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#E8A547]/10 transition-colors rounded-sm"
          >
            Enquire About Events
          </Link>
        </div>
      </section>

      {/* ── ESPRESSO / QUICK VISIT ────────────────────────────── */}
      <section className="bg-[#2D4A35] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block w-14 h-0.5 bg-[#E8A547] mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#F1E8D4] mb-6">
              Come as you are
            </h2>
            <p className="text-[#A8B89A] leading-relaxed mb-4">
              253 Lobethal Rd, Ashton SA 5137
            </p>
            <p className="text-[#A8B89A] leading-relaxed mb-8">
              Nestled in the Adelaide Hills, just a short drive through the valleys. Come for
              coffee, stay for the afternoon.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/find-us"
                className="px-8 py-3 bg-[#8B1A1A] text-[#F1E8D4] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#A52A2A] transition-colors rounded-sm"
              >
                Get Directions
              </Link>
              <Link
                href="/hours"
                className="px-8 py-3 border border-[#A8B89A] text-[#A8B89A] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#A8B89A]/10 transition-colors rounded-sm"
              >
                Trading Hours
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/espresso-machine.png"
              alt="La Marzocco espresso machine at Cherry Bomb Cafe"
              width={600}
              height={420}
              className="w-full h-72 object-cover object-center rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* ── GARDEN BANNER ─────────────────────────────────────── */}
      <section className="relative h-80 overflow-hidden">
        <Image
          src="/images/garden.png"
          alt="The lush fern garden path at Cherry Bomb Cafe, Ashton SA"
          fill
          className="object-cover object-center"
          quality={80}
        />
        <div className="absolute inset-0 bg-[#1A1612]/30 flex items-center justify-center">
          <p className="font-[family-name:var(--font-cormorant)] italic text-4xl md:text-5xl text-[#F1E8D4] text-center px-6 drop-shadow-lg">
            &ldquo;A little corner of the Hills, blooming year-round.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
