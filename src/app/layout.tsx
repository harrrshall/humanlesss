import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ChatWidget } from "@/components/chat/ChatWidget";

export const metadata: Metadata = {
  title: "Humanless | AI Agents to Automate Sales, Support & Marketing",
  description:
    "Humanless AI is an AI chatbot for ecommerce that turns last-minute doubters into lifetime customers. Automated 24/7 multilingual customer support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        {children}
        <ChatWidget />
      </ClientBody>
    </html>
  );
}
