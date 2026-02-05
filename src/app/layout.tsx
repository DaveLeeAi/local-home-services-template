import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/chat/widget";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peachtree Outdoor Living | Custom Decks & Outdoor Structures",
  description: "Premier custom deck builder in Atlanta, GA. Specializing in composite decks, repairs, and outdoor living spaces.",
  metadataBase: new URL("https://peachtreeoutdoor.com"),
  openGraph: {
    title: "Peachtree Outdoor Living | Custom Decks & Outdoor Structures",
    description: "Premier custom deck builder in Atlanta, GA. Specializing in composite decks, repairs, and outdoor living spaces.",
    url: "https://peachtreeoutdoor.com",
    siteName: "Peachtree Outdoor Living",
    images: [
      {
        url: "/images/hero-main.png", // Using main hero as OG image fallback
        width: 1200,
        height: 630,
        alt: "Peachtree Outdoor Living Custom Deck",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// WARNING: Do not add nested layouts (layout.tsx) in subdirectories unless you intentionally want to opt-out of this global header/footer structure.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Peachtree Outdoor Living",
              "image": "https://peachtreeoutdoor.com/branding/logo.svg",
              "description": "Premium custom deck builder serving Atlanta, Alpharetta, Roswell, and Marietta. Specializing in composite decking, pergolas, and structural repairs.",
              "url": "https://peachtreeoutdoor.com",
              "telephone": "+14040000088",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$$",
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Deck Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Deck Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Composite Decking"
                  }
                }
              ],
              "areaServed": [
                "Atlanta", "Alpharetta", "Roswell", "Marietta", "Johns Creek",
                "Sandy Springs", "Dunwoody", "Decatur", "Smyrna", "Brookhaven",
                "Peachtree City", "Fayetteville", "Newnan", "Milton", "Cumming",
                "Suwanee", "Tucker", "Stone Mountain", "Snellville", "Lilburn",
                "Kennesaw", "Acworth", "Powder Springs", "Mableton", "Vinings",
                "Jonesboro", "Stockbridge", "McDonough", "Grant Park", "Inman Park"
              ]
            })
          }}
        />
        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
