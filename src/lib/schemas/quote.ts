import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\-\s()]{10,15}$/, "Enter a valid phone number"),
  city: z.string().min(2, "Please enter your city"),
  segment: z.enum(["Residential", "Commercial", "Industrial"], {
    message: "Select a property type",
  }),
  monthlyBill: z.string().optional(),
  message: z.string().max(600, "Message is too long").optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
