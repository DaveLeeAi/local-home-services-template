"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const QUICK_REPLIES = ["New Deck Construction", "Deck Repair", "Pricing Question", "Permit Info"];

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! Are you looking for a new deck, a repair, or a replacement?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const [showLeadForm, setShowLeadForm] = useState(false);
    const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
    const [leadSubmitted, setLeadSubmitted] = useState(false);

    // Trigger lead form after 2 user messages if not submitted
    useEffect(() => {
        const userMsgCount = messages.filter(m => m.role === "user").length;
        if (userMsgCount >= 2 && !leadSubmitted && !showLeadForm) {
            // Optional: Trigger automatically or just suggest it
        }
    }, [messages, leadSubmitted, showLeadForm]);

    const handleSend = async (content: string) => {
        if (!content.trim()) return;

        const userMsg: Message = { role: "user", content };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMsg] }),
            });

            if (!response.ok) throw new Error("Failed to fetch");

            const data = await response.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please call our office at 404-000-0088." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Implementation of lead form inside chat would go here
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, projectType: "Inquiry via Chat", transcript: messages })
            });
            if (res.ok) {
                setLeadSubmitted(true);
                setShowLeadForm(false);
                setMessages(prev => [...prev, { role: "assistant", content: "Thanks! We've received your info and will call you shortly to schedule your free inspection." }]);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    if (showLeadForm) {
        return (
            <div className="fixed bottom-6 right-6 w-full max-w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
                <div className="bg-primary p-4 text-white flex justify-between items-center">
                    <h3 className="font-semibold">Request Free Inspection</h3>
                    <Button variant="ghost" size="icon" onClick={() => setShowLeadForm(false)} className="text-white hover:bg-white/20 h-8 w-8"><X className="h-5 w-5" /></Button>
                </div>
                <form onSubmit={handleLeadSubmit} className="p-4 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <input required className="w-full p-2 border rounded-md" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Phone</label>
                        <input required className="w-full p-2 border rounded-md" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="404-000-0088" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input required type="email" className="w-full p-2 border rounded-md" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : "Submit Request"}
                    </Button>
                </form>
            </div>
        );
    }

    return (
        <>
            {/* Floating Button */}
            <Button
                className={cn(
                    "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-50 transition-all duration-300",
                    isOpen ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100"
                )}
                onClick={() => setIsOpen(true)}
            >
                <MessageCircle className="h-6 w-6" />
            </Button>

            {/* Chat Panel */}
            <div
                className={cn(
                    "fixed bottom-6 right-6 w-full max-w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col transition-all duration-300 origin-bottom-right",
                    isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-10 pointer-events-none"
                )}
                style={{ height: "min(600px, 80vh)" }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-primary rounded-t-2xl text-white">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                        <div>
                            <h3 className="font-semibold text-sm">Peachtree Assistant</h3>
                            <p className="text-xs text-green-100">Online Now</p>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {!leadSubmitted && (
                            <Button variant="ghost" size="sm" className="text-xs h-7 text-white/90 hover:text-white hover:bg-white/20" onClick={() => setShowLeadForm(true)}>
                                Book Inspection
                            </Button>
                        )}
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8" onClick={() => setIsOpen(false)}>
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50" ref={scrollRef}>
                    {messages.map((msg, i) => (
                        <div key={i} className={cn("flex w-full", msg.role === "user" ? "justify-end" : "justify-start")}>
                            <div className={cn(
                                "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                                msg.role === "user"
                                    ? "bg-primary text-white rounded-br-none"
                                    : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-none"
                            )}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white border p-3 rounded-2xl rounded-bl-none shadow-sm">
                                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Replies (only show if last message is from assistant) */}
                {!isLoading && messages[messages.length - 1].role === "assistant" && (
                    <div className="p-2 bg-slate-50 flex gap-2 overflow-x-auto no-scrollbar px-4 pb-2">
                        {QUICK_REPLIES.map(reply => (
                            <button
                                key={reply}
                                onClick={() => handleSend(reply)}
                                className="whitespace-nowrap px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-colors"
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input */}
                <div className="p-4 border-t bg-white rounded-b-2xl">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSend(inputValue);
                        }}
                        className="flex gap-2"
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        <Button type="submit" size="icon" disabled={!inputValue.trim() || isLoading} className="h-10 w-10 rounded-full">
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
