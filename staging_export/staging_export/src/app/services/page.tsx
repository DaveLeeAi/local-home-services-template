import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Hammer, ShieldCheck, Home, Ruler, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/hero/hero-2.webp"
                        alt="Deck Construction"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                            Premium Deck Services for <span className="text-secondary">Atlanta Homes</span>
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                            From custom composite builds to structural safety repairs, we bring expert craftsmanship to every project. Licensed, insured, and built to code.
                        </p>
                        <Button size="lg" className="h-14 px-8 text-lg" asChild>
                            <Link href="/contact#estimate">Request Free Estimate</Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Main Services */}
            <section id="installation" className="py-24 bg-white scroll-mt-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/hero/hero-3.webp"
                                alt="Custom Composite Deck Installation"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                <Hammer className="h-4 w-4" />
                                <span>New Construction</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Deck Design & Installation</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                We verify every detail of your site condition before we break ground. Whether you want the natural beauty of pressure-treated pine or the maintenance-free luxury of composite, we build decks that last.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Custom 3D Rendering & Design",
                                    "TimberTech & Trex Composite Certified",
                                    "Pressure-Treated Southern Yellow Pine",
                                    "Hidden Fastener Systems for a Clean Look",
                                    "Multi-Level Platform Designs"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/portfolio">View Recent Projects</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="repair" className="py-24 bg-slate-50 scroll-mt-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                                <ShieldCheck className="h-4 w-4" />
                                <span>Safety & Restoration</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Deck Repair & Safety Inspections</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                A shaky deck is a dangerous deck. Our repair team specializes in identifying and fixing structural issues, rot using Georgia code-compliant methods.
                            </p>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl border border-slate-200">
                                    <h3 className="font-semibold text-lg mb-2">Structural Reinforcement</h3>
                                    <p className="text-muted-foreground">We sister joists, replace rotted beams, and secure ledger boards to ensure your deck is safe for family gatherings.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200">
                                    <h3 className="font-semibold text-lg mb-2">Re-Decking</h3>
                                    <p className="text-muted-foreground">Keep your solid frame but upgrade the surface. We remove old boards and install modern composite decking for a brand new look at a lower cost.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                            <Image
                                src="/hero/hero-4.webp" // Intentionally reusing high-quality asset until more are generated
                                alt="Deck Repair Detail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section id="pergolas" className="py-24 bg-white scroll-mt-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pergolas & Covered Porches</h2>
                        <p className="text-lg text-muted-foreground">
                            Beat the Atlanta heat with a custom shade structure. We build integrated pergolas, screened porches, and pavilions that extend your living space outdoors.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Cedar Pergolas", desc: "Classic open-beam aesthetic causing dappled shade.", icon: Home },
                            { title: "Screened Porches", desc: "Enjoy the breeze without the mosquitoes.", icon: ShieldCheck },
                            { title: "Covered Patios", desc: "Full roof structures for rain-or-shine enjoyment.", icon: Ruler },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-2xl">
                                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-primary text-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Proven Process</h2>
                        <p className="text-white/80 max-w-2xl mx-auto">We've refined our workflow to minimize disruption to your home while maximizing quality.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", desc: "We meet on-site to measure, discuss materials, and provide a rough estimate." },
                            { step: "02", title: "Design & Permits", desc: "We create proper drawings and handle all county permitting for you." },
                            { step: "03", title: "Construction", desc: "Our crew works efficiently, keeping a clean job site every single day." },
                            { step: "04", title: "Walkthrough", desc: "We review the project with you to ensure 100% satisfaction." }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-black text-white/10 mb-[-20px] ml-4">{item.step}</div>
                                <div className="relative z-10 p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                    <p className="text-sm text-white/70">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mb-8">
                                Have a specific question about permits or materials? Check our knowledge base or chat with our automated assistant.
                            </p>
                            <Button asChild>
                                <Link href="/contact">Ask a Question</Link>
                            </Button>
                        </div>
                        <div className="lg:col-span-8 space-y-6">
                            {[
                                { q: "Do I really need a permit?", a: "In most Atlanta metro counties, yes. Any deck over 30 inches high or attached to the house requires a permit. We handle this entire headache for you." },
                                { q: "How long does a project take?", a: "A standard 12x12 deck takes about 1-2 weeks to build. However, permitting can take 2-4 weeks prior to that depending on your county." },
                                { q: "Wood vs. Composite: What's better?", a: "Composite (Trex/TimberTech) costs more upfront but lasts 25+ years with zero sanding or staining. Pressure-treated wood is cheaper but requires annual maintenance. In humid Georgia, we highly recommend composite." },
                                { q: "Do you offer financing?", a: "We work with third-party lenders to offer flexible payment plans for projects over $5,000." }
                            ].map((faq, i) => (
                                <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                                    <h3 className="font-semibold text-lg text-gray-900 mb-2 flex items-start gap-2">
                                        <HelpCircle className="h-5 w-5 text-secondary shrink-0 mt-1" />
                                        {faq.q}
                                    </h3>
                                    <p className="text-muted-foreground ml-7">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900">
                <Container>
                    <div className="bg-secondary rounded-3xl p-12 text-center md:text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Ready to transform your backyard?</h2>
                                <p className="text-green-100 text-lg">Schedule your free on-site consultation today.</p>
                            </div>
                            <div className="flex gap-4">
                                <Button size="lg" className="h-14 px-8 bg-white text-secondary hover:bg-gray-100" asChild>
                                    <Link href="/contact">Get Free Estimate</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 border-green-200 text-white hover:bg-white/10" asChild>
                                    <Link href="/portfolio">View Portfolio</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
