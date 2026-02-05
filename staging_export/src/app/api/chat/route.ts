import { NextResponse } from "next/server";
import { retrieveContext, generateChatResponse } from "@/lib/rag";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
        }

        const lastMessage = messages[messages.length - 1];
        const query = lastMessage.content;

        // 1. Retrieve Context
        const context = await retrieveContext(query);
        console.log(`Found ${context.length} chunks for query: "${query}"`);

        // 2. Generate Response
        const responseContent = await generateChatResponse(messages, context);

        return NextResponse.json({
            role: "assistant",
            content: responseContent,
            citations: context.map(c => ({ source: c.source }))
        });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
