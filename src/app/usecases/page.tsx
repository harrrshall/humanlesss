"use client"; // Add this directive

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CalButton } from "@/components/ui/CalButton";
import { Archive, Activity, UserCheck, Megaphone, FileText, CheckCircle, Lightbulb, Target, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import React from "react"; // Import React for potential component usage if needed

// --- Enhanced Animation Variants ---

// Smoother fade-in with slight upward movement
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } } // Cubic bezier for smoother ease-out
};

// Stagger children with slight delay
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Slightly faster stagger
            delayChildren: 0.2,
        }
    }
};

// More pronounced card hover effect with subtle lift and gradient border
const cardHover = {
    scale: 1.03,
    boxShadow: "0px 15px 35px -10px rgba(0, 0, 0, 0.15)", // Slightly stronger shadow
    // Gradient border effect can be complex with just framer-motion & tailwind
    // Simulating with increased scale and shadow is often sufficient
    // Or requires a dedicated pseudo-element or nested div approach with CSS/JS
    transition: { type: "spring", stiffness: 280, damping: 25 }
};

// Gentle pulse animation for buttons
const pulseHover = {
    scale: 1.05,
    transition: { duration: 0.4, yoyo: Infinity, ease: "easeInOut" } // Loop pulsing effect
};

// --- Main Component ---

export default function UsecasesPage() {

    const useCases = [
        {
            id: "recordkeeping",
            icon: <Archive className="w-8 h-8" />,
            title: "Taming the Recordkeeping Beast & Nailing Audits",
            challenge: "Your firm generates vast amounts of records daily – client emails, meeting notes, trade confirmations, agreements, disclosures. Meeting SEC Rule 204-2 means meticulously retaining everything in an easily accessible manner. Manually filing, tagging, and searching this data is a major drain, and audit preparation often involves stressful scrambles. A single missed record can lead to deficiencies.",
            solution: "Our Automated Compliance Recordkeeping & Retrieval system integrates with your existing platforms. AI automatically captures, categorizes, tags, and archives relevant records according to retention schedules. Powerful search allows near-instant retrieval based on keywords, dates, clients, or topics.",
            benefits: [
                "Drastic Time Savings: Virtually eliminate manual filing and searching.",
                "Audit Readiness: Respond to examiner requests in minutes, not days.",
                "Reduced Risk: Minimize the chance of lost records or unmet retention.",
                "Improved Efficiency: Free up staff for higher-value tasks.",
                "Peace of Mind: Know records are organized, secure, and accessible."
            ],
        },
        {
            id: "code-of-ethics",
            icon: <Activity className="w-8 h-8" />,
            title: "Automating Code of Ethics & Personal Trading Oversight",
            challenge: "Monitoring personal trading under SEC Rule 204A-1 is critical but complex. Manually collecting statements, checking trades against restricted lists, managing pre-clearance, and documenting reviews is tedious and error-prone. Missing a potential conflict can lead to serious violations.",
            solution: "We implement AI-powered tools automating employee trading data collection. AI automatically compares personal trades against firm policies, restricted lists, client activity, and pre-clearance records, flagging potential issues. It generates reports and maintains a clear audit trail.",
            benefits: [
                "Significant CCO Time Savings: Automate hours of manual data comparison.",
                "Enhanced Accuracy: Reduce human error in detecting conflicts.",
                "Improved Risk Management: Proactively identify Code of Ethics issues.",
                "Streamlined Process: Simplify pre-clearance and reporting for employees.",
                "Clear Audit Trail: Easily demonstrate robust monitoring procedures."
            ],
        },
        {
            id: "onboarding",
            icon: <UserCheck className="w-8 h-8" />,
            title: "Streamlining Client Onboarding Compliance",
            challenge: "Onboarding involves numerous compliance steps: document collection/verification, agreement completion, Form ADV delivery, and accurate data entry. Manual processes are slow, error-prone, and risk missed checks during a crucial first impression.",
            solution: "Our AI tools assist in automating key onboarding compliance aspects: document verification (ID checks), data extraction to pre-fill agreements/CRM fields, tracking disclosure delivery (Form ADV), and setting automated reminders for missing items.",
            benefits: [
                "Faster Onboarding: Reduce administrative delays.",
                "Reduced Errors: Minimize manual data entry mistakes.",
                "Consistent Compliance: Ensure required steps are completed every time.",
                "Improved Client Experience: Provide a smoother initial experience.",
                "Increased Staff Capacity: Free up ops staff from repetitive tasks."
            ],
        },
        {
            id: "marketing-review",
            icon: <Megaphone className="w-8 h-8" />,
            title: "Ensuring Marketing & Advertising Compliance (SEC Marketing Rule)",
            challenge: "The SEC Marketing Rule has strict guidelines. Manually reviewing every website update, social media post, email, and presentation for compliance is incredibly time-consuming and risks inconsistency or missed issues.",
            solution: "We deploy AI tools trained to scan marketing content *before* publication. The AI flags potentially problematic language, unsubstantiated claims, missing disclosures, or elements violating the Marketing Rule, acting as a first-pass review.",
            benefits: [
                "Faster Review Cycles: Speed up marketing approval.",
                "Risk Mitigation: Catch potential violations before they go public.",
                "Consistency: Ensure uniform application of standards.",
                "Empowered Marketing: Allow teams to create content more confidently.",
                "Reduced CCO Burden: Focus human review on flagged items."
            ],
        },
        {
            id: "adv-prep",
            icon: <FileText className="w-8 h-8" />,
            title: "Simplifying Annual Form ADV Filing Prep",
            challenge: "Preparing the annual Form ADV update is significant, requiring data gathering, ensuring consistency, updating narratives, and meeting deadlines. This often falls heavily on the CCO or principal in smaller firms.",
            solution: "Our AI-assisted tools help streamline data gathering and preparation. AI helps identify relevant data from connected systems, flags sections needing updates, and potentially assists in drafting standardized disclosure language updates based on templates.",
            benefits: [
                "Reduced Prep Time: Cut down hours needed for ADV compilation.",
                "Improved Accuracy & Consistency: Minimize errors across sections.",
                "Deadline Management: Help ensure timely preparation.",
                "Less Stress: Reduce the burden of this critical annual requirement.",
                "Focused Review: Allow CCOs to focus on strategy, not aggregation."
            ],
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground"> {/* Base styles */}
            <Navbar />

            <main className="flex-grow overflow-x-hidden"> {/* Prevent horizontal scroll */}

                {/* --- Enhanced Hero Section --- */}
                <section className="relative py-28 md:py-40 bg-background overflow-hidden">
                    {/* Animated Mesh Gradient Background */}
                    <div className="absolute inset-0 opacity-50 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/10 animate-gradient-xy"></div>
                    </div>
                    {/* Static Radial Gradient Overlay */}
                    <div className="absolute inset-0 opacity-20 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

                    <div className="container-custom relative z-10">
                        <motion.div
                            className="max-w-4xl mx-auto text-center"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 pb-2"
                                variants={fadeIn}
                            >
                                See <span className="text-primary brightness-110">Humanless AI</span> in Action <br className="hidden md:block" /> Solving Real RIA Compliance Challenges
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
                                variants={fadeIn}
                            >
                                Ditch the compliance grind. Humanless leverages targeted AI to automate workflows, slash risk, and free up your time. Explore these real-world use cases designed for small and mid-sized RIAs like yours.
                            </motion.p>
                            <motion.div
                                variants={fadeIn}
                                whileHover={{ scale: 1.03 }} // Apply hover effect to the div containing the button
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <CalButton size="lg" className="shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 px-8 py-3 text-lg">
                                    Schedule Your Personalized Demo
                                </CalButton>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* --- Enhanced Use Cases Section --- */}
                <section className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background">
                    <motion.div
                        className="container-custom space-y-20 md:space-y-28" // Increased spacing
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }} // Trigger earlier
                        variants={staggerContainer}
                    >
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={useCase.id}
                                className="group relative bg-card border border-border/50 rounded-xl shadow-lg overflow-hidden transition-all duration-400 hover:border-primary/30" // Added group for hover effects within
                                variants={fadeIn}
                                whileHover={cardHover}
                            >
                                {/* Subtle gradient border effect on hover (simulated with background) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-400 -z-10"></div>

                                <div className="p-8 md:p-10 lg:p-14">
                                    {/* Header with Icon */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10">
                                        <motion.div
                                            className="w-16 h-16 bg-gradient-to-br from-primary/15 to-primary/25 rounded-full flex items-center justify-center text-primary flex-shrink-0 shadow-md border border-primary/20"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            {React.cloneElement(useCase.icon, { className: "w-7 h-7" })}
                                        </motion.div>
                                        <h2 className="text-2xl md:text-3xl font-semibold text-card-foreground tracking-tight">{useCase.title}</h2>
                                    </div>

                                    {/* Grid for Challenge, Solution, Benefits */}
                                    <motion.div
                                        className="grid md:grid-cols-3 gap-8 lg:gap-10"
                                        variants={staggerContainer} // Stagger content within card
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        {/* Challenge */}
                                        <motion.div variants={fadeIn} className="space-y-4 p-5 bg-red-900/5 dark:bg-red-900/10 rounded-lg border border-red-600/20 shadow-inner">
                                            <h3 className="text-xl font-semibold flex items-center gap-2.5 text-red-600 dark:text-red-400">
                                                <Target className="w-5 h-5" /> The Challenge
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{useCase.challenge}</p>
                                        </motion.div>

                                        {/* Solution */}
                                        <motion.div variants={fadeIn} className="space-y-4 p-5 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 shadow-inner">
                                            <h3 className="text-xl font-semibold flex items-center gap-2.5 text-primary">
                                                <Lightbulb className="w-5 h-5" /> The AI Solution
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{useCase.solution}</p>
                                        </motion.div>

                                        {/* Benefits */}
                                        <motion.div variants={fadeIn} className="space-y-4 p-5 bg-green-900/5 dark:bg-green-900/10 rounded-lg border border-green-600/20 shadow-inner">
                                            <h3 className="text-xl font-semibold flex items-center gap-2.5 text-green-600 dark:text-green-400">
                                                <ShieldCheck className="w-5 h-5" /> Outcomes & Benefits
                                            </h3>
                                            <ul className="space-y-2.5">
                                                {useCase.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start gap-2.5">
                                                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                                                        <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* --- Enhanced Holistic Compliance Enhancement Section --- */}
                <section className="py-24 md:py-32 bg-gradient-to-b from-background via-accent/30 to-background relative overflow-hidden">
                    {/* Aurora Background Effect */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-4xl max-h-4xl -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/15 via-purple-500/10 to-transparent blur-3xl opacity-60 animate-pulse-slow"></div>
                        </div>
                    </div>
                    <div className="container-custom">
                        <motion.div
                            className="max-w-4xl mx-auto text-center bg-card/80 backdrop-blur-sm p-10 md:p-14 rounded-xl shadow-2xl border border-border/50"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Zap className="w-12 h-12 text-primary mx-auto mb-5 filter brightness-110" />
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground tracking-tight">Holistic Compliance Enhancement</h2>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Combine these solutions: AI flags meeting risks, cross-references communications and trades, ensures audit-ready documentation, and validates disclosures. Humanless builds an integrated, AI-augmented compliance ecosystem, turning complexity into confidence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* --- Enhanced CTA Section --- */}
                <section className="py-24 md:py-32">
                    <div className="container-custom">
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
                            {/* Add CSS for movePattern animation if needed:
                                @keyframes movePattern { 0% { background-position: 0 0; } 100% { background-position: 40px 40px; } } */}

                            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 leading-tight drop-shadow-md">
                                Ready to Transform Your RIA's Compliance?
                            </h2>
                            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                                Stop letting compliance complexities slow you down. Let Humanless AI provide the clarity and efficiency you need.
                            </p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={staggerContainer}
                            >
                                <motion.div variants={fadeIn} whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}>
                                    <CalButton size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg font-medium transform">
                                        Schedule Your Demo
                                    </CalButton>
                                </motion.div>
                                <motion.div variants={fadeIn} whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}>
                                    <Button asChild variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 px-8 py-3 text-lg font-medium transform">
                                        <Link href="/solutions">Explore AI Solutions</Link>
                                    </Button>
                                </motion.div>
                            </motion.div>
                            <motion.div variants={fadeIn} className="mt-8">
                                <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 underline underline-offset-2">
                                    Or get in touch for specific questions
                                </Link>
                            </motion.div>
                        </motion.div>
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
    0%, 100% {
        background-size: 400% 400%;
        background-position: 0% 50%;
    }
    50% {
        background-size: 200% 200%;
        background-position: 100% 50%;
    }
}
.animate-gradient-xy {
    animation: gradient-xy 15s ease infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.05); }
}
.animate-pulse-slow {
    animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes movePattern {
    0% { background-position: 0 0; }
    100% { background-position: 80px 80px; } // Adjust size based on pattern density
}
.animate-movePattern {
     animation: movePattern 20s linear infinite;
}

*/