import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Q&A Chat Interface - Legal Lens | Ask Questions About Your Documents",
  description: "Chat with AI about your legal documents. Ask specific questions and get detailed explanations in plain English.",
};

export default function QAChatInterfacePage() {
  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />
      
      {/* Chat Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Q&A Chat Interface
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ask specific questions about your legal documents and get detailed explanations in plain English from our AI assistant.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}