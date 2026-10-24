import { z } from "zod";

export const BookingCreateSchema = z.object({
  type: z.enum(["emergency_broadcast", "scheduled"]),
  categoryId: z.string().min(1, "Service category is required"),
  issueDescription: z.string().min(10, "Please describe the problem with at least 10 characters"),
  customerAddress: z.string().min(5, "Address is required"),
  customerLatitude: z.number().min(-90).max(90),
  customerLongitude: z.number().min(-180).max(180),
  scheduledAt: z.string().datetime().optional(),
  diagnosticFee: z.string().regex(/^\d+\.\d{2}$/, "Diagnostic fee must be a decimal string (e.g. 5000.00)"),
  photoUrls: z.array(z.string().url()).optional().default([]),
});

export type BookingCreateInput = z.infer<typeof BookingCreateSchema>;

export const VerifyArrivalPinSchema = z.object({
  bookingId: z.string().min(1),
  enteredPin: z.string().length(4, "Arrival PIN must be 4 digits"),
  artisanLatitude: z.number().min(-90).max(90),
  artisanLongitude: z.number().min(-180).max(180),
});

export type VerifyArrivalPinInput = z.infer<typeof VerifyArrivalPinSchema>;

export const SupplementaryInvoiceSchema = z.object({
  bookingId: z.string().min(1),
  description: z.string().min(3, "Description is required"),
  receiptPhotoUrl: z.string().url("Valid receipt photo URL is required"),
  amount: z.string().regex(/^\d+\.\d{2}$/, "Amount must be a decimal string (e.g. 12500.00)"),
  currency: z.string().default("NGN"),
});

export type SupplementaryInvoiceInput = z.infer<typeof SupplementaryInvoiceSchema>;

export const ReviewSubmitSchema = z.object({
  bookingId: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  punctuality: z.number().int().min(1).max(5),
  craftsmanship: z.number().int().min(1).max(5),
  cleanliness: z.number().int().min(1).max(5),
  comment: z.string().max(500).optional(),
});

export type ReviewSubmitInput = z.infer<typeof ReviewSubmitSchema>;
