import { Container } from "@/components/ui/container";
import Image from "next/image";
import { Check } from "lucide-react";

const features = [
    "Licensed & Insured in Georgia",
    "5-Year Workmanship Warranty",
    "Free On-Site Estimates",
    "HOA & Permit Assistance",
    "Local Atlanta Team",
    "Premium Materials Only"
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/10" />
            <Container className="relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Built to Withstand Georgia Weather
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            We don't just build decks; we build outdoor living spaces engineered for the humid Southern climate.
                            Our local expertise means we know exactly what materials and techniques prevent rot, warping, and sun damage.
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-4 w-4 text-green-400" />
                                    </div>
                                    <span className="font-medium text-gray-200">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                        <img
                            src="https://placehold.co/800x800/1B4D3E/FFFFFF?text=Quality+Craftsmanship"
                            alt="Detail of deck craftsmanship"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
