'use client';

import React from 'react';
import {
  AboutSection,
  Container,
  GridTwoColumns,
  InfoCard,
  StatsGrid,
  StatCard,
} from '@/styles/About.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <AboutSection id="about">
      <Container>
        {/* Simplified Header: Removed technical tags */}
        <div className="section-header">
          <h2>Rreth Nesh</h2>
          <p className="subtitle">
            Klinika dentare Adi Dent ofron një eksperiencë të personalizuar, 
            për t&apos;ju pasuruar me buzëqeshje të shëndetshme dhe estetikë të plotë.
          </p>
        </div>

        <GridTwoColumns>
          {/* Left Column: Narrative */}
          <div className="narrative-stack">
            <p>
              Klinika Dentare Adi Dent është një nga klinikat më të besueshme
              në Tiranë, e pajisur me teknologjinë më të fundit dentare dhe
              një ekip profesionistësh të dedikuar për shëndetin tuaj oral.
            </p>
            <p>
              Ne ofrojmë një gamë të gjerë shërbimesh, duke garantuar
              rezultate strukturore dhe kujdes të rreptë për çdo pacient.
            </p>

            <InfoCard>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
              </div>
              <div className="info-content">
                <h3>Misioni Ynë</h3>
                <p>
                  Të ndërtojmë buzëqeshje të shëndetshme përmes protokolleve 
                  profesionale dhe trajtimit rigoroz.
                </p>
              </div>
            </InfoCard>
          </div>

          {/* Right Column: Statistics Grid */}
          <StatsGrid>
            <StatCard>
              <div className="stat-value">10+</div>
              <div className="stat-label">Vite Eksperiencë</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">5000+</div>
              <div className="stat-label">Pacientë të Kënaqur</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">100%</div>
              <div className="stat-label">Profesionalizëm</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">24/7</div>
              <div className="stat-label">Mbështetje</div>
            </StatCard>
          </StatsGrid>
        </GridTwoColumns>
      </Container>
    </AboutSection>
  );
}