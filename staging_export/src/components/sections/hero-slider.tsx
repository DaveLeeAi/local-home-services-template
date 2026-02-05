"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HERO_IMAGES = [
    { src: "/hero/atlanta-composite-deck-evening.webp", alt: "Modern composite deck in Atlanta backyard at sunset" },
    { src: "/hero/wood-deck-repair-construction.webp", alt: "Professional wood deck repair and restoration in progress" },
    { src: "/hero/elevated-deck-stairs-backyard.webp", alt: "Multi-level elevated deck with safety railings and stairs" },
    { src: "/hero/pergola-outdoor-living-southern.webp", alt: "Custom pergola shadestructure over outdoor living space" },
    { src: "/hero/premium-finished-deck-showcase.webp", alt: "Luxury finished deck project with glass railings" },
];

export function HeroBackgroundSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000); // 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black/60">
            {HERO_IMAGES.map((img, index) => (
                <div
                    key={img.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* We use a standard img tag or unoptimized Next Image for local file slider to ensure instant switching without heavy re-optimization on dev */}
                    {/* Adding subtle scale animation */}
                    <div className={`relative w-full h-full transition-transform duration-[6000ms] ease-linear ${index === currentIndex ? "scale-105" : "scale-100"}`}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-black/50" /> {/* Overlay for text readability */}
                    </div>
                </div>
            ))}
        </div>
    );
}
