// src/components/sections/Contact.tsx
import ContactForm from '@/components/ContactForm';
import { clinicInfo } from '@/lib/config';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 5rem 1.5rem;
  background: #f9fafb;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #1f2937;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InfoBox = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #1f2937;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  .icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .content {
    strong {
      display: block;
      color: #374151;
      margin-bottom: 0.25rem;
    }

    span {
      color: #6b7280;
    }

    a {
      color: #3b82f6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      <Container>
        <Title>Na Kontaktoni</Title>
        <Subtitle>
          Jemi këtu për t&aposju ndihmuar. Plotësoni formularin ose na kontaktoni
          direkt.
        </Subtitle>

        <ContentGrid>
          <div>
            <ContactForm />
          </div>

          <InfoBox>
            <h3>Informacione Kontakti</h3>
            
            <InfoItem>
              <span className="icon">📞</span>
              <div className="content">
                <strong>Telefon</strong>
                <a href={`tel:${clinicInfo.phone}`}>{clinicInfo.phone}</a>
              </div>
            </InfoItem>

            <InfoItem>
              <span className="icon">💬</span>
              <div className="content">
                <strong>WhatsApp</strong>
                <a
                  href={`https://wa.me/${clinicInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dërgo mesazh
                </a>
              </div>
            </InfoItem>

            <InfoItem>
              <span className="icon">📧</span>
              <div className="content">
                <strong>Email</strong>
                <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
              </div>
            </InfoItem>

            <InfoItem>
              <span className="icon">📍</span>
              <div className="content">
                <strong>Adresa</strong>
                <span>{clinicInfo.address}</span>
              </div>
            </InfoItem>

            <InfoItem>
              <span className="icon">⏰</span>
              <div className="content">
                <strong>Orari</strong>
                <span>E Hënë - E Premte: {clinicInfo.hours.weekdays}</span>
                <br />
                <span>E Shtunë: {clinicInfo.hours.saturday}</span>
                <br />
                <span>E Diel: {clinicInfo.hours.sunday}</span>
              </div>
            </InfoItem>
          </InfoBox>
        </ContentGrid>
      </Container>
    </ContactSection>
  );
}