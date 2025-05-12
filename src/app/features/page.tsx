import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CtaSection } from "@/components/home/CtaSection";

export default function FeaturesPage() {
  const features = [
    {
      id: "knowledge-base",
      title: "Knowledge Base",
      description:
        "Train the AI from your existing resources like FAQs, documents, web-pages, product pages and customer interactions. This feature ensures that the AI continually updates and improves its responses without needing constant manual inputs.",
    },
    {
      id: "live-chat",
      title: "Live in 1-Click",
      description:
        "Deploy Humanless on your website effortlessly, with just one click. Quick and easy deployment means you can start benefiting from AI-driven customer interactions immediately. This simplicity saves you time and technical hassle, allowing you to focus on growing your business while Humanless handles customer queries from day one.",
    },
    {
      id: "data-insights",
      title: "Data & Insights",
      description:
        "Collect and analyze customer interactions to provide valuable data and insights. Understanding customer behavior and preferences helps you make informed business decisions. By leveraging these insights, you can tailor your marketing strategies, improve customer satisfaction, and ultimately drive more sales.",
    },
    {
      id: "sales-tracking",
      title: "Sales Tracking",
      description:
        "Monitor sales generated through AI interactions. Knowing the direct impact of AI on your sales helps you measure ROI and adjust strategies accordingly. This transparency allows you to optimize your sales processes and increase revenue by understanding what works best for your customers.",
    },
    {
      id: "chat-instructions",
      title: "Chat Instructions",
      description:
        "Guide the AI on how to handle specific queries and situations. Customizing the AI's behavior ensures it aligns with your business policies and customer service standards. This tailored approach improves the relevance and quality of responses, leading to better customer satisfaction and loyalty.",
    },
    {
      id: "proactive-chat",
      title: "Proactive Chat",
      description:
        "Initiate conversations based on user behaviors and triggers. Engaging customers proactively can prevent cart abandonment and address questions before they arise. By providing timely assistance, this feature increases conversion rates and enhances the overall shopping experience.",
    },
    {
      id: "corrections",
      title: "Corrections",
      description:
        "Oversee and correct AI responses in real-time. Ensuring accuracy in customer interactions maintains trust and credibility. Continuous monitoring and correction improve the AI's performance, leading to better customer service and satisfaction.",
    },
    {
      id: "lead-generation",
      title: "Lead Generation",
      description:
        "Capture potential customer information during interactions. Gathering leads helps you build a pipeline for future sales opportunities. This feature ensures you never miss a potential sale, helping you grow your customer base and increase revenue.",
    },
    {
      id: "support-ticket",
      title: "Chat to Support Ticket",
      description:
        "Convert chat interactions into support tickets for further follow-ups. Seamlessly transitioning from chat to your ticket system ensures complex issues are resolved efficiently. It enhances the support process, ensuring no customer query goes unresolved, leading to higher satisfaction.",
    },
    {
      id: "post-purchase",
      title: "Post Purchase Support",
      description:
        "Help customers with queries after they have made a purchase. Providing ongoing support boosts customer confidence and loyalty. This feature ensures customers feel valued even after their purchase, encouraging repeat business and positive reviews.",
    },
    {
      id: "customization",
      title: "Customization",
      description:
        "Customize the chat interface to match your brand's look and feel. A consistent brand experience across all touchpoints enhances recognition and trust. Customization ensures that your chat service is a seamless extension of your brand, improving customer engagement and satisfaction.",
    },
    {
      id: "multilingual",
      title: "24/7 - 95+ Languages",
      description:
        "Offer around-the-clock support in over 95 languages. Providing support at any time and in multiple languages caters to a global audience. This accessibility ensures all customers receive timely help, improving satisfaction and expanding your market reach.",
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
                Features that Brands Love
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore the key features that drive our partners' growth, day after day.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <Tabs defaultValue="knowledge-base" className="w-full">
              <TabsList className="flex flex-wrap gap-2 justify-center bg-transparent mb-12 overflow-x-auto">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-lg"
                  >
                    {feature.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {feature.title}
                      </h2>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                    <div className="bg-light-purple p-6 rounded-2xl">
                      <div className="aspect-video bg-white rounded-lg overflow-hidden flex items-center justify-center">
                        <div className="text-6xl text-primary/20">
                          {feature.id === "knowledge-base" ? "📚" :
                           feature.id === "live-chat" ? "🚀" :
                           feature.id === "data-insights" ? "📊" :
                           feature.id === "sales-tracking" ? "💰" :
                           feature.id === "chat-instructions" ? "📝" :
                           feature.id === "proactive-chat" ? "🗣️" :
                           feature.id === "corrections" ? "✅" :
                           feature.id === "lead-generation" ? "🎯" :
                           feature.id === "support-ticket" ? "🎫" :
                           feature.id === "post-purchase" ? "📦" :
                           feature.id === "customization" ? "🎨" : "🌐"}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
