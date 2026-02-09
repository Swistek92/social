"use client"

import { useState } from "react"
import {
  Eye,
  MessageCircleWarning,
  UserX,
  Clock,
  Gift,
  ShieldAlert,
  Info,
  ChevronRight,
  Pause,
  Search,
  FileText,
  Flag,
  Ban,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const redFlags = [
  {
    icon: Clock,
    title: "Artificial Urgency",
    appearance:
      "Pressuring you to act immediately, claiming an offer expires, or saying you must decide now before it's too late.",
    contexts: ["Scams", "High-pressure sales", "Online fraud", "Recruitment"],
    steps: [
      "Pause and allow yourself time to think",
      "Verify the deadline independently",
      "Consult a trusted person before acting",
    ],
  },
  {
    icon: UserX,
    title: "Isolation Tactics",
    appearance:
      "Discouraging contact with friends or family, insisting on secrecy, or creating dependency by positioning themselves as your only support.",
    contexts: ["Abusive relationships", "Cults", "Trafficking", "Grooming"],
    steps: [
      "Maintain contact with trusted people",
      "Share your situation with someone you trust",
      "Contact a helpline if you feel isolated",
    ],
  },
  {
    icon: Gift,
    title: "Unsolicited Generosity",
    appearance:
      "Offering gifts, money, or favors without reason, then leveraging a sense of obligation to extract compliance or personal information.",
    contexts: ["Romance scams", "Recruitment", "Bribery", "Online grooming"],
    steps: [
      "Question motives behind unexpected gifts",
      "Do not feel obligated to reciprocate",
      "Document the interaction for your records",
    ],
  },
  {
    icon: MessageCircleWarning,
    title: "Inconsistent Narratives",
    appearance:
      "Stories that change over time, contradictory details, evasion when asked direct questions, or verifiable claims that don't check out.",
    contexts: [
      "Fraud",
      "Identity deception",
      "Investment scams",
      "Catfishing",
    ],
    steps: [
      "Keep notes of what was said and when",
      "Cross-check claims with independent sources",
      "Trust your instinct if something feels off",
    ],
  },
  {
    icon: Eye,
    title: "Excessive Surveillance",
    appearance:
      "Monitoring your location, reading your messages, demanding passwords, or tracking your movements under the guise of care or safety.",
    contexts: [
      "Domestic abuse",
      "Stalking",
      "Controlling relationships",
      "Workplace harassment",
    ],
    steps: [
      "Recognize this as a control tactic, not concern",
      "Secure your devices and accounts",
      "Seek help from a domestic violence organization",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Authority Impersonation",
    appearance:
      "Claiming to be from a government agency, bank, or law enforcement, demanding immediate payment or personal data under threat of legal action.",
    contexts: [
      "Phone scams",
      "Phishing emails",
      "Impersonation fraud",
      "Tech support scams",
    ],
    steps: [
      "Hang up and contact the agency directly",
      "Never share credentials over the phone",
      "Report the incident to authorities",
    ],
  },
]

const patternClusters = [
  {
    cluster: "Financial Exploitation",
    flags: ["Artificial Urgency", "Unsolicited Generosity", "Inconsistent Narratives"],
    riskLevel: "High",
  },
  {
    cluster: "Coercive Control",
    flags: ["Isolation Tactics", "Excessive Surveillance", "Artificial Urgency"],
    riskLevel: "High",
  },
  {
    cluster: "Identity Fraud",
    flags: ["Authority Impersonation", "Inconsistent Narratives", "Artificial Urgency"],
    riskLevel: "High",
  },
  {
    cluster: "Grooming / Recruitment",
    flags: ["Unsolicited Generosity", "Isolation Tactics", "Inconsistent Narratives"],
    riskLevel: "Medium-High",
  },
]

const quizQuestions = [
  {
    scenario:
      "A new online contact sends you an expensive gift after only a few days of chatting, then asks you to share your home address so they can 'visit soon.'",
    answer: "dangerous" as const,
    explanation:
      "This combines unsolicited generosity with a request for sensitive personal information. Two red flags together significantly increase risk.",
  },
  {
    scenario:
      "A colleague frequently asks about your weekend plans and occasionally brings coffee for the team.",
    answer: "safe" as const,
    explanation:
      "Casual social interest and shared workplace gestures are normal behavior. There are no manipulation patterns present here.",
  },
  {
    scenario:
      "Someone claiming to be from your bank calls and says your account will be frozen in 30 minutes unless you verify your password immediately.",
    answer: "dangerous" as const,
    explanation:
      "This combines authority impersonation with artificial urgency. Legitimate institutions never demand passwords over the phone under time pressure.",
  },
  {
    scenario:
      "A new friend insists you stop talking to your other friends because 'they don't really care about you' and only this person truly understands you.",
    answer: "warning" as const,
    explanation:
      "This is an isolation tactic. Attempting to separate someone from their support network is a well-documented manipulation pattern.",
  },
  {
    scenario:
      "A neighbor you've known for years asks if you can keep an eye on their house while they travel. They leave you a key and their itinerary.",
    answer: "safe" as const,
    explanation:
      "This is a normal, trust-based request from an established relationship. No manipulation patterns are present.",
  },
]

type QuizAnswer = "safe" | "warning" | "dangerous"

const answerConfig: Record<
  QuizAnswer,
  { label: string; color: string; bgColor: string; icon: typeof CheckCircle2 }
> = {
  safe: {
    label: "Safe",
    color: "text-primary",
    bgColor: "bg-primary/10 border-primary/30",
    icon: CheckCircle2,
  },
  warning: {
    label: "Warning",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10 border-yellow-400/30",
    icon: AlertTriangle,
  },
  dangerous: {
    label: "Dangerous",
    color: "text-red-400",
    bgColor: "bg-red-400/10 border-red-400/30",
    icon: XCircle,
  },
}

function MiniQuiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<QuizAnswer | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = quizQuestions[currentQ]

  function handleSelect(answer: QuizAnswer) {
    if (selected) return
    setSelected(answer)
    if (answer === question.answer) {
      setScore((s) => s + 1)
    }
  }

  function handleNext() {
    if (currentQ + 1 >= quizQuestions.length) {
      setFinished(true)
    } else {
      setCurrentQ((q) => q + 1)
      setSelected(null)
    }
  }

  function handleRestart() {
    setCurrentQ(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="text-center py-8">
        <p className="text-sm text-muted-foreground uppercase tracking-wider">
          Your Result
        </p>
        <p className="mt-3 text-4xl font-bold text-foreground font-serif">
          {score} / {quizQuestions.length}
        </p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
          {score === quizQuestions.length
            ? "Excellent pattern recognition. You correctly identified all scenarios."
            : score >= 3
              ? "Strong awareness. Review the explanations for any you missed to sharpen your instincts."
              : "Consider reviewing the red flag cards above. Recognizing patterns takes practice."}
        </p>
        <Button onClick={handleRestart} className="mt-6" size="sm">
          Retake Quiz
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-muted-foreground">
          Question {currentQ + 1} of {quizQuestions.length}
        </p>
        <div className="flex gap-1.5">
          {quizQuestions.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                i === currentQ
                  ? "bg-primary"
                  : i < currentQ
                    ? "bg-primary/40"
                    : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-foreground leading-relaxed">
        {question.scenario}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {(["safe", "warning", "dangerous"] as const).map((option) => {
          const config = answerConfig[option]
          const Icon = config.icon
          const isSelected = selected === option
          const isCorrect = selected && option === question.answer
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              disabled={selected !== null}
              className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                isSelected && option === question.answer
                  ? config.bgColor
                  : isSelected && option !== question.answer
                    ? "bg-red-400/10 border-red-400/30"
                    : isCorrect
                      ? config.bgColor
                      : "border-border bg-muted/50 hover:border-muted-foreground/30 text-foreground"
              } ${selected ? "cursor-default" : "cursor-pointer"}`}
            >
              <Icon className={`h-4 w-4 ${isSelected || isCorrect ? config.color : "text-muted-foreground"}`} />
              <span className={isSelected || isCorrect ? config.color : ""}>
                {config.label}
              </span>
            </button>
          )
        })}
      </div>

      {selected && (
        <div className="mt-4 rounded-lg border border-border bg-muted/50 p-4">
          <p className="text-xs font-medium text-primary mb-1">Explanation</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {question.explanation}
          </p>
          <div className="mt-4 flex justify-end">
            <Button onClick={handleNext} size="sm" variant="outline">
              {currentQ + 1 >= quizQuestions.length ? "See Results" : "Next Question"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

const responseSteps = [
  {
    icon: Pause,
    title: "Pause",
    description:
      "Stop and take a moment. Manipulation thrives on impulsive reactions. Giving yourself even a few minutes disrupts the pressure cycle.",
  },
  {
    icon: Search,
    title: "Verify",
    description:
      "Independently confirm claims through official channels. Look up phone numbers, websites, and identities through sources you find yourself, not links provided to you.",
  },
  {
    icon: Ban,
    title: "Don't Confront",
    description:
      "Avoid directly confronting a potential manipulator. This can escalate the situation. Prioritize your safety and disengage calmly.",
  },
  {
    icon: FileText,
    title: "Document",
    description:
      "Save messages, take screenshots, note dates, times, and details. Documentation is essential if you need to report the situation later.",
  },
  {
    icon: Flag,
    title: "Report",
    description:
      "Contact appropriate authorities or organizations. Use the report form on this site, call local law enforcement, or reach out to specialized helplines.",
  },
]

export function RedFlagsSection() {
  return (
    <section id="red-flags" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Pattern Recognition
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Behavioral Red Flags
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-lg text-muted-foreground font-serif">
            Recognize Patterns, Not People
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground leading-relaxed">
            Manipulation follows predictable behavioral patterns. Learning to
            identify these patterns empowers you to protect yourself and others
            without profiling individuals.
          </p>
        </div>

        {/* Red Flag Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {redFlags.map((flag) => (
            <Card
              key={flag.title}
              className="group border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <flag.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-foreground font-serif">
                  {flag.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {flag.appearance}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    Commonly Seen In
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {flag.contexts.map((ctx) => (
                      <span
                        key={ctx}
                        className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {ctx}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs font-medium text-primary mb-2">
                    Safe Response
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {flag.steps.map((step) => (
                      <li key={step} className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-primary/60" />
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pattern Clusters Table */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground font-serif">
            Pattern Clusters
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Individual red flags may have innocent explanations. When multiple
            flags appear together, risk awareness should increase
            proportionally.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-3.5 text-left font-medium text-foreground">
                    Cluster
                  </th>
                  <th className="px-5 py-3.5 text-left font-medium text-foreground">
                    Combined Red Flags
                  </th>
                  <th className="px-5 py-3.5 text-left font-medium text-foreground">
                    Risk Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {patternClusters.map((cluster) => (
                  <tr
                    key={cluster.cluster}
                    className="border-b border-border last:border-0 transition-colors hover:bg-muted/30"
                  >
                    <td className="px-5 py-4 font-medium text-foreground whitespace-nowrap">
                      {cluster.cluster}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {cluster.flags.map((f) => (
                          <span
                            key={f}
                            className="rounded-md bg-primary/10 border border-primary/20 px-2.5 py-1 text-xs text-primary"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${
                          cluster.riskLevel === "High"
                            ? "bg-red-400/10 text-red-400"
                            : "bg-yellow-400/10 text-yellow-400"
                        }`}
                      >
                        {cluster.riskLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Mini-Quiz */}
        <div className="mx-auto mt-16 max-w-2xl rounded-xl border border-primary/20 bg-card p-6 lg:p-8">
          <h3 className="text-xl font-bold text-foreground font-serif">
            Test Your Awareness
          </h3>
          <p className="mt-2 mb-6 text-sm text-muted-foreground leading-relaxed">
            Read each scenario and determine whether the situation is safe,
            a warning sign, or dangerous. This is a learning exercise, not a
            diagnostic tool.
          </p>
          <MiniQuiz />
        </div>

        {/* What To Do Now Response Panel */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground font-serif text-center">
            What To Do Now
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            If you recognize any of these patterns in your own life, follow
            these evidence-based response steps in order.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {responseSteps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <span className="absolute top-4 right-4 text-xs font-bold text-primary/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground font-serif">
                  {step.title}
                </p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-muted/50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section is educational and designed to help recognize
            behavioral patterns associated with manipulation and criminal
            activity. It is not intended to accuse, diagnose, or profile any
            individual.
          </p>
        </div>
      </div>
    </section>
  )
}
