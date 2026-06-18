'use client';

import React from 'react';
import { clinicInfo } from '@/lib/config';
import { TopButtonsBar, TopButton, ScrollToContactButton } from '@/styles/Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <TopButtonsBar>
      <TopButton href={`tel:${clinicInfo.phone}`}>
        <FontAwesomeIcon icon={faPhone} /> Telefon
      </TopButton>
      
      <TopButton href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
      </TopButton>
      
      <ScrollToContactButton onClick={scrollToContact}>
        <FontAwesomeIcon icon={faEnvelope} /> Kontakto
      </ScrollToContactButton>
    </TopButtonsBar>
  );
}