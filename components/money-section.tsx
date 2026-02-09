import {
  Heart,
  Coins,
  Brain,
  Sparkles,
  HeartPulse,
  TrendingUp,
  Users,
  ArrowDown,
  RotateCcw,
  Info,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

const exploitationAreas = [
  {
    icon: Heart,
    title: "Relationships & Intimacy Exploitation",
    trigger: "Loneliness, desire for connection, fear of being alone",
    mechanism:
      "Building emotional dependency through manufactured intimacy, then leveraging that bond to request financial support, gifts, or shared financial commitments prematurely.",
    consequence:
      "Depleted savings through 'romance scams,' joint debts taken under emotional pressure, or financially supporting a partner who systematically exploits attachment.",
  },
  {
    icon: Coins,
    title: "Reward & Pleasure Economy",
    trigger: "Boredom, desire for excitement, intermittent reinforcement",
    mechanism:
      "Variable-ratio reward schedules (gambling mechanics), microtransactions designed to feel insignificant individually, and artificial scarcity that creates urgency to spend.",
    consequence:
      "Cumulative spending that exceeds awareness -- small transactions aggregate into significant financial loss. Gambling-related debt and loot-box spending patterns mirror addictive consumption loops.",
  },
  {
    icon: Brain,
    title: "Sexual Stimulation & Overstimulation Risks",
    trigger: "Curiosity, stress relief, escalation through habituation",
    mechanism:
      "Progressive desensitization requires increasingly novel or extreme content to achieve the same psychological response. Paid platforms exploit this escalation through tiered access and pay-per-view models.",
    consequence:
      "Subscription creep across multiple platforms, impulsive spending during high-arousal states, and potential vulnerability to extortion or sextortion schemes.",
  },
  {
    icon: Sparkles,
    title: "Self-Improvement & Quick-Fix Promises",
    trigger: "Insecurity, desire for transformation, social comparison",
    mechanism:
      "Marketing that frames complex personal development as purchasable outcomes. Course stacking, certification funnels, and coaching upsells create perpetual inadequacy loops.",
    consequence:
      "Thousands spent on courses, seminars, and coaching packages that deliver diminishing returns. The 'next level' always requires another purchase.",
  },
  {
    icon: HeartPulse,
    title: "Health Fear Markets",
    trigger: "Health anxiety, distrust of institutions, desire for control",
    mechanism:
      "Exploiting medical uncertainty by positioning unregulated supplements, alternative treatments, or diagnostic tools as suppressed solutions. Testimonial-driven marketing replaces evidence.",
    consequence:
      "Ongoing spending on unproven products, delayed access to evidence-based care, and financial vulnerability during health crises when judgment is compromised.",
  },
  {
    icon: TrendingUp,
    title: "Career & Success Pressure",
    trigger: "Professional insecurity, status anxiety, fear of falling behind",
    mechanism:
      "Positioning expensive credentials, networking events, or mentorship programs as essential career investments. Creating artificial urgency through 'limited spots' or 'cohort deadlines.'",
    consequence:
      "Significant investment in professional development with unclear ROI. Career coaching and mastermind groups that cost more than the salary increase they promise.",
  },
  {
    icon: Users,
    title: "Youth Identity & Social Pressure",
    trigger: "Desire for belonging, identity formation, peer validation",
    mechanism:
      "Leveraging social media comparison, influencer culture, and peer pressure to drive consumption of branded products, appearance-related services, and status signifiers.",
    consequence:
      "Debt accumulation during formative years, financial habits built on social validation rather than personal values, and vulnerability to predatory lending targeting young adults.",
  },
]

export function MoneySection() {
  return (
    <section id="money" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Financial Exploitation
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Where Manipulation Meets Money Most Often
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            Environments where psychological vulnerability and financial
            exploitation frequently intersect. Understanding these patterns
            helps recognize when emotional states are being converted into
            spending behavior.
          </p>
        </div>

        {/* Exploitation Areas */}
        <div className="mt-14 flex flex-col gap-6">
          {exploitationAreas.map((area) => (
            <Card
              key={area.title}
              className="border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <area.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-foreground font-serif text-lg">
                      {area.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      Emotional Trigger
                    </span>
                    <p className="mt-2 text-sm text-foreground leading-relaxed">
                      {area.trigger}
                    </p>
                  </div>
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Manipulation Mechanism
                    </span>
                    <p className="mt-2 text-sm text-foreground leading-relaxed">
                      {area.mechanism}
                    </p>
                  </div>
                  <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                      Financial Consequence
                    </span>
                    <p className="mt-2 text-sm text-foreground leading-relaxed">
                      {area.consequence}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Spending Loop Diagram */}
        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground font-serif">
              The Exploitation Loop
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              Across all seven areas, a common psychological pattern drives
              recurring financial exploitation. Recognizing this cycle is key
              to breaking it.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative flex flex-col items-center gap-0">
              {/* Step 1: Emotion */}
              <div className="flex w-full max-w-md flex-col items-center rounded-xl border border-amber-500/30 bg-amber-500/10 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20">
                  <Heart className="h-6 w-6 text-amber-400" />
                </div>
                <h4 className="mt-3 font-bold text-foreground font-serif">
                  Emotional Trigger
                </h4>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  Loneliness, anxiety, insecurity, boredom, or health
                  fear creates a state of psychological vulnerability
                </p>
              </div>

              {/* Arrow 1 */}
              <div className="flex h-10 items-center justify-center">
                <ArrowDown className="h-5 w-5 text-muted-foreground" />
              </div>

              {/* Step 2: Dependence */}
              <div className="flex w-full max-w-md flex-col items-center rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h4 className="mt-3 font-bold text-foreground font-serif">
                  Psychological Dependence
                </h4>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  A product, service, or relationship is positioned as
                  the solution. Relief becomes associated with spending,
                  creating a dependency loop
                </p>
              </div>

              {/* Arrow 2 */}
              <div className="flex h-10 items-center justify-center">
                <ArrowDown className="h-5 w-5 text-muted-foreground" />
              </div>

              {/* Step 3: Spending */}
              <div className="flex w-full max-w-md flex-col items-center rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                  <Coins className="h-6 w-6 text-red-400" />
                </div>
                <h4 className="mt-3 font-bold text-foreground font-serif">
                  Financial Spending
                </h4>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  Purchases made under emotional influence. Each
                  transaction provides temporary relief but reinforces the
                  emotional dependency pattern
                </p>
              </div>

              {/* Loop-back Arrow */}
              <div className="mt-6 flex w-full max-w-md flex-col items-center rounded-xl border border-border bg-muted/50 p-5 text-center">
                <RotateCcw className="h-5 w-5 text-muted-foreground" />
                <p className="mt-2 text-sm font-medium text-muted-foreground leading-relaxed">
                  Temporary relief fades, the original emotional trigger
                  returns -- often intensified by the financial cost
                  itself -- restarting the cycle
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Breaking the Cycle */}
        <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-8">
          <h3 className="text-center text-xl font-bold text-foreground font-serif">
            Breaking the Cycle
          </h3>
          <p className="mx-auto mt-3 text-center text-sm text-muted-foreground leading-relaxed max-w-xl">
            Awareness of the loop is the first intervention. Research-supported
            strategies for interrupting exploitation cycles include:
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Cooling-off periods",
                desc: "Implement a 24-48 hour delay before any purchase exceeding a personal threshold",
              },
              {
                title: "Spending awareness",
                desc: "Track category-specific spending monthly to reveal patterns invisible at the transaction level",
              },
              {
                title: "Emotional check-in",
                desc: "Before purchasing, ask: \"Would I still want this if I felt calm and content right now?\"",
              },
              {
                title: "Social accountability",
                desc: "Discuss significant purchases with a trusted person who is outside the influence of the seller",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-4"
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section discusses psychological and economic mechanisms,
            not moral judgments.
          </p>
        </div>
      </div>
    </section>
  )
}
