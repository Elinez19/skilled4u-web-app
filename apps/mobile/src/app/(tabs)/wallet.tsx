import React from "react";
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
  ArrowLeft,
  ArrowDownLeft,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";
import { RECENT_TRANSACTIONS, ARTISAN_PROFILE } from "../../data/mockData";

export default function WalletScreen() {
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
        <Text className="text-lg font-extrabold text-dark-blue">Wallet</Text>
        <View className="w-9" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Balance Showcase Card */}
        <View className="items-center bg-white rounded-3xl py-6.5 px-5 border-2 border-border-light shadow-sm mb-5">
          <Text className="text-4xl font-black text-dark-blue tracking-tight">
            {ARTISAN_PROFILE.walletBalance}
          </Text>
          <Text className="text-sm text-blue-gray font-medium mt-1 mb-5">Available Balance</Text>

          <TouchableOpacity
            onPress={() => router.push("/withdraw")}
            className="bg-primary-blue px-9 py-3.5 rounded-full w-full items-center justify-center shadow-md"
            activeOpacity={0.85}
          >
            <Text className="text-white text-base font-bold">Withdraw Funds</Text>
          </TouchableOpacity>
        </View>

        {/* Bachs Escrow Safety Badge */}
        <View className="flex-row items-start gap-3 bg-sky-blue p-3.5 rounded-2xl border border-border-regular mb-6">
          <ShieldCheck size={18} color={colors.primary.blue} />
          <View className="flex-1">
            <Text className="text-xs font-bold text-dark-blue mb-0.5">Bachs Connect Escrow Protection</Text>
            <Text className="text-[11px] text-neutral-dark-gray leading-4">
              Customer payments are automatically secured on job dispatch and released upon completion.
            </Text>
          </View>
        </View>

        {/* Recent Transactions Section */}
        <View className="mb-3.5">
          <Text className="text-base font-extrabold text-dark-blue">Recent Transactions</Text>
        </View>

        <View className="gap-3">
          {RECENT_TRANSACTIONS.map((tx) => {
            const isCredit = tx.type === "credit";
            return (
              <View key={tx.id} className="flex-row items-center gap-3 py-3 px-3 bg-white rounded-xl border border-border-light">
                <View
                  className={`w-11 h-11 rounded-full items-center justify-center ${
                    isCredit ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  {isCredit ? (
                    <ArrowDownLeft size={20} color={colors.semantic.success} />
                  ) : (
                    <ArrowUpRight size={20} color={colors.semantic.error} />
                  )}
                </View>

                <View className="flex-1">
                  <Text className="text-sm font-bold text-neutral-dark-gray mb-0.5">{tx.title}</Text>
                  <Text className="text-xs text-blue-gray">{tx.date}</Text>
                </View>

                <Text
                  className={`text-sm font-extrabold ${
                    isCredit ? "text-success" : "text-error"
                  }`}
                >
                  {tx.amount}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
