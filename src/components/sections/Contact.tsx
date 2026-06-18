'use client';

import React from 'react';
import ContactForm from '@/components/ContactForm';
import { clinicInfo } from '@/lib/config';
import {
  ContactSection,
  Container,
  ContentGrid,
  InfoBox,
  InfoItem,
} from '@/styles/Contact.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <ContactSection id="contact">
      <Container>
        <div className="section-header">
          <h2>Na Kontaktoni</h2>
          <p className="subtitle">Jemi këtu për t&apos;ju ndihmuar. Na kontaktoni për çdo pyetje.</p>
        </div>

        <ContentGrid>
          <div className="form-frame">
            <ContactForm />
          </div>

          <InfoBox>
            <h3>Informacione Kontakti</h3>
            
            <InfoItem>
              <span className="icon"><FontAwesomeIcon icon={faPhone} /></span>
              <div className="content">
                <strong>Telefon</strong>
                <a href={`tel:${clinicInfo.phone}`}>{clinicInfo.phone}</a>
              </div>
            </InfoItem>

            <InfoItem>
              <span className="icon"><FontAwesomeIcon icon={faSquareWhatsapp} /></span>
              <div className="content">
                <strong>WhatsApp</strong>
                <a href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">Dërgo mesazh</a>
              </div>
            </InfoItem>

            <InfoItem>
              <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
              <div className="content">
                <strong>Email</strong>
                <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
              </div>
            </InfoItem>

            <InfoItem>
              <span className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
              <div className="content">
                <strong>Adresa</strong>
                <span>{clinicInfo.address}</span>
              </div>
            </InfoItem>

            <InfoItem>
              <span className="icon"><FontAwesomeIcon icon={faClock} /></span>
              <div className="content">
                <strong>Orari</strong>
                <div className="hours-grid">
                  <div>Hënë - Premte: {clinicInfo.hours.weekdays}</div>
                  <div>Shtunë: {clinicInfo.hours.saturday}</div>
                  <div>Diel: {clinicInfo.hours.sunday}</div>
                </div>
              </div>
            </InfoItem>
          </InfoBox>
        </ContentGrid>
      </Container>
    </ContactSection>
  );
}