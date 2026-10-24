import { z } from "zod";

export const ArtisanOnboardingSchema = z.object({
  tradeCategory: z.string().min(1, "Primary trade is required"),
  experienceYears: z.number().int().min(0).max(60),
  bio: z.string().max(1000).optional(),
  diagnosticRate: z.string().regex(/^\d+\.\d{2}$/, "Diagnostic rate must be a decimal string"),
  hourlyRate: z.string().regex(/^\d+\.\d{2}$/, "Hourly rate must be a decimal string"),
  serviceRadiusKm: z.number().int().min(1).max(50).default(15),
  bankName: z.string().min(2, "Bank name is required"),
  accountNumber: z.string().min(10, "Account number must be at least 10 digits"),
  accountName: z.string().min(2, "Account name is required"),
});

export type ArtisanOnboardingInput = z.infer<typeof ArtisanOnboardingSchema>;

export const KycDocumentUploadSchema = z.object({
  documentType: z.enum(["national_id", "passport", "drivers_license", "trade_cert", "police_clearance"]),
  documentUrl: z.string().url("Valid Cloudinary URL is required"),
});

export type KycDocumentUploadInput = z.infer<typeof KycDocumentUploadSchema>;

export const UpdateArtisanLocationSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  isOnline: z.boolean(),
});

export type UpdateArtisanLocationInput = z.infer<typeof UpdateArtisanLocationSchema>;
