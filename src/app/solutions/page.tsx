'use client';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CalButton } from "@/components/ui/CalButton";
import { Archive, Activity, UserCheck, ShieldCheck, Megaphone, FileText, Clock, CheckCircle, BarChart3, Users, Zap, CheckSquare, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// --- Animation Variants (Consistent with other pages) ---
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const cardHover = {
    scale: 1.03,
    boxShadow: "0px 15px 35px -10px rgba(var(--shadow-color, 0 0 0) / 0.15)", // Use themeable shadow if possible
    transition: { type: "spring", stiffness: 280, damping: 25 }
};

const subtleHover = {
    scale: 1.02,
    boxShadow: "0px 8px 25px -8px rgba(var(--shadow-color, 0 0 0) / 0.1)",
    transition: { type: "spring", stiffness: 300, damping: 15 }
};

// --- Main Component ---

export default function SolutionsPage() {
    const coreSolutions = [
        {
            id: "recordkeeping",
            icon: <Archive className="w-7 h-7" />, // Slightly larger icon
            title: "Automated Compliance Recordkeeping & Retrieval",
            description: "Meet Rule 204-2 requirements and streamline audits with AI-powered systems for organizing, storing, and rapidly retrieving mandatory records.",
            features: [
                "Organize communications, trades, agreements",
                "Rapid search and retrieval functionality",
                "Meet Rule 204-2 recordkeeping requirements",
                "Streamline audit preparation",
                "Secure, compliant data storage"
            ],
            benefits: [
                "Enhance audit readiness significantly",
                "Reduce time spent searching for records",
                "Mitigate risk of recordkeeping violations",
                "Improve operational efficiency"
            ],
            image: "/aitheme.webp" // Make sure this path is correct
        },
        {
            id: "code-of-ethics",
            icon: <Activity className="w-7 h-7" />,
            title: "AI-Powered Code of Ethics Monitoring",
            description: "Automate the monitoring of employee personal trading against firm policies and regulatory requirements (Rule 204A-1).",
            features: [
                "Personal trading surveillance",
                "Rule 204A-1 compliance checks",
                "Automated pre-clearance workflows",
                "Violation detection and alerts",
                "Reporting and audit trails"
            ],
            benefits: [
                "Reduce manual review burden",
                "Improve accuracy of compliance checks",
                "Ensure timely identification of conflicts",
                "Strengthen internal controls"
            ],
            image: "/Surveillance.webp" // Make sure this path is correct
        },
        {
            id: "onboarding",
            icon: <UserCheck className="w-7 h-7" />,
            title: "Automated Client Onboarding Checks",
            description: "Streamline the client onboarding process using AI for document verification, data extraction, and initial compliance checks.",
            features: [
                "Automated document verification (e.g., ID)",
                "Data extraction for account opening",
                "Auto-generation/pre-filling of agreements",
                "Ensure completion of initial checks (ADV delivery)",
                "Integration with CRM systems"
            ],
            benefits: [
                "Faster client onboarding",
                "Reduce manual data entry errors",
                "Ensure consistent compliance at onboarding",
                "Improve client experience"
            ],
            image: "/Compliance.webp" // Make sure this path is correct
        },
        {
            id: "marketing-review",
            icon: <Megaphone className="w-7 h-7" />,
            title: "AI-Assisted Marketing & Advertising Review",
            description: "Utilize AI tools to scan marketing materials for compliance with SEC rules (including the Marketing Rule) before publication.",
            features: [
                "Review websites, emails, social media",
                "Check for compliance with SEC Marketing Rule",
                "Identify prohibited claims or disclosures",
                "Pre-publication compliance scanning",
                "Customizable rule sets"
            ],
            benefits: [
                "Mitigate risk of advertising violations",
                "Ensure consistent messaging compliance",
                "Reduce review time for marketing materials",
                "Protect firm reputation"
            ],
            image: "/aitheme.webp" // Make sure this path is correct
        },
        {
            id: "adv-prep",
            icon: <FileText className="w-7 h-7" />,
            title: "Automated Regulatory Filing Prep (Form ADV)",
            description: "Leverage AI to assist in gathering data, identifying required updates, and streamlining the preparation process for Form ADV amendments.",
            features: [
                "Assist data gathering for Form ADV",
                "Identify required updates and changes",
                "Streamline annual/other amendment prep",
                "Reduce manual effort in filing prep",
                "Improve accuracy of submitted information"
            ],
            benefits: [
                "Save significant time on ADV preparation",
                "Reduce risk of filing errors",
                "Improve efficiency of regulatory reporting",
                "Free up compliance staff for review"
            ],
            image: "/Surveillance.webp" // Make sure this path is correct
        }
    ];

    const valueMetrics = [
        {
            icon: <Clock className="w-7 h-7" />, // Slightly larger
            title: "Time Recaptured",
            value: "Hours Saved Weekly", // More descriptive value
            description: "Slash time on manual compliance tasks"
        },
        {
            icon: <ShieldCheck className="w-7 h-7" />, // Changed icon
            title: "Risk Mitigation",
            value: "Significantly Reduced",
            description: "Proactively identify & address issues"
        },
        {
            icon: <Zap className="w-7 h-7" />, // Changed icon
            title: "Efficiency Gain",
            value: "Boosted Productivity",
            description: "Streamline workflows, automate processes"
        },
        {
            icon: <Users className="w-7 h-7" />,
            title: "Advisor Focus",
            value: "Client Growth Enabled",
            description: "More capacity for high-value activities"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted/10 text-foreground">
            <Navbar />

            <main className="flex-grow">
                {/* --- Enhanced Hero Section --- */}
                <section className="relative py-28 md:py-40 bg-background text-center overflow-hidden border-b border-border/50">
                    {/* Consistent animated mesh background */}
                    <div className="absolute inset-0 opacity-40 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 animate-gradient-xy"></div>
                    </div>
                    <div className="absolute inset-0 opacity-10 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

                    <motion.div
                        className="container-custom relative z-10"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tighter"
                            variants={fadeIn}
                        >
                            AI Compliance Solutions <br className="hidden md:block" /> Tailored for <span className="text-primary brightness-110">RIAs</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
                            variants={fadeIn}
                        >
                            Humanless empowers RIAs to navigate complex regulations with specialized AI tools that reduce risk, save time, and let you focus on what matters most.
                        </motion.p>
                        <motion.div
                            variants={fadeIn}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <CalButton size="lg" className="shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 px-8 py-3 text-lg">
                                Schedule Your Consultation
                            </CalButton>
                        </motion.div>
                    </motion.div>
                </section>

                {/* --- Enhanced Core Solutions Section --- */}
                <section className="py-20 md:py-28 bg-gradient-to-b from-muted/10 via-background to-background">
                    <div className="container-custom">
                        <motion.div
                            className="text-center mb-16 md:mb-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
                                High-Impact AI for Critical Compliance Needs
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                We tackle your most pressing compliance challenges with targeted AI automation, designed for rapid deployment and demonstrable ROI.
                            </motion.p>
                        </motion.div>

                        {/* Solutions Grid */}
                        <motion.div
                            className="space-y-20 md:space-y-28" // Increased spacing between solution cards
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.05 }} // Trigger earlier
                            variants={staggerContainer}
                        >
                            {coreSolutions.map((solution, index) => (
                                <motion.div
                                    key={solution.id} // Use unique ID if available
                                    className={`relative group grid md:grid-cols-2 gap-10 lg:gap-16 items-center bg-card border border-border/50 rounded-xl shadow-lg p-8 md:p-10 lg:p-12 overflow-hidden transition-all duration-400 hover:border-primary/30`}
                                    variants={fadeIn}
                                    whileHover={cardHover}
                                >
                                    {/* Optional: subtle background pattern on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-400 -z-10"></div>

                                    {/* Text Content Area */}
                                    <div className={`space-y-6 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                                        <motion.div
                                            className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center text-primary shadow-inner border border-primary/20 mb-2"
                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            {solution.icon}
                                        </motion.div>
                                        <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-card-foreground">{solution.title}</h3>
                                        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                                            {solution.description}
                                        </p>

                                        {/* Features & Benefits Tabs/Accordion could be an option for more complex info, but grid is fine */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 pt-4 border-t border-border/50">
                                            <div>
                                                <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground/90"><CheckSquare className="w-5 h-5 text-primary" /> Key Features:</h4>
                                                <ul className="space-y-2">
                                                    {solution.features.slice(0, 4).map((feature, i) => ( // Show first 4 features
                                                        <li key={i} className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground/90"><Star className="w-5 h-5 text-yellow-500" /> Core Benefits:</h4>
                                                <ul className="space-y-2">
                                                    {solution.benefits.slice(0, 4).map((benefit, i) => ( // Show first 4 benefits
                                                        <li key={i} className="flex items-start gap-2">
                                                            <Zap className="w-4 h-4 text-primary/80 mt-1 flex-shrink-0" />
                                                            <span className="text-sm font-medium text-foreground/90">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Area */}
                                    <motion.div
                                        className={`relative aspect-[4/3] bg-gradient-to-br from-muted/30 to-background rounded-lg overflow-hidden shadow-xl border border-border/50 ${index % 2 !== 0 ? 'md:order-first' : ''}`} // Ensure order is correct - Changed this to md:order-first for odd indices
                                        variants={fadeIn} // Animate image separately if desired
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Image
                                            src={solution.image}
                                            alt={`${solution.title} Visualization`}
                                            fill
                                            className="object-contain p-6 md:p-8 lg:p-10 transition-transform duration-500 group-hover:scale-105" // Scale image on card hover
                                            sizes="(max-width: 768px) 80vw, 40vw" // Responsive image sizes
                                        />
                                        {/* Optional image overlay/glow on hover */}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-20 transition-opacity duration-400 rounded-lg"></div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* --- Enhanced ROI Metrics Section --- */}
                <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-muted/20 border-t border-border/50">
                    <div className="container-custom">
                        <motion.div
                            className="text-center mb-16 md:mb-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
                                Your Tangible ROI with Humanless AI
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Partnering with us translates directly to measurable benefits, enhancing efficiency and fortifying your compliance posture.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={staggerContainer}
                        >
                            {valueMetrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-card p-6 rounded-xl shadow-lg border border-border/50 text-center flex flex-col items-center transform transition-all duration-300 hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
                                    variants={fadeIn}
                                    whileHover={subtleHover}
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary">
                                        {metric.icon}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary tracking-tight">{metric.value}</h3>
                                    <p className="font-semibold text-lg mb-1 text-foreground/90">{metric.title}</p>
                                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* --- Enhanced CTA Section --- */}
                <section className="py-24 md:py-32 bg-background">
                    <div className="container-custom">
                        {/* Re-using CTA style from About page for consistency */}
                        <motion.div
                            className="bg-gradient-to-br from-primary via-purple-600 to-violet-700 text-primary-foreground p-12 md:p-20 rounded-2xl text-center shadow-2xl shadow-primary/30 relative overflow-hidden"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                        >
                            {/* Subtle Animated Background Pattern */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l-2.83-2.83 1.41-1.41L20 17.17l2.83-2.83 1.41 1.41L20 18.59z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: 'auto', animation: 'movePattern 20s linear infinite' }}
                            ></div>

                            <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
                                Ready to Enhance Compliance and Reclaim Your Time?
                            </h2>
                            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                                Discover how Humanless AI can specifically address your firm's compliance burdens. Schedule a personalized consultation today.
                            </p>
                            {/* Inner motion.div (flex container for buttons) */}
                            <motion.div // <-- THIS IS THE OPENING TAG THAT WAS MISSING A CLOSING ONE
                                className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={staggerContainer}
                            >
                                {/* Button 1 */}
                                <motion.div variants={fadeIn} whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}>
                                    <CalButton size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg font-medium transform">
                                        Schedule Your Consultation
                                    </CalButton>
                                </motion.div>

                                {/* Button 2 */}
                                <motion.div variants={fadeIn} whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}>
                                    <Button asChild variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 px-8 py-3 text-lg font-medium transform">
                                        <Link href="/contact">Contact Us</Link>
                                    </Button>
                                </motion.div>
                            </motion.div> {/* <-- ADDED: Closing tag for the button container motion.div */}

                        </motion.div> {/* Closes the OUTER motion.div (gradient background) */}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Add this to your global CSS or Tailwind config if needed:
/*
@keyframes gradient-xy {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-xy {
  background-size: 400% 400%;
  animation: gradient-xy 15s ease infinite;
}

@keyframes movePattern {
    0% { background-position: 0 0; }
    100% { background-position: 40px 40px; } // Adjust based on pattern size
}
.animate-movePattern {
    animation: movePattern 20s linear infinite;
}
*/

// Define shadow-color variable in your global CSS if you want themeable shadows:
/*
:root {
  --shadow-color: 0 0 0; // Default shadow color (black)
}
.dark {
   --shadow-color: 255 255 255; // Example for dark mode (whiteish shadow - adjust as needed)
}
*/