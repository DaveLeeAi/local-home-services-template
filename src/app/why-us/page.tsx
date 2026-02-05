import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, HardHat, FileCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WhyUsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/hero/hero-5.webp"
                        alt="Peachtree Outdoor Team"
                        fill
                        className="object-cover"
                    />
                </div>
                <Container className="relative z-10">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">Built on Trust, Crafted for Life</h1>
                    <p className="text-xl text-gray-200 max-w-2xl">
                        We aren&apos;t just contractors; we&apos;re your neighbors. Discover why hundreds of Atlanta homeowners trust Peachtree Outdoor Living with their backyard transformations.
                    </p>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Peachtree Difference</h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                In an industry plagued by cut corners and no-shows, we built our business on a simple promise: <strong>We do what we say we will do</strong>.
                            </p>

                            <div className="mb-8 p-6 bg-slate-50 rounded-xl border-l-4 border-primary">
                                <h3 className="font-bold text-lg mb-2">Meet Your Lead Builder</h3>
                                <p className="text-gray-700 italic mb-2">&quot;I started framing houses in Gwinnett County in 2010. After seeing too many wobbly decks and rotted ledger boards, I decided to specialize strictly in outdoor living structures that are safe, code-compliant, and built to last generations.&quot;</p>
                                <p className="font-semibold text-primary">– Stuart, Founder & Master Carpenter</p>
                            </div>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Founded right here in Atlanta, our team understands the unique challenges of Georgia&apos;s climate—from the humidity that rots pine to the red clay that shifts foundations.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <HardHat className="h-8 w-8 text-secondary mb-4" />
                                    <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                                    <p className="text-sm text-muted-foreground">Fully covered with General Liability and Workers Comp for your peace of mind.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <FileCheck className="h-8 w-8 text-secondary mb-4" />
                                    <h3 className="font-bold text-gray-900 mb-2">Permit Experts</h3>
                                    <p className="text-sm text-muted-foreground">We handle 100% of the permitting process with your city or county.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <Users className="h-8 w-8 text-secondary mb-4" />
                                    <h3 className="font-bold text-gray-900 mb-2">Clean Job Sites</h3>
                                    <p className="text-sm text-muted-foreground">We sweep for nails and debris daily. We respect your property.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <ShieldCheck className="h-8 w-8 text-secondary mb-4" />
                                    <h3 className="font-bold text-gray-900 mb-2">5-Year Warranty</h3>
                                    <p className="text-sm text-muted-foreground">Our workmanship warranty is ironclad, plus manufacturer warranties on materials.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/hero/hero-1.webp"
                                    alt="Quality Craftsmanship"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-primary text-white p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-4">Our &quot;No Surprise&quot; Guarantee</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Transparent, itemized quotes",
                                        "No hidden change orders without approval",
                                        "Daily communication updates",
                                        "Final walkthrough before final payment"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-secondary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <Container className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Let&apos;s Discuss Your Project</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We&apos;d love to hear about your vision. Contact us today for a free, no-obligation consultation.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="h-14 px-8" asChild>
                            <Link href="/contact">Get Free Estimate</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8" asChild>
                            <Link href="/portfolio">See Our Work</Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
}
