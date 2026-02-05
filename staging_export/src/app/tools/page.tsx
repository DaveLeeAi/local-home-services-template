import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Scale, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ToolsIndexPage() {
    return (
        <main className="bg-slate-50 py-24">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        Deck Planning Tools
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Plan your budget, compare materials, and estimate ROI with our interactive calculators.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Cost Calculator */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Calculator className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Cost Calculator</h2>
                        <p className="text-muted-foreground mb-8 flex-1">
                            Get an instant price range estimate for a new deck in Atlanta based on size, material, and site conditions.
                        </p>
                        <Button className="w-full" asChild>
                            <Link href="/tools/deck-cost-atlanta">
                                Start Estimate <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Comparison Tool */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
                            <Scale className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Wood vs. Composite</h2>
                        <p className="text-muted-foreground mb-8 flex-1">
                            Compare the specific 10-year cost of ownership between pressure-treated wood and composite decking.
                        </p>
                        <Button className="w-full" variant="outline" asChild>
                            <Link href="/tools/composite-vs-wood">
                                Compare Materials <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* ROI Calculator */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-6">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">ROI Estimator</h2>
                        <p className="text-muted-foreground mb-8 flex-1">
                            See how much value a new outdoor living space could add to your home resale value.
                        </p>
                        <Button className="w-full" variant="outline" asChild>
                            <Link href="/tools/deck-roi">
                                Calculate Value <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </main>
    );
}
