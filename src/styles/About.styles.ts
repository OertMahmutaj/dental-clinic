import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 2rem;
  background: #ffffff;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #1f2937;

    span {
      color: #2563eb; /* blue */
    }
  }

  .divider {
    width: 80px;
    height: 4px;
    background: #2563eb;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #374151;
    margin-bottom: 1.5rem;
  }
`;

export const InfoCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

interface StatCardProps {
  $colorFrom: string;
  $colorTo: string;
}

export const StatCard = styled.div<StatCardProps>`
  background: linear-gradient(135deg, ${(props) => props.$colorFrom}, ${(props) => props.$colorTo});
  padding: 2rem;
  border-radius: 0px;
  color: #fff;
  text-align: center;
  font-weight: 700;

  div:first-child {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  div:last-child {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
  }
`;