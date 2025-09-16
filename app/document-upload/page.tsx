import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Document Upload - Legal Lens | Upload Legal Documents for AI Analysis",
  description: "Upload your legal documents for instant AI-powered analysis. Get clear, actionable insights from complex contracts and agreements.",
};

export default function DocumentUploadPage() {
  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />
      
      {/* Upload Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Upload Your Legal Document
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transform complex legal documents into clear, actionable insights with our AI-powered analysis platform.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}