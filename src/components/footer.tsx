import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/local-transport", label: "Local Transport" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/hours", label: "Hours" },
  { href: "/find-us", label: "Find Us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2D4A35] text-[#EDE3CC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.jpg"
              alt="Cherry Bomb Cafe"
              width={80}
              height={80}
              className="h-16 w-auto object-contain brightness-[0.9] saturate-[0.8]"
            />
            <p className="text-[#A8B89A] text-sm leading-relaxed max-w-xs">
              A little cafe in the Adelaide Hills, blooming year-round.
            </p>
            <p className="font-[family-name:var(--font-pinyon)] text-3xl text-[#E8A547] mt-2">
              Cherry Bomb Cafe
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#F1E8D4] mb-5">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#A8B89A] text-sm hover:text-[#E8A547] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#F1E8D4] mb-5">
              Visit Us
            </h3>
            <address className="not-italic text-[#A8B89A] text-sm flex flex-col gap-2.5">
              <span>253 Lobethal Rd<br />Ashton SA 5137</span>
              <span>Adelaide Hills, South Australia</span>
              <a
                href="https://www.instagram.com/cherrybombcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8A547] transition-colors"
                aria-label="Cherry Bomb Cafe on Instagram"
              >
                @cherrybombcafe
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1F3A2A] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#6a8a6a]">
          <p>&copy; {new Date().getFullYear()} Cherry Bomb Cafe. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="mailto:alexandriabraniff@gmail.com"
              className="hover:text-[#E8A547] transition-colors"
            >
              Alexandria Braniff
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
