'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


import { clinicInfo } from '@/lib/config';
import {
  HeroSection,
  Container,
  Badge,
  Title,
  Subtitle,
  ButtonGroup,
  Button,
  // ScrollIndicator
} from '@/styles/Hero.styles';

export default function Hero() {
  const handleCall = () => {
    window.location.href = `tel:${clinicInfo.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${clinicInfo.whatsapp}`, '_blank');
  };

  return (
    <HeroSection>
      <Container>
        <Badge>
          <span>🦷</span>
          <span>Klinika Juaj Dentare në Tiranë</span>
        </Badge>

        <Title>
          Buzëqeshja juaj e<br />
          <span>përsosur fillon këtu</span>
        </Title>

        <Subtitle>
          Shërbime dentare profesionale me teknologji moderne dhe ekip të
          ekspertizuar në zemër të Tiranës.
        </Subtitle>

        <ButtonGroup>
          <Button onClick={handleCall}>
            <FontAwesomeIcon icon={faPhone} />
            Rezervo Takimin
          </Button>
          <Button $variant="whatsapp" onClick={handleWhatsApp}>
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </Button>
        </ButtonGroup>

        {/* <InfoGrid>
          <InfoCard>
            <div className="icon">⏰</div>
            <div className="label">Orari</div>
            <div className="title">E Hënë - E Premte</div>
            <div className="detail">{clinicInfo.hours.weekdays}</div>
          </InfoCard>

          <InfoCard>
            <div className="icon">📍</div>
            <div className="label">Adresa</div>
            <div className="title">Shkolla e Baletit</div>
            <div className="detail">Tiranë, Albania</div>
          </InfoCard>

          <InfoCard>
            <div className="icon">🏆</div>
            <div className="label">Eksperiencë</div>
            <div className="title">Ekip Profesional</div>
            <div className="detail">Teknologji Moderne</div>
          </InfoCard>
        </InfoGrid> */}
      </Container>

      {/* <ScrollIndicator>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </ScrollIndicator> */}
    </HeroSection>
  );
}