import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Cherry Bomb Cafe",
  description:
    "The story behind Cherry Bomb Cafe — an 1870s stone house in Ashton, a 150-year-old scotch oven, and a deep love of Adelaide Hills cherries.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative h-[380px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/garden.png"
          alt="The lush fern garden path leading to Cherry Bomb Cafe in Ashton"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1612]/55" />
        <div className="relative z-10 text-center pt-28">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547] mb-2">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#F1E8D4]">
            About Cherry Bomb
          </h1>
        </div>
      </section>

      {/* Heritage section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-6" />
            <p className="font-[family-name:var(--font-pinyon)] text-3xl text-[#8B1A1A] mb-3 leading-none">
              253 Lobethal Road
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#1A1612] mb-6">
              A building with memory
            </h2>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              Long before the first cup of coffee was poured at Cherry Bomb, this 1870s bluestone
              cottage on Lobethal Road had already lived several lives. From the 1890s through to
              1941, Herbert and Emily Lovibond ran their general store, bakery, and post office from
              this very building &mdash; a place locals knew simply as{" "}
              <em>Mrs Lovibond&rsquo;s Emporium</em>. The Lovibonds fed the community, kept the
              mail, and baked bread in the enormous wood-fired scotch oven they had built into the
              stone walls.
            </p>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              The decades that followed brought Ron and Colleen Clothier, who transformed the space
              into their <em>Cache of Curios</em> antique shop. Then, for a time, it stood quietly
              as a residence &mdash; while the scotch oven waited.
            </p>
            <p className="text-[#3a2e24] leading-relaxed">
              In 2019, founder Tanya Schroeder purchased the property with a quiet, long-held
              vision: to bring it back to life as a place where people gather, eat well, and linger
              over something warm. Cherry Bomb Caf&eacute; opened in 2023 &mdash; and the oven
              fired up again for the first time in decades.
            </p>
          </div>
          <Image
            src="/images/room-plants.png"
            alt="A warmly lit room inside Cherry Bomb Cafe with trailing plants and antique furnishings"
            width={680}
            height={500}
            className="w-full h-[460px] object-cover object-center rounded-sm shadow-[0_8px_40px_rgba(26,22,18,0.12)]"
          />
        </div>
      </section>

      {/* Tanya's story */}
      <section className="py-24 px-6 bg-[#EDE3CC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/counter-florals.png"
            alt="The Cherry Bomb Cafe counter adorned with dried florals and handwritten menus"
            width={680}
            height={500}
            className="w-full h-[460px] object-cover object-center rounded-sm shadow-[0_8px_40px_rgba(26,22,18,0.12)] order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-6" />
            <p className="font-[family-name:var(--font-pinyon)] text-3xl text-[#8B1A1A] mb-3 leading-none">
              Founder
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#1A1612] mb-6">
              Tanya Schroeder
            </h2>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              Tanya already had deep roots on Lobethal Road before Cherry Bomb existed. She ran the
              beloved Ashton Post Office Caf&eacute; a short walk away &mdash; a warmly homey space
              filled with foliage and regulars &mdash; quietly building a community without ever
              letting on what she had planned for the old stone cottage next door.
            </p>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              She is known for a style defined by homeliness, a love of vintage, and a commitment
              to produce that has a story behind it. She learned to use the scotch oven herself,
              saying it &ldquo;takes two weeks to heat up &mdash; and once it&rsquo;s on, you
              don&rsquo;t turn it off.&rdquo; Her sourdough philosophy traces a lineage back to
              Victorian baker John Reid of Redbeard Bakery in Trentham, a man she calls{" "}
              <em>&ldquo;the godfather of sourdough.&rdquo;</em>
            </p>
            <p className="text-[#3a2e24] leading-relaxed">
              Her vision for Cherry Bomb was always to pay homage to the building&rsquo;s past and
              to the local produce of the area &mdash; chiefly, the cherries. Everything here
              connects to this place.
            </p>
          </div>
        </div>
      </section>

      {/* Scotch oven section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-6" />
            <p className="font-[family-name:var(--font-pinyon)] text-3xl text-[#8B1A1A] mb-3 leading-none">
              The heart of the kitchen
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#1A1612] mb-6">
              The scotch oven
            </h2>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              Built into the stone walls of the original Lovibond bakery, the scotch oven at Cherry
              Bomb measures 3.5 by 4.5 metres &mdash; an enormous wood-fired vault that has been
              baking bread in the Adelaide Hills for over 150 years. It is one of only a handful
              still in active use across Australia, with comparable examples found at the Apex
              Bakery in Tanunda and at Farina in the outback.
            </p>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              Every sourdough loaf, pie, pastie, sausage roll, cake, and baked good that comes out
              of Cherry Bomb passes through this oven. It runs continuously &mdash; you cannot
              simply switch it on for a Tuesday &mdash; and that rhythm shapes the entire cafe.
            </p>
            <p className="text-[#3a2e24] leading-relaxed">
              The menu was crafted by Tony Read, who brought a Melbourne sensibility from the
              Yarraville caf&eacute; scene to work alongside the rhythms of the oven and the
              abundance of Adelaide Hills produce.
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

      {/* Cherry connection */}
      <section className="py-24 px-6 bg-[#EDE3CC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/garden.png"
            alt="The Cherry Bomb Cafe garden verandah in the Adelaide Hills"
            width={680}
            height={500}
            className="w-full h-[460px] object-cover object-center rounded-sm shadow-[0_8px_40px_rgba(26,22,18,0.12)] order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-6" />
            <p className="font-[family-name:var(--font-pinyon)] text-3xl text-[#8B1A1A] mb-3 leading-none">
              The signature ingredient
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[#1A1612] mb-6">
              Cherries from down the road
            </h2>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              Cherries are not just the name &mdash; they are the thread that runs through
              everything we make. Our fruit comes directly from Ceravolo Orchards, just down the
              road in the Adelaide Hills, and it finds its way into our kitchen in as many forms as
              we can imagine: cherry pie (our hero), cherry jam, cherry vinegar, cherry ice cream,
              cherry and ricotta cake, cherry brownies.
            </p>
            <p className="text-[#3a2e24] leading-relaxed mb-5">
              The connection is hyperlocal and intentional. The Adelaide Hills has some of the best
              stone fruit country in Australia, and we believe you should be able to taste where
              you are.
            </p>
            <p className="text-[#3a2e24] leading-relaxed">
              Our coffee is equally local: we pour the Kindred Coffee Blend, roasted just down the
              road, by people who care as much about their craft as we care about ours.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
