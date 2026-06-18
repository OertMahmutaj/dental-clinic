export const theme = {
  colors: {
    primary: 'var(--text-primary)',
    secondary: 'var(--text-secondary)',
    accent: 'var(--accent-clinical)',
    background: 'var(--bg-primary)',
    border: 'var(--border-line)',
    hover: 'var(--hover-tint)',
  },
  fonts: {
    main: 'var(--font-geist-mono), ui-monospace, monospace',
    heading: 'var(--font-geist-mono), ui-monospace, monospace',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '64px',
  },
  // 🌟 Added these to satisfy DefaultTheme requirements
  borderRadius: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '0px',
  },
  shadows: {
    sm: 'none',
    md: 'none',
    lg: 'none',
  }
};

export type Theme = typeof theme;