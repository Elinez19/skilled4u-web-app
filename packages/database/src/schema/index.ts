import {
  boolean,
  decimal,
  geometry,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------
export const userRoleEnum = pgEnum("user_role", ["customer", "artisan", "admin", "operator"]);
export const kycStatusEnum = pgEnum("kyc_status", ["unsubmitted", "pending", "verified", "rejected"]);
export const bookingStatusEnum = pgEnum("booking_status", [
  "broadcasted",
  "claimed",
  "en_route",
  "arrived",
  "in_progress",
  "completed",
  "disputed",
  "cancelled",
]);
export const paymentStatusEnum = pgEnum("payment_status", [
  "held_in_escrow",
  "transferred",
  "refunded",
  "disputed",
]);

// ---------------------------------------------------------------------------
// Better Auth Core Tables (Official Drizzle Schema)
// ---------------------------------------------------------------------------
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  phone: text("phone"),
  role: userRoleEnum("role").default("customer").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// Alias for convenience across services
export const users = user;

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  token: text("token").notNull().unique(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const sessions = session;

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at", { withTimezone: true }),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { withTimezone: true }),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const accounts = account;

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const verifications = verification;

// ---------------------------------------------------------------------------
// Marketplace Entities
// ---------------------------------------------------------------------------
export const artisanProfiles = pgTable("artisan_profiles", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull()
    .unique(),
  tradeCategory: text("trade_category").notNull(),
  experienceYears: integer("experience_years").notNull(),
  bio: text("bio"),
  kycStatus: kycStatusEnum("kyc_status").default("unsubmitted").notNull(),
  ratingAvg: decimal("rating_avg", { precision: 3, scale: 2 }).default("5.00").notNull(),
  ratingCount: integer("rating_count").default(0).notNull(),
  diagnosticRate: text("diagnostic_rate").notNull(), // Bachs decimal string, e.g. "5000.00"
  hourlyRate: text("hourly_rate").notNull(),
  serviceRadiusKm: integer("service_radius_km").default(15).notNull(),
  currentLocation: geometry("current_location", { type: "point", mode: "xy", srid: 4326 }),
  isOnline: boolean("is_online").default(false).notNull(),
  bachsAccountId: text("bachs_account_id"), // acct_... in Bachs Connect
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const artisanDocuments = pgTable("artisan_documents", {
  id: text("id").primaryKey(),
  artisanId: text("artisan_id")
    .references(() => artisanProfiles.id, { onDelete: "cascade" })
    .notNull(),
  documentType: text("document_type").notNull(),
  documentUrl: text("document_url").notNull(),
  verifiedAt: timestamp("verified_at", { withTimezone: true }),
  rejectionReason: text("rejection_reason"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const bookings = pgTable("bookings", {
  id: text("id").primaryKey(),
  bookingNumber: text("booking_number").notNull().unique(),
  customerId: text("customer_id")
    .references(() => user.id)
    .notNull(),
  artisanId: text("artisan_id").references(() => artisanProfiles.id),
  type: text("type").notNull(), // emergency_broadcast, scheduled
  categoryId: text("category_id").notNull(),
  issueDescription: text("issue_description").notNull(),
  customerLocation: geometry("customer_location", { type: "point", mode: "xy", srid: 4326 }).notNull(),
  customerAddress: text("customer_address").notNull(),
  status: bookingStatusEnum("status").default("broadcasted").notNull(),
  arrivalPin: text("arrival_pin").notNull(), // 4-digit verification PIN
  diagnosticFee: text("diagnostic_fee").notNull(), // Bachs decimal string
  quoteAmount: text("quote_amount"),
  totalAmount: text("total_amount").notNull(),
  currency: text("currency").default("NGN").notNull(),
  scheduledAt: timestamp("scheduled_at", { withTimezone: true }),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  autoReleaseAt: timestamp("auto_release_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const jobMilestones = pgTable("job_milestones", {
  id: text("id").primaryKey(),
  bookingId: text("booking_id")
    .references(() => bookings.id, { onDelete: "cascade" })
    .notNull(),
  milestoneName: text("milestone_name").notNull(), // claimed, en_route, arrived, in_progress, completed
  timestamp: timestamp("timestamp", { withTimezone: true }).defaultNow().notNull(),
  artisanLat: decimal("artisan_lat", { precision: 10, scale: 7 }),
  artisanLng: decimal("artisan_lng", { precision: 10, scale: 7 }),
  photoUrls: jsonb("photo_urls").default([]).notNull(),
});

export const payments = pgTable("payments", {
  id: text("id").primaryKey(),
  bookingId: text("booking_id")
    .references(() => bookings.id)
    .notNull(),
  bachsCheckoutSessionId: text("bachs_checkout_session_id").notNull().unique(),
  bachsTransferId: text("bachs_transfer_id"),
  grossAmount: text("gross_amount").notNull(), // Bachs decimal string e.g. "5000.00"
  platformFee: text("platform_fee").notNull(), // e.g. "600.00" (12%)
  artisanPayout: text("artisan_payout").notNull(), // e.g. "4400.00"
  currency: text("currency").default("NGN").notNull(),
  status: paymentStatusEnum("status").default("held_in_escrow").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const supplementaryInvoices = pgTable("supplementary_invoices", {
  id: text("id").primaryKey(),
  bookingId: text("booking_id")
    .references(() => bookings.id)
    .notNull(),
  description: text("description").notNull(),
  receiptPhotoUrl: text("receipt_photo_url").notNull(),
  amount: text("amount").notNull(), // Bachs decimal string
  currency: text("currency").default("NGN").notNull(),
  bachsCheckoutSessionId: text("bachs_checkout_session_id"),
  isPaid: boolean("is_paid").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const messages = pgTable("messages", {
  id: text("id").primaryKey(),
  bookingId: text("booking_id")
    .references(() => bookings.id)
    .notNull(),
  senderId: text("sender_id")
    .references(() => user.id)
    .notNull(),
  content: text("content").notNull(),
  mediaUrl: text("media_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const reviews = pgTable("reviews", {
  id: text("id").primaryKey(),
  bookingId: text("booking_id")
    .references(() => bookings.id)
    .notNull(),
  reviewerId: text("reviewer_id")
    .references(() => user.id)
    .notNull(),
  targetId: text("target_id")
    .references(() => user.id)
    .notNull(),
  rating: integer("rating").notNull(),
  punctuality: integer("punctuality").notNull(),
  craftsmanship: integer("craftsmanship").notNull(),
  cleanliness: integer("cleanliness").notNull(),
  comment: text("comment"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const disputes = pgTable("disputes", {
  id: text("id").primaryKey(),
  bookingId: text("booking_id")
    .references(() => bookings.id)
    .notNull(),
  initiatorId: text("initiator_id")
    .references(() => user.id)
    .notNull(),
  reason: text("reason").notNull(),
  evidenceUrls: jsonb("evidence_urls").default([]).notNull(),
  status: text("status").default("open").notNull(),
  resolutionNotes: text("resolution_notes"),
  resolvedById: text("resolved_by_id").references(() => user.id),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
