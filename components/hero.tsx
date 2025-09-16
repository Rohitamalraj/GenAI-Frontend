import { Button } from "@/components/ui/button"
import { Scale } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-purple-600 px-6 text-white hover:bg-purple-500">
      <Link href="/document-upload">
        Try Document Analysis
      </Link>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-lg">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300/80">Legal Lens</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">AI-POWERED</span>
            <span className="block text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">LEGAL ANALYSIS</span>
            <span className="block">FOR EVERYONE</span>
          </h1>
          <p className="mt-6 text-center text-xl text-gray-300 max-w-2xl">
            Transform complex legal documents into clear, actionable insights with our AI-powered analysis platform.
          </p>
          <div className="mt-8">{buttonNew}</div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-2xl">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-white mb-1">10,000+</div>
              <p className="text-sm text-gray-400">Documents Analyzed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <p className="text-sm text-gray-400">Time Saved</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
              <p className="text-sm text-gray-400">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
