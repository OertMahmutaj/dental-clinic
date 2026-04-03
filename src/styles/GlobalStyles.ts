'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset & base */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px; /* base size for rems */
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.background || '#fff'};
    line-height: 1.6;
    letter-spacing: 0.5px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.dark};
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary || '#2563eb'};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.accent || '#3b82f6'};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.85;
    }
  }

  input, textarea, select {
    font-family: inherit;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0.5rem;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary || '#2563eb'};
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary || '#2563eb'};
    color: #fff;
  }
`;

export default GlobalStyles;