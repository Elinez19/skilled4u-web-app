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
  Share2,
  Bookmark,
  MapPin,
  Clock,
  Star,
  Wrench,
  Check,
  MessageSquare,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";
import { AVAILABLE_JOBS } from "../../data/mockData";

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [isApplied, setIsApplied] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const job = AVAILABLE_JOBS.find((j) => j.id === id) || AVAILABLE_JOBS[0];

  const handleApply = () => {
    setIsApplied(true);
    setShowSuccessModal(true);
  };

  const handleMessage = () => {
    router.push({
      pathname: "/messages/chat-aisha",
      params: { clientName: job.clientName, jobTitle: job.title },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" />
      <QuickShowcaseBar />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Image Container */}
        <View className="h-56 bg-sky-700 pt-2 px-4 justify-between pb-6">
          {/* Header Controls inside Hero */}
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-9 h-9 rounded-full bg-black/25 items-center justify-center"
              activeOpacity={0.8}
            >
              <ArrowLeft size={20} color="#ffffff" />
            </TouchableOpacity>

            <View className="flex-row gap-2.5">
              <TouchableOpacity className="w-9 h-9 rounded-full bg-black/25 items-center justify-center" activeOpacity={0.8}>
                <Bookmark size={20} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity className="w-9 h-9 rounded-full bg-black/25 items-center justify-center" activeOpacity={0.8}>
                <Share2 size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Center Graphic */}
          <View className="items-center justify-center gap-2">
            <View className="w-18 h-18 rounded-full bg-white/20 items-center justify-center border-2 border-white/40">
              <Wrench size={44} color="#ffffff" />
            </View>
            <Text className="text-sm font-bold text-white tracking-wide">{job.category} Emergency</Text>
          </View>
        </View>

        {/* Job Content Body */}
        <View className="px-5 pt-5">
          {/* Title & Price Header */}
          <View className="flex-row items-start justify-between gap-3">
            <View className="flex-1">
              <Text className="text-xl font-extrabold text-dark-blue mb-1.5">{job.title}</Text>
              <View className="flex-row items-center gap-1">
                <MapPin size={14} color={colors.primary.blue} />
                <Text className="text-xs text-blue-gray font-semibold">
                  {job.distance} • {job.serviceType}
                </Text>
              </View>
            </View>
            <Text className="text-xl font-black text-primary-blue">{job.price}</Text>
          </View>

          {/* Description */}
          <View className="h-px bg-border-light my-4" />
          <Text className="text-sm leading-5 text-neutral-dark-gray">{job.description}</Text>

          {/* Client Details Card */}
          <View className="flex-row items-center gap-3.5 bg-neutral-light-gray rounded-2xl p-3.5 my-5 border border-border-light">
            <View className="w-12 h-12 rounded-full bg-pink-500 items-center justify-center">
              <Text className="text-white text-base font-extrabold">
                {job.clientName.slice(0, 2).toUpperCase()}
              </Text>
            </View>

            <View className="flex-1">
              <Text className="text-sm font-extrabold text-dark-blue">{job.clientName}</Text>
              <View className="flex-row items-center gap-1 mt-0.5">
                <Star size={14} color="#f59e0b" fill="#f59e0b" />
                <Text className="text-xs font-semibold text-neutral-dark-gray">
                  {job.clientRating} ({job.clientReviewsCount} reviews)
                </Text>
              </View>
              <View className="flex-row items-center gap-1.5 mt-1">
                <View className="flex-row items-center gap-1">
                  <MapPin size={12} color={colors.neutral.blueGray} />
                  <Text className="text-xs text-blue-gray">{job.distance}</Text>
                </View>
                <Text className="text-neutral-gray text-xs">•</Text>
                <View className="flex-row items-center gap-1">
                  <Clock size={12} color={colors.neutral.blueGray} />
                  <Text className="text-xs text-blue-gray">Posted {job.postedAgo}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Requirements Section */}
          <View className="mt-2">
            <Text className="text-base font-extrabold text-dark-blue mb-2.5">Requirements</Text>
            <View className="gap-2">
              {job.requirements.map((req, idx) => (
                <View key={idx} className="flex-row items-center gap-2.5">
                  <View className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                  <Text className="text-sm text-neutral-dark-gray leading-5">{req}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Actions Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-3 pb-7 border-t border-border-light gap-2.5 shadow-lg">
        <TouchableOpacity
          onPress={handleApply}
          disabled={isApplied}
          className={`h-12 rounded-full items-center justify-center ${
            isApplied ? "bg-success" : "bg-primary-blue"
          }`}
          activeOpacity={0.85}
        >
          {isApplied ? (
            <View className="flex-row items-center gap-2">
              <Check size={18} color="#ffffff" strokeWidth={3} />
              <Text className="text-white text-sm font-bold">Application Submitted</Text>
            </View>
          ) : (
            <Text className="text-white text-sm font-bold">Apply for Job</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleMessage}
          className="h-12 rounded-full border-2 border-primary-blue flex-row items-center justify-center gap-2 bg-white"
          activeOpacity={0.85}
        >
          <MessageSquare size={16} color={colors.primary.blue} />
          <Text className="text-primary-blue text-sm font-bold">Message Client</Text>
        </TouchableOpacity>
      </View>

      {/* Application Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View className="flex-1 bg-black/50 items-center justify-center px-6">
          <View className="bg-white rounded-3xl p-6 items-center w-full max-w-sm">
            <View className="w-18 h-18 rounded-full bg-success items-center justify-center mb-4">
              <Check size={36} color="#ffffff" strokeWidth={3} />
            </View>
            <Text className="text-xl font-extrabold text-dark-blue mb-2">Application Sent!</Text>
            <Text className="text-xs text-blue-gray text-center leading-4 mb-5">
              {job.clientName} will be notified immediately. You will receive an arrival PIN once confirmed.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowSuccessModal(false);
                router.push("/(tabs)/bookings");
              }}
              className="bg-primary-blue w-full h-12 rounded-full items-center justify-center"
            >
              <Text className="text-white text-sm font-bold">View in My Bookings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
