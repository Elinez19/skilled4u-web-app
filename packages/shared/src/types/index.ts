import type { BookingStatus, UserRole, KycStatus } from "../constants";

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatarUrl?: string | null;
  createdAt: string;
}

export interface ArtisanProfileDTO {
  id: string;
  userId: string;
  user?: UserDTO;
  tradeCategory: string;
  experienceYears: number;
  bio?: string | null;
  kycStatus: KycStatus;
  ratingAvg: string;
  ratingCount: number;
  diagnosticRate: string;
  hourlyRate: string;
  serviceRadiusKm: number;
  isOnline: boolean;
  distanceKm?: number;
  currentLatitude?: number | null;
  currentLongitude?: number | null;
}

export interface BookingDTO {
  id: string;
  bookingNumber: string;
  customerId: string;
  customer?: UserDTO;
  artisanId?: string | null;
  artisan?: ArtisanProfileDTO | null;
  type: "emergency_broadcast" | "scheduled";
  categoryId: string;
  issueDescription: string;
  customerAddress: string;
  customerLatitude: number;
  customerLongitude: number;
  status: BookingStatus;
  arrivalPin: string;
  diagnosticFee: string;
  quoteAmount?: string | null;
  totalAmount: string;
  currency: string;
  scheduledAt?: string | null;
  completedAt?: string | null;
  autoReleaseAt?: string | null;
  createdAt: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
