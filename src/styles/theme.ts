export const theme = {
  colors: {
    primary: '#2563eb', // blue
    primaryDark: '#1e40af',
    secondary: '#14b8a6', // teal
    secondaryDark: '#0d9488',
    accent: '#f59e0b', // amber
    success: '#10b981',
    danger: '#ef4444',
    dark: '#1f2937',
    darkGray: '#374151',
    gray: '#6b7280',
    lightGray: '#d1d5db',
    offWhite: '#f9fafb',
    white: '#ffffff',
    background: '#ffffff',
    yellow: '#facc15',
  },
  fonts: {
    main: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
};

export type Theme = typeof theme;