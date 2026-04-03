import GoogleMap from '@/components/GoogleMap';
import { clinicInfo } from '@/lib/config';
import styled from 'styled-components';

const LocationSection = styled.section`
  padding: 5rem 1.5rem;
  background: white;
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
  margin-bottom: 3rem;
`;

const DirectionsButton = styled.a`
  display: inline-block;
  margin: 2rem auto 0;
  padding: 1rem 2rem;
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

export default function Location() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${clinicInfo.coordinates.lat},${clinicInfo.coordinates.lng}`;

  return (
    <LocationSection id="location">
      <Container>
        <Title>Si të Na Gjeni</Title>
        <Subtitle>{clinicInfo.address}</Subtitle>

        <GoogleMap />

        <ButtonContainer>
          <DirectionsButton
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            🗺️ Hap në Google Maps
          </DirectionsButton>
        </ButtonContainer>
      </Container>
    </LocationSection>
  );
}