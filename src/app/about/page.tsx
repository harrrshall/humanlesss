"use client"; // Add this directive to mark the component as a Client Component

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button"; // Assuming Button component exists
import { CalButton } from "@/components/ui/CalButton"; // Assuming CalButton component exists
import { Target, Eye, Zap, Users, Handshake, FileText, Lightbulb, ListChecks, ShieldCheck, Star, Mail, Phone, Calendar, ArrowRight } from "lucide-react"; // Added relevant icons
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion
import React from "react";

// --- Animation Variants (Re-using from previous example) ---
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

const subtleHover = {
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 15 }
};

// --- Main Component ---

export default function AboutPage() {
    // Data for lists to make mapping easier
    const whatWeDoItems = [
        "Compliance Recordkeeping & Retrieval (Rule 204-2)",
        "Code of Ethics & Personal Trading Monitoring (Rule 204A-1)",
        "Client Onboarding Compliance Checks",
        "Marketing & Advertising Review (SEC Marketing Rule)",
        "Regulatory Filing Preparation Assistance (Form ADV)"
    ];

    const approachItems = [
        { icon: <Handshake className="w-5 h-5 text-primary" />, text: "Collaborative: We start by listening intently to understand your specific challenges, workflows, and goals." },
        { icon: <Target className="w-5 h-5 text-primary" />, text: "Tailored: Solutions are configured to your firm's unique policies, procedures, and existing tech stack (especially CRM integration)." },
        { icon: <Lightbulb className="w-5 h-5 text-primary" />, text: "Practical: We focus on automating the *most* time-consuming and highest-risk tasks first for tangible ROI." },
        { icon: <Zap className="w-5 h-5 text-primary" />, text: "Integrated: Our goal is seamless integration, minimizing disruption and enhancing your current operations." },
        { icon: <Eye className="w-5 h-5 text-primary" />, text: "Transparent: We prioritize solutions where you understand how the AI assists and maintain control via human oversight and validation." },
        { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: "Supportive: We provide training and ongoing support to ensure you maximize the value of your automation investment." }
    ];

    const processSteps = [
        { icon: <Mail className="w-5 h-5 text-primary/80" />, title: "Initial Contact (Your Choice)", description: "Email Us, Call Us, use our Contact Form, or Schedule Directly online." },
        { icon: <Phone className="w-5 h-5 text-primary/80" />, title: "Discovery Call (Understand & Align)", description: "A brief virtual meeting (typically 30 minutes) to discuss your needs." },
        { icon: <FileText className="w-5 h-5 text-primary/80" />, title: "Tailored Proposal (Clear Path Forward)", description: "If it's a good fit, we provide a clear proposal with scope, timeline, pricing, and expected ROI." },
        { icon: <Zap className="w-5 h-5 text-primary/80" />, title: "Implementation & Integration (Seamless Setup)", description: "We handle setup, configuration, integration, and training." },
        { icon: <Handshake className="w-5 h-5 text-primary/80" />, title: "Ongoing Partnership & Support (Your Success)", description: "We provide ongoing support and check-ins." }
    ];

    const whyChooseUsItems = [
        { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "RIA Compliance Specialists", description: "Solely focused on AI for RIA compliance." },
        { icon: <Users className="w-6 h-6 text-primary" />, title: "Small/Mid-Size Firm Focus", description: "Designed for your needs and budget." },
        { icon: <Lightbulb className="w-6 h-6 text-primary" />, title: "Practical AI Application", description: "Proven tools for tangible results." },
        { icon: <Target className="w-6 h-6 text-primary" />, title: "Risk Reduction Focus", description: "Mitigating compliance risk effectively." },
        { icon: <Zap className="w-6 h-6 text-primary" />, title: "Efficiency Experts", description: "Targeting time-draining bottlenecks." },
        { icon: <Handshake className="w-6 h-6 text-primary" />, title: "Collaborative Partnership", description: "Augmenting your capabilities." }
    ];


    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-muted/10 to-background text-foreground"> {/* Base styles & Gradient */}
            <Navbar />

            <main className="flex-grow overflow-x-hidden">

                {/* --- Enhanced Hero Section --- */}
                <section className="relative py-28 md:py-40 text-center overflow-hidden bg-background border-b border-border/50">
                    {/* Re-using animated mesh from Use Cases Page for consistency */}
                    <div className="absolute inset-0 opacity-30 -z-10">
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
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tighter"
                            variants={fadeIn}
                        >
                            About <span className="text-primary brightness-110">Humanless</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                            variants={fadeIn}
                        >
                            Your Partner in Streamlined RIA Compliance through AI Automation.
                        </motion.p>
                    </motion.div>
                </section>

                {/* --- Main Content Area --- */}
                <div className="container-custom py-16 md:py-24 space-y-16 md:space-y-24">

                    {/* Introduction & Story Section (Combined visually) */}
                    <motion.section
                        className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeIn}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-primary">Why We Started Humanless</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                Compliance doesn't have to be a bottleneck. We saw firsthand the challenges growing RIAs face – valuable time lost, rising costs, and significant risks tied to complex regulations. Humanless was founded to change that.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe powerful, practical AI automation can transform this burden. We bridge the gap for small and mid-sized firms, leveraging cutting-edge tech tailored to solve your most pressing compliance pain points, freeing you to focus on clients and growth.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-xl border border-border/50"
                            variants={fadeIn}
                        >
                            {/* Placeholder for an image or graphic */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                                <Lightbulb className="w-24 h-24 text-primary/30" />
                            </div>
                            {/* Add an actual Image component here */}
                            {/* <Image src="/path/to/about-image.jpg" alt="Humanless Team or Concept" layout="fill" objectFit="cover" /> */}
                        </motion.div>
                    </motion.section>

                    {/* Mission & Vision Section */}
                    <motion.section
                        className="grid md:grid-cols-2 gap-10 md:gap-16 bg-card border border-border/50 rounded-xl p-8 md:p-12 shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeIn}>
                            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" /> Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To empower small and mid-size RIAs to navigate complex regulatory requirements efficiently and confidently through specialized, practical, and integrated AI-driven compliance automation solutions. We aim to reduce risk, save time, and allow RIAs to focus more on their clients and growth.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Eye className="w-6 h-6 text-primary" /> Our Vision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To foster a future where compliance is seamlessly integrated and technology-augmented, allowing RIAs of all sizes to thrive securely and focus on delivering exceptional value to their clients.
                            </p>
                        </motion.div>
                    </motion.section>

                    {/* What We Do Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight">What We Do: Targeted AI Solutions</motion.h2>
                        <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto leading-relaxed">
                            Humanless delivers specialized consultancy and implementation, automating high-impact compliance workflows with AI integrated into your processes. Our core focus includes:
                        </motion.p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whatWeDoItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-card border border-border/50 rounded-lg p-5 flex items-center gap-4 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                                    variants={fadeIn}
                                    whileHover={subtleHover}
                                >
                                    <ListChecks className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="text-card-foreground text-sm font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Who We Serve Section */}
                    <motion.section
                        className="bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border border-border/50 p-8 md:p-12 rounded-xl shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight flex items-center gap-3"><Users className="w-8 h-8 text-primary" /> Focused Expertise for Your Firm</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our expertise is laser-focused on the needs of <strong className="text-foreground">Small to Mid-Size Registered Investment Advisors (RIAs)</strong> across the United States (SEC or state-registered). We understand the unique challenges of firms typically ranging from 1 to 100 employees. We partner closely with CCOs, Principals, and Operations Managers to deliver practical, impactful AI solutions.
                        </p>
                    </motion.section>

                    {/* Our Approach Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight">Our Approach: Your Strategic Partner</motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {approachItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center text-center bg-card border border-border/50 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                                    variants={fadeIn}
                                    whileHover={subtleHover}
                                >
                                    <div className="mb-4 p-3 bg-primary/10 rounded-full">
                                        {item.icon}
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Get Started Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight">Getting Started is Simple & Smooth</motion.h2>
                        {/* Timeline / Steps visualization */}
                        <div className="relative max-w-4xl mx-auto">
                            {/* Connecting line (pseudo-element or div) */}
                            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border ml-[7px] hidden md:block" aria-hidden="true"></div>

                            <div className="space-y-10">
                                {processSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative flex items-start gap-6 group"
                                        variants={fadeIn}
                                    >
                                        <div className="relative z-10 flex-shrink-0 w-8 h-8 mt-1 flex items-center justify-center bg-primary/10 rounded-full border-2 border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            {/* Display number instead of icon for steps */}
                                            <span className="font-semibold text-sm text-primary group-hover:text-primary-foreground">{index + 1}</span>
                                        </div>
                                        <div className="flex-grow bg-card border border-border/50 p-5 rounded-md shadow-sm group-hover:border-primary/30 transition-colors duration-300">
                                            <h3 className="font-semibold text-lg mb-1 text-card-foreground">{step.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Why Choose Us Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight">Why Partner with Humanless?</motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyChooseUsItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-card border border-border/50 rounded-xl p-6 shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
                                    variants={fadeIn}
                                    whileHover={subtleHover}
                                >
                                    <div className="mb-4 p-4 bg-primary/10 rounded-full">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* --- Enhanced CTA Section --- */}
                    <motion.section
                        className="text-center bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 p-10 md:p-16 rounded-xl border border-border/50 shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">
                            Ready to Simplify Your Compliance Journey?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let's explore how Humanless AI can empower your RIA. Schedule a brief, no-obligation discovery call today.
                        </p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeIn} whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}>
                                {/* Ensure CalButton is correctly implemented */}
                                <CalButton size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 px-8 py-3 text-lg font-medium transform">
                                    Schedule Free Discovery Call
                                </CalButton>
                            </motion.div>
                            <motion.div variants={fadeIn} whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}>
                                {/* Ensure Button and Link work */}
                                <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300 px-8 py-3 text-lg font-medium transform">
                                    <Link href="/solutions">Explore AI Solutions</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.section>

                </div> {/* End container */}
            </main>

            <Footer />
        </div>
    );
}