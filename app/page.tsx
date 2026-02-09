import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { SchemesSection } from "@/components/schemes-section"
import { AddictionSection } from "@/components/addiction-section"
import { NormalizationSection } from "@/components/normalization-section"
import { EnhancementSection } from "@/components/enhancement-section"
import { TraffickingSection } from "@/components/trafficking-section"
import { ScamsSection } from "@/components/scams-section"
import { RedFlagsSection } from "@/components/red-flags-section"
import { SocialEngineeringSection } from "@/components/social-engineering-section"
import { ContractsSection } from "@/components/contracts-section"
import { WorkplaceSection } from "@/components/workplace-section"
import { MoneySection } from "@/components/money-section"
import { TrustSection } from "@/components/trust-section"
import { PolicySection } from "@/components/policy-section"
import { SystemSection } from "@/components/system-section"
import { ChecklistSection } from "@/components/checklist-section"
import { ReportSection } from "@/components/report-section"
import { Footer } from "@/components/footer"

export default function SocialDefensePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <SchemesSection />
        <AddictionSection />
        <NormalizationSection />
        <EnhancementSection />
        <TraffickingSection />
        <ScamsSection />
        <RedFlagsSection />
        <SocialEngineeringSection />
        <ContractsSection />
        <WorkplaceSection />
        <MoneySection />
        <TrustSection />
        <PolicySection />
        <SystemSection />
        <ChecklistSection />
        <ReportSection />
      </main>
      <Footer />
    </div>
  )
}
