"use client"

import React from "react"

import { useState } from "react"
import { ShieldAlert, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ReportSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="report" className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Anonymous
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance font-serif">
            Submit a Tip
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Reports are forwarded to appropriate authorities. This platform does
            not publish personal data or accusations.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <div className="mb-6 flex items-start gap-3 rounded-lg bg-primary/5 border border-primary/20 p-4">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                This form is for educational reporting only. All submissions are
                handled confidentially. We do not publish personal information
                or make accusations. If you are in immediate danger, call 911 or
                your local emergency services.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground font-serif">
                  Thank You
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your report has been submitted and will be reviewed by the
                  appropriate authorities.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 bg-transparent"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Report
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="crime-type">Type of Concern</Label>
                  <Select required>
                    <SelectTrigger id="crime-type" className="bg-muted">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fraud">Financial Fraud</SelectItem>
                      <SelectItem value="drug">
                        Drug-Related Activity
                      </SelectItem>
                      <SelectItem value="manipulation">
                        Manipulation / Exploitation
                      </SelectItem>
                      <SelectItem value="identity">Identity Theft</SelectItem>
                      <SelectItem value="online">Online Scam</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the situation in detail..."
                    rows={5}
                    required
                    className="bg-muted resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="location">
                    Location{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="location"
                    placeholder="City, state, or region"
                    className="bg-muted"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact">
                    Contact Information{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="contact"
                    placeholder="Email or phone (will remain confidential)"
                    className="bg-muted"
                  />
                </div>

                <Button type="submit" size="lg" className="mt-2">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Report
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
