export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fintech.com inspired color tokens
        primary: {
          DEFAULT: "#1747E8",
          hover: "#123CC7",
          secondary: "#2864F0",
          light: "#EEF4FF",
          highlight: "#4D7CFF",
        },
        brand: {
          50: "#EEF4FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#4D7CFF",
          500: "#2864F0",
          600: "#1747E8",
          700: "#123CC7",
          800: "#102A56",
          900: "#071A33",
        },
        navy: {
          DEFAULT: "#102A56",
          dark: "#071A33",
          card: "#102A56",
          text: "#172B4D",
          muted: "#64748B",
          supporting: "#B8C5D9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F9FC",
          lightBlue: "#EEF4FF",
          border: "#E2E8F0",
        },
        accent: {
          gold: "#F4B740",
          success: "#18A875",
        },
        // Direct semantic tokens
        textPrimary: "#172B4D",
        textSecondary: "#64748B",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      borderRadius: {
        button: "11px",
        card: "16px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(16, 42, 86, 0.05), 0 1px 2px -1px rgba(16, 42, 86, 0.05)",
        card: "0 4px 20px -2px rgba(16, 42, 86, 0.06)",
        cardHover: "0 10px 25px -4px rgba(23, 71, 232, 0.12)",
      },
    },
  },
  plugins: [],
};
