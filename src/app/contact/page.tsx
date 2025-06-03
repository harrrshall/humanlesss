import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { Toaster } from "sonner";
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg text-muted-foreground">
                            Have questions? We'd love to hear from you.
                        </p>
                    </div>

                    <ContactForm />

                    {/* Contact Information */}
                    <div className="max-w-3xl mx-auto text-center mt-16 pt-8 border-t">
                        <h2 className="text-2xl font-semibold mb-6">Other Ways to Reach Us</h2>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-muted-foreground">
                            <a href="mailto:cybernovascnn@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Mail size={20} />
                                <span>harshal@humanless.site</span>
                            </a>
                            <a href="tel:+917349836396" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Phone size={20} />
                                <span>+91 73498 36396</span>
                            </a>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
            <Toaster richColors />
        </>
    );
} 
