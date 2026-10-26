import React, { useState } from "react";
import {
  View,
  Text,
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
  ChevronDown,
  UploadCloud,
  CheckCircle2,
  Circle,
  Check,
  Image as ImageIcon,
} from "lucide-react-native";
import { StepIndicator } from "../../components/common/StepIndicator";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";

const SKILLS_OPTIONS = [
  "Plumbing",
  "Pipe Fitting",
  "Leak Repair",
  "Installation",
  "Maintenance",
  "Other",
];

const EXPERIENCE_OPTIONS = [
  "Less than 1 year (Apprentice)",
  "1 - 2 years (Junior Pro)",
  "3 - 5 years (Mid-level Pro)",
  "5 - 8 years (Senior Craftsman)",
  "8+ years (Master Artisan)",
];

export default function SkillsExperienceScreen() {
  const params = useLocalSearchParams();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "Plumbing",
    "Leak Repair",
    "Maintenance",
  ]);
  const [experienceLevel, setExperienceLevel] = useState("3 - 5 years (Mid-level Pro)");
  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [hasUploadedPhoto, setHasUploadedPhoto] = useState(false);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleContinue = () => {
    router.push({
      pathname: "/onboarding/complete",
      params: {
        ...params,
        skills: selectedSkills.join(","),
        experience: experienceLevel,
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

        <StepIndicator currentStep={4} totalSteps={5} />

        <View className="w-9" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 40, flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {/* Title & Subtitle */}
          <View className="mb-6">
            <Text className="text-2xl font-extrabold text-dark-blue tracking-tight">Skills & Experience</Text>
            <Text className="text-sm text-blue-gray mt-1.5">
              Tell us about your expertise and experience.
            </Text>
          </View>

          {/* Skills Multi-Select Pills */}
          <View className="mb-5">
            <Text className="text-sm font-bold text-neutral-dark-gray mb-2.5">Skills (Select all that apply)</Text>
            <View className="flex-row flex-wrap justify-between gap-y-2.5">
              {SKILLS_OPTIONS.map((skill) => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <TouchableOpacity
                    key={skill}
                    onPress={() => toggleSkill(skill)}
                    activeOpacity={0.8}
                    className={`w-[48%] flex-row items-center gap-2 py-3 px-3.5 rounded-xl border-2 ${
                      isSelected
                        ? "border-primary-blue bg-sky-blue"
                        : "border-border-regular bg-white"
                    }`}
                  >
                    {isSelected ? (
                      <CheckCircle2 size={18} color={colors.primary.blue} />
                    ) : (
                      <Circle size={18} color={colors.neutral.gray} />
                    )}
                    <Text
                      className={`text-sm ${
                        isSelected
                          ? "text-dark-blue font-bold"
                          : "text-neutral-dark-gray font-medium"
                      }`}
                    >
                      {skill}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Years of Experience Dropdown */}
          <View className="mb-5">
            <Text className="text-sm font-bold text-neutral-dark-gray mb-2.5">Years of Experience</Text>
            <TouchableOpacity
              onPress={() => setIsExpModalOpen(true)}
              className="h-13 border-2 border-border-regular rounded-xl px-4 flex-row items-center justify-between bg-white"
              activeOpacity={0.8}
            >
              <Text className="text-base text-neutral-dark-gray font-medium">
                {experienceLevel || "Select experience level"}
              </Text>
              <ChevronDown size={18} color={colors.neutral.blueGray} />
            </TouchableOpacity>
          </View>

          {/* Upload Portfolio Box */}
          <View className="mb-5">
            <Text className="text-sm font-bold text-neutral-dark-gray mb-2.5">Upload Portfolio (Optional)</Text>
            <TouchableOpacity
              onPress={() => setHasUploadedPhoto(!hasUploadedPhoto)}
              className={`border-2 border-dashed rounded-2xl py-5 px-4 items-center justify-center ${
                hasUploadedPhoto
                  ? "bg-green-50 border-success"
                  : "border-border-regular bg-neutral-light-gray"
              }`}
              activeOpacity={0.8}
            >
              {hasUploadedPhoto ? (
                <View className="flex-row items-center gap-3 w-full">
                  <ImageIcon size={28} color={colors.semantic.success} />
                  <View className="flex-1">
                    <Text className="text-sm font-bold text-neutral-dark-gray">3 photos added</Text>
                    <Text className="text-xs text-blue-gray mt-0.5">Tap to add more photos</Text>
                  </View>
                  <Check size={20} color={colors.semantic.success} />
                </View>
              ) : (
                <View className="items-center justify-center">
                  <View className="w-11 h-11 rounded-full bg-sky-blue items-center justify-center mb-2">
                    <UploadCloud size={24} color={colors.primary.blue} />
                  </View>
                  <Text className="text-sm font-bold text-dark-blue">Add photos of your work</Text>
                  <Text className="text-xs text-blue-gray mt-1">(jpg, png - max 5MB)</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Continue Button */}
        <View className="mt-5">
          <TouchableOpacity
            onPress={handleContinue}
            className="bg-primary-blue h-13 rounded-full items-center justify-center shadow-md"
            activeOpacity={0.85}
          >
            <Text className="text-white text-base font-bold">Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Experience Picker Modal */}
      <Modal
        visible={isExpModalOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsExpModalOpen(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-black/45 justify-center items-center px-6"
          activeOpacity={1}
          onPress={() => setIsExpModalOpen(false)}
        >
          <View className="bg-white rounded-2xl py-5 px-4 w-full max-w-sm">
            <Text className="text-base font-bold text-dark-blue mb-3 px-2">Select Experience Level</Text>
            {EXPERIENCE_OPTIONS.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => {
                  setExperienceLevel(item);
                  setIsExpModalOpen(false);
                }}
                className="flex-row items-center justify-between py-3 px-3 rounded-xl"
              >
                <Text
                  className={`text-sm ${
                    experienceLevel === item ? "text-primary-blue font-bold" : "text-neutral-dark-gray font-medium"
                  }`}
                >
                  {item}
                </Text>
                {experienceLevel === item && (
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
