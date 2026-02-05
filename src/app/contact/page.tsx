"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            details: formData.get("message"),
        };

        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 bg-white">
                <div className="bg-slate-900 py-20">
                    <Container>
                        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
                        <p className="text-xl text-gray-300 max-w-2xl">Get a free inspection and estimate for your project.</p>
                    </Container>
                </div>
                <Container className="py-20">
                    <div className="max-w-xl mx-auto">
                        {status === "success" ? (
                            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
                                <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h2>
                                <p className="text-green-800">
                                    Thanks for reaching out. A member of our team will call you within 24 hours to schedule your consultation.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input required type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input required type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                        <input required type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details</label>
                                    <textarea required id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 border" placeholder="Tell us about your project..."></textarea>
                                </div>

                                {status === "error" && (
                                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                                        <AlertCircle className="h-4 w-4" />
                                        Something went wrong. Please try again or call (404) 555-0123.
                                    </div>
                                )}

                                <Button type="submit" className="w-full text-lg h-12" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Sending..." : "Request Free Inspection"}
                                </Button>
                                <p className="text-xs text-slate-500 text-center mt-4">
                                    By submitting this form, you agree to receive automated marketing messages (SMS and Email) from Peach Tree Outdoor at the phone number provided. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to unsubscribe.
                                </p>
                            </form>
                        )}

                        <div className="mt-12 text-center border-t pt-8">
                            <p className="text-muted-foreground mb-2">Prefer to talk?</p>
                            <a href="tel:4040000088" className="text-2xl font-bold text-gray-900 hover:text-primary">404-000-0088</a>
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    );
}
