"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, X } from "lucide-react";
import Link from "next/link";

export default function ComparisonCalculator() {
    const [size, setSize] = useState(400);
    const [woodType, setWoodType] = useState("pressure-treated");
    const [compType, setCompType] = useState("mid-range");
    const [railing, setRailing] = useState("composite-alum");
    const [stairs, setStairs] = useState("flight");

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
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Material Comparison</h1>
                    <p className="text-muted-foreground">See how choices impact cost and maintenance.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Inputs */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <label className="block font-bold mb-2">Deck Size: {size} sq ft</label>
                            <input type="range" min="100" max="1000" step="100" value={size} onChange={e => setSize(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                        </div>

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <label className="block font-bold mb-3">Wood Type</label>
                            <select value={woodType} onChange={e => setWoodType(e.target.value)} className="w-full p-2 border rounded-md">
                                <option value="pressure-treated">Pressure Treated (Standard)</option>
                                <option value="cedar">Cedar (Premium)</option>
                            </select>
                        </div>

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <label className="block font-bold mb-3">Composite Tier</label>
                            <select value={compType} onChange={e => setCompType(e.target.value)} className="w-full p-2 border rounded-md">
                                <option value="entry">Entry Level (Good)</option>
                                <option value="mid-range">Mid Range (Better)</option>
                                <option value="premium">Premium (Best)</option>
                            </select>
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div className="lg:col-span-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Wood Result */}
                            <div className="bg-white border-t-4 border-amber-400 p-6 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Wood Option</h3>
                                <p className="text-sm text-gray-500 mb-6 capitalize">{woodType.replace('-', ' ')}</p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm text-gray-600">Initial Cost</span>
                                        <span className="font-bold text-lg">
                                            ${woodType === 'cedar' ? (size * 55).toLocaleString() : (size * 40).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm text-gray-600">10-Year Maintenance</span>
                                        <div className="text-right">
                                            <span className="font-bold text-red-600 block">+${(450 * 10).toLocaleString()}</span>
                                            <span className="text-xs text-gray-400">($450/yr stain/seal)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-amber-900 text-sm mb-2">Maintenance Note</h4>
                                    <p className="text-xs text-amber-800">Requires annual pressure washing and staining/sealing every 1-2 years to prevent rot and graying.</p>
                                </div>
                            </div>

                            {/* Composite Result */}
                            <div className="bg-white border-t-4 border-blue-500 p-6 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Composite Option</h3>
                                <p className="text-sm text-gray-500 mb-6 capitalize">{compType.replace('-', ' ')}</p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm text-gray-600">Initial Cost</span>
                                        <span className="font-bold text-lg">
                                            ${compType === 'premium' ? (size * 95).toLocaleString() : compType === 'mid-range' ? (size * 80).toLocaleString() : (size * 65).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm text-gray-600">10-Year Maintenance</span>
                                        <div className="text-right">
                                            <span className="font-bold text-green-600 block">+${(50 * 10).toLocaleString()}</span>
                                            <span className="text-xs text-gray-400">($50/yr cleaning)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-900 text-sm mb-2">Maintenance Note</h4>
                                    <p className="text-xs text-blue-800">Soap and water cleaning needed once or twice a year. No sanding, staining, or sealing ever required.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
