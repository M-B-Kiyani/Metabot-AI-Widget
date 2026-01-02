/**
 * Core widget configuration and theming types
 */

export interface WidgetConfig {
  apiBaseUrl: string;
  apiKey: string;
  theme?: ThemeConfig;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  customWelcomeMessage?: string;
  enableVoice?: boolean;
}

export interface ThemeConfig {
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  borderRadius?: string;
  mode?: "light" | "dark" | "auto";
}

export interface WidgetState {
  isVisible: boolean;
  isMinimized: boolean;
  currentView: "chat" | "booking_modal" | "calendar_view";
  isLoading: boolean;
  connectionStatus: "connected" | "disconnected" | "reconnecting";
  errorState?: ErrorState;
}

export interface ErrorState {
  type: "network" | "api" | "validation" | "booking";
  message: string;
  isRetryable: boolean;
  retryCount: number;
}
