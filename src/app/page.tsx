import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cherry Bomb Cafe — A little cafe in the Adelaide Hills",
};

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — full viewport, nav overlays on top
      ══════════════════════════════════════════════════════ */}
      <section
        data-hero
        className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/counter-florals.png"
          alt="Cherry Bomb Cafe interior — the counter adorned with hanging bunches of dried flowers, Edison bulbs glowing overhead"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient overlay — darker at top for nav legibility, lighter toward center */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1612]/70 via-[#1A1612]/40 to-[#1A1612]/55" />

        {/* Hero content — centered */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-5 mt-20">
          <p
            className="font-[family-name:var(--font-pinyon)] text-6xl md:text-7xl text-[#E8A547]"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
          >
            A little cafe in the Adelaide Hills
          </p>
          <p className="font-[family-name:var(--font-lora)] text-[#EDE3CC]/90 text-xl md:text-2xl italic max-w-lg leading-relaxed">
            Pull up a velvet chair. The kettle&rsquo;s already on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="#menu"
              className="px-9 py-3 bg-[#8B1A1A] text-[#F1E8D4] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#A52A2A] transition-colors rounded-sm"
            >
              View Our Menu
            </a>
            <a
              href="#find-us"
              className="px-9 py-3 border border-[#EDE3CC] text-[#EDE3CC] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#EDE3CC]/10 transition-colors rounded-sm"
            >
              Find Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════ */}
      <section id="about" className="py-28 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/images/baker.png"
              alt="A Cherry Bomb Cafe team member in a cherry-red apron slicing warm bread with dried florals hanging overhead"
              width={680}
              height={500}
              className="w-full h-[500px] object-cover object-center rounded-sm shadow-[0_8px_40px_rgba(26,22,18,0.15)]"
            />
            <div className="absolute -bottom-5 -right-5 w-40 h-40 border-2 border-[#8B1A1A]/25 rounded-sm hidden lg:block" />
          </div>

          <div className="lg:pl-4">
            <p className="font-[family-name:var(--font-pinyon)] text-4xl text-[#8B1A1A] mb-2">
              Our Story
            </p>
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#1A1612] mb-6">
              About Cherry Bomb
            </h2>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              At Cherry Bomb Caf&eacute;, we are passionate about bringing people together over
              delicious food and drinks. Our journey began as a small coffee shop, and we have
              since grown into a full-service caf&eacute; with a whole lot of heart.
            </p>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              Ambiance plays a big part in how we spoil our customers &mdash; from cosy nooks
              and velvet couches to a library, a fireplace in every room for winter, and
              low-level lighting that makes everything feel like a dream.
            </p>
            <p className="text-[#3a2e24] leading-relaxed mb-8">
              We are also deeply committed to sustainability in every aspect we possibly can.
              Because a place worth loving is worth looking after.
            </p>

            {/* Team pillars */}
            <div className="grid grid-cols-3 gap-4">
              {["Kitchen", "Coffee Bar", "Front of House"].map((role) => (
                <div key={role} className="text-center p-4 bg-[#EDE3CC] rounded-sm border border-[#d4c4a0]">
                  <span className="text-[#8B1A1A] text-lg font-[family-name:var(--font-cormorant)]">✦</span>
                  <p className="font-[family-name:var(--font-cormorant)] text-sm font-bold text-[#1A1612] mt-1 leading-tight">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote strip */}
      <div className="bg-[#8B1A1A] py-10 px-6 text-center">
        <p className="font-[family-name:var(--font-cormorant)] italic text-2xl md:text-3xl text-[#F1E8D4] max-w-2xl mx-auto">
          &ldquo;Hand-baked daily, by people who love to feed you.&rdquo;
        </p>
      </div>

      {/* Interior photo trio */}
      <section className="py-20 px-6 bg-[#EDE3CC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              src: "/images/library-fireplace.png",
              alt: "Cosy library nook with fireplace and bookshelves at Cherry Bomb Cafe",
              label: "The Library Nook",
            },
            {
              src: "/images/interior-stools.png",
              alt: "Timber bar stools at the window bench overlooking the garden",
              label: "The Counter Bar",
            },
            {
              src: "/images/room-plants.png",
              alt: "Warm terracotta room with plants, candles, and a fireplace",
              label: "The Botanica Room",
            },
          ].map((item) => (
            <div key={item.label} className="group relative overflow-hidden rounded-sm">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={420}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#1A1612]/0 group-hover:bg-[#1A1612]/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1612]/70 to-transparent px-5 py-4">
                <p className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#F1E8D4]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MENU
      ══════════════════════════════════════════════════════ */}
      <section id="menu" className="py-28 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-pinyon)] text-4xl text-[#8B1A1A] mb-2">
            Simple, wholesome &amp; seasonal
          </p>
          <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#1A1612] mb-5">
            Our Menu
          </h2>
          <p className="text-[#5a4a3a] max-w-2xl mx-auto leading-relaxed">
            Our rustic homestyle menu celebrates the best of local produce from the iconic
            Piccadilly Valley region. Simple, wholesome, and always seasonal &mdash; our specials
            often include donations from local townsfolk. Don&rsquo;t miss our signature Cherry Pie.
          </p>
        </div>

        {/* 4-column category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {[
            {
              category: "Breakfast",
              icon: "✦",
              items: [
                "Cherry Bomb Eggs — scrambled eggs, mushrooms, cherry tomatoes on sourdough",
                "Golden Croissant — house-smoked salmon, cream cheese & dill",
                "The Toastie — ham & aged cheddar, grilled golden with chutney",
                "Avo & Feta — whipped feta, smashed avo, edible flowers & dukkah",
                "Seasonal Porridge — stone-milled oats, fruit compote & toasted seeds",
              ],
            },
            {
              category: "Lunch",
              icon: "✦",
              items: [
                "Hills Garden Salad — seasonal leaves, roasted beets, pears & walnuts",
                "Soup of the Day — always seasonal, often from local townsfolk",
                "Mushroom & Gruyère Tart — wild mushrooms, Gruyère & fresh thyme",
                "The Ploughman's Board — local meats, artisan cheese & wood-fired bread",
                "Reuben Sandwich — house-made with locally sourced ingredients",
              ],
            },
            {
              category: "Sweets",
              icon: "✦",
              highlight: "Cherry Pie",
              items: [
                "Cherry Pie ★ — rich, jammy cherries in butter-short pastry with double cream",
                "House-made Cakes — rotating daily selection, ask what's just come out",
                "Honey & Lavender Scones — with whipped lavender cream & strawberry jam",
                "Seasonal Crumble — whatever's ripe and wonderful, oat & brown butter",
                "French Toast — a popular house favourite",
              ],
            },
            {
              category: "Drinks",
              icon: "✦",
              highlight: "Kindred Coffee",
              items: [
                "Kindred Coffee ★ — house blend, roasted with love. Espresso or filter",
                "Single Origin Pour Over — ask about our rotating single origin",
                "Chai Latte — house-spiced masala with steamed milk of your choice",
                "Adelaide Hills Cold-Pressed Juices — seasonal, made with local fruit",
                "Loose-Leaf Tea Selection — served in a proper pot",
              ],
            },
          ].map((section) => (
            <div
              key={section.category}
              className="bg-[#EDE3CC] rounded-sm border border-[#d4c4a0] overflow-hidden"
            >
              <div className="bg-[#8B1A1A] px-6 py-4 flex items-center gap-2">
                <span className="text-[#E8A547] font-[family-name:var(--font-cormorant)] text-xl">
                  {section.icon}
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#F1E8D4]">
                  {section.category}
                </h3>
              </div>
              <ul className="p-5 flex flex-col gap-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[#3a2e24] leading-snug">
                    <span className="text-[#8B1A1A] mt-0.5 text-xs leading-none flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6a5a4a] italic">
          Menu changes with the seasons. Please ask our team about daily specials and dietary requirements.
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════
          MOROCCAN ROOM CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="/images/library-fireplace.png"
          alt="Moody interior at Cherry Bomb Cafe — ideal for private events"
          fill
          className="object-cover object-center"
          quality={80}
        />
        <div className="absolute inset-0 bg-[#1A1612]/80" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-pinyon)] text-6xl text-[#E8A547] mb-4">
            The Moroccan Room
          </p>
          <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-8" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#F1E8D4] mb-6">
            Host your next gathering in something unforgettable
          </h2>
          <p className="text-[#C8B89A] leading-relaxed mb-10">
            Ornate lantern lamps, layered Persian rugs, low candlelit brass tables &mdash;
            our private event space is unlike anything else in the Hills.
          </p>
          <Link
            href="/services"
            className="inline-block px-10 py-3.5 border border-[#E8A547] text-[#E8A547] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#E8A547]/10 transition-colors rounded-sm"
          >
            Enquire About Events
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOURS
      ══════════════════════════════════════════════════════ */}
      <section id="hours" className="py-28 px-6 bg-[#EDE3CC] scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-[family-name:var(--font-pinyon)] text-4xl text-[#8B1A1A] mb-2">
              We&rsquo;ll have the kettle on
            </p>
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1A1612]">
              Trading Hours
            </h2>
          </div>

          <div className="bg-[#F1E8D4] rounded-sm border border-[#d4c4a0] overflow-hidden shadow-sm mb-6">
            {[
              { day: "Monday", time: "Closed" },
              { day: "Tuesday", time: "Closed" },
              { day: "Wednesday", time: "8:00 am — 3:00 pm" },
              { day: "Thursday", time: "8:00 am — 3:00 pm" },
              { day: "Friday", time: "8:00 am — 3:00 pm" },
              { day: "Saturday", time: "8:00 am — 3:00 pm" },
              { day: "Sunday", time: "8:00 am — 3:00 pm" },
            ].map((row, i, arr) => (
              <div
                key={row.day}
                className={`flex justify-between items-center px-8 py-5 ${
                  i !== arr.length - 1 ? "border-b border-[#d4c4a0]" : ""
                } ${row.time === "Closed" ? "opacity-45" : ""}`}
              >
                <span className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612]">
                  {row.day}
                </span>
                <span
                  className={`font-[family-name:var(--font-lora)] text-sm ${
                    row.time === "Closed"
                      ? "text-[#8a6a5a] italic"
                      : "text-[#8B1A1A] font-semibold"
                  }`}
                >
                  {row.time}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[#8B1A1A] text-[#F1E8D4] rounded-sm p-6 text-center">
            <p className="font-[family-name:var(--font-lora)] text-sm leading-relaxed">
              Closed on public holidays &middot; Walk-ins only, no bookings taken &middot;
              Kitchen closes 30 min before close
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FIND US
      ══════════════════════════════════════════════════════ */}
      <section id="find-us" className="py-28 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-pinyon)] text-4xl text-[#8B1A1A] mb-2">
            Come find us
          </p>
          <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1A1612]">
            Find Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Map */}
          <div className="rounded-sm overflow-hidden shadow-[0_8px_40px_rgba(26,22,18,0.12)] h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3!2d138.7177!3d-34.9746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s253+Lobethal+Rd%2C+Ashton+SA+5137!5e0!3m2!1sen!2sau!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cherry Bomb Cafe location — 253 Lobethal Rd, Ashton SA 5137"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-4" />
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#8B1A1A] mb-3">
                Address
              </h3>
              <address className="not-italic text-[#3a2e24] leading-relaxed">
                253 Lobethal Rd<br />
                Ashton SA 5137<br />
                Adelaide Hills, South Australia
              </address>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#8B1A1A] mb-2">
                  Phone
                </h3>
                <a
                  href="tel:0413516920"
                  className="text-[#3a2e24] text-sm hover:text-[#8B1A1A] transition-colors"
                >
                  0413 516 920
                </a>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#8B1A1A] mb-2">
                  Email
                </h3>
                <a
                  href="mailto:cherrybombcafe@outlook.com"
                  className="text-[#3a2e24] text-sm hover:text-[#8B1A1A] transition-colors break-all"
                >
                  cherrybombcafe@outlook.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#8B1A1A] mb-3">
                Follow Along
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/cherry_bomb_cafe_ashton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#3a2e24] hover:text-[#8B1A1A] transition-colors"
                >
                  Instagram: @cherry_bomb_cafe_ashton
                </a>
                <a
                  href="https://www.facebook.com/cherrybombcafeashton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#3a2e24] hover:text-[#8B1A1A] transition-colors"
                >
                  Facebook: Cherry Bomb Cafe | Ashton SA
                </a>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=253+Lobethal+Rd+Ashton+SA+5137"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#8B1A1A] text-[#F1E8D4] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#A52A2A] transition-colors rounded-sm w-fit"
            >
              Open in Google Maps
            </a>

            {/* Getting here mini */}
            <div className="border-t border-[#d4c4a0] pt-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612] mb-4">
                Getting Here
              </h3>
              <div className="flex flex-col gap-3 text-sm text-[#5a4a3a]">
                <p>
                  <strong className="text-[#1A1612] font-semibold">By Car:</strong>{" "}
                  ~20 min from Adelaide CBD via the South Eastern Freeway (M1). Take the Piccadilly exit,
                  follow Lobethal Rd to number 253. Street parking available.
                </p>
                <p>
                  <strong className="text-[#1A1612] font-semibold">By Bus:</strong>{" "}
                  Route 821 (LinkSA) from Stop K1, Hutt St, CBD — ~31 min, ~$3. Mon–Fri only.
                  Weekend visits: driving or rideshare recommended.
                </p>
              </div>
              <Link
                href="/local-transport"
                className="inline-block mt-4 text-sm text-[#8B1A1A] border-b border-[#8B1A1A] hover:text-[#A52A2A] hover:border-[#A52A2A] transition-colors"
              >
                Full transport guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GARDEN BANNER CLOSE
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-72 overflow-hidden">
        <Image
          src="/images/garden.png"
          alt="The lush fern garden path at Cherry Bomb Cafe, Ashton"
          fill
          className="object-cover object-center"
          quality={80}
        />
        <div className="absolute inset-0 bg-[#1A1612]/35 flex items-center justify-center">
          <p className="font-[family-name:var(--font-cormorant)] italic text-4xl md:text-5xl text-[#F1E8D4] text-center px-6 drop-shadow-lg">
            &ldquo;A little corner of the Hills, blooming year-round.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
