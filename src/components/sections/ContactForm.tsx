"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { quoteSchema, type QuoteInput } from "@/lib/schemas/quote";
import { company } from "@/content/company";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/** Standalone enquiry form for /contact (shares the quote schema). */
export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", phone: "", city: "Chennai", message: "" },
  });
  const segment = watch("segment");

  async function onSubmit(_data: QuoteInput) {
    // TODO(Phase 4): wire to a real endpoint / email service.
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
  }

  if (sent) {
    return (
      <div className="grid place-items-center rounded-[var(--radius-lg)] border border-line bg-surface p-10 text-center">
        <CheckCircle2 className="size-14 text-green-600" />
        <h2 className="mt-4 font-display text-2xl font-semibold text-ink">Thanks — message sent</h2>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">
          Our team will get back to you shortly. For anything urgent, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[var(--radius-lg)] border border-line bg-surface p-6 sm:p-8"
    >
      <h2 className="font-display text-2xl font-semibold text-ink">Send an enquiry</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" id="c-name" error={errors.name?.message}>
          <Input id="c-name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
        </Field>
        <Field label="Phone" id="c-phone" error={errors.phone?.message}>
          <Input id="c-phone" inputMode="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field label="City" id="c-city" error={errors.city?.message}>
          <Input id="c-city" autoComplete="address-level2" aria-invalid={!!errors.city} {...register("city")} />
        </Field>
        <Field label="Property type" id="c-seg" error={errors.segment?.message}>
          <Select value={segment} onValueChange={(v) => setValue("segment", v as QuoteInput["segment"], { shouldValidate: true })}>
            <SelectTrigger id="c-seg" aria-invalid={!!errors.segment}>
              <SelectValue placeholder="Select…" />
            </SelectTrigger>
            <SelectContent>
              {company.segments.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Message" id="c-msg" optional>
          <Textarea id="c-msg" rows={4} placeholder="Tell us about your requirement…" {...register("message")} />
        </Field>
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-6 w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> Sending…
          </>
        ) : (
          "Send Enquiry"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  optional,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>
        {label} {optional && <span className="text-ink-faint">(optional)</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
