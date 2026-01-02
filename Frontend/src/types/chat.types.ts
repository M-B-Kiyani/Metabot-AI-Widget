/**
 * Chat and conversation related types
 */

export interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
  type: "text" | "booking_summary" | "calendar_picker" | "error";
  metadata?: Record<string, any>;
}

export interface ChatSession {
  sessionId: string;
  userId?: string;
  startTime: Date;
  lastActivity: Date;
  messages: ChatMessage[];
  context: ConversationContext;
  isActive: boolean;
}

export interface ConversationContext {
  customerInfo?: Partial<CustomerInfo>;
  currentIntent?: "booking" | "support" | "information";
  bookingInProgress?: Partial<BookingData>;
  previousBookings?: BookingReference[];
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  timezone: string;
  preferences: CustomerPreferences;
  crmId?: string;
}

export interface CustomerPreferences {
  communicationChannel: "email" | "sms" | "both";
  preferredTimes: TimePreference[];
  serviceTypes: string[];
  language: string;
}

export interface TimePreference {
  dayOfWeek: number; // 0-6, Sunday = 0
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
}

export interface BookingReference {
  bookingId: string;
  date: Date;
  serviceType: string;
  status: "confirmed" | "cancelled" | "completed";
}

// Import BookingData from booking types to avoid circular dependency
export interface BookingData {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  companyName?: string;
  serviceType: string;
  preferredDate: Date;
  preferredTime: string;
  duration: number;
  notes?: string;
}
