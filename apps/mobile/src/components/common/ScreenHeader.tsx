import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { colors } from "@skilled4u/ui";

interface ScreenHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightElement?: React.ReactNode;
}

export function ScreenHeader({
  title,
  showBack = true,
  onBack,
  rightElement,
}: ScreenHeaderProps) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <View className="h-13 flex-row items-center justify-between px-4 bg-white border-b border-border-light">
      {showBack ? (
        <TouchableOpacity
          onPress={handleBack}
          className="w-10 h-10 rounded-full items-center justify-center bg-neutral-light-gray"
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          accessibilityLabel="Go back"
        >
          <ArrowLeft size={22} color={colors.neutral.darkGray} />
        </TouchableOpacity>
      ) : (
        <View className="w-10" />
      )}

      {title ? (
        <Text className="text-lg font-bold text-dark-blue text-center" numberOfLines={1}>
          {title}
        </Text>
      ) : (
        <View className="w-10" />
      )}

      <View className="w-10 items-end justify-center">
        {rightElement || <View className="w-10" />}
      </View>
    </View>
  );
}
