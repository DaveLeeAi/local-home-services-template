"use client";

import dynamic from 'next/dynamic';
import { Container } from "@/components/ui/container";
import { Info } from "lucide-react";
import { useState } from "react";

const InteractiveMap = dynamic(() => import('@/components/ui/interactive-map'), {
    loading: () => <div className="h-full w-full min-h-[500px] bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">Loading Map...</div>,
    ssr: false
});

const SERVICE_REGIONS = [
    {
        name: "North Metro",
        counties: "Fulton, Gwinnett, Forsyth",
        compliance: "Permit assistance available for all Alpharetta & Roswell projects.",
        cities: ["Alpharetta", "Roswell", "Milton", "Johns Creek", "Sandy Springs", "Dunwoody", "Cumming", "Suwanee"]
    },
    {
        name: "Cobb & West",
        counties: "Cobb, Paulding",
        compliance: "Full code compliance for Marietta & Smyrna historic districts.",
        cities: ["Marietta", "Smyrna", "Kennesaw", "Acworth", "Powder Springs", "Mableton", "Vinings"]
    },
    {
        name: "Dekalb & East",
        counties: "DeKalb, Gwinnett",
        compliance: "We handle zoning requirements for Decatur & Stone Mountain.",
        cities: ["Decatur", "Tucker", "Stone Mountain", "Snellville", "Lilburn", "Chamblee", "Brookhaven"]
    },
    {
        name: "South Metro",
        counties: "Fayette, Coweta, Clayton",
        compliance: "Specialized deck foundations for Peachtree City golf cart paths.",
        cities: ["Peachtree City", "Fayetteville", "Newnan", "Jonesboro", "Stockbridge", "McDonough"]
    },
    {
        name: "Intown Atlanta",
        counties: "Fulton, DeKalb",
        compliance: "Expert navigation of Atlanta's tree ordinance & lot coverage limits.",
        cities: ["Buckhead", "Midtown", "Virginia Highland", "Ansley Park", "Grant Park", "Inman Park"]
    }
];

export function ServiceArea() {
    const [hoveredCity, setHoveredCity] = useState<string | null>(null);

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Proudly Serving Metro Atlanta</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        From the rolling hills of North Fulton to the historic streets of Decatur, we build premium custom decks across the entire metro area.
                    </p>
                    <h3 className="text-xl font-semibold text-primary">Building Custom Decks Across the Metro Atlanta Area</h3>
                </div>

                <div className="flex flex-col gap-12">
                    {/* Map Visualization */}
                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border-4 border-white shadow-xl z-0">
                        <InteractiveMap />
                    </div>

                    {/* Regional Grid - 4 Columns */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICE_REGIONS.map((region, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    <h3 className="font-bold text-lg text-slate-800 mb-1">{region.name}</h3>
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-1 rounded">
                                        {region.counties}
                                    </span>
                                </div>

                                <ul className="space-y-1 mb-4">
                                    {region.cities.map((city) => (
                                        <li
                                            key={city}
                                            className="text-sm text-slate-600 pl-2 border-l-2 border-slate-100 hover:border-primary hover:text-primary transition-colors duration-200"
                                            onMouseEnter={() => setHoveredCity(city)}
                                            onMouseLeave={() => setHoveredCity(null)}
                                        >
                                            {city}
                                        </li>
                                    ))}
                                </ul>

                                {/* Local Compliance Block */}
                                <div className="flex gap-2 items-start bg-amber-50/50 p-3 rounded-lg text-xs text-amber-900/80 border border-amber-100/50">
                                    <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-500" />
                                    <p>{region.compliance}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
