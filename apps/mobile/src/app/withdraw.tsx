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
import { router } from "expo-router";
import { colors } from "@skilled4u/ui";
import {
  ArrowLeft,
  Building2,
  Check,
  ShieldCheck,
  ChevronDown,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../components/common/QuickShowcaseBar";
import { ARTISAN_PROFILE } from "../data/mockData";

export default function WithdrawFundsScreen() {
  const [amount, setAmount] = useState("50,000");
  const [selectedBank] = useState("Access Bank (•••• 4321)");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const PRESET_AMOUNTS = ["10,000", "20,000", "50,000", "100,000", "165,000"];

  const handleWithdraw = () => {
    setIsSuccessModalOpen(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      {/* Header */}
      <View className="h-13 flex-row items-center justify-between px-4 border-b border-border-light">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-9 h-9 rounded-full items-center justify-center bg-neutral-light-gray"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ArrowLeft size={22} color={colors.neutral.darkGray} />
        </TouchableOpacity>
        <Text className="text-lg font-extrabold text-dark-blue">Withdraw Funds</Text>
        <View className="w-9" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Available Balance Box */}
        <View className="bg-sky-blue rounded-2xl p-4 items-center mb-5 border border-border-regular">
          <Text className="text-xs text-blue-gray font-semibold">Available Balance</Text>
          <Text className="text-3xl font-black text-dark-blue mt-1">{ARTISAN_PROFILE.walletBalance}</Text>
        </View>

        {/* Withdrawal Amount Input */}
        <View className="mb-5">
          <Text className="text-sm font-bold text-neutral-dark-gray mb-2">Withdrawal Amount (₦)</Text>
          <View className="flex-row items-center border-2 border-border-regular rounded-2xl px-4 h-14 bg-white">
            <Text className="text-xl font-extrabold text-primary-blue mr-2">₦</Text>
            <TextInput
              className="flex-1 text-xl font-extrabold text-dark-blue"
              value={amount}
              onChangeText={setAmount}
              keyboardType="number-pad"
              placeholder="0.00"
            />
          </View>

          {/* Quick preset chips */}
          <View className="flex-row gap-2 mt-2.5 flex-wrap">
            {PRESET_AMOUNTS.map((val) => (
              <TouchableOpacity
                key={val}
                onPress={() => setAmount(val)}
                className={`px-3 py-1.5 rounded-xl border ${
                  amount === val
                    ? "bg-sky-blue border-primary-blue"
                    : "bg-neutral-light-gray border-border-light"
                }`}
              >
                <Text
                  className={`text-xs ${
                    amount === val ? "text-primary-blue font-extrabold" : "text-neutral-dark-gray font-semibold"
                  }`}
                >
                  {val === "165,000" ? "Max" : `₦${val}`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bank Account Selection */}
        <View className="mb-5">
          <Text className="text-sm font-bold text-neutral-dark-gray mb-2">Destination Bank Account</Text>
          <TouchableOpacity className="flex-row items-center gap-3 p-3.5 rounded-2xl border-2 border-border-regular bg-white" activeOpacity={0.8}>
            <View className="w-10 h-10 rounded-full bg-sky-blue items-center justify-center">
              <Building2 size={20} color={colors.primary.blue} />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-bold text-dark-blue">{selectedBank}</Text>
              <Text className="text-xs text-blue-gray mt-0.5">{ARTISAN_PROFILE.name}</Text>
            </View>
            <ChevronDown size={18} color={colors.neutral.blueGray} />
          </TouchableOpacity>
        </View>

        {/* Payout Summary */}
        <View className="bg-neutral-light-gray rounded-2xl p-4 mb-4 border border-border-light">
          <Text className="text-sm font-extrabold text-dark-blue mb-2.5">Transaction Summary</Text>
          <View className="flex-row justify-between items-center my-1">
            <Text className="text-xs text-neutral-dark-gray">Gross Withdrawal</Text>
            <Text className="text-xs font-bold text-neutral-dark-gray">₦{amount || "0"}</Text>
          </View>
          <View className="flex-row justify-between items-center my-1">
            <Text className="text-xs text-neutral-dark-gray">Bachs Payout Fee</Text>
            <Text className="text-xs font-bold text-success">
              ₦0.00 (Instant Free)
            </Text>
          </View>
          <View className="h-px bg-border-light my-2" />
          <View className="flex-row justify-between items-center">
            <Text className="text-sm font-extrabold text-dark-blue">Net Payout to Bank</Text>
            <Text className="text-base font-black text-primary-blue">₦{amount || "0"}</Text>
          </View>
        </View>

        {/* Safety Note */}
        <View className="flex-row items-center gap-1.5 mb-6 justify-center">
          <ShieldCheck size={16} color={colors.semantic.success} />
          <Text className="text-[11px] text-blue-gray">
            Secured by Bachs Connect Instant Bank Settlement
          </Text>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          onPress={handleWithdraw}
          className="bg-primary-blue h-13 rounded-full items-center justify-center shadow-md"
          activeOpacity={0.85}
        >
          <Text className="text-white text-base font-bold">Confirm Withdrawal</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Success Modal */}
      <Modal
        visible={isSuccessModalOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsSuccessModalOpen(false)}
      >
        <View className="flex-1 bg-black/50 items-center justify-center px-6">
          <View className="bg-white rounded-3xl p-6 items-center w-full max-w-sm">
            <View className="w-18 h-18 rounded-full bg-success items-center justify-center mb-4">
              <Check size={40} color="#ffffff" strokeWidth={3.5} />
            </View>
            <Text className="text-xl font-extrabold text-dark-blue mb-2">Withdrawal Initiated!</Text>
            <Text className="text-xs text-blue-gray text-center leading-4 mb-5">
              ₦{amount} is on its way to {selectedBank}. You will receive a bank notification within a few minutes.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsSuccessModalOpen(false);
                router.replace("/(tabs)/wallet");
              }}
              className="bg-primary-blue w-full h-12 rounded-full items-center justify-center"
            >
              <Text className="text-white text-sm font-bold">Back to Wallet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
