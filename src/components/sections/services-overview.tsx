import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Hammer, Ruler, ShieldCheck, Home } from "lucide-react";
import { getServiceMeta, serviceConfig } from "@/config/service";

const service = getServiceMeta(serviceConfig.type);

const services = [
    {
        title: "Custom Deck Design & Build",
        description: "Tailored designs that match your home's architecture. We build with premium pressure-treated pine or composite materials.",
        icon: Hammer,
        href: "/services#installation"
    },
    {
        title: "Deck Repair & Restoration",
        description: "Extend the life of your existing deck. We handle structural repairs, board replacement, and safety inspections.",
        icon: ShieldCheck,
        href: "/services#repair"
    },
    {
        title: "Composite Decking",
        description: "Low-maintenance, high-durability options from top brands like Trex and TimberTech. Built to last for decades.",
        icon: Home,
        href: "/services#composite"
    },
    {
        title: "Permits & Compliance",
        description: "We handle all Atlanta & metro area permitting, ensuring your project meets local building codes and HOA requirements.",
        icon: Ruler,
        href: "/services#process"
    }
];

export function ServicesOverview() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-primary">
                        Expert {service.label} Services
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        From ground-up builds to safety repairs, we provide the craftsmanship and reliability your home deserves.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((item) => (
                        <div key={item.title} className="flex flex-col items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                            <div className="p-3 bg-white rounded-xl shadow-sm mb-6">
                                <item.icon className="h-6 w-6 text-secondary" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                                {item.description}
                            </p>
                            <Link href={item.href} className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center">
                                Learn more <span aria-hidden="true" className="ml-1">&rarr;</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button size="lg" variant="secondary" asChild className="border-2 border-transparent hover:border-primary/10">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
