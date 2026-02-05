"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";

export default function DeckROICalculator() {
    const [cost, setCost] = useState(25000);
    const [scenario, setScenario] = useState<"conservative" | "typical" | "optimistic">("typical");

    // ROI Multipliers based on market data
    const multipliers = {
        conservative: 0.55, // 55% recoup
        typical: 0.68,      // 68% recoup
        optimistic: 0.82    // 82% recoup
    };

    const recoupValue = Math.round(cost * multipliers[scenario]);
    const percentage = Math.round(multipliers[scenario] * 100);

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b py-4">
                <Container>
                    <Link href="/tools" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools
                    </Link>
                </Container>
            </div>

            <Container className="py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">ROI Estimator</h1>
                        <p className="text-muted-foreground">How much potential resale value does a deck add?</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-8 border-b border-slate-100">
                            <div className="mb-8">
                                <label className="block text-sm font-bold text-gray-900 mb-2">Estimated Project Cost: ${cost.toLocaleString()}</label>
                                <input
                                    type="range"
                                    min="5000"
                                    max="100000"
                                    step="1000"
                                    value={cost}
                                    onChange={(e) => setCost(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-3">Market Scenario</label>
                                <div className="grid grid-cols-3 gap-3">
                                    <button
                                        onClick={() => setScenario("conservative")}
                                        className={`p-3 rounded-lg border text-sm transition-all ${scenario === 'conservative' ? 'bg-slate-100 border-slate-400 font-semibold' : 'hover:bg-slate-50'}`}
                                    >
                                        Conservative (55%)
                                    </button>
                                    <button
                                        onClick={() => setScenario("typical")}
                                        className={`p-3 rounded-lg border text-sm transition-all ${scenario === 'typical' ? 'bg-blue-50 border-blue-200 text-blue-700 font-semibold' : 'hover:bg-slate-50'}`}
                                    >
                                        Typical (68%)
                                    </button>
                                    <button
                                        onClick={() => setScenario("optimistic")}
                                        className={`p-3 rounded-lg border text-sm transition-all ${scenario === 'optimistic' ? 'bg-green-50 border-green-200 text-green-700 font-semibold' : 'hover:bg-slate-50'}`}
                                    >
                                        Optimistic (82%)
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-50/50">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Projected Return</h2>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-5xl font-black text-gray-900">${recoupValue.toLocaleString()}</span>
                                <span className="text-lg font-medium text-green-600 mb-1">({percentage}%)</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-8">Estimated increase in home resale value.</p>

                            <div className="flex gap-4 p-4 bg-blue-50 text-blue-800 rounded-xl text-sm leading-relaxed">
                                <Info className="h-5 w-5 shrink-0" />
                                <p>
                                    <strong>Disclaimer:</strong> ROI varies significantly by neighborhood, local market conditions, and appraisal. Outdoor living spaces are typically high-ROI projects, but this is an estimate, not a guarantee of value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
