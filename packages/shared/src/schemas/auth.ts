import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["customer", "artisan"]).default("customer"),
});

export type SignUpInput = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export type SignInInput = z.infer<typeof SignInSchema>;
