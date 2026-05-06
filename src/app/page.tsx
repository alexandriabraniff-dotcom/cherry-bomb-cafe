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
                At Cherry Bomb Caf&eacute;, we are passionate about bringing people together over
                delicious food and drinks. Our journey began as a small coffee shop, and we have
                since expanded to become a full-service caf&eacute;.
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[#3a2e24] leading-relaxed text-[1.05rem]">
                Ambiance plays a big part in how we spoil our customers &mdash; from cosy nooks,
                velvet couches, a library and a fireplace in every room for winter, and low-level
                lighting that wraps every visit in warmth.
              </p>
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
              <div className="absolute -bottom-3 -right-3 w-28 h-28 border border-[#8B1A1A]/20 rounded-sm hidden lg:block pointer-events-none" />
            </div>
          </div>

          {/* Hairline divider */}
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-[#d4c4a0]" />
            <span className="text-[#8B1A1A] text-lg font-[family-name:var(--font-cormorant)]">✦</span>
            <div className="flex-1 h-px bg-[#d4c4a0]" />
          </div>

          {/* ── ROW 2: Our Team ───────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image slot 2 */}
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/library-fireplace.png"
                alt="The cosy library nook at Cherry Bomb Cafe with a glowing fireplace and bookshelves"
                width={680}
                height={500}
                className="w-full h-[440px] object-cover object-center rounded-sm shadow-[0_8px_48px_rgba(26,22,18,0.13)]"
              />
              <div className="absolute -bottom-3 -left-3 w-28 h-28 border border-[#8B1A1A]/20 rounded-sm hidden lg:block pointer-events-none" />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 flex flex-col gap-5">
              <div>
                <p className="font-[family-name:var(--font-pinyon)] text-4xl text-[#8B1A1A] mb-1">
                  Our Team
                </p>
                <span className="block w-12 h-px bg-[#8B1A1A] mt-3 mb-6" />
                <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1A1612] mb-6">
                  The people behind the cup
                </h2>
              </div>
              <p className="font-[family-name:var(--font-lora)] text-[#3a2e24] leading-relaxed text-[1.05rem]">
                Our team consists of experienced chefs and baristas who are dedicated to providing
                the best possible experience for our customers.
              </p>
              <p className="font-[family-name:var(--font-lora)] text-[#3a2e24] leading-relaxed text-[1.05rem]">
                We are proud to have such a talented and dedicated team who also care about the
                community they serve. We are also committed to being sustainable in every aspect
                we possibly can.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section transition — quote strip */}
      <div className="bg-[#8B1A1A] py-10 px-6 text-center">
        <p className="font-[family-name:var(--font-cormorant)] italic text-2xl md:text-3xl text-[#F1E8D4] max-w-2xl mx-auto leading-snug">
          &ldquo;Hand-baked daily, by people who love to feed you.&rdquo;
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
          MENU
      ══════════════════════════════════════════════════════ */}
      <section id="menu" className="scroll-mt-0 bg-[#EDE3CC]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionHeader script="Simple, wholesome & seasonal" heading="Our Menu" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Write-up */}
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

              {/* Coming soon badge */}
              <div className="mt-4 inline-flex items-center gap-3 border border-[#c4b48a] rounded-sm px-5 py-4 bg-[#F1E8D4]/70 w-fit">
                <span className="text-[#8B1A1A] font-[family-name:var(--font-cormorant)] text-lg">✦</span>
                <div>
                  <p className="font-[family-name:var(--font-cormorant)] text-base font-bold text-[#1A1612]">
                    Full menu coming soon
                  </p>
                  <p className="font-[family-name:var(--font-lora)] text-xs text-[#6a5a4a] mt-0.5">
                    Call us on{" "}
                    <a href="tel:0413516920" className="text-[#8B1A1A] hover:underline">
                      0413 516 920
                    </a>{" "}
                    for today&rsquo;s specials
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="/images/baker.png"
                alt="Cherry Bomb Cafe team member slicing fresh bread with dried florals hanging overhead"
                width={680}
                height={500}
                className="w-full h-[440px] object-cover object-center rounded-sm shadow-[0_8px_48px_rgba(26,22,18,0.13)]"
              />
              <div className="absolute -bottom-3 -right-3 w-28 h-28 border border-[#8B1A1A]/20 rounded-sm hidden lg:block pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOURS
      ══════════════════════════════════════════════════════ */}
      <section id="hours" className="scroll-mt-0 bg-[#2D4A35]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionHeader script="We'll have the kettle on" heading="Trading Hours" light />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
            {/* Hours table */}
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
                  className={`flex justify-between items-center px-7 py-4 ${
                    i !== arr.length - 1 ? "border-b border-[#F1E8D4]/10" : ""
                  } ${row.time === "Closed" ? "opacity-35" : ""}`}
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#F1E8D4]">
                    {row.day}
                  </span>
                  <span
                    className={`font-[family-name:var(--font-lora)] text-sm ${
                      row.time === "Closed"
                        ? "text-[#A8B89A] italic"
                        : "text-[#E8A547] font-medium"
                    }`}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Walk-ins Only",
                  body: "We don't take bookings — just come as you are. Our doors are open from Wednesday through Sunday.",
                },
                {
                  title: "Public Holidays",
                  body: "We close on public holidays. Check our Instagram for any special hours or seasonal closures.",
                },
                {
                  title: "Kitchen Hours",
                  body: "Food served all day. Kitchen closes 30 minutes before we do. Last coffee 15 minutes before close.",
                },
              ].map((note) => (
                <div key={note.title} className="flex gap-4">
                  <span className="text-[#E8A547] text-lg mt-0.5 flex-shrink-0 font-[family-name:var(--font-cormorant)]">
                    ✦
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#F1E8D4] mb-1">
                      {note.title}
                    </h3>
                    <p className="font-[family-name:var(--font-lora)] text-sm text-[#A8B89A] leading-relaxed">
                      {note.body}
                    </p>
                  </div>
                </div>
              ))}

              <a
                href="https://www.instagram.com/cherry_bomb_cafe_ashton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-7 py-3 border border-[#E8A547] text-[#E8A547] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#E8A547]/10 transition-colors rounded-sm w-fit"
              >
                Follow for Updates
              </a>
            </div>
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
                  <address className="not-italic font-[family-name:var(--font-lora)] text-[#3a2e24] text-sm leading-relaxed">
                    253 Lobethal Rd<br />Ashton SA 5137<br />Adelaide Hills, South Australia
                  </address>
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

              {/* Getting here */}
              <div className="border-t border-[#d4c4a0] pt-6 flex gap-4">
                <span className="text-[#8B1A1A] text-lg flex-shrink-0 mt-0.5 font-[family-name:var(--font-cormorant)]">✦</span>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612] mb-3">Getting Here</h3>
                  <div className="flex flex-col gap-2.5 text-sm text-[#5a4a3a] font-[family-name:var(--font-lora)] leading-relaxed">
                    <p><strong className="font-semibold text-[#1A1612]">By Car:</strong> ~20 min from Adelaide CBD via the M1 South Eastern Freeway. Take the Piccadilly exit, follow Lobethal Rd to no. 253.</p>
                    <p><strong className="font-semibold text-[#1A1612]">By Bus:</strong> Route 821 (LinkSA) from Stop K1, Hutt St, CBD — ~31 min, ~$3. Runs Mon–Fri only.</p>
                  </div>
                  <Link href="/local-transport"
                    className="inline-block mt-3 font-[family-name:var(--font-lora)] text-xs text-[#8B1A1A] border-b border-[#8B1A1A]/40 hover:border-[#8B1A1A] transition-colors">
                    Full transport guide →
                  </Link>
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
