import { Shield, Radio, AlertTriangle, FileText, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminPortalPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Admin Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
            <Shield className="size-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white leading-none">Skilled4U Operations Console</h1>
            <p className="text-xs text-slate-400 mt-1">Platform Admin & Dispatch Management</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success" className="gap-1.5 py-1 px-3">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Radar Active
          </Badge>
        </div>
      </header>

      {/* Admin Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 w-full flex-1 space-y-8">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-slate-900/60 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-xs font-medium text-slate-400">Pending KYC Submissions</span>
              <FileText className="size-4 text-amber-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">14</div>
              <p className="text-xs text-slate-400 mt-1">Artisans awaiting document review</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-xs font-medium text-slate-400">Active Dispatches</span>
              <Radio className="size-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">28</div>
              <p className="text-xs text-slate-400 mt-1">Pros currently en-route / on-site</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-xs font-medium text-slate-400">Funds Held in Escrow</span>
              <Shield className="size-4 text-brand-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">₦420,500.00</div>
              <p className="text-xs text-slate-400 mt-1">Bachs Connect marketplace escrow</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-xs font-medium text-slate-400">Open Disputes</span>
              <AlertTriangle className="size-4 text-rose-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2</div>
              <p className="text-xs text-slate-400 mt-1">Requiring ops mediation</p>
            </CardContent>
          </Card>
        </div>

        {/* Artisan KYC Verification Queue Sample */}
        <Card className="bg-slate-900/60 border-slate-800 overflow-hidden">
          <CardHeader className="border-b border-slate-800 px-6 py-4 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-semibold text-white">Artisan KYC Verification Queue</CardTitle>
              <p className="text-xs text-slate-400 mt-1">
                Verify government ID and trade certification before granting dispatch access
              </p>
            </div>
            <Badge variant="secondary" className="bg-slate-800 text-slate-300">
              14 pending
            </Badge>
          </CardHeader>

          <div className="divide-y divide-slate-800">
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold border border-slate-700">
                  EA
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Emmanuel Adeyemi</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Trade: Plumbing & Pipefitting • 8 Years Experience</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      National ID
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      Trade Union Cert
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      Police Clearance
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-rose-500/20 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 hover:text-rose-200"
                >
                  <X className="size-3.5 mr-1" /> Reject
                </Button>
                <Button
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm"
                >
                  <Check className="size-3.5 mr-1" /> Approve & Verify
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
