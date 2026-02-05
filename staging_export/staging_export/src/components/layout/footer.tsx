import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t mt-auto">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <Logo />
                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                            Based in Atlanta, GA. We build custom decks, outdoor structures, and lasting memories for Georgia homeowners.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/services#installation" className="hover:text-primary">Deck Installation</Link></li>
                            <li><Link href="/services#repair" className="hover:text-primary">Deck Repair</Link></li>
                            <li><Link href="/services#composite" className="hover:text-primary">Composite Decking</Link></li>
                            <li><Link href="/services#pergolas" className="hover:text-primary">Pergolas & Patios</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/why-us" className="hover:text-primary">Why Choose Us</Link></li>
                            <li><Link href="/blog" className="hover:text-primary">Blog & Guides</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">Service Area</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Proudly serving Atlanta, Alpharetta, Roswell, Marietta, Sandy Springs, and surrounding communities.
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Peachtree Outdoor Living. All rights reserved.</p>
                    <p>Designed locally.</p>
                </div>
            </Container>
        </footer>
    );
}
