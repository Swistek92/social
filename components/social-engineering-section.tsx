"use client"

import { useState } from "react"
import {
  Handshake,
  Fingerprint,
  Smartphone,
  Mail,
  Headphones,
  TrendingUp,
  ShieldCheck,
  KeyRound,
  Lock,
  MailCheck,
  Save,
  ArrowRight,
  Info,
  ChevronDown,
  MessageSquare,
  Heart,
  Gift,
  AlertTriangle,
  Crown,
  Fish,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

/* ── 1. Trust-Building Phase ── */

const trustPhases = [
  {
    title: "Research & Targeting",
    description:
      "Attackers gather publicly available information from social media, data breaches, and public records to build a profile of their target.",
  },
  {
    title: "Initial Contact",
    description:
      "First contact is designed to appear natural or credible -- a professional message, a mutual connection, or a well-crafted email.",
  },
  {
    title: "Rapport Building",
    description:
      "Over days or weeks, the attacker establishes trust through consistent communication, shared interests, and reciprocal favors.",
  },
  {
    title: "Small Request",
    description:
      'A minor, seemingly harmless request tests compliance: "Can you confirm your email?" or "Could you click this link to see something?"',
  },
  {
    title: "Escalation",
    description:
      "Requests gradually increase in sensitivity -- account credentials, financial information, or access to systems.",
  },
  {
    title: "Exploitation & Control",
    description:
      "Once access is obtained, attackers move quickly to extract value, lock out the victim, or establish persistent access.",
  },
]

/* ── 2. Common Scam Types ── */

const scamTypes = [
  {
    icon: Fish,
    title: "Phishing",
    description:
      "Fraudulent emails, texts, or websites that mimic legitimate services to trick you into entering credentials or clicking malicious links.",
    defense: "Verify sender addresses. Never click links in unexpected messages.",
  },
  {
    icon: Fingerprint,
    title: "Identity Theft",
    description:
      "Using stolen personal data to open accounts, file tax returns, or make purchases in someone else's name.",
    defense: "Freeze credit when not in use. Monitor financial statements regularly.",
  },
  {
    icon: Lock,
    title: "Account Takeover",
    description:
      "Gaining unauthorized access to existing accounts through credential stuffing, password reuse, or social engineering of support staff.",
    defense: "Use unique passwords per service. Enable 2FA on all accounts.",
  },
  {
    icon: Smartphone,
    title: "SIM Swap",
    description:
      "Convincing a mobile carrier to transfer your phone number to a new SIM, intercepting 2FA codes and account recovery messages.",
    defense: "Set a carrier PIN. Use authenticator apps instead of SMS-based 2FA.",
  },
  {
    icon: Headphones,
    title: "Fake Support",
    description:
      "Impersonating technical support from well-known companies to gain remote access to devices or extract payment for non-existent issues.",
    defense: "Companies never cold-call for support. Initiate contact yourself via official channels.",
  },
  {
    icon: TrendingUp,
    title: "Investment Scams",
    description:
      "Fake trading platforms, guaranteed return schemes, and pump-and-dump operations designed to extract deposits that can never be withdrawn.",
    defense: "Verify registration with financial regulators. Reject guaranteed returns.",
  },
]

/* ── 3. How Security Gets Bypassed ── */

const bypassTactics = [
  {
    title: "Social Pressure",
    description:
      "Creating a sense of obligation or guilt to make you act against your better judgment. Attackers may imply that refusing to help makes you uncooperative or suspicious.",
    example: '"Your manager asked me to get this urgently -- can you help?"',
  },
  {
    title: "Manufactured Urgency",
    description:
      "Time pressure prevents careful evaluation. Attackers insist on immediate action by claiming an account will be locked, a payment will fail, or an opportunity will expire.",
    example: '"Your account will be permanently deleted in 15 minutes unless you verify now."',
  },
  {
    title: "Pretexting",
    description:
      "Constructing an elaborate but false scenario to justify requests for information. The story provides plausible context that makes the request seem reasonable.",
    example: '"I\'m from IT -- we\'re doing a security audit and need to verify your login."',
  },
  {
    title: "Emotional Exploitation",
    description:
      "Leveraging fear, sympathy, romance, or excitement to override critical thinking. Emotional states significantly reduce analytical decision-making.",
    example: '"I\'m stranded abroad and lost my wallet -- please wire money to this account."',
  },
]

/* ── 4. Digital Defense Toolkit ── */

const defenseTools = [
  {
    icon: KeyRound,
    title: "Password Manager",
    description:
      "Generate and store unique, complex passwords for every service. Eliminates password reuse -- the single biggest vulnerability in personal security.",
    examples: ["Bitwarden (free, open source)", "1Password", "KeePassXC (offline)"],
  },
  {
    icon: ShieldCheck,
    title: "2FA Authenticator App",
    description:
      "Time-based one-time passwords (TOTP) are significantly more secure than SMS codes, which can be intercepted via SIM swap attacks.",
    examples: ["Authy", "Google Authenticator", "Microsoft Authenticator"],
  },
  {
    icon: Fingerprint,
    title: "Passkeys / FIDO2",
    description:
      "Hardware-bound credentials that are phishing-resistant by design. They cannot be entered on a fake website because the browser verifies the domain.",
    examples: ["Built into iOS/Android", "YubiKey", "Browser-native support"],
  },
  {
    icon: MailCheck,
    title: "Email Security",
    description:
      "Use email aliasing to compartmentalize services. Enable advanced protection on your primary email -- it's the master key to all your accounts.",
    examples: ["SimpleLogin (aliases)", "Google Advanced Protection", "Proton Mail"],
  },
  {
    icon: Save,
    title: "Backup Codes",
    description:
      "Store offline backup codes for critical accounts in a secure, physical location. These are your last line of defense if you lose access to your 2FA device.",
    examples: ["Print and store in a safe", "Encrypted USB drive", "Safety deposit box"],
  },
]

/* ── 5. Psychological Manipulation Loop ── */

const manipulationSteps = [
  {
    icon: MessageSquare,
    label: "Contact",
    description: "Attacker initiates a seemingly innocent interaction through social media, email, or messaging platforms.",
  },
  {
    icon: Heart,
    label: "Trust",
    description: "Rapport is built through consistent engagement, shared interests, mirroring behavior, and perceived reliability.",
  },
  {
    icon: Gift,
    label: "Small Request",
    description: "A minor favor is asked to test willingness and establish a pattern of compliance. Seems harmless in isolation.",
  },
  {
    icon: AlertTriangle,
    label: "Escalation",
    description: "Requests grow in sensitivity and value. Urgency, secrecy, or emotional pressure is introduced to maintain compliance.",
  },
  {
    icon: Crown,
    label: "Control",
    description: "Attacker achieves their goal: access to accounts, financial assets, personal data, or ongoing manipulation leverage.",
  },
]

/* ── Expandable Bypass Card ── */

function BypassCard({
  item,
  index,
}: {
  item: (typeof bypassTactics)[0]
  index: number
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/30">
      <button
        type="button"
        className="flex w-full items-center gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
          {index + 1}
        </span>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground font-serif">
            {item.title}
          </h4>
          <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
            {item.description}
          </p>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-border px-5 py-4 flex flex-col gap-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
          <div className="rounded-lg bg-muted/50 border border-border px-4 py-3">
            <p className="text-xs font-medium text-primary mb-1">Example Script</p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              {item.example}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Main Section ── */

export function SocialEngineeringSection() {
  return (
    <section
      id="social-engineering"
      className="py-20 lg:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Digital Safety
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Online Social Engineering & Trust Exploitation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Social engineering attacks exploit human psychology, not technical
            vulnerabilities. Understanding how attackers build and abuse trust
            is the most effective defense.
          </p>
        </div>

        {/* 1. Trust-Building Phase */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground font-serif">
            The Trust-Building Phase
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Attackers invest time building credibility before making any
            request. Recognizing these progressive stages helps you identify
            manipulation before it reaches the exploitation phase.
          </p>
          <div className="mt-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />
            <div className="flex flex-col gap-6">
              {trustPhases.map((phase, i) => (
                <div key={phase.title} className="flex gap-5 items-start">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <p className="font-semibold text-foreground font-serif">
                      {phase.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Common Scam Types Grid */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground font-serif">
            Common Online Scam Types
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Each of these attack types relies on social engineering as a core
            component. Technical defenses alone are insufficient without
            awareness of these patterns.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scamTypes.map((scam) => (
              <Card
                key={scam.title}
                className="border-border bg-card transition-colors hover:border-primary/30"
              >
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <scam.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground font-serif">
                    {scam.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {scam.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
                    <p className="text-xs font-medium text-primary mb-1">
                      Key Defense
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {scam.defense}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 3. How Security Gets Bypassed */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground font-serif">
            How Security Gets Bypassed
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            These psychological tactics are used to convince people to
            voluntarily hand over information or access. Understanding them
            reduces their effectiveness.
          </p>
          <div className="mt-8 flex flex-col gap-4 max-w-3xl">
            {bypassTactics.map((tactic, i) => (
              <BypassCard key={tactic.title} item={tactic} index={i} />
            ))}
          </div>
        </div>

        {/* 4. Digital Defense Toolkit */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground font-serif">
            Digital Defense Toolkit
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Layer these tools to build defense-in-depth. No single tool is
            sufficient, but together they make social engineering attacks
            significantly harder to execute.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {defenseTools.map((tool) => (
              <Card
                key={tool.title}
                className="border-border bg-card transition-colors hover:border-primary/30"
              >
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <tool.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground font-serif text-base">
                    {tool.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    Recommended Options
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tool.examples.map((ex) => (
                      <span
                        key={ex}
                        className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 5. Psychological Manipulation Loop Diagram */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground font-serif text-center">
            Psychological Manipulation Loop
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            Social engineering follows a repeatable cycle. Recognizing which
            stage you are in allows you to break the loop before escalation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-0">
            {manipulationSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className="flex items-center gap-5 max-w-md w-full">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/30">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground font-serif">
                      {step.label}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < manipulationSteps.length - 1 && (
                  <div className="flex flex-col items-center py-2">
                    <div className="h-6 w-px bg-primary/30" />
                    <ArrowRight className="h-4 w-4 text-primary/50 rotate-90" />
                  </div>
                )}
              </div>
            ))}
            {/* Loop-back indicator */}
            <div className="mt-4 rounded-lg border border-red-400/20 bg-red-400/5 px-5 py-3 max-w-md w-full text-center">
              <p className="text-xs font-medium text-red-400">
                Loop Repeats
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                After exploitation, attackers may restart the cycle with new
                requests or leverage gained access to target others in the
                victim's network.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-14 flex items-start gap-3 max-w-2xl rounded-lg border border-border bg-muted/30 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            This section focuses on prevention and awareness. It does not
            provide instructions for carrying out attacks.
          </p>
        </div>
      </div>
    </section>
  )
}
