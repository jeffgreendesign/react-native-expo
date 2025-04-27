module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color tokens for light/dark mode, used by nativewind and shadcn/ui
        background: {
          DEFAULT: '#ffffff', // light
          dark: '#18181b',   // dark
        },
        foreground: {
          DEFAULT: '#18181b', // light
          dark: '#ffffff',   // dark
        },
        card: {
          DEFAULT: '#f4f4f5',
          dark: '#27272a',
        },
        border: {
          DEFAULT: '#e4e4e7',
          dark: '#3f3f46',
        },
        primary: {
          DEFAULT: '#6366f1',
          dark: '#818cf8',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Use class strategy for dark mode
};