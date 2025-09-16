import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us - Legal Lens | Get Expert Legal Document Analysis Help",
  description: "Contact Legal Lens for expert support with legal document analysis. Our team is here to help you understand complex legal documents.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />
      
      {/* Contact Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Have questions about legal document analysis? Our expert team is here to help you navigate complex legal documents.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}