/**
 * Test setup configuration for Vitest
 */

// Mock DOM APIs that might not be available in test environment
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock console methods to reduce noise in tests
const originalConsole = { ...console };
global.console = {
  ...console,
  log: (...args: any[]) => {
    // Only log in verbose test mode
    if (process.env.VITEST_VERBOSE) {
      originalConsole.log(...args);
    }
  },
  warn: (...args: any[]) => {
    // Always show warnings
    originalConsole.warn(...args);
  },
  error: (...args: any[]) => {
    // Always show errors
    originalConsole.error(...args);
  },
};
