import { Shield, BookOpen, Heart, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              Public Safety Education
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground lg:text-6xl text-balance font-serif">
            Understanding Crime Patterns to Protect Society
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            We educate about addiction mechanisms, manipulation, and fraud tactics
            — so people can stay safe.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#scams">
                <BookOpen className="mr-2 h-4 w-4" />
                Learn How Scams Work
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#addiction">
                <Heart className="mr-2 h-4 w-4" />
                Get Help for Addiction
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#report">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Report to Authorities
              </a>
            </Button>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: "4.7M+", label: "Scams reported annually" },
            { value: "46M+", label: "People affected by addiction" },
            { value: "$10B+", label: "Lost to fraud each year" },
            { value: "24/7", label: "Support resources available" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
            >
              <span className="text-2xl font-bold text-primary lg:text-3xl font-serif">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
