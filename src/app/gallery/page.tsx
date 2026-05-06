import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Cherry Bomb Cafe",
  description:
    "Photos from Cherry Bomb Cafe in Ashton, Adelaide Hills — our interior, kitchen, garden, and the iconic dried floral counter.",
};

const photos = [
  {
    src: "/images/counter-florals.png",
    alt: "The Cherry Bomb Cafe counter adorned with hanging bunches of dried flowers, Edison bulbs, and artisan goods on shelves",
    span: "md:col-span-2",
  },
  {
    src: "/images/baker.png",
    alt: "A Cherry Bomb Cafe team member in a cherry-red apron slicing warm bread with dried florals overhead",
    span: "",
  },
  {
    src: "/images/library-fireplace.png",
    alt: "The cosy library nook at Cherry Bomb Cafe — armchairs, bookshelves, and a glowing fireplace",
    span: "",
  },
  {
    src: "/images/interior-stools.png",
    alt: "Timber bar stools at the window bench overlooking the garden at Cherry Bomb Cafe",
    span: "",
  },
  {
    src: "/images/room-plants.png",
    alt: "A warm terracotta room at Cherry Bomb Cafe with clustered plants, candles, and a fireplace",
    span: "",
  },
  {
    src: "/images/espresso-machine.png",
    alt: "A La Marzocco espresso machine at Cherry Bomb Cafe brewing Kindred Coffee",
    span: "",
  },
  {
    src: "/images/garden.png",
    alt: "The lush fern and garden path leading to Cherry Bomb Cafe in Ashton",
    span: "md:col-span-2",
  },
  {
    src: "/images/sign.png",
    alt: "The Cherry Bomb Cafe hanging sign on the heritage cottage exterior, surrounded by greenery",
    span: "",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-64 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/garden.png"
          alt="The fern garden path at Cherry Bomb Cafe"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1612]/55" />
        <div className="relative z-10 text-center">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547] mb-2">
            In pictures
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#F1E8D4]">
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-sm group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#1A1612]/0 group-hover:bg-[#1A1612]/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 bg-[#EDE3CC] text-center">
        <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#1A1612] mb-4">
          Follow along on Instagram
        </h2>
        <p className="text-[#5a4a3a] mb-6 leading-relaxed">
          We share daily specials, behind-the-scenes moments, and seasonal inspiration.
        </p>
        <a
          href="https://www.instagram.com/cherrybombcafe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-[#8B1A1A] text-[#8B1A1A] font-[family-name:var(--font-lora)] text-sm tracking-wide hover:bg-[#8B1A1A] hover:text-[#F1E8D4] transition-colors rounded-sm"
        >
          @cherrybombcafe
        </a>
      </section>
    </>
  );
}
