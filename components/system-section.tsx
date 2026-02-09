import {
  Timer,
  Megaphone,
  ShieldOff,
  Handshake,
  CheckCircle2,
  Info,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const systemCards = [
  {
    icon: Timer,
    title: "Short-Term Incentives",
    description:
      "Short election cycles reward visible, quick-win policies over evidence-based, long-term prevention strategies. Research consistently shows that sustained investment in prevention yields far greater returns than reactive enforcement, yet the political reward structure favors immediate, measurable outputs.",
    details: [
      "PR-driven policy announcements over quiet, systemic reform",
      "Metrics tied to arrests and seizures rather than harm reduction outcomes",
      "Multi-year prevention programs defunded in favor of short-term budget wins",
    ],
  },
  {
    icon: Megaphone,
    title: "The Attention Economy",
    description:
      "Digital platforms are architecturally designed to maximize engagement, often by amplifying outrage and sensationalism. Studies document how algorithmic amplification of emotionally charged content creates feedback loops that distort public understanding of risk and erode trust in institutions.",
    details: [
      "Algorithmic amplification of outrage and fear-based content",
      "Dopamine-driven design patterns that incentivize compulsive consumption",
      "Misinformation spread faster than fact-checked corrections (MIT, 2018)",
    ],
  },
  {
    icon: ShieldOff,
    title: "Enforcement Gaps",
    description:
      "Law enforcement agencies frequently report staffing shortages, training deficits, and bureaucratic constraints that hinder effective crime prevention. Accountability metrics often prioritize volume of activity over community outcomes, creating a misalignment between effort and impact.",
    details: [
      "Chronic staffing shortages in investigative and prevention units",
      "Complex bureaucratic processes that delay coordinated responses",
      "Performance metrics that reward activity volume over measurable outcomes",
    ],
  },
  {
    icon: Handshake,
    title: "Conflicts of Interest",
    description:
      "Publicly documented lobbying expenditures, revolving-door employment patterns, and opaque campaign finance structures can create environments where policy outcomes serve narrow interests rather than public welfare. Transparency databases show consistent patterns across many sectors.",
    details: [
      "Lobbying expenditures documented in public disclosure databases",
      "Revolving-door patterns between regulatory agencies and private industry",
      "Campaign finance structures that reduce visibility into donor influence",
    ],
  },
]

const proposals = [
  {
    text: "Mandatory transparency and public reporting for all prevention-related budgets and outcomes",
  },
  {
    text: "Measurable, independently verified outcome targets (KPIs) for all publicly funded safety programs",
  },
  {
    text: "Robust legal protections for whistleblowers who report waste, fraud, or systemic failures",
  },
  {
    text: "Dedicated, ring-fenced funding for evidence-based prevention programs with multi-year commitments",
  },
  {
    text: "Regular independent audits of enforcement, treatment, and education programs by non-partisan bodies",
  },
]

export function SystemSection() {
  return (
    <section id="system" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Systemic Analysis
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            System & Incentives
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Addiction, misinformation, and crime do not exist in a vacuum. They
            are shaped by structural incentives, institutional design, and
            resource allocation patterns that can be understood and reformed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {systemCards.map((card) => (
            <Card
              key={card.title}
              className="border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-foreground font-serif">
                  {card.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2">
                  {card.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What We Propose */}
        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-8">
          <h3 className="text-xl font-bold text-foreground font-serif">
            What We Propose
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Structural problems require structural solutions. The following
            reforms are grounded in established governance research and
            international best practices.
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {proposals.map((proposal) => (
              <li key={proposal.text} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground leading-relaxed">
                  {proposal.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section discusses systemic incentives and publicly documented
            trends. It does not accuse specific people or institutions of
            crimes.
          </p>
        </div>
      </div>
    </section>
  )
}
