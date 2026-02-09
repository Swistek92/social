import { CheckCircle2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const checklists = [
  {
    title: "How to Verify Identity",
    items: [
      "Ask for official documentation or identification numbers",
      "Call the organization directly using a verified number",
      "Check email addresses for misspellings or suspicious domains",
      "Verify claims through independent, official sources",
      "Never rely on information provided by the person contacting you",
    ],
  },
  {
    title: "How to Avoid Online Scams",
    items: [
      "Never click links from unknown senders",
      "Use two-factor authentication on all accounts",
      "Check website URLs carefully before entering data",
      "Use strong, unique passwords for each account",
      "Keep software and devices updated",
    ],
  },
  {
    title: "How to Spot Manipulation",
    items: [
      "Notice if someone creates urgency or panic",
      "Watch for isolation from friends and family",
      "Be wary of excessive flattery or love-bombing",
      "Question requests for secrecy about the relationship",
      "Trust your instincts when something feels wrong",
    ],
  },
  {
    title: "How to Help Someone with Addiction",
    items: [
      "Educate yourself about the specific addiction",
      "Avoid enabling behaviors like covering for them",
      "Express concern without judgment or ultimatums",
      "Research professional treatment options",
      "Set healthy boundaries while maintaining support",
    ],
  },
]

export function ChecklistSection() {
  return (
    <section id="checklist" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Resources
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Safety Checklists
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Practical, actionable checklists to help you and your loved ones
            stay safe in everyday situations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {checklists.map((checklist) => (
            <div
              key={checklist.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-foreground font-serif">
                {checklist.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {checklist.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="mt-5 bg-transparent"
                aria-label={`Download ${checklist.title} checklist`}
              >
                <Download className="mr-2 h-3.5 w-3.5" />
                Download Checklist
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
