export interface CraftCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const CRAFT_CATEGORIES: CraftCategory[] = [
  { id: "plumber", name: "Plumber", icon: "wrench", description: "Pipes, drainage, water tanks & sanitary fittings" },
  { id: "electrician", name: "Electrician", icon: "zap", description: "Wiring, fixtures, distribution boards & repairs" },
  { id: "carpenter", name: "Carpenter", icon: "hammer", description: "Furniture, cabinets, roofing & wood installation" },
  { id: "painter", name: "Painter", icon: "paintbrush", description: "Interior & exterior wall painting, screeding" },
  { id: "mason", name: "Mason", icon: "brick", description: "Bricklaying, plastering, foundation & concrete" },
  { id: "ac_technician", name: "AC Technician", icon: "wind", description: "AC servicing, gas refill, repair & installation" },
  { id: "welder", name: "Welder", icon: "flame", description: "Gates, railings, structural metal & tank fabrication" },
  { id: "tiler", name: "Tiler", icon: "grid", description: "Floor & wall tiling, granite & marble fitting" },
  { id: "other", name: "Other", icon: "more", description: "Other artisan & craftsmanship trades" },
];

export interface JobItem {
  id: string;
  title: string;
  category: string;
  serviceType: string;
  distance: string;
  price: string;
  postedAgo: string;
  clientName: string;
  clientRating: number;
  clientReviewsCount: number;
  location: string;
  description: string;
  requirements: string[];
  imagePlaceholderColor?: string;
}

export const AVAILABLE_JOBS: JobItem[] = [
  {
    id: "fix-kitchen-sink",
    title: "Fix leaking kitchen sink",
    category: "Plumbing",
    serviceType: "Home Service",
    distance: "2.3 km",
    price: "₦15,000",
    postedAgo: "2 hrs ago",
    clientName: "Aisha Bello",
    clientRating: 4.8,
    clientReviewsCount: 12,
    location: "12 Freedom Street, Abuja",
    description: "Kitchen sink is leaking. Need a reliable plumber to fix it. Preferably available today or tomorrow.",
    requirements: [
      "Basic plumbing tools",
      "Experience with kitchen sinks",
      "Clean and professional",
    ],
    imagePlaceholderColor: "#0284c7",
  },
  {
    id: "install-ceiling-fan",
    title: "Install ceiling fan",
    category: "Electrical",
    serviceType: "Home Service",
    distance: "1.8 km",
    price: "₦12,000",
    postedAgo: "3 hrs ago",
    clientName: "John Musa",
    clientRating: 4.9,
    clientReviewsCount: 24,
    location: "44 Crescent Avenue, Abuja",
    description: "Brand new ceiling fan needs installation in master bedroom. High ceiling (approx 3.2m).",
    requirements: [
      "Step ladder",
      "Drilling machine",
      "Electrical testing pen",
    ],
    imagePlaceholderColor: "#0ea5e9",
  },
  {
    id: "electrical-wiring-repair",
    title: "Electrical wiring repair",
    category: "Electrical",
    serviceType: "Emergency Callout",
    distance: "3.1 km",
    price: "₦18,000",
    postedAgo: "4 hrs ago",
    clientName: "Grace Uche",
    clientRating: 4.7,
    clientReviewsCount: 8,
    location: "Plot 89 Wuse II, Abuja",
    description: "Sparking outlet in kitchen caused trip in circuit breaker. Need immediate inspection and rewire.",
    requirements: [
      "Multimeter & tester",
      "Insulated pliers & screwdrivers",
      "Safety gear & rubber gloves",
    ],
    imagePlaceholderColor: "#0369a1",
  },
  {
    id: "bathroom-tile-repair",
    title: "Bathroom tile repair",
    category: "Tiling",
    serviceType: "Home Service",
    distance: "2.7 km",
    price: "₦20,000",
    postedAgo: "5 hrs ago",
    clientName: "Tunde Bello",
    clientRating: 4.9,
    clientReviewsCount: 31,
    location: "15 Garki Road, Abuja",
    description: "6 cracked ceramic tiles on shower wall need replacement. Replacement tiles already purchased.",
    requirements: [
      "Tile cutter",
      "Grout trowel",
      "Spirit leveler",
    ],
    imagePlaceholderColor: "#075985",
  },
];

export interface BookingItem {
  id: string;
  jobId: string;
  title: string;
  clientName: string;
  distance: string;
  date: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  price: string;
  category: string;
}

export const ARTISAN_BOOKINGS: BookingItem[] = [
  {
    id: "bk-1",
    jobId: "fix-kitchen-sink",
    title: "Fix leaking kitchen sink",
    clientName: "Aisha Bello",
    distance: "2.3 km",
    date: "May 16, 2025 • 10:00 AM",
    status: "confirmed",
    price: "₦15,000",
    category: "Plumbing",
  },
  {
    id: "bk-2",
    jobId: "install-ceiling-fan",
    title: "Install ceiling fan",
    clientName: "John Musa",
    distance: "1.8 km",
    date: "May 17, 2025 • 2:00 PM",
    status: "confirmed",
    price: "₦12,000",
    category: "Electrical",
  },
  {
    id: "bk-3",
    jobId: "electrical-wiring-repair",
    title: "Electrical wiring repair",
    clientName: "Grace Uche",
    distance: "3.1 km",
    date: "May 18, 2025 • 11:00 AM",
    status: "pending",
    price: "₦18,000",
    category: "Electrical",
  },
];

export interface TransactionItem {
  id: string;
  title: string;
  date: string;
  amount: string;
  type: "credit" | "debit";
}

export const RECENT_TRANSACTIONS: TransactionItem[] = [
  {
    id: "tx-1",
    title: "Job Payment",
    date: "May 14, 2025 • 10:00 AM",
    amount: "+₦15,000",
    type: "credit",
  },
  {
    id: "tx-2",
    title: "Job Payment",
    date: "May 12, 2025 • 3:20 PM",
    amount: "+₦12,000",
    type: "credit",
  },
  {
    id: "tx-3",
    title: "Withdrawal",
    date: "May 10, 2025 • 9:00 AM",
    amount: "-₦20,000",
    type: "debit",
  },
  {
    id: "tx-4",
    title: "Job Payment",
    date: "May 8, 2025 • 2:15 PM",
    amount: "+₦18,000",
    type: "credit",
  },
];

export interface MessageItem {
  id: string;
  senderName: string;
  serviceTitle: string;
  lastMessage: string;
  timeAgo: string;
  unreadCount: number;
  avatarColor: string;
}

export const ARTISAN_CHATS: MessageItem[] = [
  {
    id: "chat-aisha",
    senderName: "Aisha Bello",
    serviceTitle: "Fix leaking kitchen sink",
    lastMessage: "Hi! I'm on my way to your location. I'll arrive in about 12 minutes.",
    timeAgo: "2h ago",
    unreadCount: 1,
    avatarColor: "#ec4899",
  },
  {
    id: "chat-john",
    senderName: "John Musa",
    serviceTitle: "Install ceiling fan",
    lastMessage: "Great! The ladder is ready in the living room.",
    timeAgo: "1d ago",
    unreadCount: 0,
    avatarColor: "#3b82f6",
  },
  {
    id: "chat-grace",
    senderName: "Grace Uche",
    serviceTitle: "Electrical wiring repair",
    lastMessage: "Are you still available tomorrow morning?",
    timeAgo: "2d ago",
    unreadCount: 0,
    avatarColor: "#10b981",
  },
  {
    id: "chat-tunde",
    senderName: "Tunde Bello",
    serviceTitle: "Bathroom tile repair",
    lastMessage: "Thanks for coming by to check the measurements.",
    timeAgo: "3d ago",
    unreadCount: 0,
    avatarColor: "#f59e0b",
  },
  {
    id: "chat-ngozi",
    senderName: "Ngozi Okafor",
    serviceTitle: "AC Installation",
    lastMessage: "The AC technician arrived on time.",
    timeAgo: "4d ago",
    unreadCount: 0,
    avatarColor: "#8b5cf6",
  },
];

export const ARTISAN_PROFILE = {
  name: "Emeka Okafor",
  role: "Plumber",
  rating: 4.8,
  reviewsCount: 124,
  isVerified: true,
  phone: "+234 812 345 6789",
  email: "emeka@example.com",
  location: "12 Freedom Street, Abuja",
  serviceRadius: "5 km",
  walletBalance: "₦165,000",
  completedJobsCount: 12,
  pendingPaymentsCount: 2,
  averagePerJob: "₦13,750",
  earningsWeekly: [
    { label: "May 1", value: 30000, heightPercent: 35 },
    { label: "May 8", value: 45000, heightPercent: 50 },
    { label: "May 15", value: 35000, heightPercent: 40 },
    { label: "May 22", value: 60000, heightPercent: 65 },
    { label: "May 31", value: 85000, heightPercent: 90 },
  ],
};
