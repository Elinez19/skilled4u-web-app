import { z } from "zod";

export const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  BACHS_API_KEY: z.string().min(10),
  BACHS_WEBHOOK_SECRET: z.string().min(10),
  PLATFORM_COMMISSION_PERCENT: z.string().default("12"),
  DEFAULT_CURRENCY: z.string().default("NGN"),
  BETTER_AUTH_SECRET: z.string().min(16),
  BETTER_AUTH_URL: z.string().url().default("http://localhost:3000"),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  EXPO_PUBLIC_API_URL: z.string().url().default("http://localhost:3000"),
  EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN: z.string().optional(),
  GEMINI_API_KEY: z.string().optional(),
});

export type Env = z.infer<typeof EnvSchema>;

export function validateEnv(env: Record<string, string | undefined>) {
  const result = EnvSchema.safeParse(env);
  if (!result.success) {
    console.error("❌ Invalid environment variables:", result.error.format());
    throw new Error("Invalid environment variables");
  }
  return result.data;
}
