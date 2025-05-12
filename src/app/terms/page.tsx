import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function TermsPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <section className="py-16 md:py-24 bg-accent">
                    <div className="container-custom max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Website Terms and Conditions</h1>
                        <p className="text-center text-muted-foreground mb-12">Effective Date: May 3, 2025</p>
                        <div className="prose prose-lg max-w-none">
                            <h2>1. Introduction and Acceptance of Terms</h2>
                            <p>
                                Welcome to the website of <b>Humanless</b> ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website (the "Site"), including any content, functionality, and services offered on or through the Site.
                            </p>
                            <p>
                                By accessing or using the Site, you agree to be bound by these Terms and our <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>. If you do not agree to these Terms or the Privacy Policy, you must not access or use the Site. This Site is intended for users who are at least 18 years old.
                            </p>

                            <h2>2. Use of the Website</h2>
                            <ul>
                                <li><b>Permitted Use:</b> You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Site strictly in accordance with these Terms for informational purposes and evaluating our services.</li>
                                <li><b>Prohibited Conduct:</b> You agree not to use the Site:
                                    <ul>
                                        <li>In any way that violates any applicable law or regulation.</li>
                                        <li>To transmit any advertising or promotional material without our prior written consent.</li>
                                        <li>To impersonate Humanless, an employee, another user, or any other person or entity.</li>
                                        <li>To engage in conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which may harm us or users of the Site.</li>
                                        <li>To introduce any malicious or technologically harmful material.</li>
                                        <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site or related systems.</li>
                                        <li>To use any robot, spider, or other automatic device to access the Site for any purpose without our prior written consent.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>3. Intellectual Property Rights</h2>
                            <p>
                                The Site and its entire contents, features, and functionality are owned by Humanless, its licensors, or other providers and are protected by intellectual property laws. You must not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any material on our Site except as permitted for personal, non-commercial use or for evaluating our services.
                            </p>

                            <h2>4. Disclaimers</h2>
                            <ul>
                                <li><b>No Professional Advice:</b> The information provided on the Site is for general informational purposes only. It does not constitute legal, financial, compliance, investment, or professional advice. Consult qualified professionals before making decisions based on information found on the Site.</li>
                                <li><b>Information Accuracy:</b> While we strive to keep information accurate and up-to-date, we make no representations or warranties that the content is accurate, complete, or current.</li>
                                <li><b>No Guarantees of Results:</b> Any descriptions of potential results or benefits from our services are illustrative examples. We do not guarantee any specific outcome or result, as results depend on numerous factors specific to each client.</li>
                                <li><b>AI Limitations:</b> Artificial intelligence technologies have inherent limitations. We do not warrant that AI-driven insights or automated processes will be error-free or completely accurate. Human oversight and validation remain crucial.</li>
                                <li><b>Third-Party Links:</b> The Site may contain links to third-party sites. We have no control over their contents and accept no responsibility for them or for any loss or damage that may arise from your use of them.</li>
                            </ul>

                            <h2>5. Limitation of Liability</h2>
                            <p>
                                To the fullest extent permitted by law, in no event will Humanless, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind arising out of or in connection with your use, or inability to use, the Site or any content on the Site, including any direct, indirect, special, incidental, consequential, or punitive damages.
                            </p>

                            <h2>6. Indemnification</h2>
                            <p>
                                You agree to defend, indemnify, and hold harmless Humanless, its affiliates, licensors, and service providers, and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, losses, costs, expenses, or fees arising out of your violation of these Terms or your use of the Site.
                            </p>

                            <h2>7. Governing Law and Dispute Resolution</h2>
                            <p>
                                All matters relating to the Site and these Terms shall be governed by and construed in accordance with the laws of your jurisdiction. Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Site shall be instituted exclusively in the courts of your jurisdiction. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
                            </p>

                            <h2>8. Service Agreements</h2>
                            <p>
                                Your use of this Site does not create a client, advisory, fiduciary, or professional services relationship between you and Humanless. Any engagement for our AI automation or consultancy services will be governed by a separate, mutually executed written agreement detailing the scope of services, fees, responsibilities, warranties, and liabilities.
                            </p>

                            <h2>9. Modifications to Terms</h2>
                            <p>
                                We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when posted. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes. Please check this page frequently for updates.
                            </p>

                            <h2>10. Termination</h2>
                            <p>
                                We reserve the right to withdraw or amend this Site, and any service or material we provide, at our sole discretion without notice. We may also terminate or suspend your access to all or part of the Site for any or no reason, including any violation of these Terms.
                            </p>

                            <h2>11. Contact Information</h2>
                            <p>
                                To ask questions or comment about these Terms and Conditions, please contact us at:<br />
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