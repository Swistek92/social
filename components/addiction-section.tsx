import { Wine, Pill, UtensilsCrossed, MonitorPlay, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const topics = [
  {
    icon: Wine,
    title: "Alcohol Addiction Patterns",
    description:
      "Alcohol dependency often starts with social drinking and escalates through tolerance and withdrawal cycles. Recognizing the stages early enables intervention.",
  },
  {
    icon: Pill,
    title: "Drug Dependency Cycles",
    description:
      "Prescription and illicit drug dependency follows predictable patterns of use, tolerance, dependence, and addiction. Understanding these cycles helps prevent escalation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Addiction & Obesity Psychology",
    description:
      "Processed foods are designed to trigger reward pathways similar to addictive substances. Emotional eating and binge cycles share common traits with substance dependency.",
  },
  {
    icon: MonitorPlay,
    title: "Dopamine Manipulation in Media",
    description:
      "Social media, gaming, and streaming platforms use variable reward schedules to manipulate dopamine responses, creating habitual usage patterns that mimic addiction.",
  },
]

export function AddictionSection() {
  return (
    <section id="addiction" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Awareness
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Addiction Awareness
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Addiction affects millions worldwide. Understanding the mechanisms
            behind dependency is critical for prevention and recovery.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <topic.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground font-serif">{topic.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Where to Get Help panel */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 lg:p-10">
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground font-serif">
                Where to Get Help
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground leading-relaxed">
                If you or someone you know is struggling with addiction, help is
                available. Reach out to trusted organizations for confidential
                support and guidance.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Button asChild size="lg">
                <a href="tel:1-800-662-4357">
                  <Phone className="mr-2 h-4 w-4" />
                  SAMHSA Helpline
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://www.samhsa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit SAMHSA.gov
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
