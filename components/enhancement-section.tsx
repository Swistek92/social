"use client"

import {
  Dumbbell,
  HeartPulse,
  BrainCircuit,
  PackageX,
  Microscope,
  Leaf,
  Stethoscope,
  Info,
  Users,
  TrendingUp,
  FlaskConical,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
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
    icon: Users,
    title: "Cultural Normalization",
    description:
      "Body image pressure, influencer aesthetics, and performance culture can progressively normalize the use of enhancement substances, particularly among young adults who may lack awareness of long-term consequences.",
    details: [
      "Influencer culture and extreme physiques create unrealistic body expectations that are often unachievable without pharmaceutical intervention",
      "\"Everyone does it\" social proof lowers the perceived risk threshold, especially in gym subcultures and competitive environments",
      "Short-term visual results overshadow medical consequences, creating a distorted cost-benefit perception",
    ],
  },
  {
    icon: HeartPulse,
    title: "Health Risks Often Underestimated",
    description:
      "Peer-reviewed research consistently documents serious health consequences associated with unsupervised use of anabolic steroids, synthetic hormones, and unregulated supplements.",
    details: [
      "Cardiovascular strain: elevated blood pressure, left ventricular hypertrophy, and increased cardiac event risk",
      "Hormonal disruption and infertility: suppression of natural testosterone production, often requiring long-term recovery",
      "Liver stress: hepatotoxicity associated with oral anabolic compounds and certain pro-hormones",
      "Mood instability and aggression: documented behavioral changes including irritability, anxiety, and depression",
      "Long-term dependency patterns: psychological dependence on exogenous hormones for baseline function",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Psychological Drivers",
    description:
      "The decision to use performance-enhancing substances is rarely purely physical. Psychological mechanisms play a central role in initiation, continuation, and escalation of use.",
    details: [
      "Body dysmorphia pressures: persistent dissatisfaction with physique despite objective progress",
      "Social comparison loops: constant benchmarking against enhanced physiques on social media",
      "Identity linked to physique: self-worth becoming disproportionately tied to appearance metrics",
      "Reward reinforcement through appearance-based validation from peers and online engagement",
    ],
  },
  {
    icon: PackageX,
    title: "Underground Market Similarities",
    description:
      "Systemic factors in the unregulated supply of performance-enhancing substances mirror patterns observed in other underground markets, increasing health risks for end users.",
    details: [
      "Unregulated supply chains: no quality control, dosage standardization, or purity verification",
      "Mislabeling and contamination risks: studies have found significant discrepancies between labeled and actual contents",
      "Use of online marketplaces and informal networks with minimal accountability",
      "Lack of medical oversight amplifies harm from adverse reactions and drug interactions",
    ],
  },
]

const clinicalVsRecreational = [
  {
    icon: Microscope,
    label: "Controlled Clinical Hormone Therapy",
    points: [
      "Prescribed by endocrinologists based on bloodwork and diagnosis",
      "Pharmaceutical-grade compounds with verified purity",
      "Monitored dosages with regular health assessments",
      "Designed to restore physiological levels, not exceed them",
    ],
    variant: "clinical" as const,
  },
  {
    icon: ShieldAlert,
    label: "Unsupervised Recreational Use",
    points: [
      "Self-administered without medical diagnosis or monitoring",
      "Unverified substances from unregulated sources",
      "Supraphysiological doses targeting aesthetic or performance goals",
      "No systematic tracking of health markers or side effects",
    ],
    variant: "warning" as const,
  },
]

const saferAlternatives = [
  {
    icon: Dumbbell,
    title: "Evidence-Based Training",
    description:
      "Progressive overload, periodization, and recovery-centered programming deliver sustainable strength and physique development within natural physiological limits.",
  },
  {
    icon: Leaf,
    title: "Nutrition Science",
    description:
      "Adequate protein intake, micronutrient sufficiency, and caloric management are well-documented performance optimizers that require no pharmaceutical intervention.",
  },
  {
    icon: FlaskConical,
    title: "Recovery Science",
    description:
      "Sleep optimization, stress management, and active recovery protocols are among the most underutilized and most impactful performance tools available.",
  },
  {
    icon: TrendingUp,
    title: "Natural Performance Optimization",
    description:
      "Creatine monohydrate, caffeine, and vitamin D are evidence-backed supplements with established safety profiles and measurable performance benefits.",
  },
]

const warningSymptoms = [
  "Persistent fatigue, low energy, or unexplained weight changes after discontinuing substances",
  "Heart palpitations, chest pain, or shortness of breath during or after exercise",
  "Severe mood swings, persistent anxiety, depression, or suicidal ideation",
  "Sexual dysfunction, loss of libido, or signs of hormonal imbalance",
  "Jaundice, dark urine, or abdominal pain suggesting liver involvement",
  "Gynaecomastia (breast tissue development) or other unexpected physical changes",
]

export function EnhancementSection() {
  return (
    <section
      id="enhancement"
      className="py-20 lg:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Public Health
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Performance Enhancement Culture & Health Risks
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            Body image pressure, social media aesthetics, and performance
            culture can normalize the use of enhancement substances among young
            adults -- often without full awareness of long-term health risks.
            This section presents research-based information for public health
            awareness.
          </p>
        </div>

        {/* 4 Main Cards */}
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
                <ul className="flex flex-col gap-2.5">
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

        {/* What Science and Medicine Say */}
        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Microscope className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              What Science and Medicine Say
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Understanding the distinction between controlled clinical
            interventions and unsupervised recreational use is critical for
            informed health decisions.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {clinicalVsRecreational.map((col) => (
              <div
                key={col.label}
                className={`rounded-lg border p-6 ${
                  col.variant === "clinical"
                    ? "border-primary/30 bg-card"
                    : "border-destructive/30 bg-destructive/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <col.icon
                    className={`h-5 w-5 ${
                      col.variant === "clinical"
                        ? "text-primary"
                        : "text-destructive"
                    }`}
                  />
                  <h4 className="text-sm font-semibold text-foreground">
                    {col.label}
                  </h4>
                </div>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      {col.variant === "clinical" ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      )}
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

        {/* Safer Alternatives Panel */}
        <div className="mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground font-serif">
              Safer Alternatives
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              Evidence-based approaches that deliver real, sustainable results
              without the health risks associated with unregulated enhancement
              substances.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {saferAlternatives.map((alt) => (
              <div
                key={alt.title}
                className="rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <alt.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="mt-4 font-semibold text-foreground text-sm font-serif">
                  {alt.title}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {alt.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* When to Seek Medical Help */}
        <div className="mt-12 rounded-xl border border-destructive/20 bg-destructive/5 p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
              <Stethoscope className="h-5 w-5 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              When to Seek Medical Help
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            If you or someone you know experiences any of the following symptoms
            -- whether during or after substance use -- seek professional
            medical evaluation promptly.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {warningSymptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex gap-3 rounded-lg border border-border bg-card px-5 py-4"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {symptom}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section discusses public health trends and research findings.
            It does not accuse individuals or institutions and does not provide
            guidance on obtaining substances.
          </p>
        </div>
      </div>
    </section>
  )
}
