import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { colors } from "@skilled4u/ui";
import {
  ArrowLeft,
  Phone,
  Paperclip,
  Send,
  CheckCheck,
  Wrench,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../../components/common/QuickShowcaseBar";

interface Message {
  id: string;
  sender: "me" | "client";
  text: string;
  time: string;
  hasAttachment?: boolean;
}

export default function ChatDetailScreen() {
  const { clientName, serviceTitle } = useLocalSearchParams();
  const displayName = (clientName as string) || "Aisha Bello";
  const displayTitle = (serviceTitle as string) || "Fix leaking kitchen sink";

  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "me",
      text: "Hi! I'm on my way to your location. I'll arrive in about 12 minutes.",
      time: "10:48 AM",
    },
    {
      id: "2",
      sender: "client",
      text: "Great! I'm at the front gate.",
      time: "10:50 AM",
    },
    {
      id: "3",
      sender: "me",
      text: "Perfect! See you soon.",
      time: "10:52 AM",
    },
    {
      id: "4",
      sender: "me",
      text: "All done! The leak has been fixed. I've sent the completion receipt.",
      time: "11:35 AM",
      hasAttachment: true,
    },
    {
      id: "5",
      sender: "client",
      text: "Awesome! Thank you so much!",
      time: "11:36 AM",
    },
  ]);

  const handleSend = () => {
    if (!inputMessage.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "me",
      text: inputMessage.trim(),
      time: "Now",
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputMessage("");
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-100">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      {/* Header */}
      <View className="h-15 flex-row items-center justify-between px-4 bg-white border-b border-border-light">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-9 h-9 rounded-full items-center justify-center bg-neutral-light-gray"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <ArrowLeft size={22} color={colors.neutral.darkGray} />
          </TouchableOpacity>

          <View>
            <Text className="text-base font-extrabold text-dark-blue">{displayName}</Text>
            <Text className="text-[11px] text-blue-gray">{displayTitle}</Text>
          </View>
        </View>

        <TouchableOpacity className="w-9.5 h-9.5 rounded-full bg-sky-blue items-center justify-center" activeOpacity={0.8}>
          <Phone size={18} color={colors.primary.blue} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 16, gap: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => {
            const isMe = msg.sender === "me";
            return (
              <View
                key={msg.id}
                className={`flex-row w-full ${isMe ? "justify-end" : "justify-start"}`}
              >
                <View
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                    isMe
                      ? "bg-primary-blue rounded-br-sm"
                      : "bg-white rounded-bl-sm border border-border-light"
                  }`}
                >
                  {msg.hasAttachment && (
                    <View className="bg-black/15 rounded-xl p-3 items-center justify-center mb-2 gap-1">
                      <Wrench size={24} color="#ffffff" />
                      <Text className="text-white text-xs font-bold">Work Proof Photo</Text>
                    </View>
                  )}
                  <Text className={`text-sm leading-5 ${isMe ? "text-white" : "text-neutral-dark-gray"}`}>
                    {msg.text}
                  </Text>
                  <View className="flex-row items-center justify-end gap-1 mt-1">
                    <Text className={`text-[10px] ${isMe ? "text-white/75" : "text-blue-gray"}`}>
                      {msg.time}
                    </Text>
                    {isMe && <CheckCheck size={12} color="rgba(255,255,255,0.7)" />}
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>

        {/* Input Bar */}
        <View className="flex-row items-center px-4 py-2.5 bg-white border-t border-border-light gap-2.5">
          <TouchableOpacity className="w-10 h-10 rounded-full bg-neutral-light-gray items-center justify-center" activeOpacity={0.8}>
            <Paperclip size={20} color={colors.neutral.blueGray} />
          </TouchableOpacity>

          <TextInput
            className="flex-1 h-10 bg-neutral-light-gray rounded-full px-4 text-sm text-neutral-dark-gray"
            placeholder="Type a message..."
            placeholderTextColor={colors.neutral.gray}
            value={inputMessage}
            onChangeText={setInputMessage}
          />

          <TouchableOpacity
            onPress={handleSend}
            className="w-10 h-10 rounded-full bg-primary-blue items-center justify-center"
            activeOpacity={0.85}
          >
            <Send size={18} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
