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
  ArrowLeft,
  Search,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";
import { ARTISAN_CHATS } from "../../data/mockData";

export default function MessagesListScreen() {
  const [search, setSearch] = useState("");

  const filtered = ARTISAN_CHATS.filter(
    (c) =>
      c.senderName.toLowerCase().includes(search.toLowerCase()) ||
      c.serviceTitle.toLowerCase().includes(search.toLowerCase())
  );

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
        <Text className="text-lg font-extrabold text-dark-blue">Messages</Text>
        <View className="w-9" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Input */}
        <View className="h-12 bg-neutral-light-gray rounded-xl border border-border-light flex-row items-center px-3.5 gap-2.5 mb-4">
          <Search size={18} color={colors.neutral.gray} />
          <TextInput
            className="flex-1 text-sm text-neutral-dark-gray"
            placeholder="Search conversations..."
            placeholderTextColor={colors.neutral.gray}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Chat List */}
        <View className="gap-2">
          {filtered.map((chat) => (
            <TouchableOpacity
              key={chat.id}
              onPress={() =>
                router.push({
                  pathname: `/messages/${chat.id}`,
                  params: {
                    clientName: chat.senderName,
                    serviceTitle: chat.serviceTitle,
                  },
                })
              }
              className="flex-row items-center py-3 px-2.5 rounded-xl bg-white border-b border-border-light gap-3"
              activeOpacity={0.8}
            >
              <View
                className="w-12 h-12 rounded-full items-center justify-center"
                style={{ backgroundColor: chat.avatarColor }}
              >
                <Text className="text-white text-base font-extrabold">
                  {chat.senderName.slice(0, 2).toUpperCase()}
                </Text>
              </View>

              <View className="flex-1">
                <View className="flex-row items-center justify-between mb-0.5">
                  <Text className="text-sm font-extrabold text-dark-blue">{chat.senderName}</Text>
                  <Text className="text-xs text-blue-gray">{chat.timeAgo}</Text>
                </View>

                <Text className="text-xs text-primary-blue font-semibold mb-0.5">{chat.serviceTitle}</Text>

                <View className="flex-row items-center justify-between">
                  <Text className="text-xs text-neutral-dark-gray flex-1" numberOfLines={1}>
                    {chat.lastMessage}
                  </Text>
                  {chat.unreadCount > 0 && (
                    <View className="bg-primary-blue rounded-full px-1.5 py-0.5 ml-2">
                      <Text className="text-white text-[10px] font-extrabold">{chat.unreadCount}</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
