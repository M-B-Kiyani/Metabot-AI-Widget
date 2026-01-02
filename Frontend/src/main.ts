/**
 * Main entry point for the Chatbot Widget
 * This file will be the primary export for the embeddable widget
 */

// Core widget components (to be implemented in future tasks)
export { WidgetContainer } from "./components/WidgetContainer";
export { ChatInterface } from "./components/ChatInterface";
export { BookingModal } from "./components/BookingModal";
export { APIClient } from "./services/APIClient";

// Types and interfaces
export type { WidgetConfig, ThemeConfig } from "./types/widget.types";
export type { ChatMessage, ChatSession } from "./types/chat.types";
export type { BookingData, BookingResult } from "./types/booking.types";

// Main widget initialization function for embed code
export function initializeChatbotWidget(config: any) {
  console.log("Chatbot Widget initializing with config:", config);

  // This is a placeholder implementation
  // The actual widget initialization will be implemented in future tasks
  const container = document.createElement("div");
  container.id = "chatbot-widget-container";
  container.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0,123,255,0.3);
  `;
  container.innerHTML = "💬";
  container.title = "Open Chat";

  container.addEventListener("click", () => {
    console.log(
      "Widget clicked - chat interface will be implemented in future tasks"
    );
  });

  document.body.appendChild(container);

  return {
    show: () => (container.style.display = "flex"),
    hide: () => (container.style.display = "none"),
    destroy: () => container.remove(),
  };
}

// Global export for browser usage
if (typeof window !== "undefined") {
  (window as any).ChatbotWidget = {
    initialize: initializeChatbotWidget,
    WidgetContainer: class WidgetContainer {
      initialize(config: any) {
        return initializeChatbotWidget(config);
      }
      show() {
        console.log("Show widget");
      }
      hide() {
        console.log("Hide widget");
      }
      destroy() {
        console.log("Destroy widget");
      }
    },
  };
}
