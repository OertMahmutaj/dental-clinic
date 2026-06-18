'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faTooth } from '@fortawesome/free-solid-svg-icons';
import { clinicInfo } from '@/lib/config';
import {
  HeroSection,
  Container,
  Badge,
  Title,
  Subtitle,
  ButtonGroup,
  Button,
  InfoGrid,
  InfoCard,
} from '@/styles/Hero.styles';

export default function Hero() {
  const handleCall = () => window.location.href = `tel:${clinicInfo.phone}`;
  const handleWhatsApp = () => window.open(`https://wa.me/${clinicInfo.whatsapp}`, '_blank');

  return (
    <HeroSection>
      <Container>
        <Badge>
          <FontAwesomeIcon icon={faTooth} /> Adi Dent – Kujdes Dentar Profesional
        </Badge>

        <Title>
          Buzëqeshja juaj e përsosur <br />
          <span>fillon këtu.</span>
        </Title>

        <Subtitle>
          Shërbime dentare me teknologji moderne në zemër të Tiranës. 
          Ekspertizë, kujdes dhe sterilizim për shëndetin tuaj oral.
        </Subtitle>

        <ButtonGroup>
          <Button onClick={handleCall}>
            <FontAwesomeIcon icon={faPhone} /> Rezervo Takimin
          </Button>
          <Button className="whatsapp" onClick={handleWhatsApp}>
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </Button>
        </ButtonGroup>

        <InfoGrid>
          <InfoCard>
            <div className="card-title">Orari</div>
            <div className="card-detail">{clinicInfo.hours.weekdays}</div>
          </InfoCard>
          <InfoCard>
            <div className="card-title">Adresa</div>
            <div className="card-detail">Shkolla e Baletit, Tiranë</div>
          </InfoCard>
          <InfoCard>
            <div className="card-title">Teknologji</div>
            <div className="card-detail">Pajisje bashkëkohore</div>
          </InfoCard>
        </InfoGrid>
      </Container>
    </HeroSection>
  );
}