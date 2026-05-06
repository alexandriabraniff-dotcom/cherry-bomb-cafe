"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/local-transport", label: "Local Transport" },
];

const rightLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/hours", label: "Hours" },
  { href: "/find-us", label: "Find Us" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const heroRef = useRef<number>(0);

  useEffect(() => {
    // Measure hero height once
    const hero = document.querySelector("[data-hero]") as HTMLElement | null;
    heroRef.current = hero ? hero.offsetHeight : window.innerHeight;

    const onScroll = () => {
      setScrolled(window.scrollY > heroRef.current - 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (dark: boolean) =>
    `font-[family-name:var(--font-lora)] text-[0.8rem] tracking-widest uppercase relative group transition-colors duration-200 ${
      dark
        ? "text-[#1A1612] hover:text-[#8B1A1A]"
        : "text-[#F1E8D4] hover:text-[#E8A547]"
    }`;

  const underline = (dark: boolean) =>
    `absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
      dark ? "bg-[#8B1A1A]" : "bg-[#E8A547]"
    }`;

  return (
    <>
      {/* ── HERO NAV — transparent, always visible ──────────── */}
      <header className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        {/* Creator banner */}
        <div className="bg-[#8B1A1A]/80 text-[#F1E8D4] text-center text-xs py-1.5 px-4 pointer-events-auto">
          Website created by <strong>Alexandria Braniff</strong> &mdash;{" "}
          <a href="mailto:alexandriabraniff@gmail.com" className="underline hover:opacity-80">
            alexandriabraniff@gmail.com
          </a>
        </div>

        {/* Split nav */}
        <nav
          className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center px-10 py-6 pointer-events-auto"
          aria-label="Main navigation"
        >
          {/* Left links */}
          <div className="flex items-center gap-8 justify-end">
            {leftLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(false)}>
                {link.label}
                <span className={underline(false)} />
              </Link>
            ))}
          </div>

          {/* Center logo — circular on hero */}
          <Link
            href="/"
            className="mx-10 flex-shrink-0 rounded-full overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.35)] ring-2 ring-[#E8A547]/40"
          >
            <Image
              src="/images/logo.jpg"
              alt="Cherry Bomb Cafe"
              width={96}
              height={96}
              className="h-24 w-24 object-cover"
              priority
            />
          </Link>

          {/* Right links */}
          <div className="flex items-center gap-8 justify-start">
            {rightLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(false)}>
                {link.label}
                <span className={underline(false)} />
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile hero bar */}
        <div className="lg:hidden flex items-center justify-between px-6 py-5 pointer-events-auto">
          <Link
            href="/"
            className="rounded-full overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-2 ring-[#E8A547]/40"
          >
            <Image
              src="/images/logo.jpg"
              alt="Cherry Bomb Cafe"
              width={56}
              height={56}
              className="h-14 w-14 object-cover"
              priority
            />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#F1E8D4] hover:text-[#E8A547] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ── SCROLLED NAV — slides down after hero ───────────── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        } bg-[#F1E8D4]/97 backdrop-blur-sm shadow-[0_2px_20px_rgba(26,22,18,0.1)]`}
      >
        {/* Desktop scrolled split nav */}
        <nav
          className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center px-10 py-3"
          aria-label="Scrolled navigation"
        >
          <div className="flex items-center gap-8 justify-end">
            {leftLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(true)}>
                {link.label}
                <span className={underline(true)} />
              </Link>
            ))}
          </div>

          <Link href="/" className="mx-10">
            <Image
              src="/images/logo.jpg"
              alt="Cherry Bomb Cafe"
              width={80}
              height={80}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-8 justify-start">
            {rightLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(true)}>
                {link.label}
                <span className={underline(true)} />
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile scrolled bar */}
        <div className="lg:hidden flex items-center justify-between px-6 py-3">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="Cherry Bomb Cafe"
              width={60}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#1A1612] hover:text-[#8B1A1A] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* ── MOBILE DRAWER ────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div
            className="flex-1 bg-[#1A1612]/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="w-72 bg-[#EDE3CC] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#d4c4a0]">
              <Image
                src="/images/logo.jpg"
                alt="Cherry Bomb Cafe"
                width={60}
                height={60}
                className="h-12 w-auto object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#1A1612] hover:text-[#8B1A1A]"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 gap-5">
              {allLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#1A1612] hover:text-[#8B1A1A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
