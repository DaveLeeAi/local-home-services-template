"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Calculator, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DeckCostCalculator() {
    const [size, setSize] = useState(300);
    const [material, setMaterial] = useState("pressure-treated");
    const [elevation, setElevation] = useState("ground");
    const [stairs, setStairs] = useState(true);
    const [demo, setDemo] = useState(false);

    // Add-ons
    const [lighting, setLighting] = useState(false);
    const [drainage, setDrainage] = useState(false);

    // Initial load from local storage
    useEffect(() => {
        const saved = localStorage.getItem("deck-cost-inputs");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.size) setSize(parsed.size);
                if (parsed.material) setMaterial(parsed.material);
                if (parsed.elevation) setElevation(parsed.elevation);
                setStairs(parsed.stairs); // boolean might need careful handling if undefined, but JSON.parse handles true/false
            } catch (e) {
                // ignore error
            }
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        localStorage.setItem("deck-cost-inputs", JSON.stringify({ size, material, elevation, stairs }));
    }, [size, material, elevation, stairs]);


    const calculateCost = () => {
        // Base Rates
        let baseRateLow = material === "pressure-treated" ? 35 : 65;
        let baseRateHigh = material === "pressure-treated" ? 55 : 95;

        // Elevation Factor
        if (elevation === "elevated") {
            baseRateLow *= 1.25;
            baseRateHigh *= 1.25;
        } else if (elevation === "second-story") {
            baseRateLow *= 1.4;
            baseRateHigh *= 1.4;
        }

        let min = size * baseRateLow;
        let max = size * baseRateHigh;

        // Stairs
        if (stairs) {
            // Flight complexity
            if (elevation === "elevated") {
                min += 1800;
                max += 2500;
            } else if (elevation === "second-story") {
                min += 3500;
                max += 5000;
            } else {
                // Ground level usually 2-3 steps, simpler
                min += 800;
                max += 1200;
            }
        }

        // Demo
        if (demo) {
            // Rough estimate $4-$8 per sq ft
            min += (size * 4);
            max += (size * 8);
        }

        // Add-ons
        if (lighting) {
            min += 300; // Transformer + basic lights
            max += 1500;
        }

        if (drainage && elevation !== "ground") {
            // Under-deck drainage
            min += (size * 12);
            max += (size * 18);
        }

        return { min: Math.round(min), max: Math.round(max) };
    };

    const cost = calculateCost();

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header / Nav-back */}
            <div className="bg-white border-b py-4">
                <Container>
                    <Link href="/tools" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools
                    </Link>
                </Container>
            </div>

            <Container className="py-12">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Atlanta Deck Cost Calculator</h1>
                    <p className="text-muted-foreground">
                        Estimate your project investment based on 2026 local market rates.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Controls */}
                    <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div className="space-y-8">
                            {/* Size */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-bold text-gray-900">Deck Size</label>
                                    <span className="text-sm font-mono bg-slate-100 px-2 py-1 rounded">{size} sq. ft.</span>
                                </div>
                                <input
                                    type="range"
                                    min="100"
                                    max="1200"
                                    step="20"
                                    value={size}
                                    onChange={(e) => setSize(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <p className="text-xs text-muted-foreground mt-2">Common sizes: 10x10 (100), 12x12 (144), 16x20 (320)</p>
                            </div>

                            {/* Material */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-3">Material Grade</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setMaterial("pressure-treated")}
                                        className={`p-3 text-left rounded-lg border-2 transition-all ${material === "pressure-treated" ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-slate-100 hover:border-slate-300"}`}
                                    >
                                        <div className="font-semibold text-gray-900">Wood</div>
                                        <div className="text-xs text-muted-foreground">Pressure-treated pine</div>
                                    </button>
                                    <button
                                        onClick={() => setMaterial("composite")}
                                        className={`p-3 text-left rounded-lg border-2 transition-all ${material === "composite" ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-slate-100 hover:border-slate-300"}`}
                                    >
                                        <div className="font-semibold text-gray-900">Composite</div>
                                        <div className="text-xs text-muted-foreground">Trex / TimberTech</div>
                                    </button>
                                </div>
                            </div>

                            {/* Elevation */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-3">Elevation</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {[{ id: 'ground', label: 'Ground' }, { id: 'elevated', label: 'Raised (<8\')' }, { id: 'second-story', label: '2nd Story' }].map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setElevation(opt.id)}
                                            className={`p-2 text-center text-sm rounded-md border transition-all ${elevation === opt.id ? "bg-slate-800 text-white border-slate-800" : "bg-white border-slate-200 hover:bg-slate-50"}`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Toggles */}
                            <div className="space-y-4">
                                <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                                    <input type="checkbox" checked={stairs} onChange={e => setStairs(e.target.checked)} className="w-5 h-5 text-primary rounded focus:ring-primary" />
                                    <span className="text-sm font-medium">Include Stairs?</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                                    <input type="checkbox" checked={demo} onChange={e => setDemo(e.target.checked)} className="w-5 h-5 text-primary rounded focus:ring-primary" />
                                    <span className="text-sm font-medium">Demolition of old deck?</span>
                                </label>
                                <div className="border-t pt-4 mt-4">
                                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Add-Ons</p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked={lighting} onChange={e => setLighting(e.target.checked)} className="w-4 h-4 text-primary rounded" />
                                            <span className="text-sm">Lighting Pkg</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked={drainage} onChange={e => setDrainage(e.target.checked)} disabled={elevation === 'ground'} className="w-4 h-4 text-primary rounded disabled:opacity-50" />
                                            <span className={`text-sm ${elevation === 'ground' ? 'text-gray-400' : ''}`}>Under-Deck Drainage</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-5">
                        <div className="bg-slate-900 text-white rounded-2xl shadow-xl p-8 sticky top-24">
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-slate-300 mb-1">Estimated Range</h2>
                                <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                    ${cost.min.toLocaleString()} - ${cost.max.toLocaleString()}
                                </div>
                            </div>

                            <div className="space-y-4 text-sm text-slate-400 mb-8 border-t border-slate-700 pt-6">
                                <p className="font-semibold text-white mb-2">Cost Drivers included:</p>
                                <ul className="space-y-2">
                                    <li className="flex justify-between">
                                        <span>Size</span>
                                        <span>{size} sq. ft.</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Material</span>
                                        <span className="capitalize">{material}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Complexity</span>
                                        <span className="capitalize">{elevation.replace('-', ' ')}</span>
                                    </li>
                                    {stairs && <li className="flex justify-between text-green-400"><span>+ Stairs</span><CheckCircle className="h-4 w-4" /></li>}
                                    {demo && <li className="flex justify-between text-green-400"><span>+ Demolition</span><CheckCircle className="h-4 w-4" /></li>}
                                    {drainage && <li className="flex justify-between text-green-400"><span>+ Drainage</span><CheckCircle className="h-4 w-4" /></li>}
                                </ul>
                            </div>

                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6">
                                <div className="flex gap-3">
                                    <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
                                    <p className="text-xs text-amber-200">
                                        <strong>Note:</strong> This is a preliminary estimate only. Markets fluctuate. Final pricing requires an on-site inspection.
                                    </p>
                                </div>
                            </div>

                            <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-14" asChild>
                                <Link href="/contact">Get Official Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
