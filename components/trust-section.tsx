import {
  ShieldCheck,
  Landmark,
  History,
  ShieldAlert,
  Lightbulb,
  Info,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const trustCards = [
  {
    icon: ShieldCheck,
    title: "Legal Protection & Whistleblower Safety",
    description:
      "Effective legal systems include mechanisms designed to protect individuals who report wrongdoing. Research consistently shows that strong whistleblower protections correlate with higher rates of crime reporting and greater institutional accountability.",
    details: [
      "Statutory protection for reporting individuals, shielding them from dismissal, demotion, or harassment",
      "Anti-retaliation laws with enforceable penalties for organizations that punish reporters",
      "Confidentiality mechanisms that protect the identity of those who submit reports",
      "Witness protection frameworks for cases involving organized crime or high-risk testimony",
    ],
  },
  {
    icon: Landmark,
    title: "Institutional Trust",
    description:
      "In societies where institutions are perceived as fair and impartial, citizens are significantly more likely to engage in crime reporting. Trust is not automatic; it is built through transparency, consistent enforcement, and demonstrated independence of oversight bodies.",
    details: [
      "Citizens feel safe reporting crimes without fear of personal consequences",
      "Institutions are widely perceived as impartial and free from undue influence",
      "Reporting is viewed as a civic responsibility rather than an act of disloyalty",
      "Public-facing accountability reports strengthen the perception of institutional integrity",
    ],
  },
  {
    icon: History,
    title: "Historical & Cultural Context",
    description:
      "The willingness to report crime is deeply shaped by historical experience. In regions where authorities have historically been perceived as unreliable, corrupt, or punitive toward reporters, communities develop deeply rooted reluctance to engage with formal systems, even when reforms have been implemented.",
    details: [
      "Historical mistrust of authorities rooted in documented past abuses or failures",
      "Weak legal enforcement that reinforces the belief that reporting is ineffective",
      "Fear of retaliation from criminal networks in regions with limited state protection",
      "Generational transmission of distrust, even after institutional reform",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Barriers to Reporting",
    description:
      "Even in societies with well-functioning institutions, significant barriers to reporting persist. Research identifies a consistent set of factors that suppress reporting rates across cultures and legal systems.",
    details: [
      "Fear of social consequences, including ostracism, stigma, or damage to family relationships",
      "Fear of retaliation from perpetrators or their networks",
      "Belief that reporting will not lead to meaningful action or justice",
      "Legal system complexity that discourages engagement by non-specialists",
      "Language barriers and lack of culturally appropriate reporting channels",
    ],
  },
]

const improvementStrategies = [
  {
    title: "Anonymous Reporting Systems",
    description:
      "Secure, technology-enabled platforms that allow individuals to submit tips without revealing their identity. Research shows anonymous channels increase reporting by 30-60% in pilot programs.",
  },
  {
    title: "Witness Protection Programs",
    description:
      "Comprehensive programs that provide physical safety, identity protection, and financial support for individuals who face credible threats as a result of their testimony.",
  },
  {
    title: "Transparent Investigations",
    description:
      "Public reporting on case outcomes, investigation timelines, and resolution rates. Transparency reinforces the perception that reports are taken seriously and acted upon.",
  },
  {
    title: "Public Trust-Building",
    description:
      "Community policing initiatives, civilian oversight boards, and open data programs that systematically reduce the gap between institutions and the communities they serve.",
  },
  {
    title: "Cultural Outreach",
    description:
      "Multilingual, culturally sensitive education campaigns that normalize reporting as a community protection mechanism rather than an act of individual confrontation.",
  },
  {
    title: "Feedback Loops",
    description:
      "Systems that inform reporters about the outcome of their submissions, reinforcing the sense that engagement with institutions produces tangible results.",
  },
]

export function TrustSection() {
  return (
    <section id="trust" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Sociological Education
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Trust in Institutions & Reporting Culture
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Willingness to report crime depends on perceived safety, trust in
            law enforcement, and the strength of legal protections for reporting
            individuals. Understanding these dynamics is essential to building
            safer communities.
          </p>
        </div>

        {/* Main Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {trustCards.map((card) => (
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

        {/* What Improves Reporting Culture */}
        <div className="mt-16">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-serif">
              What Improves Reporting Culture
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
              Evidence-based reforms that have been shown to increase community
              engagement with law enforcement and institutional reporting
              systems.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {improvementStrategies.map((strategy) => (
              <div
                key={strategy.title}
                className="rounded-xl border border-primary/20 bg-primary/5 p-6"
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {strategy.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section discusses general sociological patterns and does not
            make value judgments about specific countries or populations.
          </p>
        </div>
      </div>
    </section>
  )
}
