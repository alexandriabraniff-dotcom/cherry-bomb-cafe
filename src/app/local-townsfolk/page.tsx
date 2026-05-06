import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Townsfolk — Cherry Bomb Cafe",
  description:
    "Discover the local Ashton and Adelaide Hills businesses advertised at Cherry Bomb Cafe, and keep an eye on upcoming events and concerts in the area.",
};

const businesses = [
  {
    name: "Ashton Valley Fresh",
    category: "Produce & Orchards",
    description:
      "Family-owned orchard supplying some of the freshest fruit in the Piccadilly Valley. Available at local markets and farm gate.",
  },
  {
    name: "Hills Honey",
    category: "Local Produce",
    description:
      "Small-batch honey harvested from hives across the Adelaide Hills. Raw, unfiltered, and utterly delicious.",
  },
  {
    name: "Lobethal Bierhaus",
    category: "Brewery",
    description:
      "Award-winning craft brewery a short drive through the Hills. Tour the cellar door or take a dozen home.",
  },
  {
    name: "The Ashton Village Store",
    category: "General Store",
    description:
      "A beloved local institution stocking everything from handmade preserves to local pottery and gifts.",
  },
];

const events: { date: string; title: string; description: string; venue: string }[] = [];

export default function LocalTownsfolkPage() {
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
            Community &amp; neighbours
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#F1E8D4]">
            Local Townsfolk
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
        <p className="text-[#3a2e24] leading-relaxed text-lg">
          Cherry Bomb Cafe is proud to celebrate the wonderful people and businesses that make
          Ashton and the Adelaide Hills such a special place to be. Below you&rsquo;ll find local
          businesses we love and upcoming events worth knowing about.
        </p>
      </section>

      {/* Local Businesses */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-10">
          <span className="block w-14 h-0.5 bg-[#8B1A1A]" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#8B1A1A]">
            Local Businesses
          </h2>
          <div className="flex-1 h-px bg-[#d4c4a0]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businesses.map((biz) => (
            <div
              key={biz.name}
              className="flex gap-4 p-5 bg-[#EDE3CC] rounded-sm border border-[#d4c4a0]"
            >
              <span className="text-[#8B1A1A] text-lg mt-0.5 leading-none font-[family-name:var(--font-cormorant)]">✦</span>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612]">
                    {biz.name}
                  </h3>
                  <span className="text-xs bg-[#2D4A35] text-[#EDE3CC] px-2 py-0.5 rounded-sm font-[family-name:var(--font-lora)]">
                    {biz.category}
                  </span>
                </div>
                <p className="text-sm text-[#5a4a3a] leading-relaxed">{biz.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6 bg-[#EDE3CC]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-10">
            <span className="block w-14 h-0.5 bg-[#8B1A1A]" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#8B1A1A]">
              Upcoming Events
            </h2>
            <div className="flex-1 h-px bg-[#d4c4a0]" />
          </div>

          {events.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-[family-name:var(--font-pinyon)] text-4xl text-[#8B1A1A] mb-4">
                Coming soon
              </p>
              <p className="text-[#5a4a3a] text-sm leading-relaxed max-w-md mx-auto">
                We&rsquo;re always the first to hear about what&rsquo;s happening in the Hills.
                Check back soon for local concerts, markets, and community events.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="bg-[#F1E8D4] border border-[#d4c4a0] rounded-sm p-6 flex gap-6"
                >
                  <div className="flex-shrink-0 text-center min-w-[64px]">
                    <p className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#8B1A1A]">
                      {event.date}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612] mb-1">
                      {event.title}
                    </h3>
                    <p className="text-xs text-[#8B1A1A] font-[family-name:var(--font-lora)] mb-2">
                      {event.venue}
                    </p>
                    <p className="text-sm text-[#5a4a3a] leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="/images/garden.png"
          alt="The lush garden path at Cherry Bomb Cafe"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1A1612]/40 flex items-center justify-center">
          <p className="font-[family-name:var(--font-cormorant)] italic text-3xl md:text-4xl text-[#F1E8D4] text-center px-6">
            &ldquo;Good neighbours make a great community.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
