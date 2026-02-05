import { Container } from "@/components/ui/container";

const steps = [
    {
        number: "01",
        title: "Free Inspection & Estimate",
        description: "We visit your home to assess your space, discuss your vision, and provide a transparent, itemized quote."
    },
    {
        number: "02",
        title: "Design & Permitting",
        description: "Our team creates detailed plans and handles all HOA approvals and city permits so you don't have to."
    },
    {
        number: "03",
        title: "Expert Installation",
        description: "We build with precision, keeping a clean job site and communicating daily progress updates."
    },
    {
        number: "04",
        title: "Final Walkthrough",
        description: "We don't leave until you're 100% satisfied. Includes a full cleanup and warranty documentation."
    }
];

export function Process() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-primary">
                        Our Simple 4-Step Process·
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        From the first call to the final nail, we make building your dream deck stress-free.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="relative">
                            <div className="text-5xl font-bold text-green-100 mb-4">{step.number}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
