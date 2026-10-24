import Link from "next/link";
import { SERVICE_CATEGORIES } from "@skilled4u/shared";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ShieldCheck, Clock, CreditCard, ArrowRight, Wrench, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Navigation Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
              <Wrench className="size-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">Skilled4U</span>
              <Badge variant="secondary" className="ml-2 hidden sm:inline-flex text-xs">
                Verified Pros
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Operations Portal
            </Link>
            <Button asChild size="sm">
              <a href="#download">Get the App</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 bg-gradient-to-b from-brand-50/40 via-background to-secondary/30 dark:from-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="success" className="mb-6 gap-1.5 py-1 px-3 text-xs">
              <CheckCircle2 className="size-3.5" /> 100% Background-Checked & KYC-Verified Artisans
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Expert repairs at your doorstep in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">
                under 30 minutes
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Burst pipes, power outages, or broken AC? Connect instantly with verified local plumbers, electricians,
              and technicians. Live GPS tracking, arrival verification PIN, and escrow payments.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-xl shadow-lg shadow-brand-500/25">
                <a href="#categories">
                  Browse Services <ArrowRight className="size-4 ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link href="/admin">Operations & KYC Desk</Link>
              </Button>
            </div>
          </div>

          {/* Value Props Row with Shadcn Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:border-brand-500/30 transition shadow-sm">
              <CardHeader>
                <div className="size-12 rounded-xl bg-brand-50 dark:bg-brand-950/80 flex items-center justify-center text-brand-600 mb-2">
                  <Clock className="size-6" />
                </div>
                <CardTitle className="text-lg">Emergency Broadcast Dispatch</CardTitle>
                <CardDescription className="text-sm pt-1">
                  Broadcasts instantly to the nearest qualified artisans within 5–10km. Track their live arrival on the map.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-brand-500/30 transition shadow-sm">
              <CardHeader>
                <div className="size-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 mb-2">
                  <ShieldCheck className="size-6" />
                </div>
                <CardTitle className="text-lg">4-Digit Arrival PIN & Geofence</CardTitle>
                <CardDescription className="text-sm pt-1">
                  You receive a dynamic PIN. The artisan enters it upon physical arrival to unlock the job timer. Zero fraud.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-brand-500/30 transition shadow-sm">
              <CardHeader>
                <div className="size-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 flex items-center justify-center text-indigo-600 mb-2">
                  <CreditCard className="size-6" />
                </div>
                <CardTitle className="text-lg">Bachs Connect Escrow</CardTitle>
                <CardDescription className="text-sm pt-1">
                  Funds are held in secure escrow. Diagnostic fees are credited toward repairs. Payouts release only upon satisfaction.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Categories Catalog */}
      <section id="categories" className="py-20 bg-secondary/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold">Popular Service Categories</h2>
            <p className="mt-3 text-muted-foreground">
              Transparent diagnostic call-out rates credited against your final repair quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((cat) => (
              <Card key={cat.id} className="hover:border-brand-500/50 hover:shadow-md transition">
                <CardHeader className="p-5 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    Call-Out: ₦{cat.defaultDiagnosticFee}
                  </span>
                  <CardTitle className="text-base font-bold pt-1">{cat.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
