"use client"

import { useState } from "react"
import {
  Timer,
  BadgeCheck,
  HeartCrack,
  TrendingUp,
  UserX,
  ChevronDown,
} from "lucide-react"

const scamTypes = [
  {
    icon: Timer,
    title: "Fake Urgency Tactics",
    summary: "Scammers create artificial deadlines to bypass rational thinking.",
    details:
      'They use phrases like "Act now or lose your account," "Limited time offer expires in 5 minutes," or "Your package will be returned." These pressure tactics prevent you from verifying the legitimacy of their claims. Always pause and verify independently before acting on urgent messages.',
  },
  {
    icon: BadgeCheck,
    title: "Authority Impersonation",
    summary:
      "Criminals pose as government officials, banks, or law enforcement.",
    details:
      "They may use official-sounding language, badge numbers, or spoofed caller IDs to appear legitimate. Real authorities will never ask for payments via gift cards, wire transfers, or cryptocurrency. Always verify by calling the organization's official number directly.",
  },
  {
    icon: HeartCrack,
    title: "Emotional Blackmail",
    summary: "Exploiting emotional bonds to extract money or information.",
    details:
      'Romance scams, family emergency impersonation, and guilt-driven requests are common tactics. Scammers build emotional connections over weeks or months before making financial requests. Be cautious of online relationships that quickly turn to money requests or "emergency" situations.',
  },
  {
    icon: TrendingUp,
    title: "Investment Scams",
    summary:
      "Fraudulent schemes promising high returns with little or no risk.",
    details:
      'Ponzi schemes, pump-and-dump cryptocurrency scams, and fake trading platforms target those seeking financial growth. Warning signs include guaranteed returns, pressure to invest quickly, and unregistered investments. Always verify through your country\'s financial regulatory body before investing.',
  },
  {
    icon: UserX,
    title: "Social Engineering",
    summary:
      "Manipulating people into revealing confidential information.",
    details:
      "Techniques include pretexting (creating a fabricated scenario), phishing emails, vishing (voice phishing), and tailgating into secure areas. These attacks exploit trust and helpfulness. Never share passwords, PINs, or personal data with anyone who contacts you unsolicited.",
  },
]

export function ScamsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="scams" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Interactive
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Scam & Manipulation Education
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Click on each card to learn how these manipulation tactics work and
            how you can protect yourself.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4 max-w-3xl mx-auto">
          {scamTypes.map((scam, index) => (
            <div
              key={scam.title}
              className="rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/30"
            >
              <button
                type="button"
                className="flex w-full items-center gap-4 p-5 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <scam.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground font-serif">
                    {scam.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {scam.summary}
                  </p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-5 py-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {scam.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
