import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Cherry Bomb Cafe",
  description:
    "Learn the story behind Cherry Bomb Cafe in Ashton, Adelaide Hills. Meet our team, discover our commitment to community and sustainability.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative h-72 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/sign.png"
          alt="The Cherry Bomb Cafe hanging sign outside the heritage stone cottage"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1612]/55" />
        <div className="relative z-10 text-center">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547] mb-2">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#F1E8D4]">
            About Cherry Bomb
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#1A1612] mb-6">
              Where it all began
            </h2>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              At Cherry Bomb Caf&eacute;, we are passionate about bringing people together over
              delicious food and drinks. Our journey began as a small coffee shop, and we have
              since expanded to become a full-service caf&eacute; that feels like a second home.
            </p>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              Ambiance plays a big part in how we spoil our customers &mdash; from cosy nooks and
              velvet couches to a library, a fireplace in every room for winter, and low-level
              lighting that wraps every visit in warmth.
            </p>
            <p className="text-[#3a2e24] leading-relaxed">
              We are also deeply committed to sustainability in every aspect we possibly can &mdash;
              from our sourcing to our packaging. Because a place worth loving is worth looking after.
            </p>
          </div>
          <Image
            src="/images/baker.png"
            alt="A Cherry Bomb Cafe team member in a red apron lovingly slicing freshly baked bread"
            width={680}
            height={500}
            className="w-full h-[460px] object-cover object-center rounded-sm shadow-[0_8px_40px_rgba(26,22,18,0.12)]"
          />
        </div>
      </section>

      {/* Divider quote */}
      <section className="bg-[#8B1A1A] py-14 px-6 text-center">
        <p className="font-[family-name:var(--font-cormorant)] italic text-3xl md:text-4xl text-[#F1E8D4] max-w-3xl mx-auto leading-snug">
          &ldquo;We are proud to have such a talented and dedicated team who care deeply about
          the community they serve.&rdquo;
        </p>
      </section>

      {/* Team section */}
      <section className="py-24 px-6 bg-[#EDE3CC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-bold text-[#1A1612] mb-4">
              Our Team
            </h2>
            <p className="text-[#5a4a3a] max-w-xl mx-auto leading-relaxed">
              Our team consists of experienced chefs and baristas who are dedicated to providing
              the best possible experience for every single guest who walks through our door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "Kitchen",
                desc: "Our chefs draw inspiration from the seasons and the Piccadilly Valley\'s abundant local produce — crafting food that is honest, nourishing, and full of flavour.",
                icon: "✦",
              },
              {
                role: "Coffee Bar",
                desc: "Our baristas are passionate about every cup. We pour our house Kindred Coffee Blend with care, and we\'ll always make time to chat about your perfect brew.",
                icon: "✦",
              },
              {
                role: "Front of House",
                desc: "Warm red aprons and warmer smiles. Our front-of-house team treats every guest like family and takes genuine pride in the experience we create together.",
                icon: "✦",
              },
            ].map((item) => (
              <div key={item.role} className="bg-[#F1E8D4] p-8 rounded-sm border border-[#d4c4a0] shadow-sm">
                <span className="text-[#8B1A1A] text-2xl font-[family-name:var(--font-cormorant)] mb-4 block">
                  {item.icon}
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#1A1612] mb-3">
                  {item.role}
                </h3>
                <p className="text-sm text-[#5a4a3a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior shots */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1A1612]">
            The Space
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/images/library-fireplace.png"
            alt="The library nook at Cherry Bomb Cafe with a roaring fireplace and floor-to-ceiling bookshelves"
            width={700}
            height={460}
            className="w-full h-80 object-cover rounded-sm"
          />
          <Image
            src="/images/interior-stools.png"
            alt="Warm timber window bar with wooden stools overlooking the garden at Cherry Bomb Cafe"
            width={700}
            height={460}
            className="w-full h-80 object-cover rounded-sm"
          />
        </div>
      </section>
    </>
  );
}
