/**
 * Skilled4U / ArtisanLink Design System Tokens
 * Source of truth reference: apps/mobile/design/Design System.png & Skilled4U-Artisans-Screens.png
 */

export const colors = {
  // 1. Primary Colors
  primary: {
    blue: "#0084e6",      // Brand Primary
    darkBlue: "#004abf",  // Headings
    skyBlue: "#e6f7ff",   // Backgrounds
  },

  // 2. Secondary Colors
  secondary: {
    teal: "#00d1b2",      // Accents
    lightBlue: "#7edbff", // Highlights
    blueGray: "#687c93",  // Text Secondary
  },

  // 3. Neutrals
  neutral: {
    white: "#ffffff",
    lightGray: "#f4f8fb", // Card BG
    gray: "#a9b7c6",      // Border / Icons
    darkGray: "#334155",  // Primary Text
    blueGray: "#687c93",  // Secondary Text
    50: "#f8fafc",
    100: "#f4f8fb",
    200: "#e6f0f7",
    300: "#b7d8ee",
    400: "#a9b7c6",
    500: "#687c93",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },

  // 4. Semantic Status Colors
  semantic: {
    success: "#10b981",   // Verified / Online / Success
    warning: "#f59e0b",   // Warning / In Progress / Stars
    error: "#ef4444",     // Error / Urgent / Disputed
    info: "#3b82f6",      // Info / System Alerts
  },

  // 5. Border Colors
  border: {
    light: "#e6f0f7",
    regular: "#b7d8ee",
    active: "#7edbff",
    brand: "#0084e6",
  },

  // Complete Brand Scale (50-950)
  brand: {
    50: "#e6f7ff",
    100: "#bae7ff",
    200: "#91d5ff",
    300: "#69c0ff",
    400: "#40a9ff",
    500: "#0084e6",       // Primary Brand Blue
    600: "#006ec4",
    700: "#00569e",
    800: "#004abf",       // Dark Blue Headings
    900: "#00327f",
    950: "#001f52",
  },

  // Backward compatibility aliases
  accent: {
    emerald: "#10b981",
    amber: "#f59e0b",
    rose: "#ef4444",
    indigo: "#004abf",
    teal: "#00d1b2",
  },
} as const;

export const typography = {
  fontFamily: "Inter",
  headings: {
    h1: { fontSize: 48, lineHeight: 60, fontWeight: "700" as const },
    h2: { fontSize: 32, lineHeight: 40, fontWeight: "600" as const },
    h3: { fontSize: 24, lineHeight: 32, fontWeight: "600" as const },
    h4: { fontSize: 20, lineHeight: 28, fontWeight: "600" as const },
    h5: { fontSize: 16, lineHeight: 24, fontWeight: "600" as const },
    h6: { fontSize: 14, lineHeight: 20, fontWeight: "500" as const },
  },
  body: {
    large: { fontSize: 16, lineHeight: 24, fontWeight: "400" as const },
    medium: { fontSize: 14, lineHeight: 20, fontWeight: "400" as const },
    small: { fontSize: 12, lineHeight: 16, fontWeight: "400" as const },
  },
  buttons: {
    large: { fontSize: 16, lineHeight: 24, fontWeight: "600" as const },
    medium: { fontSize: 14, lineHeight: 20, fontWeight: "600" as const },
    small: { fontSize: 12, lineHeight: 16, fontWeight: "500" as const },
    overline: { fontSize: 12, lineHeight: 16, fontWeight: "500" as const, letterSpacing: 0.5 },
  },
} as const;

export const spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  6: 24,
  8: 32,
  12: 48,
  16: 64,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  layout: {
    mobile: 16,
    tablet: 24,
    desktop: 32,
  },
} as const;

export const borderRadius = {
  xs: 4,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  "2xl": 24,
  full: 9999,
} as const;

export const borderWidth = {
  thin: 1,
  default: 2,
  strong: 3,
} as const;

export const shadows = {
  none: "none",
  subtle: "0 1px 2px 0 rgba(0, 74, 191, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.04)",
  small: "0 2px 4px 0 rgba(0, 74, 191, 0.06), 0 2px 6px 0 rgba(0, 0, 0, 0.05)",
  medium: "0 4px 8px -1px rgba(0, 74, 191, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)",
  large: "0 8px 16px -2px rgba(0, 74, 191, 0.10), 0 8px 24px 0 rgba(0, 0, 0, 0.08)",
  xl: "0 16px 32px -4px rgba(0, 74, 191, 0.12), 0 16px 40px 0 rgba(0, 0, 0, 0.10)",
} as const;
