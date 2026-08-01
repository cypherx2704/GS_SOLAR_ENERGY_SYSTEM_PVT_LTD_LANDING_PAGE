"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, PhoneCall } from "lucide-react";
import { quoteSchema, type QuoteInput } from "@/lib/schemas/quote";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { company, primaryPhone, telHref } from "@/content/company";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function QuoteModal({ open, onOpenChange }: Props) {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", phone: "", city: "Chennai", message: "" },
  });

  const segment = watch("segment");

  async function onSubmit(_data: QuoteInput) {
    // TODO(Phase 3/4): POST to a real endpoint / CRM / email service.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
  }

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) {
      // reset shortly after close so the exit animation isn't disrupted
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 250);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        {submitted ? (
          <div className="flex flex-col items-center py-6 text-center">
            <CheckCircle2 className="size-14 text-green-600" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
              Request received
            </h2>
            <p className="mt-2 max-w-sm text-sm text-ink-muted">
              Thanks — our team will reach out shortly. For anything urgent, call
              us directly.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <a href={telHref(primaryPhone.value)}>
                <PhoneCall /> {primaryPhone.value}
              </a>
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Get a Free Solar Quote</DialogTitle>
              <DialogDescription>
                Tell us a little about your property. No obligation — we&apos;ll
                get back with a free assessment.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="q-name">Name</Label>
                  <Input
                    id="q-name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="q-phone">Phone</Label>
                  <Input
                    id="q-phone"
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="q-city">City</Label>
                  <Input
                    id="q-city"
                    autoComplete="address-level2"
                    aria-invalid={!!errors.city}
                    {...register("city")}
                  />
                  {errors.city && (
                    <p className="text-xs text-red-600">{errors.city.message}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="q-segment">Property type</Label>
                  <Select
                    value={segment}
                    onValueChange={(v) =>
                      setValue("segment", v as QuoteInput["segment"], {
                        shouldValidate: true,
                      })
                    }
                  >
                    <SelectTrigger id="q-segment" aria-invalid={!!errors.segment}>
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
                  {errors.segment && (
                    <p className="text-xs text-red-600">{errors.segment.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="q-bill">
                  Average monthly electricity bill{" "}
                  <span className="text-ink-faint">(optional)</span>
                </Label>
                <Input id="q-bill" inputMode="numeric" placeholder="e.g. ₹5,000" {...register("monthlyBill")} />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="q-message">
                  Message <span className="text-ink-faint">(optional)</span>
                </Label>
                <Textarea id="q-message" rows={3} {...register("message")} />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="mt-1 w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" /> Sending…
                  </>
                ) : (
                  "Request Free Quote"
                )}
              </Button>
              <p className="text-center text-xs text-ink-faint">
                Prefer to talk? Call{" "}
                <a href={telHref(primaryPhone.value)} className="text-green-800 underline-offset-2 hover:underline">
                  {primaryPhone.value}
                </a>
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
