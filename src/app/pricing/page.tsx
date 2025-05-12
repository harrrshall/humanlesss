import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import { FaqSection } from "@/components/home/FaqSection";
import Link from "next/link";

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      id: "starter",
      price: "$49",
      description: "Perfect for small businesses just getting started.",
      features: [
        { id: "replies", name: "500 replies per month" },
        { id: "pages", name: "1,000 pages" },
        { id: "chats", name: "2 AI Chats" },
        { id: "members", name: "1 team member" },
        { id: "support", name: "Standard support" },
        { id: "languages", name: "95+ languages" },
        { id: "training", name: "AI Training" },
        { id: "instructions", name: "Custom chat instructions" },
        { id: "tracker", name: "Sales tracker" },
        { id: "status", name: "Order status" },
        { id: "proactive", name: "Proactive sales AI" },
        { id: "embed", name: "Embed anywhere" },
      ],
      featured: false,
    },
    {
      name: "Growth",
      id: "growth",
      price: "$129",
      description: "For growing businesses with moderate traffic.",
      features: [
        { id: "replies", name: "1,500 replies per month" },
        { id: "pages", name: "5,000 pages" },
        { id: "chats", name: "5 AI Chats" },
        { id: "members", name: "Unlimited team members" },
        { id: "support", name: "Priority support" },
        { id: "languages", name: "95+ languages" },
        { id: "corrections", name: "AI Corrections" },
        { id: "training", name: "AI Training" },
        { id: "instructions", name: "Custom chat instructions" },
        { id: "tracker", name: "Sales tracker" },
        { id: "status", name: "Order status" },
        { id: "proactive", name: "Proactive sales AI" },
        { id: "embed", name: "Embed anywhere" },
        { id: "email", name: "Email forwarding" },
      ],
      featured: false,
    },
    {
      name: "Pro",
      id: "pro",
      price: "$249",
      description: "For established businesses with higher traffic volumes.",
      features: [
        { id: "replies", name: "3,000 replies per month" },
        { id: "pages", name: "15,000 pages" },
        { id: "chats", name: "10 AI Chats" },
        { id: "members", name: "Unlimited team members" },
        { id: "support", name: "Priority support" },
        { id: "languages", name: "95+ languages" },
        { id: "corrections", name: "AI Corrections" },
        { id: "training", name: "AI Training" },
        { id: "instructions", name: "Custom chat instructions" },
        { id: "tracker", name: "Sales tracker" },
        { id: "status", name: "Order status" },
        { id: "proactive", name: "Proactive sales AI" },
        { id: "embed", name: "Embed anywhere" },
        { id: "email", name: "Email forwarding" },
      ],
      featured: true,
    },
    {
      name: "Scale",
      id: "scale",
      price: "$499",
      description: "For large enterprises with high-volume requirements.",
      features: [
        { id: "replies", name: "6,000 replies per month" },
        { id: "pages", name: "30,000 pages" },
        { id: "chats", name: "20 AI Chats" },
        { id: "members", name: "Unlimited team members" },
        { id: "support", name: "Priority support" },
        { id: "languages", name: "95+ languages" },
        { id: "corrections", name: "AI Corrections" },
        { id: "training", name: "AI Training" },
        { id: "instructions", name: "Custom chat instructions" },
        { id: "tracker", name: "Sales tracker" },
        { id: "status", name: "Order status" },
        { id: "proactive", name: "Proactive sales AI" },
        { id: "embed", name: "Embed anywhere" },
        { id: "email", name: "Email forwarding" },
      ],
      featured: false,
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative py-16 md:py-20 bg-light-purple overflow-hidden">
          <div className="absolute inset-0 glow z-0" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Plans designed for businesses of all sizes
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our pricing plans tailored to fit your needs
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90">
                  Start free trial
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col h-full transition-all ${
                    tier.featured
                      ? "border-primary shadow-lg scale-105 bg-primary/5"
                      : "shadow-md hover:shadow-lg"
                  }`}
                >
                  <CardHeader className="pb-4">
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {tier.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={`${tier.id}-${feature.id}`} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-primary shrink-0 mr-2" />
                          <span className="text-sm">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button
                      className={`w-full rounded-full ${
                        tier.featured
                          ? "bg-primary text-white hover:bg-primary/90"
                          : "bg-white border border-primary text-primary hover:bg-primary/10"
                      }`}
                    >
                      Start free 7-day trial
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-light-purple rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Enterprise plans</h2>
              <p className="text-muted-foreground mb-4">
                Need more resources? Don't worry, contact sales.
              </p>
              <Button className="rounded-full bg-white text-primary hover:bg-white/90 border border-primary">
                Contact us
              </Button>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
