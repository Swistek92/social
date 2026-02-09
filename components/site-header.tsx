"use client"

import { useState, useCallback } from "react"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#schemes", label: "How Schemes Work" },
  { href: "#addiction", label: "Addiction Awareness" },
  { href: "#normalization", label: "Cultural Risks" },
  { href: "#enhancement", label: "Enhancement Risks" },
  { href: "#trafficking", label: "Trafficking Patterns" },
  { href: "#scams", label: "Scam Education" },
  { href: "#red-flags", label: "Red Flags" },
  { href: "#social-engineering", label: "Social Engineering" },
  { href: "#contracts", label: "Contract Risks" },
  { href: "#workplace", label: "Workplace Risks" },
  { href: "#money", label: "Money & Manipulation" },
  { href: "#trust", label: "Institutional Trust" },
  { href: "#policy", label: "Policy Analysis" },
  { href: "#system", label: "System & Incentives" },
  { href: "#checklist", label: "Safety Checklist" },
  { href: "#report", label: "Report" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground font-serif">
            Social Defense
          </span>
        </a>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="default" className="hidden sm:inline-flex">
            <a href="#report">Report a Concern</a>
          </Button>

          <button
            type="button"
            className="text-foreground rounded-md p-2 hover:bg-muted transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Menu className={`h-6 w-6 ${menuOpen ? "hidden" : "block"}`} />
            <X className={`h-6 w-6 ${menuOpen ? "block" : "hidden"}`} />
          </button>
        </div>
      </nav>

      <div
        className={`border-t border-border bg-background/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                  onClick={closeMenu}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-border sm:hidden">
            <Button asChild size="sm" className="w-full">
              <a href="#report" onClick={closeMenu}>
                Report a Concern
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
