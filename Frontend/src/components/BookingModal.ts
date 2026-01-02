/**
 * BookingModal - Form-based booking interface component
 * This is a placeholder implementation that will be fully developed in future tasks
 */

import type {
  BookingData,
  BookingResult,
  TimeSlot,
  ValidationResult,
} from "../types/booking.types";

export class BookingModal {
  constructor() {
    console.log("BookingModal created - full implementation in task 5.1");
  }

  open(prefilledData?: Partial<BookingData>): void {
    console.log("Opening booking modal with prefilled data:", prefilledData);
    // Implementation will be added in task 5.1
  }

  close(): void {
    console.log("Closing booking modal");
    // Implementation will be added in task 5.1
  }

  validateForm(): ValidationResult {
    console.log("Validating booking form");
    // Implementation will be added in task 5.1
    return { isValid: true, errors: [] };
  }

  async submitBooking(): Promise<BookingResult> {
    console.log("Submitting booking");
    // Implementation will be added in task 5.3
    throw new Error("Not implemented yet");
  }

  async loadAvailability(date: Date): Promise<TimeSlot[]> {
    console.log("Loading availability for date:", date);
    // Implementation will be added in task 5.2
    return [];
  }
}
