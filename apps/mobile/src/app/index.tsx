import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { SERVICE_CATEGORIES } from "@skilled4u/shared";
import { colors } from "@skilled4u/ui";
import {
  Wrench,
  Zap,
  Wind,
  Tv,
  Hammer,
  Paintbrush,
  Cpu,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight,
  UserCheck,
  CheckCircle2,
} from "lucide-react-native";

export default function HomeScreen() {
  const [activeRole, setActiveRole] = useState<"customer" | "artisan">("customer");
  const [isOnline, setIsOnline] = useState(false);

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "wrench":
        return <Wrench size={22} color={colors.brand[500]} />;
      case "zap":
        return <Zap size={22} color={colors.brand[500]} />;
      case "wind":
        return <Wind size={22} color={colors.brand[500]} />;
      case "tv":
        return <Tv size={22} color={colors.brand[500]} />;
      case "hammer":
        return <Hammer size={22} color={colors.brand[500]} />;
      case "brush":
        return <Paintbrush size={22} color={colors.brand[500]} />;
      case "cpu":
        return <Cpu size={22} color={colors.brand[500]} />;
      default:
        return <Wrench size={22} color={colors.brand[500]} />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {/* Top Header & Role Switcher */}
        <View style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 12 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <Text style={{ fontSize: 22, fontWeight: "800", color: "#0f172a" }}>Skilled4U</Text>
              <Text style={{ fontSize: 13, color: "#64748b" }}>On-Demand Verified Artisans</Text>
            </View>

            {/* Role Switcher Pill */}
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#e2e8f0",
                borderRadius: 20,
                padding: 3,
              }}
            >
              <TouchableOpacity
                onPress={() => setActiveRole("customer")}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 16,
                  backgroundColor: activeRole === "customer" ? "#ffffff" : "transparent",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: activeRole === "customer" ? colors.brand[600] : "#64748b",
                  }}
                >
                  Customer
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setActiveRole("artisan")}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 16,
                  backgroundColor: activeRole === "artisan" ? colors.brand[600] : "transparent",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: activeRole === "artisan" ? "#ffffff" : "#64748b",
                  }}
                >
                  Artisan Pro
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {activeRole === "customer" ? (
          /* Customer Experience */
          <View style={{ paddingHorizontal: 20, marginTop: 8 }}>
            {/* Emergency Broadcast Card */}
            <View
              style={{
                backgroundColor: colors.brand[600],
                borderRadius: 20,
                padding: 20,
                shadowColor: colors.brand[600],
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
                elevation: 6,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <Clock size={16} color="#ffffff" />
                <Text style={{ color: "#e6f4fe", fontSize: 12, fontWeight: "700", textTransform: "uppercase" }}>
                  Instant Broadcast Radar
                </Text>
              </View>
              <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "800", lineHeight: 26 }}>
                Need emergency repair? Dispatched in minutes.
              </Text>
              <Text style={{ color: "#cce8fd", fontSize: 13, marginTop: 6, lineHeight: 18 }}>
                Broadcast to nearby verified pros. Guaranteed arrival verification PIN and Bachs escrow protection.
              </Text>

              <TouchableOpacity
                style={{
                  marginTop: 16,
                  backgroundColor: "#ffffff",
                  paddingVertical: 12,
                  paddingHorizontal: 18,
                  borderRadius: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Text style={{ color: colors.brand[600], fontWeight: "700", fontSize: 14 }}>
                  Request Emergency Pro
                </Text>
                <ArrowRight size={16} color={colors.brand[600]} />
              </TouchableOpacity>
            </View>

            {/* Trust Badges */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                borderRadius: 14,
                padding: 14,
                marginTop: 16,
                borderWidth: 1,
                borderColor: "#e2e8f0",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                <ShieldCheck size={18} color={colors.accent.emerald} />
                <Text style={{ fontSize: 12, fontWeight: "600", color: "#334155" }}>Vetted & ID-Verified</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                <CheckCircle2 size={18} color={colors.brand[500]} />
                <Text style={{ fontSize: 12, fontWeight: "600", color: "#334155" }}>4-Digit Arrival PIN</Text>
              </View>
            </View>

            {/* Service Categories Grid */}
            <Text style={{ fontSize: 17, fontWeight: "800", color: "#0f172a", marginTop: 24, marginBottom: 12 }}>
              Explore Services
            </Text>

            <View style={{ gap: 10 }}>
              {SERVICE_CATEGORIES.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 14,
                    padding: 14,
                    borderWidth: 1,
                    borderColor: "#e2e8f0",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flex: 1 }}>
                    <View
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        backgroundColor: colors.brand[50],
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {renderCategoryIcon(cat.icon)}
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 15, fontWeight: "700", color: "#0f172a" }}>{cat.name}</Text>
                      <Text style={{ fontSize: 12, color: "#64748b", marginTop: 2 }} numberOfLines={1}>
                        {cat.description}
                      </Text>
                    </View>
                  </View>

                  <View style={{ alignItems: "flex-end", paddingLeft: 8 }}>
                    <Text style={{ fontSize: 11, fontWeight: "700", color: colors.brand[600] }}>
                      ₦{cat.defaultDiagnosticFee}
                    </Text>
                    <Text style={{ fontSize: 10, color: "#94a3b8" }}>Call-out</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          /* Artisan Pro Experience */
          <View style={{ paddingHorizontal: 20, marginTop: 8 }}>
            {/* Online / Offline Toggle Card */}
            <View
              style={{
                backgroundColor: isOnline ? "#065f46" : "#1e293b",
                borderRadius: 20,
                padding: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 8,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "#94a3b8", fontSize: 12, fontWeight: "600" }}>DUTY STATUS</Text>
                  <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "800", marginTop: 2 }}>
                    {isOnline ? "You are Online" : "You are Offline"}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => setIsOnline(!isOnline)}
                  style={{
                    backgroundColor: isOnline ? "#10b981" : "#475569",
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                    borderRadius: 24,
                  }}
                >
                  <Text style={{ color: "#ffffff", fontWeight: "700", fontSize: 13 }}>
                    {isOnline ? "Go Offline" : "Go Online"}
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={{ color: "#cbd5e1", fontSize: 12, marginTop: 12 }}>
                {isOnline
                  ? "Listening for emergency broadcast dispatches within your 15km service radius."
                  : "Switch to Online to start receiving instant job requests and payouts."}
              </Text>
            </View>

            {/* Quick Stats Grid */}
            <View style={{ flexDirection: "row", gap: 10, marginTop: 14 }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#ffffff",
                  borderRadius: 14,
                  padding: 14,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                }}
              >
                <Text style={{ fontSize: 12, color: "#64748b" }}>Completed Jobs</Text>
                <Text style={{ fontSize: 20, fontWeight: "800", color: "#0f172a", marginTop: 4 }}>38</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#ffffff",
                  borderRadius: 14,
                  padding: 14,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                }}
              >
                <Text style={{ fontSize: 12, color: "#64748b" }}>Bachs Balance</Text>
                <Text style={{ fontSize: 20, fontWeight: "800", color: colors.accent.emerald, marginTop: 4 }}>
                  ₦42,500.00
                </Text>
              </View>
            </View>

            {/* KYC & Identity Status Card */}
            <View
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 14,
                padding: 16,
                marginTop: 14,
                borderWidth: 1,
                borderColor: "#e2e8f0",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: "#ecfdf5",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UserCheck size={20} color={colors.accent.emerald} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>Verified Professional Badge</Text>
                  <Text style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
                    National ID & Trade Union certifications verified by Skilled4U Admin.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
