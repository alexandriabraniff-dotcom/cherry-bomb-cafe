import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Us — Cherry Bomb Cafe",
  description:
    "Cherry Bomb Cafe is located at 253 Lobethal Rd, Ashton SA 5137 in the Adelaide Hills. Directions, parking, and contact details.",
};

export default function FindUsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-[380px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/sign.png"
          alt="The Cherry Bomb Cafe hanging sign on the stone cottage exterior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1612]/60" />
        <div className="relative z-10 text-center pt-28">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547] mb-2">
            Come find us
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#F1E8D4]">
            Find Us
          </h1>
        </div>
      </section>

      {/* Address & map */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Details */}
          <div>
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1A1612] mb-8">
              Where to find us
            </h2>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#8B1A1A] mb-2">
                  Address
                </h3>
                <address className="not-italic text-[#3a2e24] leading-relaxed">
                  253 Lobethal Rd<br />
                  Ashton SA 5137<br />
                  Adelaide Hills, South Australia
                </address>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#8B1A1A] mb-2">
                  Hours
                </h3>
                <p className="text-[#3a2e24] text-sm leading-relaxed">
                  Wednesday – Sunday: 8:00 am – 3:00 pm<br />
                  Monday &amp; Tuesday: Closed<br />
                  Closed on public holidays<br />
                  <span className="text-[#6a5a4a] italic">Walk-ins only — no bookings</span>
                </p>
              </div>

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
                  Follow Us
                </h3>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="https://www.instagram.com/cherry_bomb_cafe_ashton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3a2e24] text-sm hover:text-[#8B1A1A] transition-colors"
                  >
                    Instagram: @cherry_bomb_cafe_ashton
                  </a>
                  <a
                    href="https://www.facebook.com/cherrybombcafeashton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3a2e24] text-sm hover:text-[#8B1A1A] transition-colors"
                  >
                    Facebook: Cherry Bomb Cafe | Ashton SA
                  </a>
                  <a
                    href="mailto:cherrybombcafe@outlook.com"
                    className="text-[#3a2e24] text-sm hover:text-[#8B1A1A] transition-colors"
                  >
                    cherrybombcafe@outlook.com
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
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="rounded-sm overflow-hidden shadow-[0_8px_40px_rgba(26,22,18,0.12)] h-96 lg:h-[520px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3!2d138.7177!3d-34.9746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s253+Lobethal+Rd%2C+Ashton+SA+5137!5e0!3m2!1sen!2sau!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cherry Bomb Cafe location map — 253 Lobethal Rd, Ashton SA 5137"
            />
          </div>
        </div>
      </section>

      {/* Getting here tips */}
      <section className="py-20 px-6 bg-[#EDE3CC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="block w-14 h-0.5 bg-[#8B1A1A] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#1A1612]">
              Getting Here
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "By Car",
                desc: "Ashton is approximately 20–25 minutes from Adelaide CBD via the South Eastern Freeway (M1). Take the Piccadilly exit and follow Lobethal Rd through the valley. Street parking is available near the cafe.",
              },
              {
                title: "By Bus",
                desc: "Route 821 (LinkSA) departs Stop K1, Hutt St, Adelaide CBD. Journey time ~31 min, fare ~$3. Runs Monday–Friday only — for weekend visits, driving or rideshare is recommended. Check linksa.com.au for current timetables.",
              },
              {
                title: "Accessibility",
                desc: "The cafe is accessible at ground level. Please contact us in advance if you have specific accessibility requirements and we will do our very best to ensure a wonderful visit.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#F1E8D4] p-6 rounded-sm border border-[#d4c4a0]">
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#1A1612] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5a4a3a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garden photo footer */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="/images/garden.png"
          alt="The lush garden path at Cherry Bomb Cafe"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1A1612]/30 flex items-center justify-center">
          <p className="font-[family-name:var(--font-cormorant)] italic text-3xl md:text-4xl text-[#F1E8D4] text-center px-6">
            &ldquo;We can&rsquo;t wait to welcome you.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
