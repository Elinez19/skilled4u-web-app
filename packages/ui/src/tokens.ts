export const colors = {
  brand: {
    50: "#e6f4fe",
    100: "#cce8fd",
    200: "#99d2fb",
    300: "#66bcf9",
    400: "#33a5f7",
    500: "#208aef", // Primary Accent Blue
    600: "#1470cb",
    700: "#0e559e",
    800: "#0b4278",
    900: "#0a3666",
  },
  accent: {
    emerald: "#10b981", // Success / Arrival / Escrow Release
    amber: "#f59e0b",   // Pending KYC / Diagnostic Quoting
    rose: "#ef4444",    // Emergency / Disputed
    indigo: "#6366f1",  // Pro Badge / Verified
  },
  neutral: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
} as const;

export const borderRadius = {
  sm: 6,
  md: 10,
  lg: 16,
  full: 9999,
} as const;
