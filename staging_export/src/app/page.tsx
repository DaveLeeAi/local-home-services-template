import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-us";
import { Reviews } from "@/components/sections/reviews";
import { Process } from "@/components/sections/process";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <ServicesOverview />
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
                <div key={item} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group">
                  <Image
                    src={`/hero/hero-${(item % 5) + 1}.webp`} // Cycling through available assets
                    alt="Recent Deck Project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Reviews />

        {/* Service Area */}
        <section className="py-24 bg-slate-900 text-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Serving the Greater Atlanta Area</h2>
                <p className="text-gray-300 text-lg mb-8">
                  We are locally owned and operated. Our team understands local building codes, HOA requirements, and the specific challenges of our climate.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Atlanta", "Alpharetta", "Roswell", "Marietta", "Sandy Springs", "Johns Creek", "Dunwoody", "Decatur"].map((city) => (
                    <div key={city} className="flex items-center gap-2 text-gray-200">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="h-14 px-8" asChild>
                  <Link href="/contact">Check Your Zip Code</Link>
                </Button>
              </div>
              <div className="h-[400px] bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                {/* Placeholder for map - could use an image of a map */}
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Local Experts</h3>
                  <p className="text-gray-400 mt-2">We come to you for a free on-site consultation.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-secondary">
          <Container className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-green-100 text-xl max-w-2xl mx-auto mb-10">
              Don&apos;t wait for summer. Schedule your consultation now to ensure your deck is ready for the season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 bg-white text-secondary hover:bg-gray-100 font-bold text-lg" asChild>
                <Link href="/contact">Get Free Information</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-white text-white hover:bg-white/10 font-bold text-lg" asChild>
                <Link href="tel:4040000088">Call 404-000-0088</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
