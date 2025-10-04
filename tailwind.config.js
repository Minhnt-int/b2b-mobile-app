/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        danger: '#FF3B30',
        warning: '#FF9500',
        success: '#34C759',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Colors for tab navigation
        tabActive: '#007AFF',
        tabInactive: '#8E8E93',
        tabBorder: '#E5E5EA',
        // Additional colors for screens
        red: {
          50: '#FEF2F2',
          500: '#FF3B30',
        },
      },
    },
  },
  plugins: [],
};

