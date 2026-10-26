import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { colors } from "@skilled4u/ui";
import {
  ArrowLeft,
  Check,
  Sparkles,
  HelpCircle,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";

export default function OnboardingCompleteScreen() {
  const handleGoToDashboard = () => {
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      {/* Top Header with Back */}
      <View className="h-13 flex-row items-center justify-between px-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-9 h-9 rounded-full items-center justify-center bg-neutral-light-gray"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ArrowLeft size={22} color={colors.neutral.darkGray} />
        </TouchableOpacity>
        <View className="w-9" />
      </View>

      <View className="flex-1 px-6 justify-between items-center pb-10 pt-5">
        {/* Glowing Success Celebration Visual */}
        <View className="relative w-64 h-64 items-center justify-center mt-5">
          {/* Confetti particles */}
          <View className="absolute top-2.5 left-7">
            <Sparkles size={20} color={colors.secondary.lightBlue} />
          </View>
          <View className="absolute top-5 right-10">
            <Sparkles size={24} color={colors.primary.blue} />
          </View>
          <View className="absolute bottom-7 left-6">
            <Sparkles size={18} color={colors.secondary.teal} />
          </View>
          <View className="absolute bottom-10 right-7">
            <Sparkles size={22} color={colors.secondary.lightBlue} />
          </View>

          {/* Concentric Glow Rings */}
          <View className="w-56 h-56 rounded-full bg-primary-blue/10 items-center justify-center">
            <View className="w-40 h-40 rounded-full bg-primary-blue/20 items-center justify-center">
              <View className="w-26 h-26 rounded-full bg-primary-blue items-center justify-center shadow-xl">
                <Check size={48} color="#ffffff" strokeWidth={3.5} />
              </View>
            </View>
          </View>
        </View>

        {/* Text Section */}
        <View className="items-center px-3">
          <Text className="text-3xl font-extrabold text-dark-blue mb-3.5 text-center tracking-tight">
            You're All Set!
          </Text>
          <Text className="text-sm leading-6 text-blue-gray text-center">
            Your artisan profile has been created and is currently under review.
            You'll be notified once it's approved.
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="w-full items-center gap-4">
          <TouchableOpacity
            onPress={handleGoToDashboard}
            className="bg-primary-blue w-full h-13 rounded-full items-center justify-center shadow-md"
            activeOpacity={0.85}
          >
            <Text className="text-white text-base font-bold">Go to Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(tabs)/more")}
            className="flex-row items-center gap-1.5"
            activeOpacity={0.7}
          >
            <HelpCircle size={16} color={colors.neutral.blueGray} />
            <Text className="text-sm text-blue-gray">
              Need help? <Text className="text-primary-blue font-bold">Contact Support</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
