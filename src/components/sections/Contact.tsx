import ContactForm from '@/components/ContactForm';
import { clinicInfo } from '@/lib/config';
import {
  ContactSection,
  Container,
  Title,
  Subtitle,
  ContentGrid,
  InfoBox,
  InfoItem,
} from '@/styles/Contact.styles';


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