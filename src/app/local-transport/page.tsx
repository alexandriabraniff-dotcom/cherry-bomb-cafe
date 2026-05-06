import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Transport — Cherry Bomb Cafe",
  description:
    "How to get to Cherry Bomb Cafe in Ashton, Adelaide Hills by car, bus, or bike. Transport options from Adelaide CBD to 253 Lobethal Rd, Ashton SA 5137.",
};

export default function LocalTransportPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-64 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/garden.png"
          alt="The scenic garden approach to Cherry Bomb Cafe in Ashton"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1612]/60" />
        <div className="relative z-10 text-center">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547] mb-2">
            The journey is part of the experience
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#F1E8D4]">
            Getting Here
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
        <p className="text-[#3a2e24] leading-relaxed text-lg">
          Cherry Bomb Caf&eacute; is nestled at 253 Lobethal Rd, Ashton SA 5137 &mdash; just a
          short, scenic drive through the Adelaide Hills from the city. Here&rsquo;s how to make
          your way to us.
        </p>
      </section>

      {/* Transport options */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col gap-10">

          {/* By Car */}
          <div className="bg-[#EDE3CC] rounded-sm border border-[#d4c4a0] overflow-hidden">
            <div className="bg-[#8B1A1A] px-8 py-5 flex items-center gap-4">
              <span className="text-[#F1E8D4] font-[family-name:var(--font-cormorant)] text-3xl font-bold">By Car</span>
              <span className="text-[#EDE3CC]/70 text-sm font-[family-name:var(--font-lora)]">~20–25 min from Adelaide CBD</span>
            </div>
            <div className="p-8">
              <p className="text-[#3a2e24] leading-relaxed mb-4">
                The most popular way to visit. The drive through the Adelaide Hills is beautiful
                year-round, winding through vineyards, orchards, and village townships.
              </p>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#1A1612] mb-3">
                From Adelaide CBD:
              </h3>
              <ol className="flex flex-col gap-2 text-sm text-[#3a2e24]">
                <li className="flex gap-3">
                  <span className="text-[#8B1A1A] font-bold font-[family-name:var(--font-cormorant)] text-lg leading-tight">1.</span>
                  Take the South Eastern Freeway (M1) heading toward the Hills
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8B1A1A] font-bold font-[family-name:var(--font-cormorant)] text-lg leading-tight">2.</span>
                  Take the Piccadilly / Ashton exit
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8B1A1A] font-bold font-[family-name:var(--font-cormorant)] text-lg leading-tight">3.</span>
                  Follow Lobethal Rd through the valley to number 253
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8B1A1A] font-bold font-[family-name:var(--font-cormorant)] text-lg leading-tight">4.</span>
                  Street parking is available along Lobethal Rd near the cafe
                </li>
              </ol>
              <a
                href="https://maps.google.com/?q=253+Lobethal+Rd+Ashton+SA+5137"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2.5 bg-[#8B1A1A] text-[#F1E8D4] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#A52A2A] transition-colors rounded-sm"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* By Bus */}
          <div className="bg-[#EDE3CC] rounded-sm border border-[#d4c4a0] overflow-hidden">
            <div className="bg-[#2D4A35] px-8 py-5 flex items-center gap-4">
              <span className="text-[#F1E8D4] font-[family-name:var(--font-cormorant)] text-3xl font-bold">By Bus</span>
              <span className="text-[#A8B89A] text-sm font-[family-name:var(--font-lora)]">Adelaide Metro regional services</span>
            </div>
            <div className="p-8">
              <p className="text-[#3a2e24] leading-relaxed mb-4">
                Adelaide Metro operates regional bus services into the Hills. Bus services provide
                a relaxed way to enjoy the scenery without worrying about parking.
              </p>
              <div className="bg-[#F1E8D4] border border-[#d4c4a0] rounded-sm p-5 mb-5">
                <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-[#1A1612] mb-2">
                  Route 840 — Stirling &amp; Lobethal
                </h3>
                <p className="text-sm text-[#5a4a3a] leading-relaxed">
                  This route services the Stirling–Lobethal corridor through the Hills, passing
                  through or near Ashton. Services operate from Grenfell St Interchange in
                  Adelaide CBD.
                </p>
              </div>
              <div className="bg-[#fff8f0] border border-[#E8A547]/40 rounded-sm p-4 mb-5">
                <p className="text-sm text-[#5a4a3a] leading-relaxed">
                  <strong className="text-[#8B1A1A]">Important:</strong> Bus timetables and routes
                  change regularly. Always check the Adelaide Metro website or app for current
                  timetables, stop locations, and any service changes before travelling.
                </p>
              </div>
              <a
                href="https://www.adelaidemetro.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 border border-[#2D4A35] text-[#2D4A35] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#2D4A35] hover:text-[#F1E8D4] transition-colors rounded-sm"
              >
                Adelaide Metro Website
              </a>
            </div>
          </div>

          {/* By Bike */}
          <div className="bg-[#EDE3CC] rounded-sm border border-[#d4c4a0] overflow-hidden">
            <div className="bg-[#B88A4F] px-8 py-5 flex items-center gap-4">
              <span className="text-[#F1E8D4] font-[family-name:var(--font-cormorant)] text-3xl font-bold">By Bike</span>
              <span className="text-[#F1E8D4]/70 text-sm font-[family-name:var(--font-lora)]">For the adventurous</span>
            </div>
            <div className="p-8">
              <p className="text-[#3a2e24] leading-relaxed mb-4">
                The Adelaide Hills is popular cycling territory. Lobethal Rd through Ashton is a
                favourite route for cyclists. If you are arriving by bike, there is secure bike
                parking available near the cafe entrance.
              </p>
              <p className="text-sm text-[#5a4a3a] leading-relaxed">
                Be aware that this is a hilly region &mdash; the climb from Adelaide is rewarding
                but demanding. We suggest a hearty breakfast as your reward at the top.
              </p>
            </div>
          </div>

          {/* Rideshare / Taxi */}
          <div className="bg-[#EDE3CC] rounded-sm border border-[#d4c4a0] overflow-hidden">
            <div className="bg-[#1A1612] px-8 py-5 flex items-center gap-4">
              <span className="text-[#F1E8D4] font-[family-name:var(--font-cormorant)] text-3xl font-bold">Rideshare &amp; Taxi</span>
            </div>
            <div className="p-8">
              <p className="text-[#3a2e24] leading-relaxed mb-4">
                Uber and other rideshare services cover the Adelaide Hills area. Simply enter
                &ldquo;Cherry Bomb Cafe&rdquo; or &ldquo;253 Lobethal Rd, Ashton&rdquo; as your destination.
              </p>
              <p className="text-sm text-[#5a4a3a] leading-relaxed">
                Note that rideshare availability in rural areas can vary, particularly in the
                evenings. We recommend booking a return trip in advance if relying on rideshare.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#8B1A1A] text-center">
        <p className="font-[family-name:var(--font-cormorant)] italic text-3xl md:text-4xl text-[#F1E8D4] mb-6">
          However you arrive, we&rsquo;re glad you made it.
        </p>
        <Link
          href="/find-us"
          className="inline-block px-8 py-3 border border-[#EDE3CC] text-[#EDE3CC] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#EDE3CC]/10 transition-colors rounded-sm"
        >
          See Full Location Details
        </Link>
      </section>
    </>
  );
}
