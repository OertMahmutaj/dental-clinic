'use client';

import { services } from '@/lib/config';
import {
  ServicesSection,
  Container,
  TitleWrapper,
  Title,
  Subtitle,
  Divider,
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
          <Title>Shërbimet <span>Tona</span></Title>
          <Subtitle>
            Ofrojmë një gamë të plotë shërbimesh dentare me standarde të larta cilësore
          </Subtitle>
          <Divider />
        </TitleWrapper>

        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <FontAwesomeIcon icon={iconMap[service.icon]} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceCTA>Mëso më shumë →</ServiceCTA>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <ExtraServices>
          <ExtraTitle>Shërbime të Tjera</ExtraTitle>
          <ExtraDescription>
            Endodonci • Kirurgji Orale • Proteza Dentare • Pediatri Dentare • Periodontologji
          </ExtraDescription>
          <ExtraButton href="tel:+355695579998">Kontaktoni për Detaje</ExtraButton>
        </ExtraServices>
      </Container>
    </ServicesSection>
  );
}