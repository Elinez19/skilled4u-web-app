export const APP_NAME = "Skilled4U";

export const SERVICE_CATEGORIES = [
  {
    id: "plumbing",
    name: "Plumbing",
    icon: "wrench",
    description: "Pipes, burst mains, leaks, drainage, taps & sanitary installations",
    defaultDiagnosticFee: "5000.00",
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: "zap",
    description: "Short circuits, wiring, breakers, lighting, switches & power faults",
    defaultDiagnosticFee: "5000.00",
  },
  {
    id: "hvac",
    name: "HVAC & AC Repair",
    icon: "wind",
    description: "Air conditioner servicing, gas refilling, compressors & cooling faults",
    defaultDiagnosticFee: "7000.00",
  },
  {
    id: "appliances",
    name: "Home Appliances",
    icon: "tv",
    description: "Washing machines, refrigerators, microwaves, ovens & generators",
    defaultDiagnosticFee: "5000.00",
  },
  {
    id: "carpentry",
    name: "Carpentry & Furniture",
    icon: "hammer",
    description: "Cabinet repairs, doors, locks, furniture assembly & woodwork",
    defaultDiagnosticFee: "4000.00",
  },
  {
    id: "painting",
    name: "Painting & Wall Repair",
    icon: "brush",
    description: "Interior/exterior wall painting, waterproofing & drywall finishing",
    defaultDiagnosticFee: "4000.00",
  },
  {
    id: "electronics",
    name: "Electronics & Gadgets",
    icon: "cpu",
    description: "Inverters, solar systems, CCTV, smart home gear & sound systems",
    defaultDiagnosticFee: "6000.00",
  },
] as const;

export type ServiceCategoryId = typeof SERVICE_CATEGORIES[number]["id"];

export const BOOKING_STATUS = {
  BROADCASTED: "broadcasted",
  CLAIMED: "claimed",
  EN_ROUTE: "en_route",
  ARRIVED: "arrived",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  DISPUTED: "disputed",
  CANCELLED: "cancelled",
} as const;

export type BookingStatus = typeof BOOKING_STATUS[keyof typeof BOOKING_STATUS];

export const USER_ROLES = {
  CUSTOMER: "customer",
  ARTISAN: "artisan",
  ADMIN: "admin",
  OPERATOR: "operator",
} as const;

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

export const KYC_STATUS = {
  UNSUBMITTED: "unsubmitted",
  PENDING: "pending",
  VERIFIED: "verified",
  REJECTED: "rejected",
} as const;

export type KycStatus = typeof KYC_STATUS[keyof typeof KYC_STATUS];

// Platform Financial Rules (Bachs Connect)
export const PLATFORM_RULES = {
  DEFAULT_COMMISSION_PERCENT: 12, // 12% platform fee
  CURRENCY: "NGN",
  DISPATCH_INITIAL_RADIUS_KM: 5,
  DISPATCH_INITIAL_TIMEOUT_SEC: 60,
  DISPATCH_EXPANDED_RADIUS_KM: 10,
  DISPATCH_EXPANDED_TIMEOUT_SEC: 60,
  AUTO_RELEASE_HOURS: 24,
  MAX_ARRIVAL_GEOFENCE_METERS: 150,
};

// Bachs Money Standard Helper: Always decimal strings at currency precision
export function formatBachsMoney(amount: number | string): string {
  const numeric = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numeric) || numeric < 0) {
    return "0.00";
  }
  return numeric.toFixed(2);
}

export function calculatePlatformSplit(grossAmount: string, commissionPercent = PLATFORM_RULES.DEFAULT_COMMISSION_PERCENT) {
  const gross = parseFloat(grossAmount);
  if (isNaN(gross) || gross <= 0) {
    return {
      grossAmount: "0.00",
      platformFee: "0.00",
      artisanPayout: "0.00",
    };
  }
  const fee = gross * (commissionPercent / 100);
  const payout = gross - fee;
  return {
    grossAmount: formatBachsMoney(gross),
    platformFee: formatBachsMoney(fee),
    artisanPayout: formatBachsMoney(payout),
  };
}
