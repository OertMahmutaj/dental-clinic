import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 80px 0;
  background-color: var(--bg-dark-blue); /* Professional deep blue background */
  color: white;

  .section-header h2 { color: white; }
  .subtitle { opacity: 0.8; margin-bottom: 40px; }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 32px;
  border-radius: 12px;

  h3 { margin-bottom: 24px; color: white; }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;

  .icon { color: var(--accent-blue); font-size: 1.2rem; }
  .content { display: flex; flex-direction: column; }
  strong { font-size: 0.9rem; opacity: 0.7; }
  a { color: white; text-decoration: underline; }
`;