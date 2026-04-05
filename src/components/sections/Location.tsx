'use client';

import GoogleMap from '@/components/GoogleMap';
import { clinicInfo } from '@/lib/config';
import {
  LocationSection,
  Container,
  Title,
  Subtitle,
  ButtonContainer,
  DirectionsButton
} from '@/styles/Location.styles';


export default function Location() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${clinicInfo.coordinates.lat},${clinicInfo.coordinates.lng}`;

  return (
    <LocationSection id="location">
      <Container>
        <Title>Si të Na Gjeni</Title>
        <Subtitle>{clinicInfo.address}</Subtitle>
        <ButtonContainer>
          <DirectionsButton
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            🗺️ Hap në Google Maps
          </DirectionsButton>
        </ButtonContainer>
        <GoogleMap />


      </Container>
    </LocationSection>
  );
}