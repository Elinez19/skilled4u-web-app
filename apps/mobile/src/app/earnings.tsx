import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { colors } from "@skilled4u/ui";
import {
  ArrowLeft,
  BarChart2,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../components/common/QuickShowcaseBar";
import { ARTISAN_PROFILE } from "../data/mockData";

type PeriodType = "month" | "3months" | "all";

export default function EarningsScreen() {
  const [activePeriod, setActivePeriod] = useState<PeriodType>("month");
  const [selectedBarIndex, setSelectedBarIndex] = useState<number | null>(4);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      {/* Header */}
      <View className="h-13 flex-row items-center justify-between px-4 border-b border-border-light">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-9 h-9 rounded-full items-center justify-center bg-neutral-light-gray"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ArrowLeft size={22} color={colors.neutral.darkGray} />
        </TouchableOpacity>
        <Text className="text-lg font-extrabold text-dark-blue">Earnings</Text>
        <View className="w-9" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Total Earnings Blue Hero Card */}
        <View className="bg-primary-blue rounded-3xl p-5 mb-5 shadow-lg">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-sm text-white font-semibold opacity-90">Total Earnings</Text>
            <View className="w-8 h-8 rounded-full bg-white/20 items-center justify-center">
              <BarChart2 size={16} color="#ffffff" />
            </View>
          </View>

          <Text className="text-3xl font-black text-white">{ARTISAN_PROFILE.walletBalance}</Text>
          <Text className="text-xs text-white mt-1 opacity-85">This Month</Text>
        </View>

        {/* Time Period Filter Pills */}
        <View className="flex-row gap-2 mb-5">
          <TouchableOpacity
            onPress={() => setActivePeriod("month")}
            className={`px-4 py-2 rounded-full border ${
              activePeriod === "month"
                ? "bg-primary-blue border-primary-blue"
                : "bg-neutral-light-gray border-border-light"
            }`}
          >
            <Text
              className={`text-xs ${
                activePeriod === "month" ? "text-white font-bold" : "text-neutral-dark-gray font-medium"
              }`}
            >
              This Month
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActivePeriod("3months")}
            className={`px-4 py-2 rounded-full border ${
              activePeriod === "3months"
                ? "bg-primary-blue border-primary-blue"
                : "bg-neutral-light-gray border-border-light"
            }`}
          >
            <Text
              className={`text-xs ${
                activePeriod === "3months" ? "text-white font-bold" : "text-neutral-dark-gray font-medium"
              }`}
            >
              Last 3 Months
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActivePeriod("all")}
            className={`px-4 py-2 rounded-full border ${
              activePeriod === "all"
                ? "bg-primary-blue border-primary-blue"
                : "bg-neutral-light-gray border-border-light"
            }`}
          >
            <Text
              className={`text-xs ${
                activePeriod === "all" ? "text-white font-bold" : "text-neutral-dark-gray font-medium"
              }`}
            >
              All Time
            </Text>
          </TouchableOpacity>
        </View>

        {/* 2-Column Stats Grid */}
        <View className="flex-row gap-3 mb-3.5">
          {/* Card 1: Completed Jobs */}
          <View className="flex-1 bg-white rounded-2xl p-4 border-2 border-border-light shadow-sm">
            <Text className="text-xs text-blue-gray font-semibold mb-1.5">Completed Jobs</Text>
            <Text className="text-2xl font-black text-dark-blue">{ARTISAN_PROFILE.completedJobsCount}</Text>
          </View>

          {/* Card 2: Pending Payments */}
          <View className="flex-1 bg-white rounded-2xl p-4 border-2 border-border-light shadow-sm">
            <Text className="text-xs text-blue-gray font-semibold mb-1.5">Pending Payments</Text>
            <Text className="text-2xl font-black text-dark-blue">{ARTISAN_PROFILE.pendingPaymentsCount}</Text>
          </View>
        </View>

        {/* Average per Job Card */}
        <View className="bg-white rounded-2xl p-4 border-2 border-border-light shadow-sm mb-5">
          <Text className="text-xs text-blue-gray font-semibold">Average per Job</Text>
          <Text className="text-xl font-black text-dark-blue mt-1">{ARTISAN_PROFILE.averagePerJob}</Text>
        </View>

        {/* Earnings Bar Chart Card */}
        <View className="bg-white rounded-3xl p-4.5 border-2 border-border-light shadow-sm">
          <View className="flex-row items-center justify-between mb-5">
            <Text className="text-sm font-extrabold text-dark-blue">Earnings Breakdown</Text>
            {selectedBarIndex !== null && (
              <Text className="text-xs font-bold text-primary-blue">
                {ARTISAN_PROFILE.earningsWeekly[selectedBarIndex].label}: ₦
                {ARTISAN_PROFILE.earningsWeekly[selectedBarIndex].value.toLocaleString()}
              </Text>
            )}
          </View>

          {/* Chart Graphic Layout */}
          <View className="h-40 relative pl-9">
            {/* Y Axis Guide Lines */}
            <View className="absolute left-0 right-0 top-0 flex-row items-center">
              <Text className="text-[10px] text-neutral-400 w-8 font-semibold">100k</Text>
              <View className="flex-1 h-px bg-border-light" />
            </View>

            <View className="absolute left-0 right-0 top-15 flex-row items-center">
              <Text className="text-[10px] text-neutral-400 w-8 font-semibold">50k</Text>
              <View className="flex-1 h-px bg-border-light" />
            </View>

            <View className="absolute left-0 right-0 top-30 flex-row items-center">
              <Text className="text-[10px] text-neutral-400 w-8 font-semibold">0</Text>
              <View className="flex-1 h-px bg-border-light" />
            </View>

            {/* Bars */}
            <View className="flex-1 flex-row items-end justify-between pr-2">
              {ARTISAN_PROFILE.earningsWeekly.map((item, idx) => {
                const isSelected = selectedBarIndex === idx;
                return (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => setSelectedBarIndex(idx)}
                    className="items-center w-9 h-full justify-end"
                    activeOpacity={0.8}
                  >
                    <View className="w-4.5 h-30 justify-end rounded-full bg-neutral-light-gray overflow-hidden">
                      <View
                        className={`w-full rounded-full ${
                          isSelected ? "bg-teal" : "bg-primary-blue"
                        }`}
                        style={{ height: `${item.heightPercent}%` }}
                      />
                    </View>
                    <Text
                      className={`text-xs mt-1.5 ${
                        isSelected ? "text-dark-blue font-bold" : "text-blue-gray font-medium"
                      }`}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
