/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      // Define text colors based on CSS variables
      textColor: {
        primary_text: 'var(--primary-text-color)',
        secondary_text: 'var(--secondary-text-color)',
        tertiary_text: 'var(--tertiary-text-color)',
      },
      // Define background colors based on CSS variables
      colors: {
        'surface-a': 'var(--surface-a)',
        'surface-b': 'var(--surface-b)',
        'surface-c': 'var(--surface-c)',
        'surface-d': 'var(--surface-d)',
        'surface-e': 'var(--surface-e)',
        'surface-f': 'var(--surface-f)',

        // Surface shades
        'surface-0': 'var(--surface-0)',
        'surface-50': 'var(--surface-50)',
        'surface-100': 'var(--surface-100)',
        'surface-200': 'var(--surface-200)',
        'surface-300': 'var(--surface-300)',
        'surface-400': 'var(--surface-400)',
        'surface-500': 'var(--surface-500)',
        'surface-600': 'var(--surface-600)',
        'surface-700': 'var(--surface-700)',
        'surface-800': 'var(--surface-800)',
        'surface-900': 'var(--surface-900)',

        // Grayscale
        'gray-50': 'var(--gray-50)',
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-300': 'var(--gray-300)',
        'gray-400': 'var(--gray-400)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)',

        // Other background options
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        'highlight-bg': 'var(--highlight-bg)',
        'surface-ground': 'var(--surface-ground)',
        'surface-section': 'var(--surface-section)',
        'surface-card': 'var(--surface-card)',
        'surface-overlay': 'var(--surface-overlay)',
        'surface-hover': 'var(--surface-hover)',
        maskbg: 'var(--maskbg)',
        primary_highlight: 'var(--highlight-text-color)',
        secondary_highlight: 'var(--primary-color-text)',
      },
      // Define border color based on CSS variables
      borderColor: {
        'surface-border': 'var(--surface-border)',
      },
      // Define layout settings such as padding and spacing
      spacing: {
        'content-padding': 'var(--content-padding)',
        'inline-spacing': 'var(--inline-spacing)',
      },
      // Define border radius settings
      borderRadius: {
        default: 'var(--border-radius)',
      },
    },
  },
  plugins: [],
};
