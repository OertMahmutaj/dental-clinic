'use client';

import React from 'react';
import { services } from '@/lib/config';
import {
  ServicesSection,
  TitleWrapper,
  ServicesGrid,
  ServiceCard,
  ServiceTitle,
  ServiceDescription,
  ServiceCTA,
  ExtraServices,
  ExtraTitle,
  ExtraDescription,
  ExtraButton
} from '@/styles/Services.styles';
import Container from '@/components/layout/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faScrewdriverWrench, faFaceSmileBeam, IconDefinition, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, IconDefinition> = {
  tooth: faTooth,
  screwdriver: faScrewdriverWrench,
  sparkles: faWandMagicSparkles,
  smile: faFaceSmileBeam,
};

export default function Services() {
  return (
    <ServicesSection id="services">
      <Container>
        <TitleWrapper>
          <h2>Shërbimet Tona</h2>
          <p className="subtitle-text">
            Ofrojmë një gamë të plotë shërbimesh dentare me standarde të larta dhe kujdes të personalizuar.
          </p>
        </TitleWrapper>

        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <div className="clinical-icon">
                <FontAwesomeIcon icon={iconMap[service.icon] || faTooth} />
              </div>

              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>

              <ServiceCTA href={`/services/${service.slug}`}>
                Më shumë detaje →
              </ServiceCTA>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <ExtraServices>
          <ExtraTitle>Shërbime të tjera</ExtraTitle>
          <ExtraDescription>
            Endodonci • Kirurgji Orale • Proteza Dentare • Pediatri Dentare • Periodontologji
          </ExtraDescription>
          <ExtraButton href="tel:+355695579998">Na kontaktoni për detaje</ExtraButton>
        </ExtraServices>
      </Container>
    </ServicesSection>
  );
}