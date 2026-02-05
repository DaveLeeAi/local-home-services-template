import { Container } from "@/components/ui/container";
import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

// Correct type for params in Next.js 15+ (Layout/Page props usually awaiting params)
// But for Next 14, it's just params.
// Wait, user environment dependencies shows "next": "16.1.6" via package.json output earlier?? No, wait.
// Let me check package.json again. Step 130 showed "next": "16.1.6". This is very new (or canary/confused).
// Actually, standard Next.js App Router params are synchronous in 14 but async in 15+.
// I will check `package.json` version again carefully.
// If it is 15+, I need to await params.

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 bg-white">
                <article>
                    <div className="bg-slate-900 py-20">
                        <Container>
                            <div className="max-w-3xl mx-auto">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
                                <p className="text-lg text-gray-400">{post.date}</p>
                            </div>
                        </Container>
                    </div>
                    <Container className="py-20">
                        <div className="max-w-3xl mx-auto prose prose-lg prose-slate first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                            {/* In a real app, render MDX or HTML here. Content is plain text in mock. */}
                            {post.content}
                            <p className="not-prose mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
                                <strong>Need help with your deck?</strong> Contact Peachtree Outdoor Living today for a <a href="/contact" className="text-primary underline">free inspection</a>.
                            </p>
                        </div>
                    </Container>
                </article>
            </main>
        </div>
    );
}
