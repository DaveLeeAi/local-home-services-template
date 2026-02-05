"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MapPin, Star } from "lucide-react";
import { HeroBackgroundSlider } from "./hero-slider";
import { useState, useEffect } from "react";

const HERO_CONTENT = [
    {
        topLine: "Build the Perfect Deck",
        bottomLine: "For Your Home",
        subheadline: "Connect with licensed local builders for custom installations."
    },
    {
        topLine: "Repair Your Deck",
        bottomLine: "Before It’s Too Late",
        subheadline: "Fast, reliable fixes for damaged or aging decks."
    },
    {
        topLine: "Transform Your Old Deck",
        bottomLine: "Like New Again",
        subheadline: "Bring your weathered deck back to life with expert care."
    },
    {
        topLine: "Compare Top Builders",
        bottomLine: "Near You",
        subheadline: "Free estimates from verified Metro Atlanta professionals."
    }
];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_CONTENT.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const content = HERO_CONTENT[currentIndex];

    return (
        <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Slider */}
            <HeroBackgroundSlider />

            {/* Content */}
            <Container className="relative z-10 pt-12">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    <div key={currentIndex} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* ... (text remains) ... */}
                        <div className="flex flex-col items-center justify-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg min-h-[2.4em]">
                            <span className="text-white block">{content.topLine}</span>
                            <span className="text-amber-300 animate-pulse-slow block mt-2">{content.bottomLine}</span>
                        </div>

                        <p className="max-w-2xl mx-auto text-xl text-gray-100 drop-shadow-md leading-relaxed h-[3.5rem] flex items-start justify-center">
                            {content.subheadline}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards">
                        <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20" asChild>
                            <Link href="/contact#estimate">Get Free Inspection</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
                            <Link href="/portfolio">View Our Portfolio</Link>
                        </Button>
                    </div>

                    {/* Trust / EEAT Block Removed per user request */}

                </div>
            </Container>
        </section>
    );
}
