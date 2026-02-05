import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-us";
import { FAQ } from "@/components/sections/faq";
import { Reviews } from "@/components/sections/reviews";
import { Process } from "@/components/sections/process";
import { ServiceArea } from "@/components/sections/service-area";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <ServicesOverview />
        <ServiceArea />
        <WhyChooseUs />
        <Process />

        {/* Recent Work / Portfolio Preview */}
        <section className="py-24 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
                <p className="text-muted-foreground max-w-xl">
                  See how we've transformed backyards across the Atlanta metro area. From simple repairs to complete outdoor living oasis.
                </p>
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Full Portfolio</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                // Force a re-render/cache bust if needed by using a key or just relying on the image
                <div key={item} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group">
                  <Image
                    src={`/images/recent-project-v2-${item}.png`}
                    alt="Recent Deck Project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        <FAQ />



        <Reviews />
      </main>
    </div>
  );
}
