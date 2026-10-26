import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { colors } from "@skilled4u/ui";
import {
  Bell,
  MapPin,
  Calendar,
  Wallet,
  User,
  Briefcase,
  Wrench,
  ChevronRight,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";
import { AVAILABLE_JOBS, ARTISAN_PROFILE } from "../../data/mockData";

export default function ArtisanDashboardScreen() {
  const [isOnDuty, setIsOnDuty] = useState(true);
  const featuredJob = AVAILABLE_JOBS[0];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header */}
        <View className="flex-row items-center justify-between mb-4">
          <View>
            <View className="flex-row items-center gap-1.5">
              <Text className="text-2xl font-extrabold text-dark-blue">Hello, Emeka</Text>
              <Text className="text-xl">👋</Text>
            </View>
            <Text className="text-xs text-blue-gray mt-0.5">Ready to work today?</Text>
          </View>

          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              onPress={() => router.push("/messages")}
              className="w-10 h-10 rounded-full bg-neutral-light-gray items-center justify-center relative"
              activeOpacity={0.8}
            >
              <Bell size={20} color={colors.primary.darkBlue} />
              <View className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-error" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(tabs)/more")}
              className="w-10 h-10 rounded-full bg-primary-blue items-center justify-center relative overflow-hidden border-2 border-border-active"
              activeOpacity={0.85}
            >
              <View className="absolute top-0 w-7 h-2 bg-dark-blue" />
              <View className="items-center justify-center mt-1">
                <User size={18} color="#ffffff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Online / Active Duty Switch */}
        <View className="flex-row items-center justify-between bg-neutral-light-gray py-2.5 px-3.5 rounded-xl mb-4 border border-border-light">
          <View className="flex-row items-center gap-2">
            <View
              className={`w-2.5 h-2.5 rounded-full ${
                isOnDuty ? "bg-success" : "bg-neutral-400"
              }`}
            />
            <Text className="text-xs text-neutral-dark-gray">
              Status: <Text className="font-bold">{isOnDuty ? "Online & Receiving Dispatches" : "Offline"}</Text>
            </Text>
          </View>
          <Switch
            value={isOnDuty}
            onValueChange={setIsOnDuty}
            trackColor={{ false: colors.neutral.gray, true: colors.semantic.success }}
            thumbColor="#ffffff"
          />
        </View>

        {/* Today's Opportunities Banner Card */}
        <View className="rounded-2xl p-4.5 bg-primary-blue flex-row items-center justify-between mb-6 shadow-lg">
          <View className="flex-1">
            <Text className="text-sm font-bold text-white opacity-95">Today's Opportunities</Text>
            <View className="flex-row items-baseline gap-2 my-2">
              <Text className="text-3xl font-black text-white">3</Text>
              <Text className="text-sm text-white font-semibold">new nearby requests</Text>
            </View>

            <TouchableOpacity
              onPress={() => router.push("/(tabs)/jobs")}
              className="bg-white px-5 py-2 rounded-full self-start mt-1"
              activeOpacity={0.85}
            >
              <Text className="text-primary-blue text-xs font-extrabold">View</Text>
            </TouchableOpacity>
          </View>

          {/* Graphical Map Pin Accent */}
          <View className="w-22 h-22 items-center justify-center">
            <View className="w-20 h-20 rounded-full bg-white/20 items-center justify-center">
              <View className="w-14 h-14 rounded-full bg-white/30 items-center justify-center">
                <MapPin size={32} color="#ffffff" fill="rgba(255,255,255,0.3)" />
              </View>
            </View>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <View className="flex-row items-center justify-between mb-3.5">
          <Text className="text-base font-extrabold text-dark-blue">Quick Actions</Text>
        </View>

        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/jobs")}
            className="w-[23%] aspect-square bg-neutral-light-gray rounded-2xl items-center justify-center py-2 border border-border-light"
            activeOpacity={0.8}
          >
            <View className="w-11 h-11 rounded-full bg-sky-blue items-center justify-center mb-1.5">
              <Briefcase size={22} color={colors.primary.blue} />
            </View>
            <Text className="text-xs font-semibold text-neutral-dark-gray text-center">View Jobs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(tabs)/bookings")}
            className="w-[23%] aspect-square bg-neutral-light-gray rounded-2xl items-center justify-center py-2 border border-border-light"
            activeOpacity={0.8}
          >
            <View className="w-11 h-11 rounded-full bg-sky-blue items-center justify-center mb-1.5">
              <Calendar size={22} color={colors.primary.blue} />
            </View>
            <Text className="text-xs font-semibold text-neutral-dark-gray text-center">My Bookings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(tabs)/wallet")}
            className="w-[23%] aspect-square bg-neutral-light-gray rounded-2xl items-center justify-center py-2 border border-border-light"
            activeOpacity={0.8}
          >
            <View className="w-11 h-11 rounded-full bg-sky-blue items-center justify-center mb-1.5">
              <Wallet size={22} color={colors.primary.blue} />
            </View>
            <Text className="text-xs font-semibold text-neutral-dark-gray text-center">Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(tabs)/more")}
            className="w-[23%] aspect-square bg-neutral-light-gray rounded-2xl items-center justify-center py-2 border border-border-light"
            activeOpacity={0.8}
          >
            <View className="w-11 h-11 rounded-full bg-sky-blue items-center justify-center mb-1.5">
              <User size={22} color={colors.primary.blue} />
            </View>
            <Text className="text-xs font-semibold text-neutral-dark-gray text-center">Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Job Section */}
        <View className="flex-row items-center justify-between mb-3.5">
          <Text className="text-base font-extrabold text-dark-blue">Featured Job</Text>
          <TouchableOpacity onPress={() => router.push("/(tabs)/jobs")}>
            <Text className="text-xs font-bold text-primary-blue">See all</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-2xl border-2 border-border-light overflow-hidden shadow-sm mb-5">
          {/* Card Image Banner */}
          <View className="h-32 bg-sky-700 items-center justify-center relative">
            <View className="w-17 h-17 rounded-full bg-white/20 items-center justify-center">
              <Wrench size={36} color="#ffffff" />
            </View>
            <View className="absolute top-3 right-3 bg-dark-blue/85 px-2.5 py-1 rounded-lg">
              <Text className="text-white text-xs font-bold">Urgent Request</Text>
            </View>
          </View>

          {/* Job Details */}
          <View className="p-4">
            <Text className="text-base font-extrabold text-dark-blue mb-2">{featuredJob.title}</Text>

            <View className="flex-row items-center gap-2 mb-3.5">
              <View className="flex-row items-center gap-1">
                <MapPin size={14} color={colors.neutral.blueGray} />
                <Text className="text-xs text-blue-gray font-medium">{featuredJob.distance}</Text>
              </View>
              <Text className="text-neutral-gray text-xs">•</Text>
              <Text className="text-sm font-extrabold text-primary-blue">{featuredJob.price}</Text>
            </View>

            <View className="flex-row items-center justify-between border-t border-border-light pt-3">
              <Text className="text-xs text-blue-gray font-medium">Category: {featuredJob.category}</Text>

              <TouchableOpacity
                onPress={() => router.push(`/jobs/${featuredJob.id}`)}
                className="bg-primary-blue px-6 py-2 rounded-full"
                activeOpacity={0.85}
              >
                <Text className="text-white text-xs font-bold">Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quick Earnings Summary Widget */}
        <TouchableOpacity
          onPress={() => router.push("/earnings")}
          className="flex-row items-center justify-between bg-sky-blue p-4 rounded-2xl border border-border-regular"
          activeOpacity={0.85}
        >
          <View>
            <Text className="text-xs text-blue-gray font-semibold">This Month's Earnings</Text>
            <Text className="text-xl font-extrabold text-dark-blue mt-0.5">{ARTISAN_PROFILE.walletBalance}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Text className="text-xs font-bold text-primary-blue">View Analytics</Text>
            <ChevronRight size={16} color={colors.primary.blue} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
