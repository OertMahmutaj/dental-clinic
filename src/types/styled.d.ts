import 'styled-components';
import type { Theme } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Theme['colors'];
    fonts: Theme['fonts'];
    breakpoints: Theme['breakpoints'];
    spacing: Theme['spacing'];
    borderRadius: Theme['borderRadius'];
    shadows: Theme['shadows'];
  }
}