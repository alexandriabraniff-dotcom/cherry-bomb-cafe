import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/local-townsfolk", label: "Local Townsfolk" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2D4A35] text-[#EDE3CC]">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-10">

        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Cherry Bomb Cafe"
          width={160}
          height={160}
          className="object-contain"
        />

        {/* Name + tagline */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-[family-name:var(--font-pinyon)] text-5xl text-[#E8A547]">
            Cherry Bomb Cafe
          </p>
          <p className="text-[#A8B89A] text-sm leading-relaxed tracking-wide">
            A little cafe in the Adelaide Hills,
          </p>
          <p className="text-[#A8B89A] text-sm leading-relaxed tracking-wide">
            blooming year-round.
          </p>
        </div>

        {/* Address */}
        <a
          href="https://maps.google.com/?q=253+Lobethal+Rd+Ashton+SA+5137"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A8B89A] text-sm hover:text-[#E8A547] transition-colors tracking-wide"
        >
          253 Lobethal Rd, Ashton SA 5137
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#A8B89A] text-xs tracking-widest uppercase hover:text-[#E8A547] transition-colors font-[family-name:var(--font-lora)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider + copyright */}
        <div className="w-full border-t border-[#1F3A2A] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6a8a6a]">
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
