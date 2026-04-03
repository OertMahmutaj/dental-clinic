'use client';

import React from 'react';
import {
  AboutSection,
  Container,
  TextCenter,
  GridTwoColumns,
  InfoCard,
  StatsGrid,
  StatCard,
} from '@/styles/About.styles';

export default function About() {
  return (
    <AboutSection id="about">
      <Container>
        <TextCenter>
          <h2>
            Rreth <span>Adi Dent</span>
          </h2>
          <div className="divider" />
        </TextCenter>

        <GridTwoColumns>
          <div>
            <p>
              Klinika Dentare Adi Dent është një nga klinikat më të besueshme
              në Tiranë, e pajisur me teknologjinë më të fundit dentare dhe
              një ekip profesionistësh të dedikuar për shëndetin tuaj oral.
            </p>
            <p>
              Ne ofrojmë një gamë të gjerë shërbimesh, nga higjiena dentare
              deri tek implante dhe estetika dentare, duke garantuar rezultate
              cilësore dhe kujdes të personalizuar për çdo pacient.
            </p>

            <InfoCard>
              <span>💙</span>
              <div>
                <h3>Misioni Ynë</h3>
                <p>
                  Të krijojmë buzëqeshje të shëndetshme dhe të lumtura
                  përmes kujdesit profesional dhe trajtimit me respekt.
                </p>
              </div>
            </InfoCard>
          </div>

          <StatsGrid>
            <StatCard $colorFrom="#3b82f6" $colorTo="#2563eb">
              <div>10+</div>
              <div>Vite Eksperiencë</div>
            </StatCard>
            <StatCard $colorFrom="#14b8a6" $colorTo="#0f766e">
              <div>5000+</div>
              <div>Pacientë të Kënaqur</div>
            </StatCard>
            <StatCard $colorFrom="#8b5cf6" $colorTo="#7c3aed">
              <div>100%</div>
              <div>Profesionalizëm</div>
            </StatCard>
            <StatCard $colorFrom="#f97316" $colorTo="#ea580c">
              <div>24/7</div>
              <div>Mbështetje</div>
            </StatCard>
          </StatsGrid>
        </GridTwoColumns>
      </Container>
    </AboutSection>
  );
}