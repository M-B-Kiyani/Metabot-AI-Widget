/**
 * ChatInterface - Main conversational UI component
 * This is a placeholder implementation that will be fully developed in future tasks
 */

import type { ChatMessage } from "../types/chat.types";

export class ChatInterface {
  constructor() {
    console.log("ChatInterface created - full implementation in task 4.1");
  }

  async sendMessage(message: string): Promise<void> {
    console.log("Sending message:", message);
    // Implementation will be added in task 4.3
  }

  receiveMessage(message: ChatMessage): void {
    console.log("Receiving message:", message);
    // Implementation will be added in task 4.1
  }

  showTypingIndicator(): void {
    console.log("Showing typing indicator");
    // Implementation will be added in task 4.1
  }

  hideTypingIndicator(): void {
    console.log("Hiding typing indicator");
    // Implementation will be added in task 4.1
  }

  openBookingModal(): void {
    console.log("Opening booking modal");
    // Implementation will be added in task 5.1
  }

  startVoiceInput(): void {
    console.log("Starting voice input");
    // Implementation will be added in task 7 (voice interface)
  }

  clearConversation(): void {
    console.log("Clearing conversation");
    // Implementation will be added in task 4.1
  }
}
