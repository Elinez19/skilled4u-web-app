import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { colors } from "@skilled4u/ui";
import {
  ArrowLeft,
  MapPin,
  ChevronDown,
  Navigation,
  Check,
} from "lucide-react-native";
import { StepIndicator } from "../../components/common/StepIndicator";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";

const RADIUS_OPTIONS = [
  { label: "2 km (Immediate Neighborhood)", value: "2 km" },
  { label: "5 km (Standard Local Area)", value: "5 km" },
  { label: "10 km (Wider District)", value: "10 km" },
  { label: "15 km (Metropolitan Area)", value: "15 km" },
  { label: "25 km (Regional Coverage)", value: "25 km" },
];

export default function LocationScreen() {
  const params = useLocalSearchParams();
  const [address, setAddress] = useState("12 Freedom Street, Abuja");
  const [radius, setRadius] = useState("5 km");
  const [isRadiusModalOpen, setIsRadiusModalOpen] = useState(false);

  const handleContinue = () => {
    router.push({
      pathname: "/onboarding/skills",
      params: {
        ...params,
        address,
        radius,
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      {/* Top Header with Back & Step Dots */}
      <View className="h-13 flex-row items-center justify-between px-4 border-b border-border-light">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-9 h-9 rounded-full items-center justify-center bg-neutral-light-gray"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ArrowLeft size={22} color={colors.neutral.darkGray} />
        </TouchableOpacity>

        <StepIndicator currentStep={3} totalSteps={5} />

        <View className="w-9" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 40, flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {/* Title & Subtitle */}
          <View className="mb-5">
            <Text className="text-2xl font-extrabold text-dark-blue tracking-tight">Your Location</Text>
            <Text className="text-sm text-blue-gray mt-1.5">Help clients find you in your area.</Text>
          </View>

          {/* Map Preview Component */}
          <View className="h-48 rounded-2xl overflow-hidden border-2 border-border-light mb-6 shadow-sm">
            <View className="flex-1 bg-[#e8f4fd] relative items-center justify-center">
              {/* Roads / blocks */}
              <View className="absolute left-0 right-0 top-10 h-3 bg-white" />
              <View className="absolute left-0 right-0 top-28 h-3 bg-white" />
              <View className="absolute top-0 bottom-0 left-14 w-3.5 bg-white" />
              <View className="absolute top-0 bottom-0 right-20 w-3.5 bg-white" />
              <View className="absolute top-4 right-5 w-14 h-10 rounded-lg bg-green-100" />
              <View className="absolute bottom-5 left-5 w-14 h-10 rounded-lg bg-green-100" />

              {/* Pulsing Radius Zone */}
              <View className="w-32 h-32 rounded-full bg-primary-blue/15 items-center justify-center">
                <View className="w-20 h-20 rounded-full bg-primary-blue/25 items-center justify-center">
                  <View className="shadow-md">
                    <MapPin size={34} color={colors.primary.blue} fill="#ffffff" />
                  </View>
                </View>
              </View>

              {/* Live Location Tag */}
              <View className="absolute bottom-2.5 flex-row items-center gap-1.5 bg-white px-2.5 py-1 rounded-full shadow-sm">
                <Navigation size={13} color={colors.primary.blue} />
                <Text className="text-xs font-bold text-dark-blue">Abuja, FCT (Central District)</Text>
              </View>
            </View>
          </View>

          {/* Form Fields */}
          <View className="gap-5">
            {/* Address */}
            <View className="gap-2">
              <Text className="text-sm font-bold text-neutral-dark-gray">Address</Text>
              <TextInput
                className="h-13 border-2 border-border-regular rounded-xl px-4 text-base text-neutral-dark-gray bg-white"
                placeholder="e.g. 12 Freedom Street, Abuja"
                placeholderTextColor={colors.neutral.gray}
                value={address}
                onChangeText={setAddress}
              />
            </View>

            {/* Service Area Radius */}
            <View className="gap-2">
              <Text className="text-sm font-bold text-neutral-dark-gray">Service Area (Radius)</Text>
              <TouchableOpacity
                onPress={() => setIsRadiusModalOpen(true)}
                className="h-13 border-2 border-border-regular rounded-xl px-4 flex-row items-center justify-between bg-white"
                activeOpacity={0.8}
              >
                <Text className="text-base text-neutral-dark-gray font-medium">e.g. {radius}</Text>
                <ChevronDown size={18} color={colors.neutral.blueGray} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Continue Button */}
        <View className="mt-9">
          <TouchableOpacity
            onPress={handleContinue}
            className="bg-primary-blue h-13 rounded-full items-center justify-center shadow-md"
            activeOpacity={0.85}
          >
            <Text className="text-white text-base font-bold">Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Radius Selector Modal */}
      <Modal
        visible={isRadiusModalOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsRadiusModalOpen(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-black/45 justify-center items-center px-6"
          activeOpacity={1}
          onPress={() => setIsRadiusModalOpen(false)}
        >
          <View className="bg-white rounded-2xl py-5 px-4 w-full max-w-sm">
            <Text className="text-base font-bold text-dark-blue mb-3 px-2">Select Service Radius</Text>
            {RADIUS_OPTIONS.map((item) => (
              <TouchableOpacity
                key={item.value}
                onPress={() => {
                  setRadius(item.value);
                  setIsRadiusModalOpen(false);
                }}
                className="flex-row items-center justify-between py-3 px-3 rounded-xl"
              >
                <Text
                  className={`text-sm ${
                    radius === item.value ? "text-primary-blue font-bold" : "text-neutral-dark-gray font-medium"
                  }`}
                >
                  {item.label}
                </Text>
                {radius === item.value && (
                  <Check size={18} color={colors.primary.blue} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
