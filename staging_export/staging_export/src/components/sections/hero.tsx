import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ShieldCheck, Star, Trophy } from "lucide-react";
import { HeroBackgroundSlider } from "./hero-slider";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Slider */}
            <HeroBackgroundSlider />

            {/* Content */}
            <Container className="relative z-10 pt-20">
                <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span>#1 Rated Deck Builder in Atlanta Metro</span>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                        Custom Decks Built for <span className="text-secondary">Atlanta Homes</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-100 drop-shadow-md leading-relaxed">
                        Transform your backyard with premium composite decking, timber porches, and outdoor structures designed for Georgia&apos;s climate.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20 pointer-events-auto" asChild>
                            <Link href="/contact#estimate">Get Free Inspection</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-sm pointer-events-auto" asChild>
                            <Link href="/portfolio">View Our Portfolio</Link>
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="pt-12 grid grid-cols-3 gap-4 md:gap-8 items-center justify-center max-w-2xl mx-auto opacity-90">
                        <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                                <ShieldCheck className="h-6 w-6 text-secondary" />
                            </div>
                            <span className="text-sm font-medium text-white">5-Year Warranty</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                                <Trophy className="h-6 w-6 text-secondary" />
                            </div>
                            <span className="text-sm font-medium text-white">Award Winning</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                                <Star className="h-6 w-6 text-secondary" />
                            </div>
                            <span className="text-sm font-medium text-white">5-Star Rated</span>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
