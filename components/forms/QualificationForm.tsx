"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { INTEGRATIONS } from "@/lib/config";
import { CONTACT } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";

/**
 * Short qualification form ahead of the discovery call.
 *
 * Submission path (honest by design — see lib/config.ts):
 * - NEXT_PUBLIC_FORM_ENDPOINT configured → answers POST to that endpoint.
 * - Not configured → answers are composed into a prefilled email in the
 *   visitor's own mail app. Nothing is silently stored anywhere.
 */

const FIELDS = [
  { id: "name", label: "Name", type: "text", required: true, placeholder: "Your name" },
  { id: "company", label: "Company / Brand", type: "text", required: true, placeholder: "Brand or company name" },
  { id: "website", label: "Website", type: "url", required: false, placeholder: "https://" },
  { id: "email", label: "Email", type: "email", required: true, placeholder: "you@company.com" },
] as const;

const RUNNING_ADS_OPTIONS = ["Yes, actively", "Not yet, preparing to", "No"];

type Status = "idle" | "sending" | "sent" | "error";

export function QualificationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const usesEndpoint = Boolean(INTEGRATIONS.formEndpoint);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    trackEvent("qualification_form_submit", { delivery: usesEndpoint ? "endpoint" : "email" });

    if (usesEndpoint && INTEGRATIONS.formEndpoint) {
      try {
        setStatus("sending");
        const res = await fetch(INTEGRATIONS.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // Fallback: compose the answers into an email in the visitor's mail app.
    const lines = [
      `Name: ${data.name ?? ""}`,
      `Company / Brand: ${data.company ?? ""}`,
      `Website: ${data.website ?? ""}`,
      `Email: ${data.email ?? ""}`,
      `What do you sell?: ${data.sell ?? ""}`,
      `Running paid social ads?: ${data.runningAds ?? ""}`,
      `What are you looking for?: ${data.lookingFor ?? ""}`,
      `Anything else: ${data.anythingElse ?? ""}`,
    ].join("\n");
    const subject = encodeURIComponent(`Discovery Call: ${data.company || data.name || "New brand"}`);
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  const inputClasses =
    "w-full rounded-none border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-foreground-dim focus:border-accent/60 focus:outline-none focus-visible:outline-none transition-colors";
  const labelClasses = "mb-2 block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim";

  if (status === "sent" && usesEndpoint) {
    return (
      <div className="glow-card mx-auto max-w-2xl rounded-3xl p-10 text-center" role="status">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-accent/40 text-accent">
          <Check className="h-5 w-5" />
        </span>
        <p className="font-display mt-5 text-xl font-bold text-foreground">Received.</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          Thank you. We review every inquiry personally and reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glow-card mx-auto max-w-2xl rounded-3xl p-6 text-left sm:p-10" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.id}>
            <label htmlFor={`q-${f.id}`} className={labelClasses}>
              {f.label}
              {f.required && <span className="ml-1 text-accent" aria-hidden>*</span>}
            </label>
            <input
              id={`q-${f.id}`}
              name={f.id}
              type={f.type}
              required={f.required}
              placeholder={f.placeholder}
              autoComplete={f.id === "email" ? "email" : f.id === "name" ? "name" : f.id === "website" ? "url" : "organization"}
              className={inputClasses}
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="q-sell" className={labelClasses}>
            What do you sell?<span className="ml-1 text-accent" aria-hidden>*</span>
          </label>
          <input
            id="q-sell"
            name="sell"
            type="text"
            required
            placeholder="Product category, hero product, offer"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="q-running" className={labelClasses}>
            Are you currently running paid social ads?<span className="ml-1 text-accent" aria-hidden>*</span>
          </label>
          <select id="q-running" name="runningAds" required className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {RUNNING_ADS_OPTIONS.map((o) => (
              <option key={o} value={o} className="bg-surface text-foreground">
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="q-looking" className={labelClasses}>
            What are you looking for?<span className="ml-1 text-accent" aria-hidden>*</span>
          </label>
          <textarea
            id="q-looking"
            name="lookingFor"
            required
            rows={3}
            placeholder="e.g. UGC-style ads for a new product, a creative testing system, launch creative"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="q-else" className={labelClasses}>
            Anything else we should know?
          </label>
          <textarea
            id="q-else"
            name="anythingElse"
            rows={2}
            placeholder="Optional"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4">
        <Button type="submit" size="md" disabled={status === "sending"} className="w-full sm:w-auto">
          {status === "sending" ? "Sending…" : "Send Inquiry"}
          <ArrowRight size={16} />
        </Button>
        {status === "error" && (
          <p className="text-sm text-error" role="alert">
            Something went wrong sending the form. Please email us directly at {CONTACT.email} or use WhatsApp.
          </p>
        )}
        <p className="text-xs leading-relaxed text-foreground-dim">
          {usesEndpoint
            ? "We reply within 24 hours. Your details are used only to respond to this inquiry."
            : "Submitting opens a prefilled email in your mail app — nothing is stored on this site. We reply within 24 hours."}
        </p>
      </div>
    </form>
  );
}
