import Link from 'next/link';
import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 80px 0;
  background-color: #f9fafb; /* Light gray background to separate sections */
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2 { font-size: 2.5rem; margin-bottom: 16px; }
  .subtitle-text { color: var(--text-secondary); max-width: 600px; margin: 0 auto; }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
`;

export const ServiceCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: transform 0.2s;

  &:hover { transform: translateY(-5px); }
  .clinical-icon { color: var(--accent-blue); font-size: 2rem; margin-bottom: 16px; }
`;

export const ServiceTitle = styled.h3` font-size: 1.25rem; margin-bottom: 12px; `;
export const ServiceDescription = styled.p` color: var(--text-secondary); margin-bottom: 20px; `;
export const ServiceCTA = styled(Link)`
  color: var(--accent-blue);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none; // Ensure it looks like a clean link
  display: inline-block;
  margin-top: 10px;
`;

export const ExtraServices = styled.div`
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`;

export const ExtraTitle = styled.h3` margin-bottom: 16px; `;
export const ExtraDescription = styled.p` color: var(--text-secondary); margin-bottom: 24px; font-weight: 500; `;
export const ExtraButton = styled.a` 
  display: inline-block;
  padding: 12px 24px;
  background: var(--accent-blue);
  color: white;
  border-radius: 8px;
  text-decoration: none;
`;