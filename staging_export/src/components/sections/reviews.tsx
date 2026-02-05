import { Container } from "@/components/ui/container";
import { Star } from "lucide-react";

const reviews = [
    {
        author: "Verified Homeowner",
        location: "Roswell, GA",
        text: "Peachtree Outdoor built us a beautiful composite deck. The team was professional, clean, and finished ahead of schedule.",
        date: "2 months ago"
    },
    {
        author: "Verified Homeowner",
        location: "Decatur, GA",
        text: "Had some serious rot on my old stairs. They came out for a free inspection and fixed it perfectly. Highly recommend.",
        date: "1 month ago"
    },
    {
        author: "Verified Homeowner",
        location: "Alpharetta, GA",
        text: "Love our new pergola! It's transformed our backyard. Great communication throughout the whole process.",
        date: "3 weeks ago"
    }
];

export function Reviews() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-primary">
                        Trusted by Your Neighbors
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic leading-relaxed">&quot;{review.text}&quot;</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <div className="font-semibold text-gray-900">{review.author}</div>
                                    <div className="text-sm text-muted-foreground">{review.location}</div>
                                </div>
                                <div className="text-xs text-muted-foreground">{review.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
