# Chatbot Widget

An embeddable chatbot widget for appointment booking and customer support.

## Project Structure

```
Frontend/
├── src/
│   ├── components/          # Widget UI components
│   │   ├── WidgetContainer.ts   # Root widget container
│   │   ├── ChatInterface.ts     # Chat UI component
│   │   └── BookingModal.ts      # Booking form modal
│   ├── services/            # API and business logic
│   │   └── APIClient.ts         # Backend API communication
│   ├── types/               # TypeScript type definitions
│   │   ├── widget.types.ts      # Widget configuration types
│   │   ├── chat.types.ts        # Chat and conversation types
│   │   └── booking.types.ts     # Booking and appointment types
│   ├── test/                # Test configuration
│   │   └── setup.ts             # Vitest setup
│   └── main.ts              # Main entry point
├── index.html               # Development test page
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # This file
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
cd Frontend
npm install
```

### Development Server

```bash
npm run dev
```

This will start the Vite development server and open the test page at `http://localhost:5173`.

### Building

```bash
npm run build
```

This creates production-ready files in the `dist/` directory.

### Testing

```bash
npm run test        # Run tests once
npm run test:watch  # Run tests in watch mode
```

### Type Checking

```bash
npm run type-check
```

## Usage

The widget can be embedded in any website using a simple JavaScript snippet:

```html
<script src="https://your-cdn.com/chatbot-widget.umd.js"></script>
<script>
  ChatbotWidget.initialize({
    apiBaseUrl: "https://your-backend.railway.app",
    apiKey: "your-api-key",
    position: "bottom-right",
    theme: {
      primaryColor: "#007bff",
      mode: "light",
    },
  });
</script>
```

## Current Status

This is the initial project structure setup. The following components are placeholder implementations:

- ✅ Project structure and build configuration
- ✅ TypeScript types and interfaces
- ✅ Basic component structure
- ⏳ Widget container implementation (Task 2.1)
- ⏳ Chat interface implementation (Task 4.1)
- ⏳ Booking modal implementation (Task 5.1)
- ⏳ API client implementation (Task 3.1)

## Requirements Fulfilled

- **Requirement 1.1**: Embeddable JavaScript widget structure created
- **Requirement 1.6**: TypeScript and modern build tools configured

## Next Steps

1. Implement WidgetContainer class (Task 2.1)
2. Create embed code system (Task 2.2)
3. Build API client for backend communication (Task 3.1)
4. Implement chat interface (Task 4.1)
