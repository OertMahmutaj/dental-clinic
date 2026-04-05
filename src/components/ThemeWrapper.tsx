'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';
import { TopButtonsBar, TopButton, ScrollToContactButton } from '@/styles/Header.styles';
import { clinicInfo } from '@/lib/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface ThemeWrapperProps {
  children: ReactNode;
}

export function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <TopButtonsBar>
      <TopButton href={`tel:${clinicInfo.phone}`}><FontAwesomeIcon icon={faPhone} /> {`Kontakto`}</TopButton>
      <TopButton href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
      </TopButton>
      <ScrollToContactButton onClick={scrollToContact}><FontAwesomeIcon icon={faEnvelope} /> Na shkruani</ScrollToContactButton>
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