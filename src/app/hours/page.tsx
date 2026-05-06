import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hours — Cherry Bomb Cafe",
  description:
    "Cherry Bomb Cafe trading hours. Open for breakfast and lunch in Ashton, Adelaide Hills SA.",
};

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "8:00 am — 3:00 pm" },
  { day: "Thursday", time: "8:00 am — 3:00 pm" },
  { day: "Friday", time: "8:00 am — 3:00 pm" },
  { day: "Saturday", time: "8:00 am — 3:00 pm" },
  { day: "Sunday", time: "8:00 am — 3:00 pm" },
];

export default function HoursPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-[380px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/espresso-machine.png"
          alt="La Marzocco espresso machine at Cherry Bomb Cafe"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1612]/65" />
        <div className="relative z-10 text-center pt-28">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547] mb-2">
            We&rsquo;ll have the kettle on
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#F1E8D4]">
            Trading Hours
          </h1>
        </div>
      </section>

      {/* Hours table */}
      <section className="py-24 px-6 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1A1612]">
            When to Find Us
          </h2>
        </div>

        <div className="bg-[#EDE3CC] rounded-sm border border-[#d4c4a0] overflow-hidden shadow-sm">
          {hours.map((row, i) => (
            <div
              key={row.day}
              className={`flex justify-between items-center px-8 py-5 ${
                i !== hours.length - 1 ? "border-b border-[#d4c4a0]" : ""
              } ${row.time === "Closed" ? "opacity-50" : ""}`}
            >
              <span className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612]">
                {row.day}
              </span>
              <span
                className={`font-[family-name:var(--font-lora)] text-sm ${
                  row.time === "Closed" ? "text-[#8a6a5a] italic" : "text-[#8B1A1A] font-semibold"
                }`}
              >
                {row.time}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6a5a4a] mt-6 leading-relaxed">
          Closed on public holidays. Walk-ins only &mdash; no bookings taken. Please check our Instagram{" "}
          <a
            href="https://www.instagram.com/cherry_bomb_cafe_ashton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B1A1A] hover:underline"
          >
            @cherry_bomb_cafe_ashton
          </a>{" "}
          for any changes.
        </p>
      </section>

      {/* Kitchen note */}
      <section className="pb-24 px-6 max-w-2xl mx-auto">
        <div className="bg-[#8B1A1A] text-[#F1E8D4] p-8 rounded-sm text-center">
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold mb-3">
            Kitchen Hours
          </h3>
          <p className="text-sm leading-relaxed text-[#EDE3CC]/90">
            We serve food during all trading hours. Kitchen closes 30 minutes before close.
            Last coffee orders 15 minutes before close.
          </p>
        </div>
      </section>

      {/* Public holidays note */}
      <section className="py-16 px-6 bg-[#EDE3CC] text-center">
        <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#1A1612] mb-4">
          Public Holidays &amp; Special Closures
        </h3>
        <p className="text-[#5a4a3a] max-w-md mx-auto leading-relaxed text-sm">
          We do our best to trade on most public holidays, but hours can vary. We announce any
          changes on our Instagram page before the holiday. Follow us to stay in the loop.
        </p>
      </section>
    </>
  );
}
