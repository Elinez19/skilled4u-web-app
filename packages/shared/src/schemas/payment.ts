import { z } from "zod";

// Bachs Connect Payment and Webhook Schemas
export const BachsCheckoutPayloadSchema = z.object({
  bookingId: z.string().min(1),
  amount: z.string().regex(/^\d+\.\d{2}$/, "Amount must be a decimal string"),
  currency: z.string().default("NGN"),
  customerEmail: z.string().email(),
  customerName: z.string().min(1),
  description: z.string(),
  metadata: z.record(z.string()).optional(),
});

export type BachsCheckoutPayload = z.infer<typeof BachsCheckoutPayloadSchema>;

export const BachsWebhookEventSchema = z.object({
  id: z.string(),
  type: z.enum([
    "checkout.completed",
    "checkout.expired",
    "transfer.created",
    "transfer.failed",
    "account.updated",
  ]),
  data: z.record(z.any()),
  created_at: z.number().or(z.string()),
});

export type BachsWebhookEvent = z.infer<typeof BachsWebhookEventSchema>;
