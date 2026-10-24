import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skilled4U — Verified On-Demand Artisans & Home Services",
  description:
    "Instant emergency repairs and scheduled home services by background-checked, verified local tradespeople. Transparent pricing and secure escrow payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
