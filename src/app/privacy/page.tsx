import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <section className="py-16 md:py-24 bg-accent">
                    <div className="container-custom max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Privacy Policy</h1>
                        <p className="text-center text-muted-foreground mb-12">Effective Date: May 3, 2025</p>
                        <div className="prose prose-lg max-w-none">
                            <h2>1. Introduction</h2>
                            <p>
                                Welcome to <b>Humanless</b> ("we," "us," or "our"). We specialize in providing AI-driven compliance automation solutions for small and mid-size Registered Investment Advisors (RIAs). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the "Site"). Please read this privacy policy carefully. If you do not agree with the terms, please do not access the site.
                            </p>
                            <p>
                                We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:info@humanless.ai">info@humanless.ai</a>.
                            </p>

                            <h2>2. Information We Collect</h2>
                            <ul>
                                <li><b>Personal Data:</b> Name, company name, job title, email address, telephone number, and other details you voluntarily provide when you fill out forms or interact with the Site.</li>
                                <li><b>Derivative Data:</b> Information our servers automatically collect, such as IP address, browser type, operating system, access times, and pages viewed before/after accessing the Site.</li>
                                <li><b>Cookies and Similar Technologies:</b> We may use cookies, web beacons, tracking pixels, and other technologies to help customize the Site and improve your experience.</li>
                            </ul>

                            <h2>3. How We Use Your Information</h2>
                            <ul>
                                <li>Respond to your inquiries and provide customer support.</li>
                                <li>Send administrative information and updates.</li>
                                <li>Send marketing and promotional communications (where permitted by law and with your consent where required).</li>
                                <li>Analyze usage and trends to improve our website and services.</li>
                                <li>Maintain the security and operation of our Site.</li>
                                <li>Comply with legal and regulatory obligations.</li>
                            </ul>

                            <h2>4. Legal Basis for Processing</h2>
                            <p>
                                If you are located in a jurisdiction requiring a legal basis for processing personal data (like the EEA or India), we collect and use your information only where we have your consent, need it to perform a contract, or where it is in our legitimate interests and not overridden by your rights. In some cases, we may also have a legal obligation to collect your information.
                            </p>

                            <h2>5. Data Sharing and Disclosure</h2>
                            <ul>
                                <li><b>By Law or to Protect Rights:</b> We may share your information to respond to legal process, investigate policy violations, or protect rights, property, and safety.</li>
                                <li><b>Third-Party Service Providers:</b> We may share your information with trusted third parties who perform services for us (e.g., CRM, analytics, email delivery). These parties are obligated to protect your information.</li>
                                <li><b>Business Transfers:</b> Your information may be shared or transferred in connection with any merger, sale, or acquisition.</li>
                            </ul>
                            <p>We do not sell your personal information.</p>

                            <h2>6. Data Security</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information. However, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or misuse.
                            </p>

                            <h2>7. Data Retention</h2>
                            <p>
                                We retain your personal information only as long as necessary for the purposes set out in this policy, to comply with legal obligations, resolve disputes, and enforce agreements.
                            </p>

                            <h2>8. Your Privacy Rights</h2>
                            <p>
                                Depending on your location and applicable law (such as GDPR, CCPA/CPRA, DPDPA), you may have rights regarding your personal information, including:
                            </p>
                            <ul>
                                <li>The right to access, correct, or erase your data</li>
                                <li>The right to restrict or object to processing</li>
                                <li>The right to data portability</li>
                                <li>The right to opt-out of sale or sharing (we do not sell personal information)</li>
                                <li>The right to non-discrimination</li>
                                <li>The right to withdraw consent</li>
                            </ul>
                            <p>To exercise these rights, contact us at <a href="mailto:info@humanless.ai">info@humanless.ai</a>. We will respond in accordance with applicable law.</p>

                            <h2>9. Cookies and Tracking Technologies</h2>
                            <p>
                                We may use cookies and similar technologies to personalize the Site and improve your experience. Most browsers accept cookies by default, but you can usually modify your settings to decline cookies. This may affect Site functionality.
                            </p>

                            <h2>10. International Data Transfers</h2>
                            <p>
                                Your information may be transferred to and processed in countries other than your own. By using our Site, you consent to such transfers. We take steps to ensure your data is treated securely and in accordance with this policy.
                            </p>

                            <h2>11. Children's Privacy</h2>
                            <p>
                                Our Site is not intended for children under 13 (or a higher age threshold if applicable). We do not knowingly collect personal information from children. If we learn we have done so, we will delete that information.
                            </p>

                            <h2>12. Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Effective Date" and will be effective as soon as it is accessible. Please review this policy regularly.
                            </p>

                            <h2>13. Contact Us</h2>
                            <p>
                                If you have questions or wish to exercise your privacy rights, contact us at:<br />
                                <b>Humanless</b><br />
                                <a href="mailto:info@humanless.ai">info@humanless.ai</a>
                            </p>
                            <hr />
                            <p className="text-xs text-muted-foreground mt-6">
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 