'use client';

import React from 'react';
import GoogleMap from '@/components/GoogleMap';
import { clinicInfo } from '@/lib/config';
import {
  LocationSection,
  Container,
  ButtonContainer,
  DirectionsButton
} from '@/styles/Location.styles';

export default function Location() {
  const directionsUrl = `https://www.google.com/maps/dir//Klinika+Dentare+Adi+Dent,+Shkolla+e+Baletit,+Rruga+Petro+Nini+Luarasi,+Tiran%C3%AB+1001,+Albania/@41.3258319,19.8243573,17z/data=!3m1!5s0x1350311784aadfdb:0xe562087b50209c8c!4m17!1m7!3m6!1s0x1350312f872bd857:0xb91f0d3f7413a3f3!2sKlinika+Dentare+Adi+Dent!8m2!3d41.3258279!4d19.8269322!16s%2Fg%2F11h4ycx_cx!4m8!1m0!1m5!1m1!1s0x1350312f872bd857:0xb91f0d3f7413a3f3!2m2!1d19.8269322!2d41.3258279!3e2?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D`;

  return (
    <LocationSection id="location">
      <Container>
        <div className="location-header">
          <h2>Vendndodhja jonë</h2>
          <p className="address">{clinicInfo.address}</p>
          
          <ButtonContainer>
            <DirectionsButton
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hap në Google Maps
            </DirectionsButton>
          </ButtonContainer>
        </div>

        <div className="map-frame">
          <GoogleMap />
        </div>
      </Container>
    </LocationSection>
  );
}