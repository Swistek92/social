import {
  Scale,
  ShieldAlert,
  TrendingUp,
  TrendingDown,
  HeartPulse,
  HelpCircle,
  Users,
  Clock,
  Eye,
  AlertTriangle,
  Gavel,
  Info,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const supportReasons = [
  {
    icon: Users,
    title: "Public Fear & Loss of Trust",
    description:
      "When violence becomes widespread and visible, communities lose confidence in conventional policing and judicial systems. The resulting fear drives public demand for rapid, visible action regardless of its long-term consequences.",
  },
  {
    icon: Clock,
    title: "Perceived Slowness of Legal Systems",
    description:
      "Formal legal processes are designed with checks and balances that require time. During acute crises, many citizens perceive this deliberation as inaction, creating pressure for expedited enforcement measures.",
  },
  {
    icon: ShieldAlert,
    title: "Exceptional Threats, Exceptional Measures",
    description:
      "When criminal organizations demonstrate capability to challenge state authority directly, the argument that normal procedures are insufficient gains widespread public traction and political viability.",
  },
]

const shortTermEffects = [
  {
    title: "Visible Crime Reduction",
    description:
      "Street-level violence and visible criminal activity often decrease rapidly following concentrated enforcement operations, producing measurable short-term safety improvements.",
  },
  {
    title: "Network Disruption",
    description:
      "Targeted operations can dismantle organizational structures of criminal networks, disrupting supply chains, communication channels, and leadership hierarchies.",
  },
  {
    title: "Restored Sense of Order",
    description:
      "Communities in high-crime areas frequently report an immediate improvement in perceived safety, enabling the resumption of daily economic and social activities.",
  },
]

const longTermConsiderations = [
  {
    icon: AlertTriangle,
    title: "Risk of Wrongful Detention",
    description:
      "Expanded enforcement powers, particularly during emergencies, increase the statistical likelihood of detaining individuals who are not involved in criminal activity. Research consistently shows this risk is not distributed equally across populations.",
  },
  {
    icon: Gavel,
    title: "Difficulty Restoring Legal Standards",
    description:
      "Emergency powers, once granted, are historically difficult to revoke. Studies of multiple jurisdictions show that temporary security measures frequently become permanent features of the legal landscape.",
  },
  {
    icon: Eye,
    title: "Oversight & Accountability Gaps",
    description:
      "Strong enforcement operations require equally strong oversight mechanisms. Without independent monitoring, judicial review, and transparent reporting, the risk of institutional overreach increases significantly.",
  },
  {
    icon: Users,
    title: "Erosion of Institutional Trust",
    description:
      "If enforcement actions are perceived as disproportionate, discriminatory, or lacking accountability, the resulting erosion of public trust can undermine the very institutions needed for long-term security and social stability.",
  },
]

const healthVsSecurityPoints = [
  {
    side: "Public Health Approach",
    color: "primary",
    points: [
      "Treats addiction as a medical condition requiring clinical intervention",
      "Prioritizes harm reduction, treatment access, and social reintegration",
      "Addresses root causes: poverty, trauma, lack of opportunity",
      "Measures success through health outcomes and recidivism reduction",
    ],
  },
  {
    side: "Security-First Approach",
    color: "chart-2",
    points: [
      "Views drug markets primarily through the lens of criminal threat",
      "Prioritizes disruption, deterrence, and incapacitation",
      "Addresses immediate threats: trafficking networks, street violence",
      "Measures success through arrests, seizures, and crime rate reduction",
    ],
  },
]

export function PolicySection() {
  return (
    <section id="policy" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Policy Analysis
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Strong-State Responses to Crime Crises
          </h2>
          <p className="mx-auto mt-2 text-lg text-muted-foreground font-serif">
            Effectiveness vs Consequences
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            When societies face severe levels of violent crime or institutional
            instability, public demand often shifts toward stronger state
            intervention and faster security measures. This section examines the
            structural trade-offs involved in such responses.
          </p>
        </div>

        {/* Case Study Approach Note */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-6 lg:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground font-serif">
                Analytical Approach
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                This analysis examines structural policies adopted by various
                countries during severe crime or insurgency crises. The focus is
                on documented outcomes and institutional dynamics, not moral
                judgments about specific governments or populations. Examples are
                drawn from publicly available policy research and international
                monitoring reports.
              </p>
            </div>
          </div>
        </div>

        {/* Why Strong Responses Gain Support */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-foreground font-serif">
            Why Strong Responses Gain Support
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground leading-relaxed">
            Understanding the social and political conditions that create demand
            for expanded enforcement powers.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {supportReasons.map((reason) => (
              <Card
                key={reason.title}
                className="border-border bg-card transition-colors hover:border-primary/30"
              >
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base text-foreground font-serif">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Short-Term vs Long-Term */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Short-Term Effects */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-serif">
                Short-Term Effects Often Reported
              </h3>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {shortTermEffects.map((effect) => (
                <div
                  key={effect.title}
                  className="rounded-xl border border-primary/20 bg-primary/5 p-5"
                >
                  <h4 className="text-sm font-semibold text-foreground">
                    {effect.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {effect.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Long-Term Considerations */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <TrendingDown className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-serif">
                Long-Term Considerations
              </h3>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {longTermConsiderations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-destructive/20 bg-destructive/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-destructive/70" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Public Health vs Security Debate */}
        <div className="mt-16">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <HeartPulse className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-serif">
              Public Health vs Security Debate
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              One of the most significant policy tensions in addressing crime
              ecosystems is the balance between treating underlying social
              vulnerabilities as health issues versus addressing their
              manifestations through security frameworks.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {healthVsSecurityPoints.map((approach) => (
              <div
                key={approach.side}
                className={`rounded-xl border p-6 lg:p-8 ${
                  approach.color === "primary"
                    ? "border-primary/20 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <h4
                  className={`text-lg font-semibold font-serif ${
                    approach.color === "primary"
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {approach.side}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {approach.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          approach.color === "primary"
                            ? "bg-primary/60"
                            : "bg-muted-foreground/40"
                        }`}
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Policy Question */}
        <div className="mx-auto mt-16 max-w-3xl rounded-xl border-2 border-primary/30 bg-primary/5 p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <HelpCircle className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground font-serif">
            Key Policy Question
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed italic">
            {
              '"How can societies balance decisive action against organized crime with the protection of legal safeguards that prevent abuse of power?"'
            }
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            This question lies at the heart of democratic governance during
            crises. The answer requires sustained public debate, transparent
            institutions, and policy frameworks that are regularly reviewed
            against measurable outcomes.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section analyzes policy trade-offs observed in different
            contexts. It does not advocate specific political measures or the
            removal of rights from any group.
          </p>
        </div>
      </div>
    </section>
  )
}
