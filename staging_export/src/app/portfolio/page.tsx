"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data for Portfolio (Placeholders for now)
const PROJECTS = [
    {
        id: "1",
        title: "Luxury Composite Deck",
        category: "New Decks",
        image: "https://placehold.co/800x600/1e293b/ffffff.png?text=Luxury+Composite+Deck+Alpharetta",
        location: "Alpharetta, GA"
    },
    {
        id: "2",
        title: "Screened Porch Addition",
        category: "Porches",
        image: "https://placehold.co/800x600/334155/ffffff.png?text=Screened+Porch+Addition+Roswell",
        location: "Roswell, GA"
    },
    {
        id: "3",
        title: "Deck Safety Repair",
        category: "Repairs",
        image: "https://placehold.co/800x600/166534/ffffff.png?text=Structural+Repair+Marietta",
        location: "Marietta, GA"
    },
    {
        id: "4",
        title: "Modern Cedar Deck",
        category: "New Decks",
        image: "https://placehold.co/800x600/c2410c/ffffff.png?text=Cedar+Deck+Sandy+Springs",
        location: "Sandy Springs, GA"
    },
    {
        id: "5",
        title: "Custom Pergola",
        category: "Porches",
        image: "https://placehold.co/800x600/1e3a8a/ffffff.png?text=Custom+Pergola+Decatur",
        location: "Decatur, GA"
    },
    {
        id: "6",
        title: "Stair & Railing Replacement",
        category: "Repairs",
        image: "https://placehold.co/800x600/78350f/ffffff.png?text=Railing+Update+Atlanta",
        location: "Atlanta, GA"
    }
];



const categories = ["All", "New Decks", "Porches", "Repairs"];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredProjects = PROJECTS.filter((p: { category: string }) => {
        if (filter === "All") return true;
        if (filter === "New Decks") return p.category === "New Decks";
        if (filter === "Porches") return p.category === "Porches";
        if (filter === "Repairs") return p.category === "Repairs";
        return true;
    });

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 bg-slate-50 py-24">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
                            Our Portfolio
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Explore our recent projects across Atlanta. From custom builds to structural repairs, quality is our signature.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={filter === cat ? "default" : "outline"}
                                onClick={() => setFilter(cat)}
                                className="rounded-full"
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
                                onClick={() => setSelectedImage(project.image)}
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <ZoomIn className="text-white h-8 w-8 drop-shadow-md" />
                                    </div>
                                </div>
                                <div className="p-4 border-t border-gray-100">
                                    <h3 className="font-bold text-gray-900">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lightbox */}
                    {selectedImage && (
                        <div
                            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="h-8 w-8" />
                            </button>
                            <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                                <Image
                                    src={selectedImage}
                                    alt="Portfolio Preview"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    )}
                </Container>
            </main>
        </div>
    );
}
