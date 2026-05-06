import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cherry Bomb Cafe — Ashton, Adelaide Hills",
  description:
    "A charming bohemian-rustic cafe in Ashton, Adelaide Hills. House-made food, Kindred Coffee, artisan goods, and a magical Moroccan event space. 253 Lobethal Rd, Ashton SA 5137.",
  keywords: [
    "Cherry Bomb Cafe",
    "Ashton cafe",
    "Adelaide Hills cafe",
    "Piccadilly Valley",
    "bohemian cafe",
    "artisan coffee",
    "Moroccan event space",
    "SA cafe",
  ],
  openGraph: {
    title: "Cherry Bomb Cafe — Ashton, Adelaide Hills",
    description:
      "A charming bohemian-rustic cafe in Ashton, Adelaide Hills. House-made food, Kindred Coffee, artisan goods, and a Moroccan event space.",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/images/counter-florals.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${cormorant.variable} ${lora.variable} ${pinyon.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
