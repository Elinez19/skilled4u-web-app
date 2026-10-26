import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { colors } from "@skilled4u/ui";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  MessageSquare,
  KeyRound,
  Check,
  Wrench,
  Zap,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";
import { ARTISAN_BOOKINGS, BookingItem } from "../../data/mockData";

type BookingTab = "upcoming" | "completed" | "cancelled";

export default function MyBookingsScreen() {
  const [activeTab, setActiveTab] = useState<BookingTab>("upcoming");
  const [pinModalBooking, setPinModalBooking] = useState<BookingItem | null>(null);
  const [pinCode, setPinCode] = useState("");
  const [pinVerified, setPinVerified] = useState(false);

  const filteredBookings = ARTISAN_BOOKINGS.filter((bk) => {
    if (activeTab === "upcoming") return bk.status === "confirmed" || bk.status === "pending";
    if (activeTab === "completed") return bk.status === "completed";
    return bk.status === "cancelled";
  });

  const handleVerifyPin = () => {
    if (pinCode.length >= 4) {
      setPinVerified(true);
      setTimeout(() => {
        setPinVerified(false);
        setPinModalBooking(null);
        setPinCode("");
      }, 1500);
    }
  };

  const renderTradeIcon = (category: string) => {
    if (category.toLowerCase() === "plumbing") {
      return <Wrench size={22} color="#ffffff" />;
    }
    return <Zap size={22} color="#ffffff" />;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      {/* Top Header */}
      <View className="h-13 flex-row items-center justify-between px-4 border-b border-border-light">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-9 h-9 rounded-full items-center justify-center bg-neutral-light-gray"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ArrowLeft size={22} color={colors.neutral.darkGray} />
        </TouchableOpacity>
        <Text className="text-lg font-extrabold text-dark-blue">My Bookings</Text>
        <View className="w-9" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Status Segmented Tabs */}
        <View className="flex-row bg-neutral-light-gray rounded-xl p-1 mb-5">
          <TouchableOpacity
            onPress={() => setActiveTab("upcoming")}
            className={`flex-1 py-2.5 rounded-lg items-center ${
              activeTab === "upcoming" ? "bg-primary-blue shadow-md" : "bg-transparent"
            }`}
            activeOpacity={0.8}
          >
            <Text
              className={`text-xs ${
                activeTab === "upcoming" ? "text-white font-bold" : "text-blue-gray font-semibold"
              }`}
            >
              Upcoming
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("completed")}
            className={`flex-1 py-2.5 rounded-lg items-center ${
              activeTab === "completed" ? "bg-primary-blue shadow-md" : "bg-transparent"
            }`}
            activeOpacity={0.8}
          >
            <Text
              className={`text-xs ${
                activeTab === "completed" ? "text-white font-bold" : "text-blue-gray font-semibold"
              }`}
            >
              Completed
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("cancelled")}
            className={`flex-1 py-2.5 rounded-lg items-center ${
              activeTab === "cancelled" ? "bg-primary-blue shadow-md" : "bg-transparent"
            }`}
            activeOpacity={0.8}
          >
            <Text
              className={`text-xs ${
                activeTab === "cancelled" ? "text-white font-bold" : "text-blue-gray font-semibold"
              }`}
            >
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bookings List */}
        <View className="gap-4">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((bk) => (
              <View key={bk.id} className="rounded-2xl bg-white border-2 border-border-light p-3.5 shadow-sm">
                <View className="flex-row items-start gap-3">
                  {/* Thumbnail */}
                  <View
                    className="w-15 h-15 rounded-xl items-center justify-center"
                    style={{
                      backgroundColor:
                        bk.category.toLowerCase() === "plumbing" ? "#0284c7" : "#0369a1",
                    }}
                  >
                    {renderTradeIcon(bk.category)}
                  </View>

                  {/* Info */}
                  <View className="flex-1">
                    <Text className="text-sm font-extrabold text-dark-blue mb-1" numberOfLines={1}>
                      {bk.title}
                    </Text>

                    <Text className="text-xs text-blue-gray font-medium mb-1">
                      {bk.clientName} • {bk.distance}
                    </Text>

                    <View className="flex-row items-center gap-1">
                      <Clock size={12} color={colors.neutral.blueGray} />
                      <Text className="text-xs text-blue-gray font-semibold">{bk.date}</Text>
                    </View>
                  </View>

                  {/* Badge */}
                  <View
                    className={`px-2.5 py-1 rounded-lg ${
                      bk.status === "confirmed" ? "bg-green-100" : "bg-amber-100"
                    }`}
                  >
                    <Text
                      className={`text-xs font-bold ${
                        bk.status === "confirmed" ? "text-success" : "text-amber-700"
                      }`}
                    >
                      {bk.status === "confirmed" ? "Confirmed" : "Pending"}
                    </Text>
                  </View>
                </View>

                {/* Card Action Buttons */}
                <View className="flex-row items-center justify-between border-t border-border-light mt-3.5 pt-3 gap-2">
                  <TouchableOpacity
                    onPress={() => setPinModalBooking(bk)}
                    className="flex-1 flex-row items-center justify-center gap-1.5 bg-sky-blue py-2 rounded-xl"
                    activeOpacity={0.8}
                  >
                    <KeyRound size={14} color={colors.primary.blue} />
                    <Text className="text-xs font-bold text-primary-blue">Verify Arrival PIN</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => router.push("/messages")}
                    className="w-9 h-9 rounded-full bg-neutral-light-gray items-center justify-center"
                    activeOpacity={0.8}
                  >
                    <MessageSquare size={16} color={colors.primary.darkBlue} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => router.push(`/jobs/${bk.jobId}`)}
                    className="px-3.5 py-2 rounded-xl bg-neutral-light-gray"
                    activeOpacity={0.8}
                  >
                    <Text className="text-xs font-bold text-neutral-dark-gray">Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <View className="items-center justify-center py-14">
              <CalendarIcon size={44} color={colors.neutral.gray} />
              <Text className="text-base font-bold text-dark-blue mt-3">No bookings in this tab</Text>
              <Text className="text-xs text-blue-gray mt-1 text-center px-5">
                New customer bookings will appear here automatically.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Arrival PIN Verification Modal */}
      <Modal
        visible={!!pinModalBooking}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setPinModalBooking(null)}
      >
        <View className="flex-1 bg-black/50 items-center justify-center px-6">
          <View className="bg-white rounded-3xl p-6 items-center w-full max-w-sm">
            <View className="w-15 h-15 rounded-full bg-sky-blue items-center justify-center mb-3.5">
              <KeyRound size={32} color={colors.primary.blue} />
            </View>

            <Text className="text-lg font-extrabold text-dark-blue mb-2">Enter Arrival PIN</Text>
            <Text className="text-xs text-blue-gray text-center leading-4 mb-5">
              Ask {pinModalBooking?.clientName} for the 4-digit arrival PIN to confirm you are on-site and begin inspection.
            </Text>

            {pinVerified ? (
              <View className="flex-row items-center gap-2 py-3 px-4 bg-green-100 rounded-xl">
                <Check size={20} color={colors.semantic.success} strokeWidth={3} />
                <Text className="text-xs font-bold text-success">Arrival Verified & Escrow Started!</Text>
              </View>
            ) : (
              <>
                <TextInput
                  className="w-4/5 h-13 border-2 border-primary-blue rounded-xl text-2xl font-black text-dark-blue tracking-widest text-center mb-5 bg-sky-blue"
                  placeholder="• • • •"
                  placeholderTextColor={colors.neutral.gray}
                  value={pinCode}
                  onChangeText={setPinCode}
                  keyboardType="number-pad"
                  maxLength={4}
                  textAlign="center"
                />

                <View className="flex-row gap-3 w-full">
                  <TouchableOpacity
                    onPress={() => setPinModalBooking(null)}
                    className="flex-1 h-11 rounded-full bg-neutral-light-gray items-center justify-center"
                  >
                    <Text className="text-sm font-bold text-neutral-dark-gray">Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleVerifyPin}
                    className="flex-1 h-11 rounded-full bg-primary-blue items-center justify-center"
                  >
                    <Text className="text-sm font-bold text-white">Confirm PIN</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
