import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { colors } from "@skilled4u/ui";
import { ArrowLeft, ChevronDown } from "lucide-react-native";
import { StepIndicator } from "../../components/common/StepIndicator";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";

export default function PersonalInformationScreen() {
  const params = useLocalSearchParams();
  const [fullName, setFullName] = useState("Emeka Okafor");
  const [phoneNumber, setPhoneNumber] = useState("812 345 6789");
  const [emailAddress, setEmailAddress] = useState("emeka@example.com");

  const handleContinue = () => {
    router.push({
      pathname: "/onboarding/location",
      params: {
        category: params.category,
        fullName,
        phoneNumber,
        emailAddress,
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

        <StepIndicator currentStep={2} totalSteps={5} />

        <View className="w-9" />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 40, flexGrow: 1, justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            {/* Title & Subtitle */}
            <View className="mb-7">
              <Text className="text-2xl font-extrabold text-dark-blue leading-8 tracking-tight">
                Your Personal{"\n"}Information
              </Text>
              <Text className="text-sm text-blue-gray mt-2">Let's get to know you better.</Text>
            </View>

            {/* Form Fields */}
            <View className="gap-5">
              {/* Full Name */}
              <View className="gap-2">
                <Text className="text-sm font-bold text-neutral-dark-gray">Full Name</Text>
                <TextInput
                  className="h-13 border-2 border-border-regular rounded-xl px-4 text-base text-neutral-dark-gray bg-white"
                  placeholder="e.g. Emeka Okafor"
                  placeholderTextColor={colors.neutral.gray}
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                />
              </View>

              {/* Phone Number with country selector */}
              <View className="gap-2">
                <Text className="text-sm font-bold text-neutral-dark-gray">Phone Number</Text>
                <View className="flex-row gap-2.5 items-center">
                  <TouchableOpacity className="h-13 flex-row items-center gap-1.5 border-2 border-border-regular rounded-xl px-3 bg-neutral-light-gray" activeOpacity={0.8}>
                    <Text className="text-lg">🇳🇬</Text>
                    <Text className="text-sm font-bold text-neutral-dark-gray">+234</Text>
                    <ChevronDown size={14} color={colors.neutral.blueGray} />
                  </TouchableOpacity>

                  <TextInput
                    className="flex-1 h-13 border-2 border-border-regular rounded-xl px-4 text-base text-neutral-dark-gray bg-white"
                    placeholder="812 345 6789"
                    placeholderTextColor={colors.neutral.gray}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              {/* Email Address */}
              <View className="gap-2">
                <Text className="text-sm font-bold text-neutral-dark-gray">Email Address</Text>
                <TextInput
                  className="h-13 border-2 border-border-regular rounded-xl px-4 text-base text-neutral-dark-gray bg-white"
                  placeholder="e.g. emeka@example.com"
                  placeholderTextColor={colors.neutral.gray}
                  value={emailAddress}
                  onChangeText={setEmailAddress}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>
          </View>

          {/* Continue Button */}
          <View className="mt-10">
            <TouchableOpacity
              onPress={handleContinue}
              className="bg-primary-blue h-13 rounded-full items-center justify-center shadow-md"
              activeOpacity={0.85}
            >
              <Text className="text-white text-base font-bold">Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
