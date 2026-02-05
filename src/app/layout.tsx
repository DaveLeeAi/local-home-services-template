import type { Metadata } from "next";
import { buildRootMetadata } from "@/lib/seo";
import { buildOrganizationSchema } from "@/lib/schema";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/chat/widget";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = buildRootMetadata();

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
            __html: JSON.stringify(buildOrganizationSchema())
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
