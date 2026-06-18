'use client';

import React from 'react';
import Logo from '@/components/Logo'; // Ensure this path is correct based on your project
import { clinicInfo } from '@/lib/config';
import { 
  HeaderContainer, 
  TopButtonsBar, 
  TopButton, 
  ScrollToContactButton 
} from '@/styles/Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      {/* Integrated Logo Component */}
      <Logo />

      <TopButtonsBar>
        <TopButton href={`tel:${clinicInfo.phone}`}>
          <FontAwesomeIcon icon={faPhone} /> <span>Telefon</span>
        </TopButton>
        <TopButton href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} /> <span>WhatsApp</span>
        </TopButton>
        <ScrollToContactButton onClick={scrollToContact}>
          <FontAwesomeIcon icon={faEnvelope} /> <span>Kontakto</span>
        </ScrollToContactButton>
      </TopButtonsBar>
    </HeaderContainer>
  );
}