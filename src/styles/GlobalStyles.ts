"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  /* 1. Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 2. Clinical Color Palette (Based on Reference) */
  :root {
    --bg-primary: #ffffff;
    --bg-gray: #f3f4f6;          /* The light section backgrounds */
    --bg-dark-blue: #001e62;     /* The heavy footer/contact area color */
    
    --text-primary: #111827;     /* Professional deep gray/black */
    --text-secondary: #4b5563;   /* Readable gray */
    
    --accent-blue: #2563eb;      /* The primary action blue */
    --border-color: #e5e7eb;     /* Subtle borders for cards */
    
    --radius-md: 12px;           /* Soft rounded edges for comfort */
  }
    
  html, body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

  /* 3. Typography - Clean, readable Sans-Serif */
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  /* 4. Layout Helpers (The "Card" System) */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .card {
    background: white;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 32px;
  }

  /* 5. Interactive Elements */
  button, a {
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-primary {
    background-color: var(--accent-blue);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
  }

  .btn-primary:hover {
    filter: brightness(1.1);
  }

  /* 6. Form Styling */
  input, textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    margin-bottom: 16px;
    font-family: inherit;
  }

  input:focus {
    outline: 2px solid var(--accent-blue);
    border-color: transparent;
  }
`;

export default GlobalStyles;
