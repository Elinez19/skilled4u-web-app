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
  Layers,
  ChevronRight,
} from "lucide-react-native";
import { QuickShowcaseBar } from "../components/common/QuickShowcaseBar";

interface ScreenMeta {
  title: string;
  category: string;
  description: string;
  path: string;
  badge: string;
  badgeColor: string;
}

const SCREENS_CATALOG: ScreenMeta[] = [
  // Row 1: Onboarding Flow
  {
    title: "1. Welcome Screen",
    category: "Onboarding Flow",
    description: "Hero illustration, brand tagline 'Turn Your Skills Into Income', Get Started CTA.",
    path: "/",
    badge: "Screen 1",
    badgeColor: colors.primary.blue,
  },
  {
    title: "2. Choose Craft Category",
    category: "Onboarding Flow",
    description: "3x3 selectable artisan trade grid (Plumber, Electrician, Carpenter, Mason, etc.).",
    path: "/onboarding/category",
    badge: "Screen 2",
    badgeColor: colors.primary.blue,
  },
  {
    title: "3. Personal Information",
    category: "Onboarding Flow",
    description: "Full Name, Country code prefix (+234), Phone number & Email inputs.",
    path: "/onboarding/personal",
    badge: "Screen 3",
    badgeColor: colors.primary.blue,
  },
  {
    title: "4. Your Location",
    category: "Onboarding Flow",
    description: "Geographic map preview with radar pulse pin, address input, and service radius selector.",
    path: "/onboarding/location",
    badge: "Screen 4",
    badgeColor: colors.primary.blue,
  },
  {
    title: "5. Skills & Experience",
    category: "Onboarding Flow",
    description: "Skills multi-selection chips, experience level picker, and dashed portfolio upload box.",
    path: "/onboarding/skills",
    badge: "Screen 5",
    badgeColor: colors.primary.blue,
  },
  {
    title: "6. Onboarding Complete",
    category: "Onboarding Flow",
    description: "Celebration checkmark with particle confetti, 'You're All Set!', and Go to Dashboard button.",
    path: "/onboarding/complete",
    badge: "Screen 6",
    badgeColor: colors.semantic.success,
  },

  // Row 2: Main Artisan Application
  {
    title: "1. Artisan Dashboard (Home)",
    category: "Main Artisan Flow",
    description: "Greeting, online/offline duty toggle, Today's Opportunities card, Quick Actions, and Featured Job.",
    path: "/(tabs)",
    badge: "Tab 1",
    badgeColor: colors.primary.darkBlue,
  },
  {
    title: "2. Available Jobs (Browse)",
    category: "Main Artisan Flow",
    description: "Search bar, filter chips (Nearby, Recent, Highest Pay), and available job request cards.",
    path: "/(tabs)/jobs",
    badge: "Tab 2",
    badgeColor: colors.primary.darkBlue,
  },
  {
    title: "3. Job Details & Apply",
    category: "Main Artisan Flow",
    description: "Hero banner, pricing (₦15,000), client profile, requirements list, and Apply/Message actions.",
    path: "/jobs/fix-kitchen-sink",
    badge: "Detail Screen",
    badgeColor: colors.primary.blue,
  },
  {
    title: "4. My Bookings",
    category: "Main Artisan Flow",
    description: "Status tabs (Upcoming, Completed, Cancelled), booking cards, and 4-digit arrival PIN verification.",
    path: "/(tabs)/bookings",
    badge: "Tab 3",
    badgeColor: colors.primary.darkBlue,
  },
  {
    title: "5. Earnings & Analytics",
    category: "Main Artisan Flow",
    description: "Total monthly earnings (₦165,000), completed jobs counter, average per job, and bar chart.",
    path: "/earnings",
    badge: "Analytics",
    badgeColor: colors.secondary.teal,
  },
  {
    title: "6. Wallet & Withdraw",
    category: "Main Artisan Flow",
    description: "Available balance (₦165,000), Withdraw Funds CTA, and recent credit/debit ledger items.",
    path: "/(tabs)/wallet",
    badge: "Tab 4",
    badgeColor: colors.primary.darkBlue,
  },
  {
    title: "7. Bachs Payout & Withdraw Flow",
    category: "Financial Flow",
    description: "Instant bank payout powered by Bachs Connect with preset amount chips and bank selector.",
    path: "/withdraw",
    badge: "Modal",
    badgeColor: colors.semantic.success,
  },
  {
    title: "8. Messages List",
    category: "Main Artisan Flow",
    description: "Client chat threads with timestamps, unread badges, and job service tags.",
    path: "/messages",
    badge: "Messages",
    badgeColor: colors.primary.darkBlue,
  },
  {
    title: "9. Interactive Client Chat",
    category: "Main Artisan Flow",
    description: "Real-time message thread with Aisha Bello, photo proof-of-work preview, and message input.",
    path: "/messages/chat-aisha",
    badge: "Chat Detail",
    badgeColor: colors.primary.blue,
  },
  {
    title: "10. Profile & Settings",
    category: "Main Artisan Flow",
    description: "Verified artisan profile card, star rating (4.8), navigation menu items, and Log Out.",
    path: "/(tabs)/more",
    badge: "Tab 5",
    badgeColor: colors.primary.darkBlue,
  },
];

export default function ShowcaseScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <QuickShowcaseBar />

      <View className="px-5 pt-3 pb-3.5 border-b border-border-light flex-row items-center gap-3">
        <Layers size={24} color={colors.primary.blue} />
        <View>
          <Text className="text-xl font-extrabold text-dark-blue">Skilled4U Screens</Text>
          <Text className="text-xs text-blue-gray">Design Specification Index</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-sky-blue rounded-2xl p-4 border border-border-regular mb-5">
          <Text className="text-sm font-extrabold text-dark-blue mb-1">Mobile Screens Directory</Text>
          <Text className="text-xs text-neutral-dark-gray leading-4">
            Every screen from the design mockup ([Skilled4U-Customer-Screens.png]) has been built with NativeWind CSS classes, adhering strictly to the brand design system and tokens.
          </Text>
        </View>

        <View className="gap-3.5">
          {SCREENS_CATALOG.map((screen, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => {
                router.push(screen.path as any);
              }}
              className="bg-white rounded-2xl border-2 border-border-light p-4 shadow-sm"
              activeOpacity={0.85}
            >
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center gap-2">
                  <Text className="text-[11px] font-bold text-blue-gray uppercase tracking-wider">
                    {screen.category}
                  </Text>
                  <View
                    className="px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: screen.badgeColor }}
                  >
                    <Text className="text-[10px] font-extrabold text-white">{screen.badge}</Text>
                  </View>
                </View>
                <ChevronRight size={18} color={colors.neutral.gray} />
              </View>

              <Text className="text-base font-extrabold text-dark-blue mb-1">{screen.title}</Text>
              <Text className="text-xs text-blue-gray leading-4 mb-2.5">{screen.description}</Text>

              <View className="border-t border-border-light pt-2">
                <Text className="text-xs font-bold text-primary-blue">Tap to open screen →</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
