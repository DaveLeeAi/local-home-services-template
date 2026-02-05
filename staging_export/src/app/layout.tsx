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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Peachtree Outdoor Living",
              "image": "https://peachtreeoutdoorliving.com/logo.png",
              "description": "Premium custom deck builder serving Atlanta, Alpharetta, Roswell, and Marietta. Specializing in composite decking, pergolas, and structural repairs.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Peachtree St NE",
                "addressLocality": "Atlanta",
                "addressRegion": "GA",
                "postalCode": "30303",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.7490,
                "longitude": -84.3880
              },
              "url": "https://peachtreeoutdoorliving.com",
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
              "priceRange": "$$$"
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
