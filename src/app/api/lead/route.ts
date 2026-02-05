import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
    name: z.string().min(2),
    phone: z.string().min(10),
    email: z.string().email(),
    zip: z.string().min(5),
    projectType: z.string(),
    material: z.string().optional(),
    timeline: z.string().optional(),
    transcript: z.array(z.any()).optional()
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = leadSchema.parse(body);

        // Spam protection (Basic honeypot check if frontend sends it, skipping for now as minimal requirement)

        // Webhook integration
        if (process.env.WEBHOOK_URL) {
            try {
                await fetch(process.env.WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(validatedData)
                });
            } catch (webhookError) {
                console.error("Webhook failed:", webhookError);
                // Continue, don't fail the user request
            }
        }

        // Log to console for demo
        console.log("Lead Captured:", validatedData);

        return NextResponse.json({ success: true, message: "Lead captured successfully" });

    } catch (error) {
        console.error("Lead API Error:", error);
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
}
