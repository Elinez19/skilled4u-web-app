import React from "react";
import { View } from "react-native";

interface StepIndicatorProps {
  totalSteps?: number;
  currentStep: number; // 1-indexed
}

export function StepIndicator({ totalSteps = 5, currentStep }: StepIndicatorProps) {
  return (
    <View className="flex-row items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, idx) => {
        const stepNum = idx + 1;
        const isActive = stepNum === currentStep;
        return (
          <View
            key={idx}
            className={`h-2 rounded-full ${
              isActive ? "w-6 bg-primary-blue" : "w-2 bg-neutral-300"
            }`}
          />
        );
      })}
    </View>
  );
}
