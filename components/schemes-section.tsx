import {
  Package,
  Brain,
  Smartphone,
  DollarSign,
  Users,
  AlertCircle,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const schemes = [
  {
    icon: Package,
    title: "Drug Distribution Patterns",
    description:
      "Educational overview of common drug trafficking methods and distribution networks used to exploit communities.",
    warning:
      "Watch for unusual packages, frequent short visits, and coded language in your neighborhood.",
  },
  {
    icon: Brain,
    title: "Psychological Manipulation",
    description:
      "How predators use psychological tactics to control victims through gaslighting, isolation, and coercion.",
    warning:
      "Be wary of relationships where someone controls your finances, contacts, or daily decisions.",
  },
  {
    icon: Smartphone,
    title: "Social Media Exploitation",
    description:
      "How criminals exploit social platforms for grooming, phishing, and spreading disinformation to vulnerable users.",
    warning:
      "Never share personal details with strangers online and verify identities before trusting.",
  },
  {
    icon: DollarSign,
    title: "Financial Fraud Models",
    description:
      "Common financial fraud schemes including Ponzi schemes, money laundering fronts, and investment scams.",
    warning:
      "If returns sound too good to be true, they are. Always verify through official financial institutions.",
  },
  {
    icon: Users,
    title: "Recruitment Tactics",
    description:
      "How criminal organizations recruit vulnerable individuals through false promises, debt traps, and peer pressure.",
    warning:
      "Be cautious of offers that require secrecy or promise fast money with no clear explanation.",
  },
  {
    icon: AlertCircle,
    title: "Identity Theft",
    description:
      "Methods criminals use to steal personal information for fraud, including data breaches and phishing attacks.",
    warning:
      "Monitor your credit regularly and never share sensitive data through unsecured channels.",
  },
]

export function SchemesSection() {
  return (
    <section id="schemes" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Educational
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            How Criminal Schemes Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Understanding how criminal operations function is the first step to
            protecting yourself and your community. Each card explains warning
            signs and how to stay safe.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {schemes.map((scheme) => (
            <Card
              key={scheme.title}
              className="group border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <scheme.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-foreground font-serif">{scheme.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {scheme.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs font-medium text-primary">
                    Warning Signs
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {scheme.warning}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
