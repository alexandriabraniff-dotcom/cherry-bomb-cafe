import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cherry Bomb Cafe — A little cafe in the Adelaide Hills",
};

/* ─── Shared section-header component (inline) ─────────────────── */
function SectionHeader({
  script,
  heading,
  light = false,
}: {
  script: string;
  heading: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <p
        className={`font-[family-name:var(--font-pinyon)] text-5xl mb-1 ${
          light ? "text-[#E8A547]" : "text-[#8B1A1A]"
        }`}
      >
        {script}
      </p>
      <span
        className={`block w-12 h-px mt-3 mb-5 ${
          light ? "bg-[#E8A547]/60" : "bg-[#8B1A1A]"
        }`}
      />
      <h2
        className={`font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold tracking-tight ${
          light ? "text-[#F1E8D4]" : "text-[#1A1612]"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1612]/70 via-[#1A1612]/40 to-[#1A1612]/60" />

        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-5 mt-20">
          <p
            className="font-[family-name:var(--font-pinyon)] text-6xl md:text-7xl text-[#E8A547]"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
          >
            A little cafe in the Adelaide Hills
          </p>
          <p className="font-[family-name:var(--font-lora)] text-[#EDE3CC]/90 text-xl italic max-w-md leading-relaxed">
            Pull up a velvet chair. The kettle&rsquo;s already on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#about"
              className="px-9 py-3 bg-[#8B1A1A] text-[#F1E8D4] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#A52A2A] transition-colors rounded-sm"
            >
              Our Story
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
      <section id="about" className="scroll-mt-0 bg-[#F1E8D4]">
        <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col gap-24">

          {/* ── ROW 1: Our Story ──────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-[family-name:var(--font-pinyon)] text-4xl text-[#8B1A1A] mb-1">
                  Our Story
                </p>
                <span className="block w-12 h-px bg-[#8B1A1A] mt-3 mb-6" />
                <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1A1612] mb-6">
                  Where it began
                </h2>
              </div>
              <p className="font-[family-name:var(--font-lora)] text-[#3a2e24] leading-relaxed text-[1.05rem]">
                Cherry Bomb Caf&eacute; is tucked inside an 1870s stone cottage at 253 Lobethal
                Road, Ashton &mdash; a building that has been feeding the community since Herbert
                and Emily Lovibond ran their bakery and general store here in the 1890s. Founder
                Tanya Schroeder purchased it in 2019 with a quiet, long-held vision: to bring it
                back to life.
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[#3a2e24] leading-relaxed text-[1.05rem]">
                At the heart of the kitchen sits a 150-year-old wood-fired scotch oven &mdash;
                one of only a handful still in active use across Australia. It bakes every
                sourdough loaf, pie, and pastry that leaves the kitchen, and it never turns off.
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[#3a2e24] leading-relaxed text-[1.05rem]">
                Our cherries come directly from Ceravolo Orchards just down the road, finding
                their way into everything from the famous cherry pie to jams, vinegar, and cakes.
                Coffee is poured from the Kindred Blend, roasted locally.
              </p>
              <div className="mt-2">
                <Link
                  href="/about"
                  className="inline-block px-8 py-3 bg-[#8B1A1A] text-[#F1E8D4] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#A52A2A] transition-colors rounded-sm"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Image slot 1 */}
            <div className="relative">
              <Image
                src="/images/baker.png"
                alt="A Cherry Bomb Cafe team member in a cherry-red apron slicing warm bread with dried florals hanging overhead"
                width={680}
                height={500}
                className="w-full h-[440px] object-cover object-center rounded-sm shadow-[0_8px_48px_rgba(26,22,18,0.13)]"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          MENU
      ══════════════════════════════════════════════════════ */}
      <section id="menu" className="scroll-mt-0 bg-[#EDE3CC]">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <SectionHeader script="Simple, wholesome & seasonal" heading="Our Menu" />

          <div className="flex flex-col gap-5">
            <p className="font-[family-name:var(--font-lora)] text-[#3a2e24] leading-relaxed text-[1.05rem]">
              Our rustic homestyle menu seeks to combine the best of local produce from the
              iconic Piccadilly Valley region. From our Kindred Coffee Blend to our house-made
              cakes and toasties, we have something for everyone.
            </p>
            <p className="font-[family-name:var(--font-lora)] text-[#3a2e24] leading-relaxed text-[1.05rem]">
              We keep the menu simple, wholesome and seasonal &mdash; and our specials often
              include donations from local townsfolk.
            </p>
            <p className="font-[family-name:var(--font-lora)] text-[#3a2e24] leading-relaxed text-[1.05rem]">
              Our signature <span className="font-semibold text-[#8B1A1A]">Cherry Pie</span> is
              absolutely something not to be missed.
            </p>
            <p className="font-[family-name:var(--font-lora)] italic text-[#8B1A1A] mt-4">
              We will be posting our menu soon.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOURS
      ══════════════════════════════════════════════════════ */}
      <section id="hours" className="scroll-mt-0 bg-[#2D4A35]">
        <div className="max-w-2xl mx-auto px-6 py-28">
          <SectionHeader script="We'll have the kettle on" heading="Trading Hours" light />

          <div className="bg-[#F1E8D4]/10 border border-[#F1E8D4]/15 rounded-sm overflow-hidden">
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
                  i !== arr.length - 1 ? "border-b border-[#F1E8D4]/10" : ""
                } ${row.time === "Closed" ? "opacity-35" : ""}`}
              >
                <span className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#F1E8D4]">
                  {row.day}
                </span>
                <span className={`font-[family-name:var(--font-lora)] text-sm ${
                  row.time === "Closed" ? "text-[#A8B89A] italic" : "text-[#E8A547] font-medium"
                }`}>
                  {row.time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2 text-center">
            <p className="font-[family-name:var(--font-lora)] text-sm text-[#A8B89A]">
              Closed on public holidays &middot; No bookings — walk-ins only
            </p>
            <p className="font-[family-name:var(--font-lora)] text-sm text-[#A8B89A]">
              Kitchen closes 30 min before close &middot; Last coffee 15 min before close
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FIND US
      ══════════════════════════════════════════════════════ */}
      <section id="find-us" className="scroll-mt-0 bg-[#F1E8D4]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionHeader script="Come find us" heading="Find Us" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Map */}
            <div className="rounded-sm overflow-hidden shadow-[0_8px_48px_rgba(26,22,18,0.12)] h-[440px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3!2d138.7177!3d-34.9746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s253+Lobethal+Rd%2C+Ashton+SA+5137!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cherry Bomb Cafe — 253 Lobethal Rd, Ashton SA 5137"
              />
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-8">

              {/* Address */}
              <div className="flex gap-4">
                <span className="text-[#8B1A1A] text-lg flex-shrink-0 mt-0.5 font-[family-name:var(--font-cormorant)]">✦</span>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612] mb-1.5">Address</h3>
                  <a
                    href="https://maps.google.com/?q=253+Lobethal+Rd+Ashton+SA+5137"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="not-italic font-[family-name:var(--font-lora)] text-[#3a2e24] text-sm hover:text-[#8B1A1A] transition-colors underline-offset-2 hover:underline"
                  >
                    253 Lobethal Rd, Ashton SA 5137
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <span className="text-[#8B1A1A] text-lg flex-shrink-0 mt-0.5 font-[family-name:var(--font-cormorant)]">✦</span>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612] mb-1.5">Phone</h3>
                  <a href="tel:0413516920" className="font-[family-name:var(--font-lora)] text-sm text-[#3a2e24] hover:text-[#8B1A1A] transition-colors">
                    0413 516 920
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <span className="text-[#8B1A1A] text-lg flex-shrink-0 mt-0.5 font-[family-name:var(--font-cormorant)]">✦</span>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612] mb-1.5">Email</h3>
                  <a href="mailto:cherrybombcafe@outlook.com" className="font-[family-name:var(--font-lora)] text-sm text-[#3a2e24] hover:text-[#8B1A1A] transition-colors">
                    cherrybombcafe@outlook.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <span className="text-[#8B1A1A] text-lg flex-shrink-0 mt-0.5 font-[family-name:var(--font-cormorant)]">✦</span>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612] mb-2">Follow Along</h3>
                  <div className="flex flex-col gap-1.5">
                    <a href="https://www.instagram.com/cherry_bomb_cafe_ashton" target="_blank" rel="noopener noreferrer"
                      className="font-[family-name:var(--font-lora)] text-sm text-[#3a2e24] hover:text-[#8B1A1A] transition-colors">
                      Instagram: @cherry_bomb_cafe_ashton
                    </a>
                    <a href="https://www.facebook.com/cherrybombcafeashton" target="_blank" rel="noopener noreferrer"
                      className="font-[family-name:var(--font-lora)] text-sm text-[#3a2e24] hover:text-[#8B1A1A] transition-colors">
                      Facebook: Cherry Bomb Cafe | Ashton SA
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Garden closing banner */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="/images/garden.png"
          alt="The lush fern garden path at Cherry Bomb Cafe"
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
