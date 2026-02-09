import {
  Globe,
  ArrowRight,
  TrendingUp,
  Scale,
  ShieldAlert,
  Info,
  Factory,
  Users,
  Truck,
  Store,
  Landmark,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const substanceRegions = [
  {
    substance: "Opioids (Heroin, Fentanyl)",
    regions: "Parts of South-East Asia, Central Asia, and synthetic labs in multiple continents",
    note: "Synthetic opioid production has decentralized traditional geographic patterns, making lab-based manufacturing possible almost anywhere with precursor chemical access.",
  },
  {
    substance: "Cocaine",
    regions: "South American Andean regions (primarily three countries)",
    note: "Processing occurs close to cultivation areas, but final-stage labs are increasingly found in transit regions, complicating geographic attribution.",
  },
  {
    substance: "Amphetamine-type Stimulants",
    regions: "South-East Asia, parts of the Middle East, and North America",
    note: "Methamphetamine production has shifted from small domestic labs to industrial-scale operations in multiple regions, according to UNODC reporting.",
  },
  {
    substance: "Cannabis",
    regions: "Widespread cultivation globally, including legal commercial production in several jurisdictions",
    note: "Legalization in some markets has created complex interactions between legal and illegal supply chains operating simultaneously.",
  },
]

const supplyChainSteps = [
  {
    icon: Factory,
    label: "Production",
    description: "Raw material cultivation or chemical synthesis in source regions, often exploiting poverty and weak governance",
  },
  {
    icon: Users,
    label: "Intermediaries",
    description: "Brokers, middlemen, and organized networks negotiate pricing, logistics, and risk distribution across borders",
  },
  {
    icon: Truck,
    label: "Transport",
    description: "Multi-modal logistics using commercial shipping, air freight, overland routes, and increasingly postal/parcel systems",
  },
  {
    icon: Store,
    label: "Local Distribution",
    description: "Street-level distribution networks that exploit vulnerable individuals, often in areas with limited economic opportunities",
  },
  {
    icon: Landmark,
    label: "Money Laundering",
    description: "Profits are integrated into legitimate economies through shell companies, real estate, cryptocurrency, and trade-based laundering",
  },
]

const economicFactors = [
  {
    title: "Income Inequality & Disposable Income",
    description:
      "Wealthier regions create higher per-unit pricing power, making them economically attractive destination markets. Simultaneously, inequality within those regions creates both demand (stress, alienation) and labor supply (vulnerable populations recruited into distribution).",
  },
  {
    title: "Consumer Culture & Self-Medication",
    description:
      "Societies with high performance pressure, limited mental health access, and normalized self-medication patterns tend to generate sustained demand regardless of enforcement intensity.",
  },
  {
    title: "Globalized Logistics & Trade Openness",
    description:
      "The same infrastructure that enables efficient global trade -- containerized shipping, express parcel services, free trade zones -- also reduces the cost and risk of trafficking. Detection rates remain low relative to total trade volume.",
  },
  {
    title: "Pharmaceutical Industry Spillover",
    description:
      "In some markets, aggressive marketing of prescription medications has created dependency that transitions to illegal alternatives when prescriptions are restricted. This pattern is well-documented in multiple OECD countries.",
  },
]

const coexistencePoints = [
  {
    title: "Regulatory Gaps",
    text: "Where legal markets exist alongside prohibition of similar substances, consumers may perceive risk as lower across all categories. Inconsistent regulation creates confusion about what is genuinely dangerous.",
  },
  {
    title: "Tax Evasion & Undercutting",
    text: "Illegal suppliers can undercut legal, taxed products, maintaining market share even in jurisdictions with legalized alternatives. This dynamic is documented in tobacco, cannabis, and alcohol markets.",
  },
  {
    title: "Quality Control Failures",
    text: "Illegal markets have no quality assurance. Contamination, adulteration, and inconsistent dosing cause a disproportionate share of overdose deaths -- a public health crisis distinct from the question of legality itself.",
  },
  {
    title: "Perception Laundering",
    text: "Legal status in one jurisdiction can be used to market substances as 'safe' in others where they remain illegal or unregulated, creating a false sense of security among consumers.",
  },
]

export function TraffickingSection() {
  return (
    <section id="trafficking" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Educational Context
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Global Drug Production & Trafficking Patterns
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            Understanding how global drug markets function is essential for
            informed public discourse. This section provides high-level,
            evidence-based context drawn from UNODC, Europol, and academic
            research -- without operational detail, specific routes, or country
            accusations.
          </p>
        </div>

        {/* 1. Production Overview */}
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              Global Production Overview by Substance Type
            </h3>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            Production patterns are regional but evolving. Synthetic substances
            have fundamentally disrupted traditional geographic models, making
            any single-country narrative outdated.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {substanceRegions.map((item) => (
              <Card
                key={item.substance}
                className="border-border bg-card transition-colors hover:border-primary/30"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-foreground font-serif">
                    {item.substance}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Regions: {item.regions}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.note}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 2. Supply Chain Diagram */}
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              Generalized Trafficking Supply Chain
            </h3>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            Drug trafficking follows a consistent economic logic similar to
            legitimate supply chains -- production, brokerage, logistics,
            distribution, and profit integration. Understanding the structure
            helps identify intervention points.
          </p>

          {/* Chain visualization */}
          <div className="mt-8 flex flex-col gap-0">
            {supplyChainSteps.map((step, index) => (
              <div key={step.label} className="flex items-stretch gap-4">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  {index < supplyChainSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary/20" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h4 className="text-sm font-bold text-foreground">
                    {step.label}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Economic Factors */}
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              Economic Factors Driving Demand
            </h3>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            Demand in wealthier regions is not random -- it is driven by
            structural economic and social conditions that enforcement alone
            cannot address.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {economicFactors.map((factor) => (
              <Card
                key={factor.title}
                className="border-border bg-card transition-colors hover:border-primary/30"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-foreground font-serif">
                    {factor.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 4. Legal & Illegal Market Coexistence */}
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              How Legal & Illegal Markets Coexist
            </h3>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            The relationship between legal and illegal substance markets is more
            complex than simple substitution. In many jurisdictions, both
            operate simultaneously, shaping public perception in ways that
            complicate prevention efforts.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {coexistencePoints.map((point) => (
              <div
                key={point.title}
                className="rounded-lg border border-border bg-card p-5"
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {point.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Public Safety Message */}
        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <ShieldAlert className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              Public Safety Perspective
            </h3>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Drug trafficking systems are not built on substances alone -- they
            exploit <strong className="text-foreground">demand</strong>,{" "}
            <strong className="text-foreground">inequality</strong>, and{" "}
            <strong className="text-foreground">logistics</strong>. Effective
            responses must address all three.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="text-sm font-semibold text-primary">
                Demand Reduction
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Investing in mental health access, education, and community
                support reduces the conditions that generate sustained demand.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="text-sm font-semibold text-primary">
                Inequality Intervention
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Economic development in source regions and vulnerable
                communities removes the labor pool that trafficking networks
                depend on.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h4 className="text-sm font-semibold text-primary">
                Logistics Disruption
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                International cooperation, financial intelligence, and
                technology-assisted monitoring target the infrastructure rather
                than individuals.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This content provides general educational context and does not
            describe operational methods or accuse specific countries or groups.
          </p>
        </div>
      </div>
    </section>
  )
}
