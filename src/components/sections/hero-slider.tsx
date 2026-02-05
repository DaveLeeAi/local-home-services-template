"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HERO_IMAGES = [
    { src: "/images/hero-main.png", alt: "Expansive wooden deck on a suburban brick home with pine trees" },
    { src: "/images/hero-2.png", alt: "Luxury outdoor living space with composite decking" },
    { src: "/images/hero-3.png", alt: "Custom screened porch and deck combination in Atlanta" },
    { src: "/images/hero-4.png", alt: "Beautiful backyard deck renovation with modern railings" },
    { src: "/images/hero-5.png", alt: "Premium outdoor entertainment area with dining set" },
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
                    {/* Static image optimization: No zoom, high quality, priority loading */}
                    <div className="relative w-full h-full">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            priority={true}
                            quality={100}
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-black/50" /> {/* Overlay for text readability */}
                    </div>
                </div>
            ))}
        </div>
    );
}
