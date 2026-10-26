import React from "react";
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
  User,
  Star,
  CheckCircle2,
  ChevronRight,
  Edit3,
  Wrench,
  FileText,
  MapPin,
  Bell,
  HelpCircle,
  LogOut,
  Camera,
  BarChart2,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";
import { ARTISAN_PROFILE } from "../../data/mockData";

export default function ProfileSettingsScreen() {
  const handleLogOut = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      {/* Header */}
      <View className="px-5 py-3 border-b border-border-light">
        <Text className="text-2xl font-extrabold text-dark-blue">My Profile</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <View className="items-center bg-white rounded-3xl py-6 px-4 border-2 border-border-light shadow-sm mb-6">
          <View className="w-20 h-20 rounded-full bg-primary-blue items-center justify-center relative border-3 border-border-active mb-3">
            <View className="absolute top-0 w-12 h-3.5 bg-dark-blue" />
            <View className="mt-1.5">
              <User size={36} color="#ffffff" />
            </View>
            <View className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-primary-blue border-2 border-white items-center justify-center">
              <Camera size={12} color="#ffffff" />
            </View>
          </View>

          <Text className="text-xl font-extrabold text-dark-blue">{ARTISAN_PROFILE.name}</Text>
          <Text className="text-xs text-blue-gray mt-0.5">{ARTISAN_PROFILE.role}</Text>

          <View className="flex-row items-center gap-1 mt-1.5">
            <Star size={14} color="#f59e0b" fill="#f59e0b" />
            <Text className="text-xs font-semibold text-neutral-dark-gray">
              {ARTISAN_PROFILE.rating} ({ARTISAN_PROFILE.reviewsCount} reviews)
            </Text>
          </View>

          <View className="flex-row items-center gap-1 bg-success px-3 py-1 rounded-full mt-2.5">
            <CheckCircle2 size={13} color="#ffffff" />
            <Text className="text-white text-xs font-extrabold">Verified</Text>
          </View>
        </View>

        {/* Menu Navigation Group */}
        <View className="bg-white rounded-2xl border-2 border-border-light overflow-hidden mb-5">
          <TouchableOpacity
            onPress={() => router.push("/onboarding/personal")}
            className="flex-row items-center justify-between py-3.5 px-3.5 border-b border-border-light"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-xl bg-sky-blue items-center justify-center">
                <Edit3 size={18} color={colors.primary.blue} />
              </View>
              <Text className="text-sm font-semibold text-neutral-dark-gray">Edit Profile</Text>
            </View>
            <ChevronRight size={18} color={colors.neutral.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/onboarding/skills")}
            className="flex-row items-center justify-between py-3.5 px-3.5 border-b border-border-light"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-xl bg-sky-blue items-center justify-center">
                <Wrench size={18} color={colors.primary.blue} />
              </View>
              <Text className="text-sm font-semibold text-neutral-dark-gray">Skills & Experience</Text>
            </View>
            <ChevronRight size={18} color={colors.neutral.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/earnings")}
            className="flex-row items-center justify-between py-3.5 px-3.5 border-b border-border-light"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-xl bg-sky-blue items-center justify-center">
                <BarChart2 size={18} color={colors.primary.blue} />
              </View>
              <Text className="text-sm font-semibold text-neutral-dark-gray">Earnings & Analytics</Text>
            </View>
            <ChevronRight size={18} color={colors.neutral.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/onboarding/location")}
            className="flex-row items-center justify-between py-3.5 px-3.5 border-b border-border-light"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-xl bg-sky-blue items-center justify-center">
                <MapPin size={18} color={colors.primary.blue} />
              </View>
              <Text className="text-sm font-semibold text-neutral-dark-gray">Service Area</Text>
            </View>
            <ChevronRight size={18} color={colors.neutral.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between py-3.5 px-3.5 border-b border-border-light"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-xl bg-sky-blue items-center justify-center">
                <FileText size={18} color={colors.primary.blue} />
              </View>
              <Text className="text-sm font-semibold text-neutral-dark-gray">Documents</Text>
            </View>
            <ChevronRight size={18} color={colors.neutral.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between py-3.5 px-3.5 border-b border-border-light"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-xl bg-sky-blue items-center justify-center">
                <Bell size={18} color={colors.primary.blue} />
              </View>
              <Text className="text-sm font-semibold text-neutral-dark-gray">Notification Settings</Text>
            </View>
            <ChevronRight size={18} color={colors.neutral.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between py-3.5 px-3.5"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-xl bg-sky-blue items-center justify-center">
                <HelpCircle size={18} color={colors.primary.blue} />
              </View>
              <Text className="text-sm font-semibold text-neutral-dark-gray">Help & Support</Text>
            </View>
            <ChevronRight size={18} color={colors.neutral.gray} />
          </TouchableOpacity>
        </View>

        {/* Log Out */}
        <TouchableOpacity
          onPress={handleLogOut}
          className="flex-row items-center gap-2.5 py-3.5 px-3.5 rounded-2xl bg-red-50"
          activeOpacity={0.8}
        >
          <LogOut size={18} color={colors.semantic.error} />
          <Text className="text-sm font-bold text-error">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
