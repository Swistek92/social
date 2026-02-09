import {
  Briefcase,
  AlertTriangle,
  Brain,
  Building2,
  Shield,
  CheckCircle2,
  Info,
  ArrowRight,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const comparisonRows = [
  {
    tactic: "Creating urgency",
    scam: "\"Act now or lose this opportunity forever\"",
    workplace: "\"We need this by tomorrow\" (repeatedly, with no actual deadline)",
  },
  {
    tactic: "Isolation from support",
    scam: "\"Don't tell anyone about this deal\"",
    workplace: "Discouraging team communication or union involvement",
  },
  {
    tactic: "Guilt & obligation",
    scam: "\"After everything I've done for you...\"",
    workplace: "\"The team is counting on you\" to justify unpaid overtime",
  },
  {
    tactic: "Moving goalposts",
    scam: "\"Just one more payment and you'll get the reward\"",
    workplace: "Constantly expanding role scope without title or pay adjustment",
  },
  {
    tactic: "Gaslighting",
    scam: "\"You agreed to this, don't you remember?\"",
    workplace: "\"That was always part of your role\" when it clearly was not",
  },
  {
    tactic: "Exploiting trust",
    scam: "Building rapport before the ask",
    workplace: "\"We're like a family here\" to blur professional boundaries",
  },
]

const redFlags = [
  "Your actual responsibilities consistently exceed your written job description",
  "Requests for overtime are framed as personal favors rather than compensated work",
  "Role expansion occurs without discussion of title change or salary adjustment",
  "Boundaries you set are treated as a lack of commitment or team spirit",
  "You feel unable to decline additional work without fear of consequences",
  "Success metrics are vague or shift frequently, making adequate performance impossible",
  "You are expected to be constantly available outside of contracted hours",
  "Feedback is primarily given during high-pressure moments rather than structured reviews",
]

const psychDrivers = [
  {
    icon: Brain,
    title: "People-Pleasing Patterns",
    description:
      "A deep-seated need for approval can make individuals vulnerable to accepting unreasonable workloads. The desire to be seen as helpful, reliable, or indispensable is frequently exploited in workplace dynamics.",
    details: [
      "Difficulty saying no to authority figures or well-liked colleagues",
      "Equating personal worth with productivity output",
      "Fear of disappointing others outweighing personal capacity limits",
      "Accepting praise as a substitute for fair compensation",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Fear of Job Loss",
    description:
      "Economic insecurity and the perceived difficulty of finding alternative employment create a powerful compliance mechanism. This fear is often amplified in competitive industries or during economic downturns.",
    details: [
      "Tolerating poor conditions because alternatives seem scarce",
      "Self-censoring legitimate concerns about workload or treatment",
      "Accepting scope creep as a survival strategy rather than a choice",
      "Normalizing unhealthy work patterns as industry standard",
    ],
  },
  {
    icon: Building2,
    title: "Impostor Syndrome",
    description:
      "The persistent belief that one does not deserve their position can lead to overcompensation through excessive work. Individuals with impostor syndrome may accept exploitation as a way to 'prove' their worth.",
    details: [
      "Working longer hours to compensate for perceived inadequacy",
      "Attributing success to luck rather than competence, reinforcing insecurity",
      "Avoiding negotiation for fear of being 'exposed' as undeserving",
      "Accepting additional work to demonstrate commitment and belonging",
    ],
  },
]

const structuralFactors = [
  {
    title: "Power Imbalance",
    description:
      "The employer-employee relationship is inherently asymmetric. One party controls income, career progression, and workplace conditions, which makes genuine negotiation difficult without explicit protections.",
  },
  {
    title: "Unclear Role Boundaries",
    description:
      "When job descriptions are vague or absent, expectations expand organically. Without documented scope, it becomes difficult to identify or push back on role creep.",
  },
  {
    title: "Productivity Culture",
    description:
      "A pervasive cultural emphasis on hustle, grind, and availability can normalize overwork. Social media and peer comparison amplify this pressure beyond the workplace itself.",
  },
  {
    title: "Performance Metrics",
    description:
      "Poorly designed KPIs that reward output volume over quality or sustainability create incentives for overwork and discourage boundary-setting.",
  },
]

const protectionSteps = [
  {
    step: "01",
    title: "Document Everything",
    description:
      "Keep written records of your official job description, assigned tasks, and any verbal requests that exceed your role. Emails, messages, and meeting notes create a timeline if needed.",
  },
  {
    step: "02",
    title: "Clarify Your Role",
    description:
      "Request a formal, written job description if one does not exist. When new responsibilities appear, ask in writing: \"Is this now part of my role, and if so, how does this affect my title and compensation?\"",
  },
  {
    step: "03",
    title: "Set Boundaries Clearly",
    description:
      "Practice professional boundary-setting: \"I can take this on if we deprioritize X\" or \"I'm available during contracted hours.\" Frame boundaries as professional clarity, not confrontation.",
  },
  {
    step: "04",
    title: "Track Your Hours",
    description:
      "Keep a personal log of actual working hours, including after-hours communication and weekend work. This data is valuable for self-awareness and for formal discussions if needed.",
  },
  {
    step: "05",
    title: "Know Your Legal Rights",
    description:
      "Familiarize yourself with local labor laws regarding maximum working hours, overtime compensation, rest periods, and protection against unfair dismissal. Many jurisdictions offer free legal guidance.",
  },
]

export function WorkplaceSection() {
  return (
    <section id="workplace" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Workplace Awareness
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Workplace Manipulation & Psychological Exploitation
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            Power imbalance and social pressure in workplaces can lead to role
            creep, unpaid overwork, and burnout. Recognizing the patterns
            that drive these dynamics is the first step toward protecting
            yourself and others.
          </p>
        </div>

        {/* 1. Comparison Table */}
        <div className="mt-14">
          <h3 className="text-center text-2xl font-bold text-foreground font-serif">
            Scam Tactics vs. Workplace Pressure
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground leading-relaxed">
            Many workplace pressure dynamics share structural similarities with
            documented manipulation tactics used in fraud and social
            engineering.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-4 font-semibold text-foreground">
                    Tactic Pattern
                  </th>
                  <th className="px-5 py-4 font-semibold text-red-400">
                    In Scam Contexts
                  </th>
                  <th className="px-5 py-4 font-semibold text-amber-400">
                    In Workplace Contexts
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.tactic}
                    className={
                      i < comparisonRows.length - 1
                        ? "border-b border-border"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3.5 w-3.5 text-primary" />
                        {row.tactic}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground italic">
                      {row.scam}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground italic">
                      {row.workplace}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Red Flags */}
        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-amber-500/20 bg-amber-500/5 p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              Red Flags: Role Abuse & Expectation Creep
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            These patterns, when persistent, may indicate structural
            exploitation rather than occasional busy periods. Context matters,
            but recurring red flags warrant attention.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {redFlags.map((flag) => (
              <li key={flag} className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span className="text-sm text-foreground leading-relaxed">
                  {flag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Psychological Drivers */}
        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground font-serif">
              Psychological Drivers
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              Understanding the internal mechanisms that make individuals
              vulnerable to workplace exploitation is essential for building
              sustainable self-protection strategies.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {psychDrivers.map((driver) => (
              <Card
                key={driver.title}
                className="border-border bg-card transition-colors hover:border-primary/30"
              >
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <driver.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground font-serif">
                    {driver.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {driver.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2">
                    {driver.details.map((detail) => (
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
        </div>

        {/* 4. Structural Factors */}
        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground font-serif">
              Structural Factors
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              Beyond individual psychology, systemic and organizational
              structures shape the conditions in which workplace exploitation
              becomes possible.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {structuralFactors.map((factor) => (
              <div
                key={factor.title}
                className="rounded-xl border border-primary/20 bg-primary/5 p-6"
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {factor.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Self-Protection Steps */}
        <div className="mt-16">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-serif">
              Practical Self-Protection
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
              Concrete, evidence-based steps to protect yourself within
              existing workplace structures while maintaining professional
              relationships.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-6 max-w-3xl mx-auto">
            {protectionSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-5 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-sm font-bold text-primary">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-serif">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section discusses general workplace dynamics and does not
            refer to specific organizations.
          </p>
        </div>
      </div>
    </section>
  )
}
