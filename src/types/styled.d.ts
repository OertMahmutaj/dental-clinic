import 'styled-components';
import { Theme } from '@/lib/theme'; // Adjust this path to your actual theme file

// 1. Extend the styled-components DefaultTheme
declare module 'styled-components' {
  export type DefaultTheme = Theme
}

// 2. Add CSS prop support to React's HTML attributes (for the css={{...}} prop)
import type { CSSProp } from 'styled-components';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}