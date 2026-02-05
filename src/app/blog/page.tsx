import { Container } from "@/components/ui/container";
import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogIndexPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 bg-white">
                <div className="bg-slate-900 py-20">
                    <Container>
                        <h1 className="text-4xl font-bold text-white mb-4">Our Blog</h1>
                        <p className="text-xl text-gray-300 max-w-2xl">Expert advice, tips, and guides for Atlanta homeowners.</p>
                    </Container>
                </div>
                <Container className="py-20">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-4 justify-center mb-16">
                        {["All Topics", "Cost & Pricing", "Materials", "Guides", "Regulations"].map((cat) => (
                            <button key={cat} className="px-6 py-2 rounded-full border border-gray-200 bg-white hover:bg-slate-50 hover:border-gray-300 transition-colors text-sm font-medium text-gray-600">
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                                <div className="relative aspect-video">
                                    {/* Fallback to high-quality placeholder since AI generation was unavailable */}
                                    <img
                                        src={[
                                            "/images/craftsmanship.png",
                                            "/images/hero-main.png",
                                            "/images/portfolio-composite.png",
                                            "/images/portfolio-screened-porch.png",
                                            "/images/portfolio-repair.png"
                                        ][(index % 5)]}
                                        alt={post.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                                    <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                                    <div className="text-sm font-semibold text-primary flex items-center">
                                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </main>
        </div>
    );
}
