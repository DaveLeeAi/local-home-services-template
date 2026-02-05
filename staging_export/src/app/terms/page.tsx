
import { Container } from "@/components/ui/container";

export default function TermsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex min-h-screen flex-col">
                <main className="flex-1 py-16 bg-white">
                    <Container className="prose prose-slate max-w-3xl">
                        <h1>Terms of Service</h1>
                        <p className="text-sm text-gray-500">Last updated: February 5, 2026</p>

                        <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the peachtreeoutdoorliving.com website (the "Service") operated by Peachtree Outdoor Living ("us", "we", or "our").</p>

                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

                        <h2>2. Estimates and Proposals</h2>
                        <p>All online estimates provided by our calculators or chatbot are preliminary and for informational purposes only. They do not constitute a binding contract. A final, binding price is only established after an on-site inspection and a signed contract.</p>

                        <h2>3. Permitting and Zoning</h2>
                        <p>While we assist with the permitting process, the homeowner is ultimately responsible for ensuring their property is compliant with all local zoning laws and HOA regulations. We are not responsible for delays caused by government agencies or HOA boards.</p>

                        <h2>4. Intellectual Property</h2>
                        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Peachtree Outdoor Living and its licensors. The Service is protected by copyright, trademark, and other laws of the United States.</p>

                        <h2>5. Links To Other Web Sites</h2>
                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Peachtree Outdoor Living (e.g., Trex, TimberTech). We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>

                        <h2>6. Limitation of Liability</h2>
                        <p>In no event shall Peachtree Outdoor Living, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                        <h2>7. Governing Law</h2>
                        <p>These Terms shall be governed and construed in accordance with the laws of Georgia, United States, without regard to its conflict of law provisions.</p>

                        <h2>8. Changes</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

                        <h2>9. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us:</p>
                        <p><strong>Peachtree Outdoor Living</strong><br />
                            Phone: 404-000-0088</p>
                    </Container>
                </main>
            </div>
        </div>
    );
}
