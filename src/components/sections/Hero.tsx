'use client';

import styled from 'styled-components';
import { clinicInfo } from '@/lib/config';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 100, 130, 0.2) 0%, transparent 50%);
    animation: pulse 8s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 2rem;
  animation: slideDown 0.8s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  color: white;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease-out 0.2s both;

  span {
    display: block;
    background: linear-gradient(90deg, #ffd89b 0%, #19547b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.8;
  animation: fadeInUp 1s ease-out 0.4s both;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.6s both;
`;

const Button = styled.button<{ $variant?: 'primary' | 'whatsapp' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  ${({ $variant }) =>
    $variant === 'whatsapp'
      ? `
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    color: white;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
    }
  `
      : `
    background: white;
    color: #667eea;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    }
  `}

  &:active {
    transform: translateY(-1px);
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 1s ease-out 0.8s both;
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .label {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
  }

  .detail {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  .mouse {
    width: 24px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 8px;

    .wheel {
      width: 3px;
      height: 8px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 2px;
    }
  }
`;

export default function Hero() {
  const handleCall = () => {
    window.location.href = `tel:${clinicInfo.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${clinicInfo.whatsapp}`, '_blank');
  };

  return (
    <HeroSection>
      <Container>
        <Badge>
          <span>🦷</span>
          <span>Klinika Juaj Dentare në Tiranë</span>
        </Badge>

        <Title>
          Buzëqeshja juaj e<br />
          <span>përsosur fillon këtu</span>
        </Title>

        <Subtitle>
          Shërbime dentare profesionale me teknologji moderne dhe ekip të
          ekspertizuar në zemër të Tiranës.
        </Subtitle>

        <ButtonGroup>
          <Button onClick={handleCall}>
            <span>📞</span>
            Rezervo Takimin
          </Button>
          <Button $variant="whatsapp" onClick={handleWhatsApp}>
            <span>💬</span>
            WhatsApp
          </Button>
        </ButtonGroup>

        <InfoGrid>
          <InfoCard>
            <div className="icon">⏰</div>
            <div className="label">Orari</div>
            <div className="title">E Hënë - E Premte</div>
            <div className="detail">{clinicInfo.hours.weekdays}</div>
          </InfoCard>

          <InfoCard>
            <div className="icon">📍</div>
            <div className="label">Adresa</div>
            <div className="title">Shkolla e Baletit</div>
            <div className="detail">Tiranë, Albania</div>
          </InfoCard>

          <InfoCard>
            <div className="icon">🏆</div>
            <div className="label">Eksperiencë</div>
            <div className="title">Ekip Profesional</div>
            <div className="detail">Teknologji Moderne</div>
          </InfoCard>
        </InfoGrid>
      </Container>

      <ScrollIndicator>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </ScrollIndicator>
    </HeroSection>
  );
}