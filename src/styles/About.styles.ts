import styled from 'styled-components';


export const AboutSection = styled.section`
  padding: 0px 0;
  background-color: var(--bg-primary);
`;

export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px; // Reduce gap on mobile to save space
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  background-color: var(--bg-dark-blue);
  color: white;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  min-width: 0; /* <--- THIS IS THE FIX */
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Stack vertically on small phones */
  }
`;

export const StatCard = styled.div`
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  .stat-value {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 0.85rem;
    opacity: 0.9;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  padding: 24px;
  background: var(--bg-gray);
  border-radius: 8px;

  .icon-wrapper {
    font-size: 24px;
    color: var(--accent-blue);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;