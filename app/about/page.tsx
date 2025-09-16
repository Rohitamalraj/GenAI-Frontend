import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Workflow } from "@/components/workflow";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us - Legal Lens | AI-Powered Legal Document Analysis",
  description: "Learn about Legal Lens mission to democratize legal document understanding through AI-powered analysis. Meet our expert team and discover our cutting-edge technology.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />
      <Hero />
      <Workflow />
      <Features />
      <Footer />
    </main>
  );
}