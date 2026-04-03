import styled from 'styled-components';

export const LocationSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.offWhite};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: center;
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const DirectionsButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;