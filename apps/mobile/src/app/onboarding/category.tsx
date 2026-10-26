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
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  BrickWall,
  Wind,
  Flame,
  LayoutGrid,
  MoreHorizontal,
  ArrowLeft,
} from "lucide-react-native";
import { StepIndicator } from "../../components/common/StepIndicator";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";
import { CRAFT_CATEGORIES } from "../../data/mockData";

export default function ChooseCraftCategoryScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>("plumber");

  const renderIcon = (iconName: string) => {
    const iconColor = colors.primary.blue;
    const size = 26;

    switch (iconName) {
      case "wrench":
        return <Wrench size={size} color={iconColor} />;
      case "zap":
        return <Zap size={size} color={iconColor} />;
      case "hammer":
        return <Hammer size={size} color={iconColor} />;
      case "paintbrush":
        return <Paintbrush size={size} color={iconColor} />;
      case "brick":
        return <BrickWall size={size} color={iconColor} />;
      case "wind":
        return <Wind size={size} color={iconColor} />;
      case "flame":
        return <Flame size={size} color={iconColor} />;
      case "grid":
        return <LayoutGrid size={size} color={iconColor} />;
      case "more":
      default:
        return <MoreHorizontal size={size} color={iconColor} />;
    }
  };

  const handleContinue = () => {
    router.push({
      pathname: "/onboarding/personal",
      params: { category: selectedCategory },
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

        <StepIndicator currentStep={1} totalSteps={5} />

        <View className="w-9" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 40, flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        {/* Title and Subtitle */}
        <View className="mb-6">
          <Text className="text-2xl font-extrabold text-dark-blue leading-8 tracking-tight">
            What type of artisan{"\n"}are you?
          </Text>
          <Text className="text-sm text-blue-gray mt-2 leading-5">
            Select the category that best describes your skill.
          </Text>
        </View>

        {/* 3x3 Category Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-3.5">
          {CRAFT_CATEGORIES.map((item) => {
            const isSelected = selectedCategory === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => setSelectedCategory(item.id)}
                activeOpacity={0.8}
                className={`w-[31%] aspect-square rounded-2xl items-center justify-center py-3 px-1 shadow-sm border-2 ${
                  isSelected
                    ? "bg-sky-blue border-primary-blue"
                    : "bg-white border-border-light"
                }`}
              >
                <View
                  className={`w-12 h-12 rounded-full items-center justify-center mb-2 ${
                    isSelected ? "bg-white shadow-sm" : "bg-sky-blue"
                  }`}
                >
                  {renderIcon(item.icon)}
                </View>
                <Text
                  className={`text-xs text-center ${
                    isSelected
                      ? "text-dark-blue font-extrabold"
                      : "text-neutral-dark-gray font-semibold"
                  }`}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
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
    </SafeAreaView>
  );
}
