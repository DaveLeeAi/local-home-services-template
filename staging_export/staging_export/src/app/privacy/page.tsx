
import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex min-h-screen flex-col">
                <main className="flex-1 py-16 bg-white">
                    <Container className="prose prose-slate max-w-3xl">
                        <h1>Privacy Policy</h1>
                        <p className="text-sm text-gray-500">Last updated: February 5, 2026</p>

                        <p>Peachtree Outdoor Living ("we", "us", or "our") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website peachtreeoutdoorliving.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>

                        <h2>1. Information We Collect About You</h2>
                        <p>We collect several types of information from and about users of our Website, including information:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> Name, postal address, e-mail address, and telephone number, which you voluntarily provide when requesting an estimate or consultation.</li>
                            <li><strong>Property Details:</strong> Information about your home, deck project, and specific requirements.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, and usage details collected automatically through cookies and analytics tools.</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                        <ul>
                            <li>To provide you with estimates, project proposals, and construction services.</li>
                            <li>To communicate with you about your project status, permits, and scheduling.</li>
                            <li>To notify you about changes to our Website or services.</li>
                            <li>To improve our Website and customer service.</li>
                        </ul>

                        <h2>3. Disclosure of Your Information</h2>
                        <p>We do not sell, trade, or rent your personal identification information to others. We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.</p>
                        <p>We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
                        <ul>
                            <li>To contractors, service providers, and other third parties we use to support our business (e.g., lumber suppliers for delivery, permit offices).</li>
                            <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                        </ul>

                        <h2>4. Data Security</h2>
                        <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.</p>

                        <h2>5. Text Messaging (SMS)</h2>
                        <p>By providing your phone number, you agree to receive text messages from us regarding your project, estimates, and scheduling. Message and data rates may apply. You can opt-out at any time by replying STOP.</p>

                        <h2>6. Contact Information</h2>
                        <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
                        <p><strong>Peachtree Outdoor Living</strong><br />
                            Atlanta, GA<br />
                            Phone: 404-000-0088<br />
                            Email: privacy@peachtreeoutdoorliving.com</p>
                    </Container>
                </main>
            </div>
        </div>
    );
}
