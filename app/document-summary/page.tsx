import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Document Summary - Legal Lens | AI-Generated Legal Document Summaries",
  description: "View AI-generated summaries of your legal documents. Get clear, concise explanations of complex legal terms and clauses.",
};

export default function DocumentSummaryPage() {
  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />
      
      {/* Summary Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Document Summary
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Get clear, concise AI-generated summaries of your legal documents with key insights and actionable recommendations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}