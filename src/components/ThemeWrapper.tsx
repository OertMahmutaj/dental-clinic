'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';
import { TopButtonsBar, TopButton, ScrollToContactButton } from '@/styles/Header.styles';
import { clinicInfo } from '@/lib/config';

interface ThemeWrapperProps {
  children: ReactNode;
}

export function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <TopButtonsBar>
      <TopButton href={`tel:${clinicInfo.phone}`}>📞 {clinicInfo.phone}</TopButton>
      <TopButton href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
        💬 WhatsApp
      </TopButton>
      <ScrollToContactButton onClick={scrollToContact}>📩 Kontakto</ScrollToContactButton>
    </TopButtonsBar>
  );
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}