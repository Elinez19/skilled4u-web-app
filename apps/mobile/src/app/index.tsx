import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { colors } from "@skilled4u/ui";
import {
  Hammer,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../components/common/QuickShowcaseBar";

export default function WelcomeScreen() {
  const handleGetStarted = () => {
    router.push("/onboarding/category");
  };

  const handleLogIn = () => {
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between", paddingHorizontal: 24, paddingTop: 12, paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Brand Logo Header */}
        <View className="items-center py-3">
          <View className="flex-row items-center gap-3">
            <View className="w-11 h-11 rounded-full bg-primary-blue items-center justify-center shadow-md">
              <Hammer size={24} color="#ffffff" />
            </View>
            <View>
              <Text className="text-2xl font-extrabold text-dark-blue tracking-tight">CraftLink</Text>
              <Text className="text-xs font-medium text-blue-gray mt-0.5">Skilled Hands. Closer to You.</Text>
            </View>
          </View>
        </View>

        {/* Hero Graphic Section */}
        <View className="relative h-76 items-center justify-center my-3">
          <View className="absolute w-72 h-72 rounded-full bg-sky-blue opacity-65" />

          {/* Location Pin Accents */}
          <View className="absolute top-6 left-5 w-8 h-8 rounded-full bg-white items-center justify-center shadow-sm">
            <MapPin size={18} color={colors.primary.blue} fill={colors.primary.skyBlue} />
          </View>
          <View className="absolute top-9 right-8 w-8 h-8 rounded-full bg-white items-center justify-center shadow-sm">
            <MapPin size={18} color={colors.primary.blue} fill={colors.primary.skyBlue} />
          </View>
          <View className="absolute bottom-12 left-3 w-8 h-8 rounded-full bg-white items-center justify-center shadow-sm">
            <MapPin size={16} color={colors.primary.blue} fill={colors.primary.skyBlue} />
          </View>
          <View className="absolute bottom-10 right-4 w-8 h-8 rounded-full bg-white items-center justify-center shadow-sm">
            <MapPin size={20} color={colors.primary.blue} fill={colors.primary.skyBlue} />
          </View>

          {/* Sparkles */}
          <View className="absolute top-10 left-6">
            <Sparkles size={16} color={colors.secondary.lightBlue} />
          </View>
          <View className="absolute bottom-12 right-7">
            <Sparkles size={20} color={colors.secondary.lightBlue} />
          </View>

          {/* Artisan Visual Badge & Avatar representation */}
          <View className="items-center justify-center w-full">
            {/* Skyline background lines */}
            <View className="absolute bottom-6 flex-row items-end gap-2 opacity-25">
              <View className="w-7 h-16 bg-light-blue rounded-t" />
              <View className="w-8 h-24 bg-light-blue rounded-t" />
              <View className="w-7 h-28 bg-light-blue rounded-t" />
              <View className="w-8 h-20 bg-light-blue rounded-t" />
              <View className="w-9 h-30 bg-light-blue rounded-t" />
              <View className="w-7 h-22 bg-light-blue rounded-t" />
            </View>

            {/* Central Artisan Badge Card */}
            <View className="items-center bg-white py-4 px-5 rounded-2xl shadow-lg border border-border-light w-64">
              <View className="w-22 h-22 rounded-full bg-sky-blue items-center justify-center relative border-3 border-primary-blue">
                <View className="absolute top-0.5 w-11 h-3.5 bg-dark-blue rounded-t-lg" />
                <View className="items-center justify-center">
                  <View className="w-14 h-14 rounded-full bg-primary-blue items-center justify-center">
                    <Hammer size={30} color="#ffffff" />
                  </View>
                </View>
              </View>

              <View className="flex-row items-center gap-1.5 bg-success px-2.5 py-1 rounded-xl mt-3">
                <ShieldCheck size={14} color="#ffffff" />
                <Text className="text-xs font-bold text-white">Verified Pro Artisan</Text>
              </View>

              <View className="flex-row gap-1.5 mt-3">
                <View className="bg-neutral-light-gray px-2 py-1 rounded-md border border-border-light">
                  <Text className="text-xs font-semibold text-neutral-dark-gray">🔧 Plumber</Text>
                </View>
                <View className="bg-neutral-light-gray px-2 py-1 rounded-md border border-border-light">
                  <Text className="text-xs font-semibold text-neutral-dark-gray">⚡ Electrician</Text>
                </View>
                <View className="bg-neutral-light-gray px-2 py-1 rounded-md border border-border-light">
                  <Text className="text-xs font-semibold text-neutral-dark-gray">🪚 Carpenter</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Content Section */}
        <View className="items-center mt-4">
          <Text className="text-3xl font-extrabold text-dark-blue text-center leading-9 tracking-tight">
            Turn Your{"\n"}Skills Into Income
          </Text>
          <Text className="text-sm leading-5 text-blue-gray text-center mt-3 px-3">
            Join CraftLink and get matched with nearby clients who need your expertise.
          </Text>

          {/* Primary CTA */}
          <TouchableOpacity
            onPress={handleGetStarted}
            className="flex-row items-center justify-center gap-2 bg-primary-blue w-full h-13 rounded-full mt-7 shadow-md"
            activeOpacity={0.85}
          >
            <Text className="text-white text-base font-bold">Get Started</Text>
            <ArrowRight size={18} color="#ffffff" />
          </TouchableOpacity>

          {/* Secondary Footer Link */}
          <View className="flex-row items-center justify-center mt-4">
            <Text className="text-sm text-blue-gray">Already have an account? </Text>
            <TouchableOpacity onPress={handleLogIn}>
              <Text className="text-sm font-bold text-primary-blue">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
