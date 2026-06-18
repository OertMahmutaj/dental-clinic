import styled from 'styled-components';

export const HeroSection = styled.section`
  padding: 120px 0 80px;
  background-color: var(--bg-primary);
  @media (max-width: 768px) {
    background-image: none; /* Hide the grid background on mobile */
    /* OR if it is a border, hide it: */
    border-right: none; 
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 20px;
  span { color: var(--accent-blue); }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 40px;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-gray);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-blue);
  margin-bottom: 24px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  background: var(--accent-blue);
  color: white;
  border: none;
  cursor: pointer;
  
  &.whatsapp { background: #25d366; }
  &:hover { opacity: 0.9; }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
`;

export const InfoCard = styled.div`
  .card-title { font-weight: 700; margin-bottom: 4px; }
  .card-detail { color: var(--text-secondary); }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;