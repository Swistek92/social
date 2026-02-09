import {
  Scale,
  FileText,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  HelpCircle,
  Info,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const mainCards = [
  {
    icon: Scale,
    title: "Terms vs. Local Law",
    description:
      "Terms of service are contractual agreements, but they do not override mandatory consumer protection legislation. Certain clauses may be deemed unenforceable depending on jurisdiction, and legal validity often depends on specific court interpretation and local regulatory frameworks.",
    details: [
      "Consumer protection laws may take precedence over contractual terms in many jurisdictions",
      "Unfair contract term legislation exists in the EU, UK, Australia, and many other regions",
      "Courts regularly assess whether terms were reasonably brought to the consumer's attention",
      "Automatic consent through pre-ticked boxes is prohibited in several legal frameworks",
    ],
  },
  {
    icon: FileText,
    title: "Complexity as Barrier",
    description:
      "The length and complexity of modern contracts can function as a practical barrier to informed consent. Research shows the average person would need weeks each year just to read the terms they agree to, creating a structural gap between formal consent and genuine understanding.",
    details: [
      "Lengthy documents that may exceed tens of thousands of words",
      "Legal jargon and technical language that requires specialized knowledge",
      "Buried clauses regarding hidden fees, automatic renewals, or price changes",
      "Opt-out mechanisms that are intentionally difficult to find or execute",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Enforcement Asymmetry",
    description:
      "Individuals and large organizations operate with fundamentally different resources for legal interpretation and dispute resolution. This structural asymmetry can result in compliance with terms that a court might not uphold, simply because challenging them feels impractical.",
    details: [
      "Individual legal action is costly, time-consuming, and emotionally draining",
      "Many people accept terms they disagree with due to perceived lack of alternatives",
      "Class action limitations in contracts can reduce collective bargaining power",
      "Dispute resolution may be moved to jurisdictions unfavorable to consumers",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Common Risk Areas",
    description:
      "Certain contractual patterns appear repeatedly across industries and are frequently flagged by consumer protection agencies. Awareness of these patterns allows individuals to make more informed decisions before committing.",
    details: [
      "Subscription traps with difficult cancellation processes",
      "Forced arbitration clauses that waive the right to judicial review",
      "Broad liability waivers that may exceed what is legally permissible",
      "Expansive data usage permissions buried in privacy policies",
    ],
  },
]

const consumerActions = [
  "Read cancellation and renewal policies before subscribing to any service",
  "Screenshot or archive agreements at the time of acceptance for future reference",
  "Keep written records of all communications regarding terms, billing, and disputes",
  "Check your national consumer protection agency for guidance on your specific rights",
  "Seek professional legal advice when contracts involve significant financial commitments",
  "Compare terms across competitors to identify unusually aggressive clauses",
]

const rights = [
  {
    title: "Consumer Protection",
    description:
      "Most jurisdictions have consumer protection laws that set minimum standards for fair dealing, product quality, and dispute resolution that cannot be overridden by contract.",
  },
  {
    title: "Unfair Contract Terms",
    description:
      "Legislation in the EU, UK, Australia, and elsewhere allows courts to void contract terms that create a significant imbalance between the parties' rights and obligations.",
  },
  {
    title: "Data Protection",
    description:
      "Regulations such as GDPR, CCPA, and similar frameworks grant individuals specific rights over their personal data that contractual terms cannot eliminate.",
  },
  {
    title: "Cooling-Off Periods",
    description:
      "Many jurisdictions provide a statutory right to cancel certain contracts within a defined period after signing, regardless of what the contract itself states.",
  },
]

const legalSupportScenarios = [
  "A contract contains a clause that seems to waive a statutory right",
  "You are unable to cancel a subscription despite following the stated process",
  "Terms have been changed after your initial agreement without adequate notice",
  "You are facing penalties that were not clearly disclosed at the time of signing",
  "A dispute resolution clause requires arbitration in a distant or foreign jurisdiction",
  "You suspect a contract violates local consumer protection regulations",
]

export function ContractsSection() {
  return (
    <section id="contracts" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Legal Literacy
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Contractual Manipulation & Power Imbalance
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            Individuals frequently face difficulty understanding complex legal
            language in contracts, while corporations maintain dedicated legal
            teams. This structural imbalance, rather than any specific
            wrongdoing, creates an environment where informed consent is often
            more theoretical than practical.
          </p>
        </div>

        {/* Main Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {mainCards.map((card) => (
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

        {/* What Consumers Can Do */}
        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              What Consumers Can Do
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            While systemic change requires legislative and regulatory action,
            individuals can take practical steps to protect themselves within the
            current framework.
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {consumerActions.map((action) => (
              <li key={action} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground leading-relaxed">
                  {action}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Know Your Rights */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground font-serif">
              Know Your Rights
            </h3>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground leading-relaxed">
            Consumer law, unfair contract term regulations, and data protection
            frameworks exist specifically to protect individuals from structural
            imbalances in contractual relationships.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {rights.map((right) => (
              <Card
                key={right.title}
                className="border-border bg-card"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-foreground font-serif">
                    {right.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {right.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* When to Seek Legal Support */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-amber-500/20 bg-amber-500/5 p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
              <HelpCircle className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              When to Seek Legal Support
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Professional legal advice is recommended in the following scenarios.
            Many jurisdictions offer free or low-cost legal aid for consumer
            disputes.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {legalSupportScenarios.map((scenario) => (
              <li key={scenario} className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {scenario}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section provides general educational information. Legal
            enforceability depends on jurisdiction and case specifics. No
            specific companies are being accused.
          </p>
        </div>
      </div>
    </section>
  )
}
