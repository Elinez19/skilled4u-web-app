import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { colors } from "@skilled4u/ui";
import {
  Search,
  Clock,
  Wrench,
  Zap,
  LayoutGrid,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";
import { AVAILABLE_JOBS } from "../../data/mockData";

type FilterType = "nearby" | "recent" | "pay";

export default function AvailableJobsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("nearby");

  const filteredJobs = AVAILABLE_JOBS.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTradeIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "plumbing":
        return <Wrench size={22} color="#ffffff" />;
      case "electrical":
        return <Zap size={22} color="#ffffff" />;
      case "tiling":
        return <LayoutGrid size={22} color="#ffffff" />;
      default:
        return <Wrench size={22} color="#ffffff" />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      <View className="px-5 py-3 border-b border-border-light">
        <Text className="text-2xl font-extrabold text-dark-blue">Available Jobs</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View className="h-12 bg-neutral-light-gray rounded-xl border border-border-light flex-row items-center px-3.5 gap-2.5 mb-4">
          <Search size={18} color={colors.neutral.gray} />
          <TextInput
            className="flex-1 text-sm text-neutral-dark-gray"
            placeholder="Search by location or service..."
            placeholderTextColor={colors.neutral.gray}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Filter Pills */}
        <View className="flex-row gap-2 mb-5">
          <TouchableOpacity
            onPress={() => setActiveFilter("nearby")}
            className={`px-4 py-2 rounded-full border ${
              activeFilter === "nearby"
                ? "bg-primary-blue border-primary-blue"
                : "bg-neutral-light-gray border-border-light"
            }`}
            activeOpacity={0.8}
          >
            <Text
              className={`text-xs ${
                activeFilter === "nearby"
                  ? "text-white font-bold"
                  : "text-neutral-dark-gray font-medium"
              }`}
            >
              Nearby
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveFilter("recent")}
            className={`px-4 py-2 rounded-full border ${
              activeFilter === "recent"
                ? "bg-primary-blue border-primary-blue"
                : "bg-neutral-light-gray border-border-light"
            }`}
            activeOpacity={0.8}
          >
            <Text
              className={`text-xs ${
                activeFilter === "recent"
                  ? "text-white font-bold"
                  : "text-neutral-dark-gray font-medium"
              }`}
            >
              Most Recent
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveFilter("pay")}
            className={`px-4 py-2 rounded-full border ${
              activeFilter === "pay"
                ? "bg-primary-blue border-primary-blue"
                : "bg-neutral-light-gray border-border-light"
            }`}
            activeOpacity={0.8}
          >
            <Text
              className={`text-xs ${
                activeFilter === "pay"
                  ? "text-white font-bold"
                  : "text-neutral-dark-gray font-medium"
              }`}
            >
              Highest Pay
            </Text>
          </TouchableOpacity>
        </View>

        {/* Jobs List */}
        <View className="gap-3.5">
          {filteredJobs.map((job) => (
            <TouchableOpacity
              key={job.id}
              onPress={() => router.push(`/jobs/${job.id}`)}
              className="flex-row items-center p-3 rounded-2xl bg-white border-2 border-border-light shadow-sm gap-3"
              activeOpacity={0.9}
            >
              {/* Left Thumbnail Illustration */}
              <View
                className="w-17 h-17 rounded-xl items-center justify-center"
                style={{ backgroundColor: job.imagePlaceholderColor || colors.primary.blue }}
              >
                {renderTradeIcon(job.category)}
              </View>

              {/* Center Info */}
              <View className="flex-1 justify-center">
                <Text className="text-sm font-bold text-dark-blue mb-1" numberOfLines={1}>
                  {job.title}
                </Text>

                <View className="flex-row items-center gap-1.5 mb-1">
                  <Text className="text-xs text-blue-gray font-medium">{job.distance}</Text>
                  <Text className="text-neutral-gray text-xs">•</Text>
                  <Text className="text-xs font-extrabold text-primary-blue">{job.price}</Text>
                </View>

                <View className="flex-row items-center gap-1">
                  <Clock size={12} color={colors.neutral.blueGray} />
                  <Text className="text-xs text-blue-gray">{job.postedAgo}</Text>
                </View>
              </View>

              {/* Right Apply Button */}
              <TouchableOpacity
                onPress={() => router.push(`/jobs/${job.id}`)}
                className="bg-primary-blue px-4.5 py-2 rounded-full"
                activeOpacity={0.85}
              >
                <Text className="text-white text-xs font-bold">Apply</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
