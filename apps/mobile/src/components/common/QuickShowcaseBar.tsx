import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { router } from "expo-router";
import { Layers, X, ChevronRight, Eye } from "lucide-react-native";
import { colors } from "@skilled4u/ui";

const ALL_SCREENS = [
  { group: "1. Onboarding Flow", screens: [
    { name: "1. Welcome Screen", path: "/" },
    { name: "2. Choose Craft Category", path: "/onboarding/category" },
    { name: "3. Personal Information", path: "/onboarding/personal" },
    { name: "4. Your Location", path: "/onboarding/location" },
    { name: "5. Skills & Experience", path: "/onboarding/skills" },
    { name: "6. Onboarding Complete", path: "/onboarding/complete" },
  ]},
  { group: "2. Artisan Main App", screens: [
    { name: "1. Artisan Dashboard", path: "/(tabs)" },
    { name: "2. Available Jobs", path: "/(tabs)/jobs" },
    { name: "3. Job Details & Apply", path: "/jobs/fix-kitchen-sink" },
    { name: "4. My Bookings", path: "/(tabs)/bookings" },
    { name: "5. Earnings & Analytics", path: "/earnings" },
    { name: "6. Wallet & Withdraw", path: "/(tabs)/wallet" },
    { name: "7. Messages & Chat", path: "/messages" },
    { name: "8. Profile & Settings", path: "/(tabs)/more" },
  ]},
];

export function QuickShowcaseBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (path: string) => {
    setIsOpen(false);
    router.push(path as any);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        className="absolute top-14 right-3 z-50 flex-row items-center gap-1.5 bg-dark-blue px-2.5 py-1.5 rounded-full shadow-md"
        activeOpacity={0.85}
        accessibilityLabel="Open Screen Directory"
      >
        <Layers size={13} color="#ffffff" />
        <Text className="text-white text-xs font-bold">Screens (14)</Text>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl max-h-[82%] pt-5 px-5 pb-9">
            <View className="flex-row justify-between items-center mb-4 pb-3 border-b border-border-light">
              <View>
                <Text className="text-lg font-bold text-dark-blue">Skilled4U Screen Directory</Text>
                <Text className="text-xs text-blue-gray mt-0.5">All 14 screens from design specification</Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-neutral-light-gray items-center justify-center"
              >
                <X size={20} color={colors.neutral.darkGray} />
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
              {ALL_SCREENS.map((group, gIdx) => (
                <View key={gIdx} className="mb-4">
                  <Text className="text-xs font-extrabold text-primary-blue uppercase tracking-wider mb-2">
                    {group.group}
                  </Text>
                  {group.screens.map((item, idx) => (
                    <TouchableOpacity
                      key={idx}
                      onPress={() => navigateTo(item.path)}
                      className="flex-row items-center justify-between py-3 px-3 bg-neutral-light-gray rounded-xl mb-2"
                    >
                      <View className="flex-row items-center gap-2.5">
                        <Eye size={16} color={colors.primary.blue} />
                        <Text className="text-sm font-semibold text-neutral-dark-gray">{item.name}</Text>
                      </View>
                      <ChevronRight size={16} color={colors.neutral.gray} />
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}
