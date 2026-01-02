/**
 * Booking and appointment related types
 */

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

export interface BookingRequest {
  customerInfo: CustomerInfo;
  serviceType: string;
  preferredDateTime: Date;
  duration: number;
  notes?: string;
  source: "chat" | "modal";
}

export interface BookingResult {
  bookingId: string;
  status: "confirmed" | "pending" | "failed";
  appointmentDetails: AppointmentDetails;
  confirmationNumber: string;
  calendarInvite?: string;
  errorMessage?: string;
}

export interface AppointmentDetails {
  dateTime: Date;
  duration: number;
  serviceType: string;
  customerInfo: CustomerInfo;
  businessInfo: BusinessInfo;
  meetingLink?: string;
  location?: string;
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

export interface BusinessInfo {
  name: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
}

export interface TimeSlot {
  startTime: Date;
  endTime: Date;
  available: boolean;
  serviceType?: string;
  duration: number;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}
