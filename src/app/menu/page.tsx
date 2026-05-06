import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Cherry Bomb Cafe",
  description:
    "A rustic homestyle menu celebrating local Piccadilly Valley produce. Breakfast, lunch, coffee, and the legendary Cherry Pie. Cherry Bomb Cafe, Ashton SA.",
};

type MenuItem = { name: string; description: string; note?: string };
type MenuSection = { title: string; items: MenuItem[] };

const menuSections: MenuSection[] = [
  {
    title: "Breakfast",
    items: [
      {
        name: "Cherry Bomb Eggs",
        description: "Scrambled free-range eggs on house-made sourdough with mushrooms, cherry tomatoes & fresh herbs",
      },
      {
        name: "Golden Croissant",
        description: "Buttery croissant with house-smoked salmon, cream cheese, capers & dill",
      },
      {
        name: "The Toastie",
        description: "Ham & aged cheddar on sourdough, grilled golden and served with chutney",
        note: "Signature",
      },
      {
        name: "Seasonal Porridge",
        description: "Stone-milled oats with seasonal fruit compote, honey & toasted seeds",
      },
      {
        name: "Avo & Feta",
        description: "Whipped feta, smashed avocado, edible flowers & dukkah on seeded rye",
      },
      {
        name: "Pantry Plate",
        description: "A selection of house-made preserves, local cheese, fresh fruit & crusty bread",
      },
    ],
  },
  {
    title: "Lunch",
    items: [
      {
        name: "Hills Garden Salad",
        description: "Seasonal leaves, roasted beets, pears, walnuts, house dressing & edible flowers",
      },
      {
        name: "Soup of the Day",
        description: "Always seasonal, often featuring donations from local townsfolk — ask our team",
      },
      {
        name: "Mushroom & Gruy\u00e8re Tart",
        description: "Rustic short-crust pastry with wild mushrooms, Gruy\u00e8re & fresh thyme",
      },
      {
        name: "Cheese Toastie",
        description: "Three-cheese melt on sourdough with caramelised onion & house pickles",
      },
      {
        name: "The Ploughman\u2019s Board",
        description: "Local meats, artisan cheeses, house-made chutney, pickles & wood-fired bread",
      },
    ],
  },
  {
    title: "Sweets",
    items: [
      {
        name: "Cherry Pie",
        description: "Our signature. Rich, jammy cherries in a butter-short pastry. Served warm with double cream.",
        note: "Must Try",
      },
      {
        name: "House-made Cakes",
        description: "Rotating daily selection — always ask the counter what\u2019s just come out of the oven",
      },
      {
        name: "Honey & Lavender Scones",
        description: "Light, fluffy scones with whipped lavender cream & house strawberry jam",
      },
      {
        name: "Seasonal Crumble",
        description: "Whatever\u2019s ripe and wonderful, bubbling under an oat & brown butter crumble",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Kindred Coffee",
        description: "Our house blend, roasted with love. Available as espresso, filter, or cold brew",
        note: "House Blend",
      },
      {
        name: "Single Origin Pour Over",
        description: "Ask our baristas about the current rotating single origin offering",
      },
      {
        name: "Chai Latte",
        description: "House-spiced masala chai with steamed milk of your choice",
      },
      {
        name: "Adelaide Hills Juices",
        description: "Seasonal cold-pressed juices made with local fruit from the Valley",
      },
      {
        name: "Tea Selection",
        description: "A curated collection of loose-leaf teas served in a proper pot",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-[380px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/baker.png"
          alt="Cherry Bomb Cafe kitchen — freshly baked bread being sliced by a team member in a red apron"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1612]/60" />
        <div className="relative z-10 text-center pt-28">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547] mb-2">
            Simple, wholesome &amp; seasonal
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#F1E8D4]">
            Our Menu
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
        <p className="text-[#3a2e24] leading-relaxed text-lg">
          Our rustic homestyle menu seeks to combine the best of local produce from the iconic
          Piccadilly Valley region. We keep it simple, wholesome, and seasonal &mdash; and our
          specials often include donations from local townsfolk. Don&rsquo;t miss our signature
          Cherry Pie.
        </p>
      </section>

      {/* Menu sections */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        {menuSections.map((section, si) => (
          <div key={section.title} className={si !== 0 ? "mt-16" : ""}>
            {/* Section header */}
            <div className="flex items-center gap-6 mb-10">
              <span className="block w-14 h-0.5 bg-[#8B1A1A]" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#8B1A1A]">
                {section.title}
              </h2>
              <div className="flex-1 h-px bg-[#d4c4a0]" />
            </div>

            {/* Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-4 p-5 bg-[#EDE3CC] rounded-sm border border-[#d4c4a0]"
                >
                  <span className="text-[#8B1A1A] text-lg mt-0.5 leading-none font-[family-name:var(--font-cormorant)]">✦</span>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612]">
                        {item.name}
                      </h3>
                      {item.note && (
                        <span className="text-xs bg-[#8B1A1A] text-[#F1E8D4] px-2 py-0.5 rounded-sm font-[family-name:var(--font-lora)]">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#5a4a3a] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Note */}
      <section className="py-12 px-6 bg-[#EDE3CC] text-center">
        <p className="text-sm text-[#5a4a3a] max-w-xl mx-auto leading-relaxed">
          Our menu changes with the seasons. Please speak with our team about daily specials,
          dietary requirements, and allergen information. We are always happy to accommodate where
          we can.
        </p>
      </section>
    </>
  );
}
