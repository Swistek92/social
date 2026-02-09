import { Shield, Scale } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Legal Notice */}
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
          <Scale className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold text-foreground text-sm font-serif">
              Legal Notice
            </h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              This platform provides educational information only. It does not
              publish personal accusations, names, or images. All content is
              designed for public awareness and crime prevention education. Any
              tips submitted are forwarded to appropriate law enforcement
              authorities through secure channels.
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground font-serif">
                Social Defense
              </span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <a
                href="#schemes"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                How Schemes Work
              </a>
              <a
                href="#addiction"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Addiction Awareness
              </a>
              <a
                href="#scams"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Scam Education
              </a>
              <a
                href="#checklist"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Safety Checklists
              </a>
              <a
                href="#report"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Report
              </a>
            </nav>
            <p className="text-xs text-muted-foreground">
              {`\u00A9 ${new Date().getFullYear()} Social Defense. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
