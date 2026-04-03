import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 36rem;
  margin: 0 auto 1rem;
`;

export const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 1rem auto 0;
`;

export const ServicesGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 96rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.5rem;
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.6;
`;

export const ServiceCTA = styled.div`
  margin-top: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ServiceCard}:hover & {
    opacity: 1;
  }
`;

export const ExtraServices = styled.div`
  margin-top: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const ExtraTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const ExtraDescription = styled.p`
  color: ${({ theme }) => theme.colors.offWhite};
  margin-bottom: 1.5rem;
`;

export const ExtraButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 2rem;
  border-radius: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;