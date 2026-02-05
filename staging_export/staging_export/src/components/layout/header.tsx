"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tools", href: "/tools" },
    { name: "Why Us", href: "/why-us" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Logo />

                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="tel:4040000088" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                            <Phone className="h-4 w-4" />
                            404-000-0088
                        </a>
                        <Button size="sm" className="hidden lg:inline-flex" asChild>
                            <Link href="/contact">Get Free Estimate</Link>
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}>
                            <span className="sr-only">Toggle menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </Button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div id="mobile-menu" className="hidden absolute top-20 left-0 w-full bg-white border-b shadow-lg p-6 md:hidden">
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-gray-900 hover:text-primary transition-colors border-b border-gray-100 pb-2"
                                    onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <a href="tel:4040000088" className="flex items-center gap-2 text-lg font-semibold text-primary mb-4">
                                    <Phone className="h-5 w-5" />
                                    404-000-0088
                                </a>
                                <Button className="w-full justify-center" asChild>
                                    <Link href="/contact">Get Free Estimate</Link>
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            </Container>
        </header>
    );
}
