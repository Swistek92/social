import {
  Film,
  BrainCircuit,
  TrendingUp,
  FlaskConical,
  Info,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const cards = [
  {
    icon: Film,
    title: "Cultural Framing",
    description:
      "Films, music, and social media influencers sometimes portray substance use as a symbol of creativity, rebellion, relaxation, or social bonding. While artistic expression is protected, the long-term health consequences of the substances depicted frequently receive far less visibility than the lifestyle they accompany.",
    details: [
      "Glamorization of consumption without context of dependency risk",
      "Celebrity endorsements normalizing casual use in everyday settings",
      "Under-representation of recovery struggles and long-term health costs",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Psychological Mechanisms",
    description:
      "Human cognition is shaped by social proof, repetition, and identity formation. When substance-positive messaging is encountered frequently enough, risk perception decreases -- a well-documented phenomenon in behavioral psychology. Humor and meme culture further lower perceived danger, particularly among younger audiences.",
    details: [
      "Social proof: widespread portrayal signals implicit acceptability",
      "Desensitization through repetition across media channels",
      "Humor and meme culture reframing risk as trivial or comedic",
      "Adolescent identity formation tied to substance-associated subcultures",
    ],
  },
  {
    icon: TrendingUp,
    title: "Economic Incentives",
    description:
      "The attention economy rewards emotionally charged, sensational, and hedonistic content far more than measured, preventive health messaging. Platforms, creators, and advertisers all operate within a structure where engagement metrics outweigh public health considerations.",
    details: [
      "Algorithmic amplification of provocative lifestyle content",
      "Higher ad revenue for sensationalized substance-related media",
      "Preventive health content systematically de-prioritized by engagement algorithms",
    ],
  },
]

const scienceTopics = [
  {
    label: "Addiction Risk",
    text: "Research identifies genetic predisposition, early exposure, stress, and environmental factors as key risk multipliers. Casual use can escalate to dependency depending on individual neurobiology.",
  },
  {
    label: "Mental Health Impact",
    text: "Peer-reviewed studies associate sustained substance use with elevated risk of anxiety disorders, depression, psychosis, and cognitive impairment across multiple substance categories.",
  },
  {
    label: "Adolescent Brain Vulnerability",
    text: "Neuroscience demonstrates that the prefrontal cortex -- responsible for judgment and impulse control -- does not fully mature until approximately age 25, making adolescents disproportionately vulnerable.",
  },
  {
    label: "Medical Research vs. Recreational Narratives",
    text: "Controlled medical research operates under strict dosage, purity, and monitoring protocols that bear no resemblance to recreational use conditions. Conflating the two undermines informed decision-making.",
  },
]

export function NormalizationSection() {
  return (
    <section
      id="normalization"
      className="py-20 lg:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Public Health
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Normalization of Risky Substances in Culture
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Cultural narratives shape how risk is perceived. When substance use
            is consistently framed as aspirational, entertaining, or harmless,
            public understanding of actual health consequences can become
            distorted. This section examines documented patterns -- not to
            moralize, but to inform.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
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

        {/* Side Panel: What Science Actually Studies */}
        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <FlaskConical className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">
              What Science Actually Studies
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Balanced, evidence-based findings from peer-reviewed research -- not
            recreational anecdotes or sensationalized claims.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {scienceTopics.map((topic) => (
              <div
                key={topic.label}
                className="rounded-lg border border-border bg-card p-5"
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {topic.label}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {topic.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section discusses media narratives and cultural trends. It does
            not accuse specific individuals or organizations.
          </p>
        </div>
      </div>
    </section>
  )
}
